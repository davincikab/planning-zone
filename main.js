var map = L.map('map', {
    center: [-33.79405446678091, 151.12099701128386],
    // center: [-34, 151.12099701128386],
    minZoom:4,
    zoom: 6,
    maxZoom:19,
    zoomControl:false
});

L.control.zoom({
    position:'bottomright'
}).addTo(map);

// geocoder: Specify Australia
let geocoderControl = new L.Control.Geocoder({ 
    collapsed:false,
    geocoder: L.Control.Geocoder.mapbox({ 
        apiKey: "pk.eyJ1IjoiaGlnaGlxIiwiYSI6ImNsNnVwbHFhMDBsamozbnA1ajBraHlqbmMifQ.mP1mWm5OxGRKfiN0qiH-bg" 
    }),
}).addTo(map);

// measure tool plugin
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
    opacity:0
}).addTo(map);

// update darkTheme opacity
let themeSlider = document.querySelectorAll(".dark-theme")[0];
console.log(themeSlider);


themeSlider.oninput = function(e) {
    let { value } = e.target;

    darkTheme.setOpacity(parseFloat(value));

    if(value > 0) {
        map.removeLayer(lightTheme);
    } else {
        lightTheme.addTo(map);
    }
}
// TileLayer Overlay
// var nexradd = L.tileLayer.wms("https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer", {
//     layers: '5',
//     styles:'default',
//     format: 'image/png',
//     transparent: true,
//     crs:L.CRS.EPSG4326,
//     attribution: "NSW",
//     bounds:[[-37.379372, 142.179602], [-28.193895, 159.083304]]
// }).addTo(map);

let layerControl = new LayerControl(mapLayers, map);
layerControl.init();

let collapseInstance = new Collapse();
collapseInstance.fireListeners();


// layer list:Planning Layers
let layers = [
    {"name":"Lot","id":"lot","layerName":"1","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]],"tile":"http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?service=WMS&request=GetMap&layers=1&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
    {"name":"PlanExtent","id":"planextent","layerName":"2","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]],"tile":"http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?service=WMS&request=GetMap&layers=2&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
    {"name":"SectionExtent","id":"sectionextent","layerName":"3","bounds":[[-37.217041,141.001141],[-28.1681,153.635972]],"tile":"http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?service=WMS&request=GetMap&layers=3&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
    {"name":"Rural_PlanExtent","id":"rural_planextent","layerName":"4","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]],"tile":"http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?service=WMS&request=GetMap&layers=4&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
    {"name":"Large_Rural_PlanExtent","id":"large_rural_planextent","layerName":"5","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]],"tile":"http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"}

]


function renderTileLayer(layer) {
    return L.tileLayer.wms("http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer", {
        layers: `${layer.layerName}`,
        styles:'default',
        format: 'image/png',
        transparent: true,
        crs:L.CRS.EPSG4326,
        attribution: "NSW",
        bounds:[...layer.bounds],
        layerId:layer.id
    }).addTo(map);
}


// let tile = renderTileLayer(layers[2]);

function getlayerInfo(fileTree) {
    let layersI = fileTree.WMS_Capabilities.Capability.Layer[0].Layer[0].Layer;
    

    let sourceUrl = fileTree.WMS_Capabilities.Service.OnlineResource['_xlink:href'];
    console.log(sourceUrl);
    // reduce the 
    layersI = layersI.reduce((a, b) => {
        if(b.Layer) {
            a = [...a, ...b.Layer]
        } else {
            a.push(b);
        }

        return a;
    }, []);
    console.log(layersI);

    let info = layersI.map(info => {
        let bbox = info.EX_GeographicBoundingBox;
        // infoName = 8 - +infoName.Name;
        return {
            name:info.Title.__cdata.trim(),
            id:info.Title.__cdata.toLowerCase().trim().replace(/\s/g, "-"),
            layerName:info.Name,
            bounds:[
                [parseFloat(bbox.southBoundLatitude), parseFloat(bbox.westBoundLongitude)],
                [parseFloat(bbox.northBoundLatitude), parseFloat(bbox.eastBoundLongitude)]
            ],
            tile:`${sourceUrl}service=WMS&request=GetMap&layers=${info.Name}&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}`
        }
    });

    return JSON.stringify(info);
}

// console.log(getlayerInfo(sepp));

// feature info on layer click
map.addEventListener('click', onMapClick);
let popup = new L.Popup({maxWidth: 1000});

function onMapClick(e) {
    if(map.drawMode) return;

    var latlngStr = '(' + e.latlng.lat.toFixed(3) + ', ' +         e.latlng.lng.toFixed(3) + ')';
    var BBOX =         map.getBounds()._southWest.lng+","+map.getBounds()._southWest.lat+","+map.getBounds()._northEast.lng+","
    +map.getBounds()._northEast.lat;

    var WIDTH= map.getSize().x;
    var HEIGHT = map.getSize().y;

    var X = map.layerPointToContainerPoint(e.layerPoint).x;
    var Y = map.layerPointToContainerPoint(e.layerPoint).y;

    var URL = 'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&layers=5&QUERY_LAYERS=5&STYLES=&BBOX='+BBOX+'&FEATURE_COUNT=5&HEIGHT='+HEIGHT+'&WIDTH='+WIDTH+'&FORMAT=image%2Fpng&INFO_FORMAT=text%2fhtml&SRS=EPSG%3A4326&X='+X+'&Y='+Y;
    
    popup.setLatLng(e.latlng);
    

    // fetch the json data
    // "http://mapservices.gov.yk.ca/arcgis/services/GeoYukon/GY_OilGas/MapServer/WMSServer?REQUEST=GetFeatureInfo&EXCEPTIONS=application%2Fvnd.ogc.se_xml&BBOX=-140.742239%2C64.444492%2C-131.499347%2C69.721576&SERVICE=WMS&INFO_FORMAT=application%2Fgeojson&QUERY_LAYERS=1&FEATURE_COUNT=50&Layers=1&WIDTH=578&HEIGHT=330&styles=&srs=EPSG%3A4326&version=1.1.1&x=201&y=207&"
    let jsonUrl = 'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&layers=5&QUERY_LAYERS=5&STYLES=&BBOX='+BBOX+'&FEATURE_COUNT=5&HEIGHT='+HEIGHT+'&WIDTH='+WIDTH+'&&INFO_FORMAT=application%2Fgeojson&SRS=EPSG%3A4326&X='+X+'&Y='+Y;
    console.log(jsonUrl);

    fetch(jsonUrl, {
        cors:'no-cors'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);

        if(data.features[0]) {
            let { properties } = data.features[0];
            let keys = Object.keys(properties);

            let rows = keys.map(key => {
                return `<tr>
                    <td>${key}</td>
                    <td>${properties[key]}</td>
                </tr>`
            });

            popup.setContent(`<table>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
                <tbody>
                    ${rows.join("")}
                </tbody>
            </table>`
            );
        } else {
            popup.setContent("<p>No Feature Found !</p>")
        }

        map.openPopup(popup);
    })
    .catch(console.errror)
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
]


// Deliverables
// -address search: DONE
// -measure on map: DONE
// -switch on and off layers
// -click on a point or polygon for property and layer information: GetFeatureInfo()
// -generate a custom pdf report/summary
// -Add layers (admin side) as we go and find useful add-ons




// The challenge all star S02
// Riverdale s03
// Have haves s02-s08