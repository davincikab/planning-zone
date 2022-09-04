// measure module
class MeasureControl {
    constructor(map) {
        this.map = map;
        this.labelMarkers = [];

        this.drawnItems = new L.FeatureGroup();

        this.drawControl = new L.Control.Draw({
            position:'topright',
            edit: {
                // edit:false,
                featureGroup:this.drawnItems
            },
            draw:{
                circlemarker:false,
                rectangle:false,
                marker:false,
                rectangle:false,
                circle:false
            }
        
        });

        this.addToMap();

        
        this.map.on("draw:drawstart", (event) => {
            // this.handleDrawCreate(features);
            this.drawControl.layerType = event.layerType;
            this.drawControl.layerId = this.makeid();
        });

        this.map.on("draw:drawvertex", (event) =>{
            let layers = event.layers.getLayers();
            let coord = layers.map(layer => Object.values(layer.getLatLng()).reverse());  
            let feature;

            if(coord.length < 2) {
                return;
            }

            if(this.drawControl.layerType == 'polyline') {
                feature = turf.lineString([...coord], { layerId:this.drawControl.layerId });        
            } else {
                console.log("DRAWING POLYGONS");
                if(coord.length < 3) {
                    return;
                }
                coord.push(coord[0]);
                feature = turf.polygon([[...coord]], { layerId:this.drawControl.layerId });
            }
            console.log(feature);
            this.handleDrawMetrics([feature]);

        });

        // marker/text on the line length or polygon area
        this.map.on('draw:created', (event) => {
            event.layer.layerId = this.drawControl.layerId;

            // update drawnItems
            this.drawnItems.addLayer(event.layer);
        });

        this.map.on('draw:deleted', (event) => {
            this.handleDrawDelete(event.layers.getLayers());
        });
    }

    // add the draw control
    addToMap() {
        this.map.addControl(this.drawControl);
        this.map.addLayer(this.drawnItems);
    }


    // text marker
    updateMetricValue(data) {
        // this.map.getSource('')
        data.features.forEach(ft => {
            let icon = L.divIcon({
                html:`<div class="metric-marker">${ft.properties.metric}</div>`,
                className:'div-marker',
                anchor:[-70, 50]
            });

            // let el = document.createElement('div');
            // el.classList.add('metric-marker');
            // el.innerHTML = ft.properties.metric;

            let marker = this.labelMarkers.find(mkr => mkr.layerId == ft.properties.layerId);
            if(marker) {
                this.labelMarkers = this.labelMarkers.filter(mkr => mkr.layerId !== ft.properties.layerId);
                marker.remove();
            }

            let coord = [...ft.geometry.coordinates];
            marker = L.marker([...coord.reverse()], {icon:icon})
            marker
                .addTo(this.map);
            
            marker.layerId = ft.properties.layerId;

            this.labelMarkers.push(marker);
        });
    }


    // draw update
    handleDrawUpdate(features) {
        console.log(features);
        this.handleDrawMetrics(features);
    }

    // handle draw create
    handleDrawCreate(features) {
        this.handleDrawMetrics(features);
    }

    handleDrawMetrics(features=[]) {
        let fts = features.map(feature => {
            let { type, coordinates } = feature.geometry;
            let center;

            if(type == 'LineString' && coordinates[0]) {
                // center = turf.center(feature, { propert });

                let length = this.computeLineLength(feature);
                center = turf.along(feature, length/2);

                center.properties = {...feature.properties}
                center.properties.metric = `${length}km`;
            } else if(type == 'Polygon' && coordinates[0].length > 3) {
                console.log(feature);

                center = turf.center(feature, { properties:{...feature.properties} });
                center.properties.metric = `${this.computeArea(feature)} ha`
            } 

            console.log(center);

            // if(center) center.properties.layerId = feature.id || "";
            return center;
        }).filter(ft => ft);

        // update the metric values
        this.updateMetricValue(
            turf.featureCollection(fts)
        );
    }

    // handle draw delete
    handleDrawDelete(layers) {
        console.log(layers);

        layers.forEach(ft => {
            this.labelMarkers = this.labelMarkers.filter(mkr => {
                if(mkr.layerId !== ft.layerId) {
                    return true;
                }

                mkr.remove();
                return false;
            });
        });

        // this.updateMetricValue(
        //     turf.featureCollection([])
        // );

        // measureControl.draw.deleteAll();
    }

    makeid(length=10) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/#@$';
        var charactersLength = characters.length;

        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
            charactersLength));
        }

        return result;
    }
    

    // line length
    computeLineLength(feature) {
        return turf.length(feature).toFixed(2);
    }

    // polygon area
    computeArea(feature) {
        // conver the area into hectares
        return (turf.area(feature) / 10000).toFixed(2);
    }

}
