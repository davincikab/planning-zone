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
    maxZoom:22,
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
    popup.setLatLng(e.latlng);
    marker.setLatLng(e.latlng).addTo(map);
    pdfModule.setLocation(e.latlng);

    // query the boundary features
    queryBoundaryFeatures(e.latlng);
    if(map.drawMode || !layerControl.activeLayer.length) return;
    var BBOX =         map.getBounds()._southWest.lng+","+map.getBounds()._southWest.lat+","+map.getBounds()._northEast.lng+","
    +map.getBounds()._northEast.lat;

    var WIDTH= map.getSize().x;
    var HEIGHT = map.getSize().y;

    let layerPoints = map.latLngToLayerPoint(e.latlng)
    var X =  map.layerPointToContainerPoint(layerPoints).x;
    var Y = map.layerPointToContainerPoint(layerPoints).y;
    console.log(X,Y);

    let { layers, name } = layerControl.activeLayer[0].wmsParams;
    
    
    // fetch the json data
    let jsonUrl = `${layerControl.activeLayer[0]._url}?service=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&layers=${layers}&QUERY_LAYERS=${layers}&STYLES=&BBOX=${BBOX}&FEATURE_COUNT=5&HEIGHT=${HEIGHT}&WIDTH=${WIDTH}&INFO_FORMAT=text/xml&SRS=EPSG%3A4326&X=${X}&Y=${Y}`;
    let {x, y} = L.CRS.EPSG3857.project(e.latlng);
    let geometry = {"xmin":x - 115,"ymin":y-115,"xmax":x+115, "ymax":y+115, "spatialReference":{"wkid":102100,"latestWkid":3857}}
    let query = `where=(1=1) AND (1=1)&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=${JSON.stringify(geometry)}&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&outSR=102100`;

    let jsonUrls = layerControl.activeLayer.map(layer => {
        // fix this to handle multiple layer options
        let { layers, name, layerId } = layer.wmsParams;
        if(layer.isProperty) {
            layers = layers.split(":");
            return {name, id:layerId, url:`https://mapprod1.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Development_Control_Layers/MapServer/${layers[1]}/query?f=geojson&${query}`};
        }

        return {name, id:layerId, url:`${layer._url}?service=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&layers=${layers}&QUERY_LAYERS=${layers}&STYLES=&BBOX=${BBOX}&FEATURE_COUNT=2&HEIGHT=${HEIGHT}&WIDTH=${WIDTH}&INFO_FORMAT=text/xml&SRS=EPSG%3A4326&X=${X}&Y=${Y}`};
    });

    let xmlUrls = jsonUrls.filter(({url}) => !url.includes('esriSpatialRelIntersects'))
    let geojsonUrls = jsonUrls.filter(({url}) => url.includes('esriSpatialRelIntersects'))
    
    let fetchRequests = xmlUrls.map(jsonUrl => jsonUrl.url).map(url => fetch(url, { cors:'no-cors' }));
    let exportUrlsRequest = geojsonUrls.map(jsonUrl => jsonUrl.url).map(url => fetch(url, { cors:'cors' }))
    
    Promise.all(fetchRequests)
    .then(res => Promise.all(res.map(rs =>rs.text())))
    .then(responseString => {
        let xmlProps = responseString.map((str,i) => {
            let jsonData = JSON.parse(xml2json(str));
            let {name, id} = xmlUrls[i];
            
            return preprocessXml(jsonData, name, id);            
        }).filter(properties => properties);

        Promise.all(exportUrlsRequest)
        .then(res => Promise.all(res.map(rs =>rs.json())))
        .then(responseData => {

            let geojsonProps = responseData.map((entry, i) => {
                let {name, id} = xmlUrls[i];

                return (entry.features && entry.features.length) ? {...entry.features[0].properties, id:name, id} : null
            }).filter(props => props);

            renderPopupContent([...xmlProps, ...geojsonProps])
        })
        
    })
    .catch(console.error);
}

function renderPopupContent(props) {
    
    let popupContent = props.map(dataProp => {
        let content = createPopupContent(dataProp, dataProp.layerName);
        return content;
    });

    // return createPopupContent(jsonData, targetLayer);
    popup.setContent(`<div class="popup-content">
        <div class="popup-body">
            ${popupContent.join("")}
        </div>
    </div>`);

    document.getElementById("planning-info").innerHTML = `<div class="popup-content">
            ${popupContent.join("")}
    </div>`;

    pdfModule.updatePropertyInfo(popupContent.join(""));
}

function preprocessXml(jsonData, name, id) {
    if(jsonData.elements && jsonData.elements[0] && jsonData.elements[0].elements) {
        let properties = jsonData.elements[0].elements[0].attributes;
        
        return properties ? { ...properties, layerName:name, id } : null;
    } else {
        return null;
    }
}
function createPopupContent(properties, name) {
    // / return;
    let cols = [
        'OBJECTID', 'PUBLISHED_DATE', 'COMMENCED_DATE', 'CURRENCY_DATE', 'AMENDMENT', 'MAP_TYPE', 'MAP_NAME', 'LAY_NAME', 'EPI_TYPE',
        'msoid', 'cadid', 'createdate', 'modifieddate','Shape', 'shape_Length', 'shape_Area','Shapeuuid','id', 'layerName',
        'controllingauthorityoid', 'planoid','startdate', 'enddate', 'lastupdate', 'msoid', 'centroidid', 'shapeuuid'
    ];

    let keys = columnValues[properties.id] ?  columnValues[properties.id].columns : Object.keys(properties);

    console.log(properties);

    let content = "", title=name;
    let rows = keys.filter(key => cols.indexOf(key) == -1).map(key => {
        return `<tr>
            <td class="keys">${key.replace(/_/, " ").toLocaleLowerCase()}</td>
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
       
    
    return `<div class="popup-info">
        <div class="popup-header">${title}</div>
        <div class="popup-items">
            ${content}
        </div>
    </div>`;

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
    layer.on("click", (e) => {
        console.log(ft);
    });

  },
  style: function (feature) {
    let c;
    switch (feature.properties.classsubtype) {
      case 1:
        c = "rgba(209, 194, 252, 255)";
        break;
      case 2:
        c = "rgba(179, 252, 180, 255)";
        break;
      case 3:
        c = "rgba(252, 197, 182, 255)";
        break; 
      default:
        c = "#000";
    }

    return { color: c, opacity:1, weight: 1, dashArray:null, stroke: true};
  }
});

contoursLayer.on("click", function (e) {
    console.log(e.target.layers);
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
  url: "https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Land_Parcel_Property_Theme_multiCRS/FeatureServer/9",
  style:function(feature) {
    return {
        color:'rgba(255, 190, 232, 255)',
        weight:3,
        fillOpacity:1,
        fillColor:'rgba(0, 0, 0, 0)'
    }
  }
});

// addressLayer.on("click", function(e) {
//     console.log(e);
//     // e.originalEvent.stopPropagation();    
//     // renderPopup(e, "Property Layer");
// });

// easementLayer.on("click", function(e) {
//     e.stopPropagation();    
//     renderPopup(e, "Easement");
// })

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
            <div class="popup-header">${layerName}</div>
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

// liverpool
let liverpoolDcp = L.esri
    .featureLayer({
        url:"https://services6.arcgis.com/Ys4U0NCXGgyTtRWx/arcgis/rest/services/LCC_DCP_road_network/FeatureServer/0",
        style:function(feature) {
            let styleEntry = liverpoolDcpStyle.find(lvp => lvp.label == feature.properties['ROAD_CLASS']);

            let fillColor  = styleEntry ? `rgba(${styleEntry.fillColor})` : "#999";
            let color = styleEntry ? `rgba(${styleEntry.color})` : "#000";

            return {
                fillColor:fillColor,
                fillOpacity:0.8,
                weight:0.35,
                color:color
            }
        }
    });

let nswRoads = L.esri
    .featureLayer({
        url:"https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Transport_Theme/FeatureServer/5",
        style:function(feature) {

            return {
                weight:1.5,
                color:"rgba(163, 142, 81, 255)"
            }
        }
    });

// nswRoads.addTo(map);

let australIlpRoads =  L.geoJSON(null, {
    style:function(feature) {
        let styleEntry = liverpoolDcpStyle.find(lvp => lvp.label == feature.properties['ROAD_CLASS'].trim());

        let fillColor  = `rgba(${styleEntry.fillColor})`;
        let color = `rgba(${styleEntry.color})`;
        // console.log(feature);

        return {
            fillColor:fillColor,
            fillOpacity:0.8,
            weight:0.5,
            color:color
        }
    }
});

australIlpRoads.addTo(map);

fetch("data/DCP_StreetNetwork.geojson")
.then(res=> res.json())
.then(data => {
    console.log(data);
    australIlpRoads.addData(data);
})
.catch(console.error);
// leppington
// https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/14/9837/15054.pbf
// let leppington = L.esri.Vector.vectorTileLayer(
//     "https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"
// );

// leppington.addTo(map);


// nsw imagery: 
let imageryUrl = "https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Imagery/MapServer"
let nswImagery = L.esri.tiledMapLayer({
    url: imageryUrl,
    opacity: 0.75,
    useCors: false
});

// Historical Images layer Group
let HistoricalImageryUrl = {
    "1998":"https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1998/MapServer",
    "1994":"https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1994/MapServer",
    "1991":"https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1991/MapServer",
    "1986":"https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1986/MapServer",
    "1984":"https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1984/MapServer",
    "1975":"https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1975/MapServer",
    "1966":"https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1966/MapServer",
    "1965":"https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1965/MapServer",
    "1955":"https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1955/MapServer",
    "1947":"https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1947/MapServer",
    "1943":"https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1943/MapServer"
};

let tiledFeatureLayers = {};
Object.keys(HistoricalImageryUrl).forEach(key => {
    let id = `historical-image-${key}`;
    let url = HistoricalImageryUrl[key];

    let tlLayer = L.esri.tiledMapLayer({
        url: url,
        opacity: 0.75,
        useCors: false
    });

    tiledFeatureLayers[id] = tlLayer;
});

let historyImagery = L.esri.tiledMapLayer({
    url: "https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1998/MapServer",
    opacity: 0.75,
    // only necessary for old versions of ArcGIS Server
    useCors: false
});

let imageryDivs = Object.keys(HistoricalImageryUrl).map(key => {
    let id = `historical-image-${key}`;

    return `<div class="style-toggler" id="${id}">
        <div class="range-div">
            <input class="features-slider" type="range" id="${id}" min="0" value="0.0" max="1" step="0.1">
        </div>
        <div class="toggler-title">Historical Imagery ${key}</div>
    </div>`;
});

document.getElementById("historical-imagery").innerHTML = imageryDivs.join("");
document.querySelectorAll(".features-slider").forEach(sliderItem => {
    sliderItem.oninput = (e) => {
        let {id, value } = e.target;
        togglerFeatureLayers(id, value);
    }

});

function togglerFeatureLayers(id, value) {
    let layer = tiledFeatureLayers[id];
    layer.setOpacity(value);

    if(value == 0) {
        layer.remove();
    } else {
        layer.addTo(map);
    }
}
// .addTo(map);

let featureLayers = {
    'contours':contoursLayer,
    'easements':easementLayer,
    'Liverpool-DCP':liverpoolDcp,
    'NSW-Roads':nswRoads,
    'Australia-ilproads':australIlpRoads,
    'NSW-Imagery':nswImagery
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
    // color:"#f87217",
    dashArray: null,
    weight: 1
};


const cadastreFeature = L.esri
.featureLayer({
    url: "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/AddressSearch/MapServer/0",
    onEachFeature:function(feature, layer) {
        layer.on("click",(e) => {
            console.log(e.target);
            updateLotDetails(e, feature);

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
                color:'#f87217',
                weight:2.5,
                fillColor:'transparent'
            });

            // updateAddressDetails();
        });

        layer.on('mouseover',  (e) => {
            console.log('mouseover');
            if(e.target == selectedLayer) {
                layer.setStyle({
                    color:'#f87217',
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
        layer.addTo(map).bringToBack();
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

function updateLotDetails(e, feature) {
    let { properties } = feature;
    let areaM = turf.area(feature);
    console.log(areaM);

    pdfModule.targetFeature = feature;
    // pdfModule
    // console.log(properties);
    let coords = Object.values(e.latlng).reverse();
    document.getElementById("info-container").classList.remove("d-none");

    addressLayer.query()
    .intersects({"type":"Point", "coordinates":[...coords]})
    .run((err, fc) => { 
        if(fc.features.length) {
            let address = createAddressFromProperties(fc.features[0].properties);
            document.getElementById("address-value").innerHTML = address;

            pdfModule.setLocation(e.latlng);
            pdfModule.updateAddress(address);
            pdfModule.updateCouncilName(`${fc.features[0].properties['GURAS_DELIVERY.SDE.ADDRESSSTRING.COUNCIL']} COUNCIL`) ;

            document.getElementById("lot-summary").innerHTML = document.getElementById("lot-info").innerHTML;
        }

    });

    // contour layer
    let buffer = turf.buffer({"type":"Point", "coordinates":[...coords]}, 0.002)
    contoursLayer.query()
    .intersects(buffer)
    .run((err, fc) => { 

        if(fc && fc.features.length) {
            document.getElementById("elevation-value").innerHTML = `${fc.features[0].properties.elevation} m`;
        }
    });
    
    // easement layer
    easementLayer.query()
    .intersects({"type":"Point", "coordinates":[...coords]})
    .run((err, fc) => { 
        console.log("Fc Collection");
        console.log(fc);
        if(fc && fc.features.length) {
            let { properties } = fc.features[0].properties;

            document.getElementById("lot-info-section").innerHTML += `<div class="info-click-feature-attribute">
                <div class="info-click-feature-attribute-name">Easement Type:</div>
                <div class="info-click-feature-attribute-value">${properties['easementtype']}</div>
            </div>
            <div class="info-click-feature-attribute">
                <div class="info-click-feature-attribute-name">Easement Width:</div>
                <div class="info-click-feature-attribute-value">${properties['easementwidth']}</div>
            </div>
            `;
        }
    });

    if(!properties) {
        document.getElementById("lot-info").classList.add("d-none");
        return;
    } 

    document.getElementById("lot-info").classList.remove("d-none");

    let title = ["LOTNUMBER", "SECTIONNUMBER", "PLANLABEL"].map(key => properties[key]).filter(val=> val).join("/");
    let areaHa = (properties['Area_H'] * 10000).toFixed(0);
    console.log(properties);

    let lotDetails = `<div class="info-click-feature-attribute">
        <div class="info-click-feature-attribute-name">Total Lot Area(Appox):</div>
        <div class="info-click-feature-attribute-value">${areaHa} M<sup>2</sup></div>
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
        <div class="info-click-feature-attribute-value">${areaHa} M<sup>2</sup></div>
    </div>

    <div class="info-click-feature-attribute">
        <div class="info-click-feature-attribute-name">Elevation:</div>
        <div class="info-click-feature-attribute-value" id="elevation-value"></div>
    </div>
    `;

    // document.getElementById("lot-number").innerHTML = title;
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

L.control.scale({metric:true, imperial:false}).addTo(map);

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
    
    map.setView(pdfModule.location);
    pdfModule.handlePrintAction();
}).addTo( map );

L.easyButton('fa-print', function(btn, map){
    pdfModule.printMapToPicture();
}).addTo( map );


L.easyButton('fa-expand', function(btn, map){
    toggleFullscreen();
}).addTo( map );

L.easyButton('fa-person', function(btn, map){
    toggleStreetView();
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


function toggleStreetView() {
    let propertyCoord;
    if(!pdfModule.location) {
        propertyCoord  = Object.values(map.getCenter());
    } else {
        propertyCoord = Object.values(pdfModule.location);
    }
    
    let url = `https://maps.googleapis.com/maps/api/streetview/metadata?location=${propertyCoord}&source=outdoor&key=AIzaSyDGmlpKi5ZYw3Q-vgKDkDv5Io0cnljwhi4`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let { pano_id } = data;

        if(pano_id) {
            // redirect to street view page
            let steetViewLink = `https://www.google.com/maps/@?api=1&map_action=pano&pano=${pano_id}`;
            window.open(steetViewLink, '_blank');
        } else {
            alert("No Google Street View Coverage");
        }
        
    })
    .catch(console.error);

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

// "Easement":["easementtype","easementwidth"],
// "Contour":["elevation"]

function createLayers(prefixId, layerList) {
    let groupLayers = layerList.map(layer => {
        let id = `${prefixId}-${layer.name.split(" ").join("-").toLocaleLowerCase()}`;

        return {
            "name":layer.name,
            "id":id,
            "layerName":layer.id,isVisible:true,opacity:0.01,
        }
    })

    return groupLayers;
    console.log(groupLayers);
}