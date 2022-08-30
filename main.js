var map = L.map('map', {
    center: [-33.79405446678091, 151.12099701128386],
    // center: [-34, 151.12099701128386],
    minZoom:10,
    zoom: 16,
    maxZoom:19
});

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// }).addTo(map);

// dark theme
// let darkTheme  = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}' + (L.Browser.retina ? '@2x.png' : '.png'), {
//    attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
//    subdomains: 'abcd',
//    maxZoom: 20,
//    minZoom: 0
// }).addTo(map);

let lightTheme  = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}' + (L.Browser.retina ? '@2x.png' : '.png'), {
   attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
   subdomains: 'abcd',
   maxZoom: 20,
   minZoom: 0
}).addTo(map);


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



// Deliverables
// -address search: DONE
// -measure on map: DONE
// -switch on and off layers
// -click on a point or polygon for property and layer information: GetFeatureInfo()
// -generate a custom pdf report/summary
// -Add layers (admin side) as we go and find useful add-ons