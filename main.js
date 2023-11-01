var map = L.map('map', {
    // center: [-33.79405446678091, 151.12099701128386],
    // center:[-32.937914, 151.140048],
    center:{lat: -33.68953, lng: 150.60774},
    // {lat: -33.798876832065794, lng: 151.12298011605162}
    // center: [-32.648, 146.359, ],
    // zoom: 4,
    minZoom:8,
    maxBounds:[[-38.03, 139.965 ], [-27.839, 155.258]],
    zoom: 15,
    maxZoom:18,
    zoomControl:false
});

const infoContainer = document.getElementById("info-container");

// geocoder: Specify Australia
let geocoderControl = new L.Control.Geocoder({ 
    collapsed:false,
    defaultMarkGeocode:false,
    geocoder: L.Control.Geocoder.mapbox({ 
        // countries:'us',
        geocodingQueryParams:{countries: 'au', bbox: [139.965, -38.03, 155.258, -27.839]},
        apiKey: "pk.eyJ1IjoiaGlnaGlxIiwiYSI6ImNsNnVwbHFhMDBsamozbnA1ajBraHlqbmMifQ.mP1mWm5OxGRKfiN0qiH-bg" 
    }),
}).addTo(map);


geocoderControl.on('markgeocode', function(e) {
    var {center, bbox} = e.geocode;
    console.log(e);

    var poly = L.polygon([
        bbox.getSouthEast(),
        bbox.getNorthEast(),
        bbox.getNorthWest(),
        bbox.getSouthWest()
    ])
    // .addTo(map);

    marker.setLatLng(center).addTo(map);
    map.fitBounds(poly.getBounds());

    // onMapClick({latlng:center});
    // pdfModule.setLocation(center);
})
.addTo(map);

L.control.zoom({
    position:'topright'
}).addTo(map);
// measure tool pluginF
let measureControl = new MeasureControl(map);

// dark theme
let lightTheme  = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}' + (L.Browser.retina ? '@2x.png' : '.png'), {
    attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20,
    minZoom: 0,
    opacity:1
}).addTo(map);

let darkTheme  = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}' + (L.Browser.retina ? '@2x.png' : '.png'), {
    attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20,
    minZoom: 0,
    opacity:1
});

let layerControl = new LayerControl(mapLayers, map);
layerControl.init();

let collapseInstance = new Collapse();
collapseInstance.fireListeners();

// feature info on layer click
map.addEventListener('click', onMapClick);
let popup = new L.Popup({maxWidth: 1000});
let marker = L.marker(null);

function onMapClick(e) {
    console.log(e);
    popup.setLatLng(e.latlng);
    marker.setLatLng(e.latlng).addTo(map);
    pdfModule.setLocation(e.latlng);

    // query the boundary features
    queryBoundaryFeatures(e.latlng);
    
    if(map.drawMode || !layerControl.activeLayer.length) return;
    
    console.log(layerControl.activeLayer);
    var BBOX =         map.getBounds()._southWest.lng+","+map.getBounds()._southWest.lat+","+map.getBounds()._northEast.lng+","
    +map.getBounds()._northEast.lat;

    var WIDTH= map.getSize().x;
    var HEIGHT = map.getSize().y;

    let layerPoints = map.latLngToLayerPoint(e.latlng)
    var X =  map.layerPointToContainerPoint(layerPoints).x;
    var Y = map.layerPointToContainerPoint(layerPoints).y;
    console.log(X,Y);

    let { layers, name } = layerControl.activeLayer[0].wmsParams;
    
    // https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/export?dpi=96&transparent=true&format=png32&layers=show:2&bbox=16822454.782010775,-4003599.0080954228,16825966.10799772,-4001215.1282757157&bboxSR=102100&imageSR=102100&size=735,499&f=image
    // fetch the json data
    let jsonUrl = `${layerControl.activeLayer[0]._url}?service=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&layers=${layers}&QUERY_LAYERS=${layers}&STYLES=&BBOX=${BBOX}&FEATURE_COUNT=5&HEIGHT=${HEIGHT}&WIDTH=${WIDTH}&INFO_FORMAT=text/xml&SRS=EPSG%3A4326&X=${X}&Y=${Y}`;
    console.log(jsonUrl);

    let jsonUrls = layerControl.activeLayer.map(layer => {
        // fix this to handle multiple layer options
        let { layers, name } = layer.wmsParams;
        return {name, url:`${layer._url}?service=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&layers=${layers}&QUERY_LAYERS=${layers}&STYLES=&BBOX=${BBOX}&FEATURE_COUNT=5&HEIGHT=${HEIGHT}&WIDTH=${WIDTH}&INFO_FORMAT=text/xml&SRS=EPSG%3A4326&X=${X}&Y=${Y}`};
    })
    
    let fetchRequests = jsonUrls.map(jsonUrl => jsonUrl.url).map(url => fetch(url, { cors:'no-cors' }));
    Promise.all(fetchRequests)
    .then(res => Promise.all(res.map(rs =>rs.text())))
    .then(responseString => {
        console.log(responseString);
        let popupContent = responseString.map((str,i) => {
            let targetLayer = jsonUrls[i].name;
            let jsonData = JSON.parse(xml2json(str));

            return createPopupContent(jsonData, targetLayer);
        });

        popup.setContent(`<div class="popup-content">
            <div class="popup-body">
                ${popupContent.join("")}
            </div>
        </div>`);

        document.getElementById("planning-info").innerHTML = `<div class="popup-content">
                ${popupContent.join("")}
        </div>`;

        pdfModule.updatePropertyInfo(popupContent.join(""));

        // map.openPopup(popup);


    })
    .catch(console.error);


    
}

function createPopupContent(jsonData, name) {
    // / return;
    let cols = [
        'OBJECTID', 'PUBLISHED_DATE', 'COMMENCED_DATE', 'CURRENCY_DATE', 'AMENDMENT', 'MAP_TYPE', 'MAP_NAME', 'LAY_NAME', 'EPI_TYPE',
        'msoid', 'cadid', 'createdate', 'modifieddate','Shape', 'shape_Length', 'shape_Area','Shapeuuid',
        'controllingauthorityoid', 'planoid','startdate', 'enddate', 'lastupdate', 'msoid', 'centroidid', 'shapeuuid'
    ];

    console.log(jsonData);
    let content = "", title=name;
    if(jsonData.elements && jsonData.elements[0] && jsonData.elements[0].elements) {
        let properties = jsonData.elements[0].elements[0].attributes;

        if(!properties) {
            content = " <div>No Feature Found !</div>"
        } else {
            let keys = Object.keys(properties);
            console.log(keys);

            let rows = keys.filter(key => cols.indexOf(key) == -1).map(key => {
                return `<tr>
                    <td class="keys">${key}</td>
                    <td>${properties[key]}</td>
                </tr>`
            });

            title = properties.MAP_TYPE ? `${properties.MAP_NAME}: ${properties.LAY_NAME}` : name;
            content =  `
                <table>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                    <tbody>
                        ${rows.join("")}
                    </tbody>
                </table>
            `;
        }
    } else {
        content = " <div>No Feature Found !</div>"
    }
    
    return `<div class="popup-info">
        <div class="popup-header">${title}</div>
        <div class="popup-items">
            ${content}
        </div>
    </div>`
}



// Visible by default
// Basemaps:
// - LGA Boundary
// - Surburb Boundary
// - Cadastre
// - Elevation Contours (change spelling for this one please to "Contours")
// > NSW Cadastre:
// - Lot
// https://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WMSServer?request=GetCapabilities&service=WMS

// https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WMSServer?request=GetCapabilities&service=WMS
// https://mapprod3.environment.nsw.gov.au/arcgis/services/Common/AddressSearch/MapServer/WMSServer?request=GetCapabilities&service=WMS

let visibleLayers = [
    'Lot',
    'Elevation Contours',
    'LGA Boundary'
];

// Display Conturs
// a Leaflet marker is used by default to symbolize point features.
const contoursLayer = L.esri
.featureLayer({
  url: "https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Elevation_and_Depth_Theme_multiCRS/FeatureServer/2",
  onEachFeature:function(ft, layer) {
    layer.setStyle({ color: "orange", opacity:1, weight: 1, dashArray:null, stroke: true });
  },
  style: function (feature) {
    let c;
    switch (feature.properties.classsubtype) {
      case 1:
        c = "#d1aefc";
        break;
      case 2:
        c = "#b3fcb4";
        break;
      case 3:
        c = "#fcc5b6";
        break; 
      default:
        c = "#FF0800";
    }

    return { color: c, opacity:1, weight: 1, dashArray:null, stroke: true};
  }
});

contoursLayer.on("click", function (e) {
    console.log(e.layer);
});

let addressLayer = L.esri
.featureLayer({
    url: "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/Admin_3857/MapServer/12",
    onEachFeature:function(ft, layer) {
        layer.on("click", (e) => {
            console.log(ft);
        });

        layer.on('mouseover',  (e) => {
            // updateAddressSection();
        });

        layer.on('mouseout', (e) => {
            // layer.setStyle({ fillColor:'orange'});
        })
    },
    minZoom:15,
    style:function(feature) {
        return {
            color:'red',
            weight:1,
            fillOpacity:0,
            fillColor:'orange'
        }
    }
});
// .addTo(map);

// Easements
let easementLayer = L.esri
.featureLayer({
  url: "https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Land_Parcel_Property_Theme_multiCRS/FeatureServer/9"
});

addressLayer.on("click", function(e) {
    console.log(e);
    // e.originalEvent.stopPropagation();    
    // renderPopup(e, "Property Layer");
});

easementLayer.on("click", function(e) {
    e.stopPropagation();    
    renderPopup(e, "Easement");
})

function renderPopup(e, layerName) {
    let properties = e.layer.feature.properties

    // let properties = e.layer.properties;
    let keys = Object.keys(properties);
    let rows = keys.map(key => {
        let val = key.includes("date") ? formatDate(properties[key]) : properties[key];

        return `<tr>
            <td class="keys">${key}</td>
            <td>${val}</td>
        </tr>`;

    });

    popup.setContent(`
        <div class="popup-content">
            <div class="popup-header">${layerName} ${properties['msoid']}</div>
            <div class="popup-body">
                <table>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                    <tbody>
                        ${rows.join("")}
                    </tbody>
                 </table>
            </div>
        </div>
    `);

    popup.setLatLng(e.latlng).addTo(map);
}

let featureLayers = {
    'contours':contoursLayer,
    'easements':easementLayer
};

const lgaStyle = {
    fillColor:'transparent',
    fillOpacity:0,
    color:'#39ACAC',
    weight:4
};

const lgaFeature = L.esri
.featureLayer({
    url: "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/Admin_3857/MapServer/1",
    style:function(feature) {
        return {...lgaStyle}
    }
});

let selectedLayer;
const cadastreStyle = {
    fillColor:'transparent',
    fillOpacity:0,
    opacity:0.8,
    color:'teal',
    dashArray: null,
    weight: 1
};


const cadastreFeature = L.esri
.featureLayer({
    // url:"https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/Admin_3857/MapServer/12",
    url: "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/AddressSearch/MapServer/0",
    onEachFeature:function(feature, layer) {
        layer.on("click",(e) => {
            console.log(e.target);
            updateLotDetails(e, feature.properties);

            if(selectedLayer) {
                selectedLayer.setStyle({
                    fillColor:'transparent',
                    fillOpacity:1,
                    opacity:1,
                    color:'teal',
                    dashArray: null,
                    weight: 1
                });
            }

            selectedLayer = e.target;

            selectedLayer.setStyle({
                color:'#29CC2D',
                weight:2.5,
                fillColor:'transparent'
            });

            // updateAddressDetails();
        });

        layer.on('mouseover',  (e) => {
            console.log('mouseover');
            if(e.target == selectedLayer) {
                layer.setStyle({
                    color:'#29CC2D',
                    weight:2.5,
                    fillColor:'#ddd'
                });
            } else {
                layer.setStyle({
                    ...cadastreStyle,
                    fillOpacity:0.8,
                    fillColor:'#ddd'
                })
            }
           
        });

        layer.on('mouseout', (e) => {
            if(e.target !== selectedLayer) {
                layer.setStyle({...cadastreStyle});
            }
            
        });

    },
    minZoom:15,
    style:function(feature) {
        return {...cadastreStyle}
    }
}).addTo(map);

const suburbStyle = {
    fillColor:'transparent',
    fillOpacity:0,
    color:'red',
    dashArray: "2,1",
    weight: 1
};

const suburbFeature = L.esri
.featureLayer({
    url: "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/Admin_3857/MapServer/2",
    style:function(feature) {
        return {...suburbStyle}
    }
});

const stateElectoralStyle = {
    fillColor:'transparent',
    fillOpacity:0,
    color:'#39ACAC',
    weight:4
};

const stateElectoralFeature = L.esri
.featureLayer({
    url: "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/AdminBoundary/MapServer/0",
    style:function(feature) {
        return {...stateElectoralStyle}
    }
});

let federalElectoralStyle = {
    fillColor:'transparent',
    fillOpacity:0,
    color:'#39ACAC',
    weight:4
};

const federalElectoralFeature = L.esri
.featureLayer({
    url: "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/AdminBoundary/MapServer/1",
    style:function(feature) {
        return {...federalElectoralStyle}
    }
});

const boundaryLayers = {
    'lga-feature':lgaFeature,
    'cadastre-feature':cadastreFeature,
    'suburb-feature':suburbFeature,
    'state-electoral-feature':stateElectoralFeature,
    'federal-electoral-feature':federalElectoralFeature
};


const stylesObj = {
    'lga-feature':lgaStyle,
    'cadastre-feature':cadastreStyle,
    'suburb-feature':suburbStyle,
    'state-electoral-feature':stateElectoralStyle,
    'federal-electoral-feature':federalElectoralStyle
}

document.querySelectorAll(".feature-range-slider").forEach(ftSlider => {
    ftSlider.oninput = (event) => {
        const { id, value } = event.target;
        let layer = boundaryLayers[id];
        let layerStyle = stylesObj[id];
        if(value == 0) {
            map.removeLayer(layer);
        } else {
            console.log(layer, value);
            
            layer.setStyle({ ...layerStyle, opacity:value, fillOpacity:value }).addTo(map);
        }
    }
});

document.querySelectorAll(".feature-slider").forEach(featureSlider => {
    featureSlider.onclick = (e) => {
        let{ id, checked } = e.target;
        let layer = featureLayers[id];

        toggleFeature(layer, checked);
    }
});

function toggleFeature(layer, isChecked) {
    if(isChecked) {
        layer.addTo(map);
    } else {
        layer.remove();
    }
}


function formatDate(dateInMs) {
    let date = new  Date(dateInMs);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let time = date.toLocaleTimeString();

    let hrs = time.split(" ")[0]
    let period = time.split(" ")[1];

    return `${day}/${month}/${year}  ${hrs.slice(0,5)} ${period}`;
}

map.on("zoomend", (e) => {
    let zoom = map.getZoom();

    if(zoom >= 15) {
        document.getElementById("lot-info").classList.remove("d-none");
    } else {
        document.getElementById("lot-info").classList.add("d-none");
    }
})

function updateLotDetails(e, properties) {
    // console.log(properties);
    let coords = Object.values(e.latlng).reverse();
    document.getElementById("info-container").classList.remove("d-none");

    addressLayer.query()
    .intersects({"type":"Point", "coordinates":[...coords]})
    .run((err, fc) => { 
        console.log(fc);
        if(fc.features.length) {
            let address = createAddressFromProperties(fc.features[0].properties);
            console.log(address);

            document.getElementById("address-value").innerHTML = address;

            pdfModule.setLocation(e.latlng);
            pdfModule.updateAddress(address);
            pdfModule.updateCouncilName(`${fc.features[0].properties['GURAS_DELIVERY.SDE.ADDRESSSTRING.COUNCIL']} COUNCIL`) ;

            document.getElementById("lot-summary").innerHTML = document.getElementById("lot-info").innerHTML;
        }

    });

    console.log(e);

    if(!properties) {
        document.getElementById("lot-info").classList.add("d-none");
        return;
    } 

    document.getElementById("lot-info").classList.remove("d-none");

    let title = ["LOTNUMBER", "SECTIONNUMBER", "PLANLABEL"].map(key => properties[key]).filter(val=> val).join("/");
    let areaHa = properties['Area_H'].toFixed(3);

    let lotDetails = `<div class="info-click-feature-attribute">
        <div class="info-click-feature-attribute-name">Total Lot Area(Appox):</div>
        <div class="info-click-feature-attribute-value">${areaHa}ha</div>
    </div>

    <div class="info-click-feature-attribute">
        <div class="info-click-feature-attribute-name">Address:</div>
        <div class="info-click-feature-attribute-value" id="address-value"></div>
    </div>

    <div class="info-click-feature-attribute">
        <div class="info-click-feature-attribute-name">Title:</div>
        <div class="info-click-feature-attribute-value">${title}</div>
    </div>

    <div class="info-click-feature-attribute">
        <div class="info-click-feature-attribute-name">Property ID:</div>
        <div class="info-click-feature-attribute-value">${properties['ITSLOTID']}</div>
    </div>

    <div class="info-click-feature-attribute">
        <div class="info-click-feature-attribute-name">Lot Area(Appox)::</div>
        <div class="info-click-feature-attribute-value">${areaHa}ha</div>
    </div>`;

    document.getElementById("lot-number").innerHTML = title;
    document.getElementById("lot-info-section").innerHTML = lotDetails;
}


function createAddressFromProperties(propsObj) {
    let cols = [
        ['GURAS_DELIVERY.SDE.ADDRESSSTRING.HOUSENUMBERFIRST', 'GURAS_DELIVERY.SDE.ADDRESSSTRING.HOUSENUMBERSECOND'],
        ['GURAS_DELIVERY.SDE.ADDRESSSTRING.ROADNAME', 'GURAS_DELIVERY.SDE.ADDRESSSTRING.ROADTYPE'],
        'GURAS_DELIVERY.SDE.ADDRESSSTRING.SUBURBNAME', 'GURAS_DELIVERY.SDE.ADDRESSSTRING.POSTCODE'
    ];
    let houseNo = cols[0].map(val => propsObj[val]).filter(val => val).join(" - ");
    let roadName =  cols[1].map(val => propsObj[val]).filter(val => val).join(" ");
    let surbubName = propsObj[cols[2]];
    let postcode = `NSW ${propsObj[cols[3]]}`;

    let address = `${houseNo} ${roadName} ${surbubName} ${postcode}`;
    return address;
}


function queryBoundaryFeatures(location) {
    let coords = Object.values(location).reverse();

    let features = [
        {label:'Suburb', layer:suburbFeature, targetColumn:'SUBURBNAME'},
        {label:'Local Government Area', layer:lgaFeature, targetColumn:'LGANAME'},
        {label:'Federal Electorate District', layer:federalElectoralFeature, targetColumn:'DIVISIONNAME'},
        {label:'State Electorate District', layer:stateElectoralFeature, targetColumn:'DISTRICTNAME'}
    ];

    let results = [];

    function runQuery(i) {
        if(i == features.length) {
            updateSections(results);
            return;
        }

        let {label, layer, targetColumn } = features[i];

        layer.query()
        .intersects({"type":"Point", "coordinates":[...coords]})
        .run(function(error, featureCollection) {
            results.push({label, features:featureCollection.features, targetColumn});

            return runQuery(i+1);
        });
    }

    runQuery(0);

    function updateSections(results) {
        console.log(results);

        let boundaryInfo = results.filter(item => item.features.length).map(item => {
            let { label, features, targetColumn} = item;
            let props = features[0].properties;

            return ` <div class="info-click-feature-attribute">
                <div class="info-click-feature-attribute-name">${label}:</div>
                <div class="info-click-feature-attribute-value">${props[targetColumn]}</div>
            </div>`;
        }).join("");

        if(!boundaryInfo) {
            infoContainer.classList.add("d-none");
            return;
        }

        infoContainer.classList.remove("d-none");
        document.getElementById("boundary-info").innerHTML = boundaryInfo;
        document.getElementById("admin-summary").innerHTML = document.getElementById("admin-info").innerHTML;
    }
    
}

function updateAddressDetails(ft, location) {

}

// custom wms url
const docForm = document.getElementById("wms-form");
let wmsLink = document.getElementById("wms-link");
let layerId = document.getElementById("layer-id");
let customWMS;

docForm.onsubmit = (e) => {
    e.preventDefault();

    let link = wmsLink.value;
    let layer = layerId.value;

    console.log(link);
    console.log(layer);

    renderWMSLayer({link, layer});
}

function renderWMSLayer({ link, layer}) {

    if(customWMS) {
        customWMS.remove();
        customWMS = null;
    } 

    customWMS = L.tileLayer.wms(`${link}`, {
        layers: `${layer}`,
        styles:'default',
        format: 'image/png',
        transparent: true, 
        crs:L.CRS.EPSG4326,
        attribution: "",
        layerId:layer,
        crossOrigin:true
    });
    
}

L.control.scale().addTo(map);

// Custom Control Button
L.easyButton('fa-layer-group', function(btn, map) {
    console.log(btn);
    btn.button.classList.toggle("active");
    document.getElementById("layer-container").classList.toggle("d-none");
}).addTo( map );

L.easyButton('fa-moon', function(btn, map) {
    toggleMapTheme();
}).addTo( map );

L.easyButton('fa-file-pdf', function(btn, map){
    if(!pdfModule.address) {
        alert("Kindly Click on a Property");
        return;
    }

    pdfModule.handlePrintAction();
}).addTo( map );

L.easyButton('fa-print', function(btn, map){
    pdfModule.printMapToPicture();
}).addTo( map );


L.easyButton('fa-expand', function(btn, map){
    toggleFullscreen();
}).addTo( map );

let isLightMode = true;
function toggleMapTheme() {
    if(isLightMode) {
        map.removeLayer(lightTheme);
        darkTheme.addTo(map).bringToBack();
    } else {
        map.removeLayer(darkTheme);
        lightTheme.addTo(map).bringToBack();
    }

    isLightMode = !isLightMode;
}

function toggleFullscreen() {
    let elem = document.querySelector("#map-container");
  
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
        );
      });
    } else {
      document.exitFullscreen();
    }
}



// Multiple layer info: on the popups: DONE
// Search Property: display an info box on the side
// Populate the data on the report: All active layers
// Data Columns: Excel: DONE


// Deliverables
// -address search: DONE
// -measure on map: DONE
// -switch on and off layers:DONE
// -click on a point or polygon for property and layer information: GetFeatureInfo(): Done
// -generate a custom pdf report/summary:DONE
// -Add layers (admin side) as we go and find useful add-ons




// Display basemaps layers: 
// LGA Boundary: https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/AddressSearch/MapServer/3/query?f=geojson&where=1%3D1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&objectIds=73%2C578&outFields=*&outSR=4326
// Suburban: https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/AddressSearch/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0%2C1%2C5%2C6&bbox=16736201.624968428%2C-4030789.6692684228%2C16805759.320707966%2C-3985844.6966367215&bboxSR=102100&imageSR=102100&size=455%2C294&f=image
// Cadastre: https://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WMSServer?request=GetCapabilities&service=WMS
// countours: https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Elevation_and_Depth_Theme_multiCRS/FeatureServer/2



// // Sort out Address layer
// const hierarchyObj = {
//     hierarchy: {
//         Country:{name: 'United States', fips: '0100000US'},
//         County:{name: 'Carbon County', fips: '30009'},
//         Place:{name: 'Fromberg town', fips: '3029575'},
//         State: {name: 'Montana', fips: '30'},
//     }
// }