let mapLayers = {
    // 'Basemaps':{
    //     layers:[
    //         // {}
    //     ]
    // },
    'Primary Planning Layer':{
        id:'planning-layers',
        source:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer',
        wmsSource:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WMSServer?request=GetCapabilities&service=WMS',
        layers:[    
            {
                name:'Heritage',
                id:'heritage',
                url:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WMSServer',
                layerName:0,
                bounds:[[-38, 139],[-28.18421045699995, 153.63689452000006]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Planning/EPI_Primary_Planning_Layers/MapServer/WmsServer?service=WMS&request=GetMap&layers=0&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}',
                json:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/0?f=pjson'
            }, 
            {
                name:'FSR',
                id:'fsr',
                url:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WMSServer',
                layerName:1,
                bounds:[[-37.11571532490041, 146.1766831521427], [-28.158307262494475,153.63694544428677]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Planning/EPI_Primary_Planning_Layers/MapServer/WmsServer?service=WMS&request=GetMap&layers=1&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}',
                json:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/1?f=pjson'
            },
            {
                name:'Land Zoning',
                id:'land-zoning',
                url:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WMSServer',
                layerName:2,
                bounds:[[-38,39],[-28.15702055490766, 159.34057684750007]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Planning/EPI_Primary_Planning_Layers/MapServer/WmsServer?service=WMS&request=GetMap&layers=2&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}',
                json:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/2?f=pjson'
            },
            {
                name:'Land Reserved for Acquisition',
                id:'land-reserve',
                url:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WMSServer',
                layerName:3,
                bounds:[[-37.11584720299993, 143.56394133180015],[28.638150749999966, 153.5890860600001]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Planning/EPI_Primary_Planning_Layers/MapServer/WmsServer?service=WMS&request=GetMap&layers=3&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}',
                json:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/3?f=pjson'
            },
            {
                name:'Lot Size',
                id:'lot-size',
                url:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WMSServer',
                layerName:4,
                bounds:[[-38, 139], [-28.16563687599995, 153.6369444940001]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Planning/EPI_Primary_Planning_Layers/MapServer/WmsServer?service=WMS&request=GetMap&layers=4&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}',
                json:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/4?f=pjson'
            },
            {
                name:'Height of Buildings',
                id:'building-height',
                url:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WMSServer',
                layerName:5,
                bounds:[[-38,139],[-28.158307262494475, 153.63883177900004]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Planning/EPI_Primary_Planning_Layers/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}',
                json:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/5?f=pjson'
            },
            {
                name:'Land Application',
                id:'land-application',
                url:'https://mapprod3.environment.nsw.gov.au/arcgis/services/PlanningEPI_Primary_Planning_Layers/MapServer/WMSServer',
                layerName:6,
                bounds:[[ -37.528013948999956, 140.99926130831747], [-28.141279486999963, 159.3402948800001]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Planning/EPI_Primary_Planning_Layers/MapServer/WmsServer?service=WMS&request=GetMap&layers=6&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}',
                json:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/6?f=pjson'
            }
        ]
    },
    'Development Control':{
        id:'development-control',
        source:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WMSServer',
        layers:[
            {
                name:'Special Infrastructure Contributions',
                id:'special-infrastructure',
                layerName:1,
                bounds:[[-34.91561604341547, 150.5224677223223],[-33.21401504399995, 151.47356394200006]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Greenfield Housing Code Area',
                id:'greenfield-housing',
                layerName:2,
                bounds:[[-37.528013948999956,140.99926130831747],[-28.141279486999963,159.3402948800001]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Local Provisions',
                id:'local-provisions',
                layerName:3,
                bounds:[[-37.37937199299995, 142.17960235300006],[-28.193894943999965,159.08330422300003]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Active Street Frontages',
                id:'active-street-frontages',
                layerName:4,
                bounds:[[-36.41698845299993, 148.6197632940001],[ -28.61866810691663, 153.61572401736558]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Additional Permitted Uses',
                id:'additional-permitted-uses',
                layerName:5,
                bounds:[[-37.25711818899998, 141.44154424700002], [-28.170940524999935, 159.0781158127744]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Key Sites',
                id:'key-sites',
                layerName:6,
                bounds:[[-38, 139], [-28.16799747699997, 153.54935033000004]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Urban Release Area',
                id:'urban-release-area',
                layerName:7,
                bounds:[[-36.454736544999946, 142.17951360900008],[-28.222460224999963, 153.60300291400006]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
        ]        
    },
    'Harzards':{
        id:'hazard',
        source:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Hazard/MapServer/WMSServer',
        layers:[
            {
                name:'Flood Zoning',
                id:'flood-zoning',
                layerName:1,
                bounds:[[-36.91905531599997, 141.69770346100006],[-28.167527916999973, 153.59449700200025]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Hazard/MapServer/WmsServer?service=WMS&request=GetMap&layers=1&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Landslide Risk Land',
                id:'landslide-risk-land',
                layerName:2,
                bounds:[[-36.66481367799997, 147.852926872],[-28.71388766599995, 153.45107407800003]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Hazard/MapServer/WmsServer?service=WMS&request=GetMap&layers=1&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
        ]
    },
    'Protection':{
        id:'hazard',
        source:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WMSServer',
        layers:[
            {
                name:'Acid Sulfate Soils',
                id:'acid-sulfate-soils',
                layerName:1,
                bounds:[[-37.47131246799995, 149.8492960750001],[-28.158307253999965, 153.62515875200006]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=1&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Airport Noise',
                id:'airport-noise',
                layerName:2,
                bounds:[[-33.97060082499996, 150.532780999],[-31.05787996899994, 152.01368631200012]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=2&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Drinking Water Catchment',
                id:'drinking-water-catchment',
                layerName:3,
                bounds:[[-36.00945061632382, 148.5536220880001],[-28.246185064999963, 153.59697941500008]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=3&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Groundwater Vulnerability',
                id:'groundwater-vulnerability',
                layerName:4,
                bounds:[[ -36.550291081999944, 143.21216088100005],[-30.512751081999966, 151.23222935800004]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=4&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Mineral and Resource Land',
                id:'mineral-resource',
                layerName:5,
                bounds:[[-35.413181614999985, 147.3151658380001],[-28.66706676499996, 153.01932742500003]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Obstacle Limitation Surface',
                id:'obstacle-limitation-surface',
                layerName:6,
                bounds:[[-35.86555250299995, 145.42638061800005],[-28.30466605299995, 153.44135939000012]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=6&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Riparian Lands and Watercourses',
                id:'riparian-lands',
                layerName:7,
                bounds:[[-37.26338158434629, 141.0013293400001],[-28.710697403999973, 153.47538800400002]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=7&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Salinity',
                id:'salinity',
                layerName:8,
                bounds:[[-35.39814631399997, 146.473591004],[-29.197733722999942, 151.0091805410001]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=8&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Scenic Protection Land',
                id:'scenic-protection-land',
                layerName:9,
                bounds:[[-36.68993677299994, 148.4433061000001],[-30.883680699999957, 153.07273794500009]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=9&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Terrestrial Biodiversity',
                id:'terrestrial-biodiversity',
                layerName:10,
                bounds:[[-37.504648369999984, 141.00218093600006],[-28.165625517999956, 153.55163724800002]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=10&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Wetlands',
                id:'wetlands',
                layerName:11,
                bounds:[[-36.889320862999966, 141.00218102600002],[-28.713293111999974, 153.48181948]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=11&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Environmentally Sensitive Land',
                id:'environmentally-sensitive-land',
                layerName:12,
                bounds:[[-35.1588681209999, 147.31264960400006],[-32.17104704099995, 151.646695431]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=12&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
        ]
    },
    'SEPP Biodiversity & Conservation':{
        id:'hazard',
        source:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WMSServer',
        layers:[
            {"name":"Wetlands Protection Area","id":"wetlands-protection-area","layerName":"1","bounds":[[-33.875103,151.012057],[-33.74689,151.291289]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=1&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Water Zoning","id":"water-zoning","layerName":"2","bounds":[[-33.875871,151.010008],[-33.743464,151.29289]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=2&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Sydney Harbour Catchment","id":"sydney-harbour-catchment","layerName":"3","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=3&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Sydney Drinking Water Catchment","id":"sydney-drinking-water-catchment","layerName":"4","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=4&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Sydney Drinking Water Subcatchments","id":"sydney-drinking-water-subcatchments","layerName":"5","bounds":[[-36.009451,148.553622],[-28.246185,153.596979]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Strategic Harbour Foreshore Sites","id":"strategic-harbour-foreshore-sites","layerName":"6","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=6&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Strategic Foreshore Sites Points","id":"strategic-foreshore-sites-points","layerName":"7","bounds":[[-33.87397,151.055511],[-33.800082,151.295069]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=7&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Special Purposes (Boat Repair Facilities and Commercial Marinas)","id":"special-purposes-(boat-repair-facilities-and-commercial-marinas)","layerName":"8","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=8&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Scenic Protection","id":"scenic-protection","layerName":"9","bounds":[[-36.689937,148.443306],[-30.883681,153.072738]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=9&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Heritage Points","id":"heritage-points","layerName":"10","bounds":[[-33.873664,151.044602],[-33.774422,151.288834]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=10&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Hawkesbury-Nepean River Sub Catchment Boundaries","id":"hawkesbury-nepean-river-sub-catchment-boundaries","layerName":"11","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=11&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Foreshores and Waterways Area Boundary","id":"foreshores-and-waterways-area-boundary","layerName":"12","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=12&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Critical Habitat Area","id":"critical-habitat-area","layerName":"13","bounds":[[-33.816149,151.271133],[-33.804052,151.292857]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=13&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Land Application","id":"land-application","layerName":"14","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=14&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Subject Land","id":"subject-land","layerName":"15","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=15&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"}
        ]
    },

    // Recheck this
    'SEPP Coastal Management':{
        id:'hazard',
        source:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Coastal_Management_2018/MapServer/WMSServer',
        layers:[
            {"name":"Land Application Map","id":"land-application-map","layerName":"7","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Coastal_Management_2018/MapServer/WmsServer?service=WMS&request=GetMap&layers=1&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Coastal Use Area Map","id":"coastal-use-area-map","layerName":"6","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Coastal_Management_2018/MapServer/WmsServer?service=WMS&request=GetMap&layers=2&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Coastal Environment Area Map","id":"coastal-environment-area-map","layerName":"5","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Coastal_Management_2018/MapServer/WmsServer?service=WMS&request=GetMap&layers=3&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Coastal Vulnerability Area Map (Note: No map at this time)","id":"coastal-vulnerability-area-map-note:-no-map-at-this-time","layerName":"4","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Coastal_Management_2018/MapServer/WmsServer?service=WMS&request=GetMap&layers=4&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Littoral Rainforest","id":"littoral-rainforest","layerName":"3","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Coastal_Management_2018/MapServer/WmsServer?service=WMS&request=GetMap&layers=6&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Coastal Wetlands","id":"coastal-wetlands","layerName":"2","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Coastal_Management_2018/MapServer/WmsServer?service=WMS&request=GetMap&layers=7&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"}   
        ]
    },
    'SEPP Western Parkland':{
        id:'hazard',
        source:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?',
        layers:[
            {"name":"Bulk Water Supply Infrastructure","id":"bulk-water-supply-infrastructure","layerName":"1","bounds":[[-33.951884,150.818964],[-33.808244,150.912399]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=1&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Additional Controls","id":"additional-controls","layerName":"2","bounds":[[-38,139],[-28.157021,159.340577]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=2&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},{"name":"1 in 100 AEP Flood Extents","id":"1-in-100-aep-flood-extents","layerName":"3","bounds":[[-36.919055,141.697703],[-28.167528,153.594497]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=3&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Wind Turbine Buffer Zone 30km","id":"wind-turbine-buffer-zone-30km","layerName":"5","bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Wind Turbine Buffer Zone 3km","id":"wind-turbine-buffer-zone-3km","layerName":"6","bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=6&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Wildlife Buffer Zone 13km","id":"wildlife-buffer-zone-13km","layerName":"8","bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=8&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Wildlife Buffer Zone 8km","id":"wildlife-buffer-zone-8km","layerName":"9","bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=9&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Wildlife Buffer Zone 3km","id":"wildlife-buffer-zone-3km","layerName":"10","bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=10&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Light Control Zone D","id":"light-control-zone-d","layerName":"12","bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=12&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Light Control Zone C","id":"light-control-zone-c","layerName":"13","bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=13&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Light Control Zone B","id":"light-control-zone-b","layerName":"14","bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=14&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Light Control Zone A","id":"light-control-zone-a","layerName":"15","bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=15&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Airport Noise","id":"airport-noise","layerName":"16","bounds":[[-33.970601,150.532781],[-31.05788,152.013686]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=16&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Windshear Assessment Trigger Area","id":"windshear-assessment-trigger-area","layerName":"17","bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=17&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Obstacle Limitation Surface","id":"obstacle-limitation-surface","layerName":"18","bounds":[[-35.865553,145.426381],[-28.304666,153.441359]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=18&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Terrestrial Biodiversity","id":"terrestrial-biodiversity","layerName":"19","bounds":[[-37.504648,141.002181],[-28.165626,153.551637]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=19&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Public Safety Area","id":"public-safety-area","layerName":"20","bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=20&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Transport & Arterial Road Infrastructure","id":"transport-&-arterial-road-infrastructure","layerName":"21","bounds":[[-33.94592,150.678331],[-33.787435,150.851858]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=21&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Key Sites","id":"key-sites","layerName":"22","bounds":[[-38,139],[-28.167997,153.54935]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=22&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Urban Release Area","id":"urban-release-area","layerName":"23","bounds":[[-36.454737,142.179514],[-28.22246,153.603003]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=23&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Special Areas","id":"special-areas","layerName":"24","bounds":[[-34.030377,150.705122],[-33.702335,150.872984]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=24&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Special Provision","id":"special-provision","layerName":"25","bounds":[[-34.476939,150.525531],[-32.887884,151.759188]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=25&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Riparian Lands and Watercourses","id":"riparian-lands-and-watercourses","layerName":"26","bounds":[[-37.263382,141.001329],[-28.710697,153.475388]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=26&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Precinct Boundaries","id":"precinct-boundaries","layerName":"27","bounds":[[-34.279233,150.621106],[-33.631934,151.234679]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=27&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Heritage","id":"heritage","layerName":"28","bounds":[[-38,139],[-28.18421,153.636895]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=28&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Growth Centres","id":"growth-centres","layerName":"29","bounds":[[-34.279233,150.621106],[-33.631934,150.96972]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=29&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Dwelling Density","id":"dwelling-density","layerName":"30","bounds":[[-36.048157,150.096477],[-32.213313,152.550322]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=30&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Native Vegetation Protection","id":"native-vegetation-protection","layerName":"31","bounds":[[-34.018565,150.708609],[-33.643644,150.968491]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=31&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Environmental Conservation Area","id":"environmental-conservation-area","layerName":"32","bounds":[[-33.947543,149.833031],[-29.477698,151.08344]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=32&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Additional Permitted Uses","id":"additional-permitted-uses","layerName":"33","bounds":[[-37.257118,141.441544],[-28.170941,159.078116]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=33&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Land Reservation Acquisition","id":"land-reservation-acquisition","layerName":"34","bounds":[[-37.115847,143.563941],[-28.638151,153.589086]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=34&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Flood","id":"flood","layerName":"35","bounds":[[-36.919055,141.697703],[-28.167528,153.594497]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=35&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Height of Building","id":"height-of-building","layerName":"36","bounds":[[-38,139],[-28.158307,153.638832]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=36&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Minimum Lot Size","id":"minimum-lot-size","layerName":"37","bounds":[[-38,139],[-28.165637,153.636944]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=37&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Land Zoning","id":"land-zoning","layerName":"38","bounds":[[-38,139],[-28.157021,159.340577]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=38&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Floor Space Ratio (n:1)","id":"floor-space-ratio-(n:1)","layerName":"39","bounds":[[-37.115715,146.176683],[-28.158307,153.636945]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=39&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Land Application","id":"land-application","layerName":"40","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=40&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Subject Land","id":"subject-land","layerName":"41","bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=41&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"}
        ]
    },
    'NSW Cadastre':{
        id:'cadastre',
        source:'http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer',
        layers:[
            {"name":"Lot","id":"lot","layerName":"1","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]],"tile":"http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?service=WMS&request=GetMap&layers=1&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"PlanExtent","id":"planextent","layerName":"2","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]],"tile":"http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?service=WMS&request=GetMap&layers=2&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"SectionExtent","id":"sectionextent","layerName":"3","bounds":[[-37.217041,141.001141],[-28.1681,153.635972]],"tile":"http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?service=WMS&request=GetMap&layers=3&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Rural_PlanExtent","id":"rural_planextent","layerName":"4","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]],"tile":"http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?service=WMS&request=GetMap&layers=4&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Large_Rural_PlanExtent","id":"large_rural_planextent","layerName":"5","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]],"tile":"http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"}
        ]
    },
    // 'Property Info':{},
    // 'Easements':{},
    // 'Contours':{},
    // 'Address':{}
};