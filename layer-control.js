// add the layer to each category
let LayerControl = function(layers, map) {
    this.layers = layers;
    this.map = map;

    this.init = () => {
        this.renderLayerTogglers();

        // 
        this.tileLayers = Object.values(this.layers).map(src => {
            return src.layers.map((lyr) => this.addLayerToMap(lyr, src.source))
        }).reduce((a,b) => {
            a = [...a, ...b];

            return a;
        }, []);

        this.fireTogglerListeners();
    }


    // render the layers on the tab-section
    // add the layer to map
    this.addLayerToMap = (layer, src) => {

        return L.tileLayer.wms(`${src}`, {
            layers: `${layer.layerName}`,
            styles:'default',
            format: 'image/png',
            transparent: true,
            crs:L.CRS.EPSG4326,
            attribution: "NSW",
            bounds:[...layer.bounds],
            layerId:layer.id,
            opacity:0
        });
        // .addTo(this.map);

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

        layer.setOpacity(parseFloat(opacity));

    }


    // render the layer on the side tab
    this.renderLayerTogglers = () => {
        let subsection = document.getElementById("sub-section");
        // console.log(Object.values(this.layers));
        
        Object.keys(this.layers)
        .forEach(key => {
            let source = this.layers[key];

            subsection.innerHTML += `<div class="collapse-toggler">
                <span>
                    <i class="fa fa-caret-right"></i>
                </span>

                <div class="toggler-title">${key}</div>
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
                        <input class="opacity-slider" type="range" value="0" id="${lyr.id}" min="0" max="1" step="0.1">
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
    
};

let Collapse = function() {
    this.activeCollapse = null;
    this.activeToggler = null;
    this.mainToggler = document.querySelector(".toggler-header");
    this.collapseTogglers = document.querySelectorAll(".collapse-toggler");

    this.fireListeners = () => {
        for (i = 0; i < this.collapseTogglers.length; i++) {
            let toggler = this.collapseTogglers[i];
            toggler.addEventListener("click", (e) => {
                console.log("Click Events");
                this.toggleCollapse(e.target);
            });
        }


        this.mainToggler.onclick = () => {
            let mainSection = document.querySelector(".main-section");
            mainSection.classList.toggle('active');
        }
    }

    this.toggleCollapse = (toggler) => {
        var content = toggler.nextElementSibling;
        console.log(content.style.maxHeight);

        if(content.style.maxHeight != "0px") {
            content.style.maxHeight = 0;
        } else {
            console.log("Logged");

            toggler.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

    this.setActiveCollapse = (element) => {
        this.activeCollapse = element;
    }
}