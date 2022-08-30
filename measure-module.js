// measure module
class MeasureControl {
    constructor(map) {
        this.map = map;
        this.labelMarkers = [];
        this.draw = new MapboxDraw({
            controls:{
                point:false,
                line_string:true, 
                polygon:true, 
                trash:true,
                combine_features:false,
                uncombine_features:false
            }
        });

        this.addToMap();

        // marker/text on the line length or polygon area
        this.map.on('draw.create', ({ features }) => {
            console.log(features);
            // this.handleDrawCreate(features);
        });

        this.map.on('draw.delete', ({ features }) => {
            this.handleDrawDelete(features);
        });

        this.map.on('mousemove', (e) => {
            let {features } = this.draw.getAll();

            if(features[0]) this.handleDrawMetrics(features);
        })
    }

    // add the draw control
    addToMap() {
        this.map.addControl(this.draw, 'top-right');
    }


    // text marker
    updateMetricValue(data) {
        // this.map.getSource('')
        data.features.forEach(ft => {
            let el = document.createElement('div');
            el.classList.add('metric-marker');
            el.innerHTML = ft.properties.metric;

            let marker = this.labelMarkers.find(mkr => mkr.layerId == ft.properties.layerId);
            if(marker) {
                this.labelMarkers = this.labelMarkers.filter(mkr => mkr.layerId !== ft.properties.layerId);
                marker.remove();
            }

            marker = new mapboxgl.Marker({element:el})
            marker
                .setLngLat(ft.geometry.coordinates)
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
                center = turf.center(feature);

                center.properties.metric = `${this.computeLineLength(feature)} km`;
            } else if(type == 'Polygon' && coordinates[0].length > 3) {
                console.log(feature);

                center = turf.center(feature);
                center.properties.metric = `${this.computeArea(feature)} ha`
            } 

            if(center) center.properties.layerId = feature.id || "";
            return center;
        }).filter(ft => ft);

        // update the metric values
        this.updateMetricValue(
            turf.featureCollection(fts)
        );
    }

    // handle draw delete
    handleDrawDelete(features) {
        console.log(features);

        features.forEach(ft => {
            this.labelMarkers = this.labelMarkers.filter(mkr => {
                if(mkr.layerId !== ft.id) {
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
