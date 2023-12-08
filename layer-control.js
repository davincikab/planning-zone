// add the layer to each category
let LayerControl = function(layers, map) {
    this.layers = layers;
    this.map = map;
    this.activeLayer = [];

    this.init = () => {
        this.renderLayerTogglers();

        // 
        this.tileLayers = Object.values(this.layers).map(src => {
            if(src.isProperty) {
                return src.layers.map((lyr) => this.renderPropertyWms(lyr, src.source))
            } else {
                return src.layers.map((lyr) => this.addLayerToMap(lyr, src.source))
            }
            
        }).reduce((a,b) => {
            a = [...a, ...b];

            return a;
        }, []);

        this.fireTogglerListeners();
        // this.map.on("click", this.handleMapClick);
    }


    // render the layers on the tab-section
    // add the layer to map
    this.addLayerToMap = (layer, src) => {
        // console.log(layer);

        // let requestLayers = layer.layers ? layer.layers.join()
        let requestStyles = layer.layers ? layer.layers.map(lyr => 'default').join(",") : "default";
        let wmsLayer = L.tileLayer.wms(`${src}`, {
            layers: `${layer.layerName}`,
            styles:requestStyles,
            format: 'image/png',
            transparent: true,
            crs:L.CRS.EPSG4326,
            attribution: "NSW",
            // bounds:layer.bo[...layer.bounds],
            layerId:layer.id,
            opacity:layer.opacity,
            name:layer.name,
            layerId:layer.id,
            crossOrigin:true
        });

        if(layer.isVisible) { 
            // wmsLayer.addTo(map); 
            this.activeLayer.push(wmsLayer);
        }

        return wmsLayer;
    }

    this.renderPropertyWms = (layer, source) => {
        let requestStyles = layer.layers ? layer.layers.map(lyr => 'default').join(",") : "default";

        let tileWms = L.tileLayer.wms(source, {
            layers: `show:${layer.layerName}`,
            styles:requestStyles,
            format: 'png',
            transparent: true,
            crs:L.CRS.EPSG3857,
            bboxSR:3857,
            imageSR:3857,
            attribution: "NSW",
            layerId:layer.id,
            f:'image',
            size:'256,256',
            name:layer.name,
        });

        tileWms.isProperty = true;

        return tileWms;
    }

    this.togglerBasemap = (layer) => {
        // let opacity = this.map.getPaintProperty(layer.id, 'raster-opacity');
        // opacity = opacity == 1 ? 0 : 1;


        // this.map.setPaintProperty(layer.id, 'raster-opacity', opacity);
    }

    // display the layer on the layer toggler
    this.togglerWMSLayers = (id, opacity) => {
        // console.log(id,":",opacity);
        let layer = this.tileLayers.find(lyr => lyr.options.layerId == id);
        let value = parseFloat(opacity);

        if(!this.map.hasLayer(layer)) {
            console.log(layer);

            layer.addTo(this.map);
            // this.activeLayer = layer;
            this.activeLayer.push(layer);
            // this.map.fitBounds()
        }

        layer.setOpacity(value);

        if(value == 0) {
            console.log("Remove Feature");
            this.map.removeLayer(layer);
            this.activeLayer = this.activeLayer.filter(lyr => lyr.options.layerId != layer.options.layerId);

            let element = document.getElementById(`${layer.wmsParams.layerId}-${layer.wmsParams.layers}`);

            if(element) {
                element.classList.add("d-none");
            }

        } else {
            this.toggleLegendContainer(layer);
        }
    }

    this.toggleLegendContainer = (layer) => {
        let imageUrl = `${layer._url}?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=${layer.wmsParams.layers}`;

        let element = document.getElementById(`${layer.wmsParams.layerId}-${layer.wmsParams.layers}`);

        if(element) {
            element.classList.remove("d-none");
            return;
        }

        if(layer.isProperty) {
            let url = layer._url;
            url = url.replace(/export/, "legend?f=json");
            console.log(url);
            // https://maps.six.nsw.gov.au/arcgis/rest/services/public/Valuation/MapServer/legend?f=json&layer=1
            // let 
            let layerValue = parseInt(layer.wmsParams.layers.split(":")[1]);
            console.log(layerValue);

            fetch(url)
            .then(res => res.json())
            .then(({ layers }) => {
                console.log(layers);
                console.log(layer);

                layers.map(entry => {
                    if(entry.layerId == layerValue) {
                        this.createLegendTable(entry, layer);
                    }
                    
                });
            })
            .catch(console.error);
        } else {
            console.log(layer);
            this.updateLegendItems(layer, imageUrl);
        }      

    }

    this.createLegendTable = (legendValues, layer) => {
        console.log(legendValues.legend);

        let legendData = legendValues.legend.map(val => {
            return `<tr>
                <td>
                    <img src="data:image/png;base64,${val.imageData}" />
                </td>
                <td>${val.label}</td>
            </tr>`;
        });


        let legendContent = `<div class="legend-item" id="${layer.wmsParams.layerId}-${layer.wmsParams.layers}">
            <div class="legend-text">${layer.wmsParams.name}</div>
           <table>
            <tbody>
                ${legendData.join("")}
            </tbody>
           </table>
        </div>`;



        let element = document.getElementById(`${layer.wmsParams.layerId}-${layer.wmsParams.layers}`);
        // console.log(layer.wmsParams.name.includes("Label"));

        if(!element && !layer.wmsParams.name.includes("Label")) {
            document.getElementById("legend-body").innerHTML += legendContent;
        }

    }

    this.updateLegendItems = (layer, imageUrl) => {
        console.log(layer);
        let legendContent = `<div class="legend-item" id="${layer.wmsParams.layerId}-${layer.wmsParams.layers}">
            <div class="legend-text">${layer.wmsParams.name}</div>
            <img src="${imageUrl}" alt="">
        </div>`;


        let element = document.getElementById(`${layer.wmsParams.layerId}-${layer.wmsParams.layers}`);
        // console.log(layer.wmsParams.name.includes("Label"));

        if(!element && !layer.wmsParams.name.includes("Label")) {
            document.getElementById("legend-body").innerHTML += legendContent;
        }
    }

    this.toggleIsPropertyLegend = (layer) => {
        // https://maps.six.nsw.gov.au/arcgis/rest/services/public/Valuation/MapServer/legend?f=json
    }


    // render the layer on the side tab
    this.renderLayerTogglers = () => {
        let subsection = document.getElementById("custom-overlay");
        // console.log(Object.values(this.layers));
        
        Object.keys(this.layers)
        .forEach(key => {
            let source = this.layers[key];

            subsection.innerHTML += `<div class="collapse-toggler">
                <div class="toggler-title">${key}</div>
                <span>
                    <i class="fa fa-angle-down"></i>
                </span>
            </div>`;

            let docFrag = document.createDocumentFragment();

            let layerGroup = document.createElement('div');
            layerGroup.className = "collapse-section";
            layerGroup.style.maxHeight = 0;
            layerGroup.id = `${source.id}`;
            
            // wms layers
            let wmsLayers = source.layers.map(lyr => {
                return `<div class="style-toggler" id="${lyr.id}">
                    <div class="range-div">
                        <input class="opacity-slider" type="range" id="${lyr.id}" min="0.01" value="${lyr.opacity}" max="1" step="0.1">
                    </div>
                    <div class="toggler-title">${lyr.name}</div>
                </div>`;
            });

            layerGroup.innerHTML = wmsLayers.join("");
            docFrag.append(layerGroup);

            subsection.append(docFrag);
        });
    }

    // fire toggler listeners
    this.fireTogglerListeners = () => {
        this.sliderTogglers = document.querySelectorAll(".opacity-slider");
        // console.log(this.sliderTogglers);

        this.sliderTogglers.forEach(toggler => {
            toggler.oninput = (e) => {
                let {id, value } = e.target;

                this.togglerWMSLayers(id, value);
            }
        });
    }


    // layer click events
    this.handleMapClick = (e) => {
        
    }
    
};

let Collapse = function() {
    this.activeCollapse = null;
    this.activeToggler = null;
    this.mainTogglers = document.querySelectorAll(".toggler-header");
    this.collapseTogglers = document.querySelectorAll(".collapse-toggler");

    this.fireListeners = () => {
        for (i = 0; i < this.collapseTogglers.length; i++) {
            let toggler = this.collapseTogglers[i];
            toggler.addEventListener("click", (e) => {
                this.toggleCollapse(e.target);
            });
        }


        this.mainTogglers.forEach(toggler => {

            toggler.onclick = (e) => {
                
                toggler.classList.toggle("active");
                var mainSection = toggler.nextElementSibling;
                mainSection.classList.toggle('active');
            }
        });

    }

    this.toggleCollapse = (toggler) => {
        var content = toggler.nextElementSibling;
        console.log(content.style.maxHeight);

        if(content.style.maxHeight != "0px") {
            content.style.maxHeight = 0;
            toggler.classList.remove("active");
        } else {
            console.log("Logged");

            toggler.classList.add("active");
            content.style.maxHeight = content.scrollHeight+15 + "px";
        }
    }

    this.setActiveCollapse = (element) => {
        this.activeCollapse = element;
    }
}

// https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/export/?service=WMS&request=GetMap&layers=0&styles=default&format=png32&transparent=true&version=1.1.1&f=image&bboxSR=102100&imageSR=102100&layerId=heritage&width=256&height=256&srs=EPSG%3A3857&bbox=16713414.856723502,-3964941.5312086623,16715860.841628628,-3962495.546303537
// https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0&bbox=16710892.792349916%2C-3959912.571821475%2C16713582.42028277%2C-3957528.692001768&bboxSR=102100&imageSR=102100&size=563%2C499&f=image