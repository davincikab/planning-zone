let mapLayers = {
    'Property Info':{
        id:'property-info',
        source:'https://maps.six.nsw.gov.au/arcgis/rest/services/public/Valuation/MapServer/export?',
        isProperty:true,
        layers:[
            {
                "name":'Urban Property Sales', 'id':'urban-property-sales', 'layerName':'1',
                isVisible:true,opacity:0.01,
                "legendImage":"iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAidJREFUOI2V1c9LmnEcwPG32vaQjDRXsECwFsOJMSJozsU8DE+FKPYX6CF2CelJo+KJjl06RLdAazLosEP047QJXQJDqB1GMgyRtFHsB6u5BpMdnl2mZOnj4/f08OHzffH5fj7fL08L6pZ87VujlNjSBHQ9VhdVAiuY12shEHiCz7fTEK0HygAej4XJyafYbJ20twscHwfY3s4SDu/VRWuBMkB/v8Dq6ggGg0A6/RVBMKLX30UUHbS13WFsbLcmWvfIkchLOjr0LC4myeV+Mj3txOV6w8FBkNHRx2VQ9ZExm+8hyyBJSYJBOwD5fImVlQ8YDK0IApRKTYAXF3/QaGB+3sHp6VUlLkmpeluUwbW1j7jdPUxMPOPo6Bs6nQ6LRSCfrypL1VAA2NrKEwq9QxSdDAw8QKvVksm84vDwC5HIe5LJH6ByKJr/icRiGWKxDDMz/UxNDXF29hun08z6uh+rNaq6h7dex+XlX4rFEnb7axKJUdzuHubmHOV+VlV5E6xgm5seTKZWXK63VQmp1Gfc7h7MZmONWhR62Ntrwma7z8hI1604wMnJd1VgpX+JRI6+vk6Wl4fZ2PiERqNlaekFXu8jzs9/sbBw2FyForhHd7eR4eGHhMPPAQiFHBQKRWZnd68PRN3TA/D7d7DbBcbHh/D5rEjSLtFoRmmL8rUBSKdL7O8XGBzsqoWpvtjlRBkgHs8Sj2cVoUZgzWrVrEbgTVTxfwLwD1Jcr5iJIC/CAAAAAElFTkSuQmCC"
            },
            {
                "name":'Semi Rural Property Sales', 'id':'semi-rural-property-sales', 'layerName':'2',
                isVisible:true,opacity:0.01,
                "legendImage":"iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAidJREFUOI2V1c9LmnEcwPG32vaQjDRXsECwFsOJMSJozsU8DE+FKPYX6CF2CelJo+KJjl06RLdAazLosEP047QJXQJDqB1GMgyRtFHsB6u5BpMdnl2mZOnj4/f08OHzffH5fj7fL08L6pZ87VujlNjSBHQ9VhdVAiuY12shEHiCz7fTEK0HygAej4XJyafYbJ20twscHwfY3s4SDu/VRWuBMkB/v8Dq6ggGg0A6/RVBMKLX30UUHbS13WFsbLcmWvfIkchLOjr0LC4myeV+Mj3txOV6w8FBkNHRx2VQ9ZExm+8hyyBJSYJBOwD5fImVlQ8YDK0IApRKTYAXF3/QaGB+3sHp6VUlLkmpeluUwbW1j7jdPUxMPOPo6Bs6nQ6LRSCfrypL1VAA2NrKEwq9QxSdDAw8QKvVksm84vDwC5HIe5LJH6ByKJr/icRiGWKxDDMz/UxNDXF29hun08z6uh+rNaq6h7dex+XlX4rFEnb7axKJUdzuHubmHOV+VlV5E6xgm5seTKZWXK63VQmp1Gfc7h7MZmONWhR62Ntrwma7z8hI1604wMnJd1VgpX+JRI6+vk6Wl4fZ2PiERqNlaekFXu8jzs9/sbBw2FyForhHd7eR4eGHhMPPAQiFHBQKRWZnd68PRN3TA/D7d7DbBcbHh/D5rEjSLtFoRmmL8rUBSKdL7O8XGBzsqoWpvtjlRBkgHs8Sj2cVoUZgzWrVrEbgTVTxfwLwD1Jcr5iJIC/CAAAAAElFTkSuQmCC"
            },
            {
                "name":'Rural Property Sales', 'id':'rural-property-sales', 'layerName':'3',
                isVisible:true,opacity:0.01,
                "legendImage":"iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAidJREFUOI2V1c9LmnEcwPG32vaQjDRXsECwFsOJMSJozsU8DE+FKPYX6CF2CelJo+KJjl06RLdAazLosEP047QJXQJDqB1GMgyRtFHsB6u5BpMdnl2mZOnj4/f08OHzffH5fj7fL08L6pZ87VujlNjSBHQ9VhdVAiuY12shEHiCz7fTEK0HygAej4XJyafYbJ20twscHwfY3s4SDu/VRWuBMkB/v8Dq6ggGg0A6/RVBMKLX30UUHbS13WFsbLcmWvfIkchLOjr0LC4myeV+Mj3txOV6w8FBkNHRx2VQ9ZExm+8hyyBJSYJBOwD5fImVlQ8YDK0IApRKTYAXF3/QaGB+3sHp6VUlLkmpeluUwbW1j7jdPUxMPOPo6Bs6nQ6LRSCfrypL1VAA2NrKEwq9QxSdDAw8QKvVksm84vDwC5HIe5LJH6ByKJr/icRiGWKxDDMz/UxNDXF29hun08z6uh+rNaq6h7dex+XlX4rFEnb7axKJUdzuHubmHOV+VlV5E6xgm5seTKZWXK63VQmp1Gfc7h7MZmONWhR62Ntrwma7z8hI1604wMnJd1VgpX+JRI6+vk6Wl4fZ2PiERqNlaekFXu8jzs9/sbBw2FyForhHd7eR4eGHhMPPAQiFHBQKRWZnd68PRN3TA/D7d7DbBcbHh/D5rEjSLtFoRmmL8rUBSKdL7O8XGBzsqoWpvtjlRBkgHs8Sj2cVoUZgzWrVrEbgTVTxfwLwD1Jcr5iJIC/CAAAAAElFTkSuQmCC"
            },

            {
                "name":'Urban Property Valuations', 'id':'urban-property-valuations', 'layerName':'5',
                isVisible:true,opacity:0.01,
                "legendImage":"iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAjhJREFUOI2V1V9IU3EUwPHvnbOLInOthAaDuVSWTEqKWssmMbRIEUWt940csxBpaWTYPzAiWBFBUKKVGBGGUUkPtljEYCGkhSQxGdJMHFlUmkGjh/XSxmbb9fp7uhzO78P5nfP7cZXIW7Gkb0EqUbkGKDmWEZUCE1i1vp5DW+04RxpWRTOBMQCbvg7nrhOUFJSSL67npX2aF6GnXPR3ZETTgTEAo1iOp/Y2KjGf4MIU2WqR3HW5HDG7yctW0eVzpkUzHrnV1okmdyO9AQ/hxRmOWk7RPFjJM8cbDm5pioOyj4w2T0eMGFcC3TSbHABEomHuTdxClZOPiEiUqHxw8fd3BATazOeILH9KxK+OdWfaIg0+nLzDXkMVLbuPM/3lPcqsLLSinkg0nJwmaygAeMNPOD/aTovFTdmm7QgKBa9cQSY/j9PzvJN33wIgcyjCv0SGgv0MBftpLe/CVXGShV/z7NBZuNF4H1ufUXYP/3sdS39+sBxdovquicEmL1ZDFcfMZ+L9TKlyJZjAeuseo87RcHioMiXh7dwYVkMVWrUuTS0SPdRriijeUMo+bW1KvFBTBMDc14+ywET//DNejAVlXKi5zuiHRwgKgbPWa+wvqWfhZ4Sb45fWVmGP341OXYhtcw3OPR0AOMztzC/Nctl3Onkg8p4egGukkWLRhL2ijQPGBjy+bh4E+6S2SF8bgFB0ionZ12zT7kyHyb7Y8cQYwHBogOHQgCS0Gpi2WjlrNXAlKvk/AfgLqxavpOX1t2QAAAAASUVORK5CYII="
            },
            {
                "name":'Semi Rural Property Valuations', 'id':'semi-rural-property-valuations', 'layerName':'6',
                isVisible:true,opacity:0.01,
                "legendImage":"iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAjhJREFUOI2V1V9IU3EUwPHvnbOLInOthAaDuVSWTEqKWssmMbRIEUWt940csxBpaWTYPzAiWBFBUKKVGBGGUUkPtljEYCGkhSQxGdJMHFlUmkGjh/XSxmbb9fp7uhzO78P5nfP7cZXIW7Gkb0EqUbkGKDmWEZUCE1i1vp5DW+04RxpWRTOBMQCbvg7nrhOUFJSSL67npX2aF6GnXPR3ZETTgTEAo1iOp/Y2KjGf4MIU2WqR3HW5HDG7yctW0eVzpkUzHrnV1okmdyO9AQ/hxRmOWk7RPFjJM8cbDm5pioOyj4w2T0eMGFcC3TSbHABEomHuTdxClZOPiEiUqHxw8fd3BATazOeILH9KxK+OdWfaIg0+nLzDXkMVLbuPM/3lPcqsLLSinkg0nJwmaygAeMNPOD/aTovFTdmm7QgKBa9cQSY/j9PzvJN33wIgcyjCv0SGgv0MBftpLe/CVXGShV/z7NBZuNF4H1ufUXYP/3sdS39+sBxdovquicEmL1ZDFcfMZ+L9TKlyJZjAeuseo87RcHioMiXh7dwYVkMVWrUuTS0SPdRriijeUMo+bW1KvFBTBMDc14+ywET//DNejAVlXKi5zuiHRwgKgbPWa+wvqWfhZ4Sb45fWVmGP341OXYhtcw3OPR0AOMztzC/Nctl3Onkg8p4egGukkWLRhL2ijQPGBjy+bh4E+6S2SF8bgFB0ionZ12zT7kyHyb7Y8cQYwHBogOHQgCS0Gpi2WjlrNXAlKvk/AfgLqxavpOX1t2QAAAAASUVORK5CYII="
            },
            {
                "name":'Rural Property Valuations', 'id':'rural-property-valuations', 'layerName':'7',
                isVisible:true,opacity:0.01,
                "legendImage":"iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAjhJREFUOI2V1V9IU3EUwPHvnbOLInOthAaDuVSWTEqKWssmMbRIEUWt940csxBpaWTYPzAiWBFBUKKVGBGGUUkPtljEYCGkhSQxGdJMHFlUmkGjh/XSxmbb9fp7uhzO78P5nfP7cZXIW7Gkb0EqUbkGKDmWEZUCE1i1vp5DW+04RxpWRTOBMQCbvg7nrhOUFJSSL67npX2aF6GnXPR3ZETTgTEAo1iOp/Y2KjGf4MIU2WqR3HW5HDG7yctW0eVzpkUzHrnV1okmdyO9AQ/hxRmOWk7RPFjJM8cbDm5pioOyj4w2T0eMGFcC3TSbHABEomHuTdxClZOPiEiUqHxw8fd3BATazOeILH9KxK+OdWfaIg0+nLzDXkMVLbuPM/3lPcqsLLSinkg0nJwmaygAeMNPOD/aTovFTdmm7QgKBa9cQSY/j9PzvJN33wIgcyjCv0SGgv0MBftpLe/CVXGShV/z7NBZuNF4H1ufUXYP/3sdS39+sBxdovquicEmL1ZDFcfMZ+L9TKlyJZjAeuseo87RcHioMiXh7dwYVkMVWrUuTS0SPdRriijeUMo+bW1KvFBTBMDc14+ywET//DNejAVlXKi5zuiHRwgKgbPWa+wvqWfhZ4Sb45fWVmGP341OXYhtcw3OPR0AOMztzC/Nctl3Onkg8p4egGukkWLRhL2ijQPGBjy+bh4E+6S2SF8bgFB0ionZ12zT7kyHyb7Y8cQYwHBogOHQgCS0Gpi2WjlrNXAlKvk/AfgLqxavpOX1t2QAAAAASUVORK5CYII="
            },

            {
                "name":'Urban Property Boundary', 'id':'urban-property-boundary', 'layerName':'9',
                isVisible:true,opacity:0.01,
                "legendImage":"iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADtJREFUOI1jYaAyYKGZgf//M/yn1DBGRgZGFnQBcg2DOYh2Xh41cNTAUQNHDcRpICVlIqzoY0EXoBQAAAgxCVRUCpMxAAAAAElFTkSuQmCC"
            },
            {
                "name":'Semi Rural Property Boundary', 'id':'semi-rural-property-boundary', 'layerName':'10',
                isVisible:true,opacity:0.01,
                "legendImage":"iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADtJREFUOI1jYaAyYKGZgaH/Gf5TathqRgZGFnQBcg2DOYh2Xh41cNTAUQNHDcRpICVlIqzoY0EXoBQAAArZCf6+WWDCAAAAAElFTkSuQmCC"
            },
            {
                "name":'Rural Property Boundary', 'id':'rural-property-boundary', 'layerName':'11',
                isVisible:true,opacity:0.01,
                "legendImage":"iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADpJREFUOI1jYaAyYKGZgf/r6/9TahhjYyMjC7oAuYbBHEQ7L48aOGrgqIGjBuI0kJIyEVb0saALUAoAW1gNVRKh8xsAAAAASUVORK5CYII="
            },
        ]
    },
    'Address':{
        id:'address',
        source:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/AddressSearch/MapServer/export',
        isProperty:true,
        layers:[
            {
                "name":'Address Attributes', 
                'id':'address-attributes', 
                'layerName':'6',
                'legendImage':"iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFJJREFUOI3t0TEKACAIheE/6IrNna25Q9om1VCRLYFv8i0fopHHiQ46qJFuDlZQMlVLIckK3YEDBpCpS/T/p4RCmm8Ihhsq2nfLhkfIDXgcB+1ppDUQSEwM6XQAAAAASUVORK5CYII=",
            },
            {
                "name":'Lot', 
                'id':'lot-address', 
                'layerName':'0',
                
                'legendImage':"iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADZJREFUOI1jYaAyYKGlgf+pYB4jugsZKTDsPwMDjb08auCogaMGjhqI00BKykRGdAMpKQvhAABd0QNSDPGCHwAAAABJRU5ErkJggg==",
            },
            {
                "name":'Suburb', 
                'id':'suburb', 
                'layerName':'1',
                "legendImage":"iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADpJREFUOI1jYaAyYKGZgSW+DP8pNaxnMwMjC7oAuYbBHEQ7L48aOGrgqIGjBuI0kJIyEVb0saALUAoADHMKke/HssQAAAAASUVORK5CYII="
            },
            {
                "name":'Local Government Area', 
                'id':'lga', 
                'layerName':'3',
                "legendImage":"iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADlJREFUOI1jYaAyYKGdgb4r/lNs2uYIRhZ0AbINgzqIhl4eNXDUwFEDRw3EaSAlZSK06GNBF6AUAAAE8wpdr2BOWwAAAABJRU5ErkJggg=="
            },
            // {
            //     "name":'Legal Identifiers', 
            //     'id':'legal-identifiers', 
            //     'layerName':'6'
            // }
        ]
    },
    'NSW Cadastre':{
        id:'cadastre',
        // source:'https://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WMSServer?request=GetCapabilities&service=WMS'
        source:'https://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer',
        layers:[
            
            {"name":"Lot","id":"lot", "layers":[1,7],"layerName":"1,7","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]] },
            {"name":"PlanExtent","id":"planextent", "layers":[2,9],"layerName":"2,9","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]] },
            {"name":"SectionExtent","id":"sectionextent", "layers":[3,8],"layerName":"3,8","bounds":[[-37.217041,141.001141],[-28.1681,153.635972]] },
            {"name":"Rural_PlanExtent","id":"rural_planextent","layerName":"4","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]] },
            {"name":"Large_Rural_PlanExtent","id":"large_rural_planextent","layerName":"5","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]] },
            
            // {"name":"Lot Labels","id":"lot-labels","layerName":"7","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]]},
            // {"name":"Section Extent Labels","id":"section-extent-labels","layerName":"8","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]]},
            // {"name":"Plan Extent Labels","id":"plan-extent-labels","layerName":"9","bounds":[[-37.440737,140.999313],[-28.157021,159.084568]]}
        ]
    },
    // https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WMSServer?request=DescribeLayer&layers=6&service=WMS
    'Primary Planning Layer':{
        id:'planning-layers',
        source:'https://mapprod3.environment.nsw.gov.au:443/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WmsServer',
        wmsSource:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WMSServer?request=GetCapabilities&service=WMS',
        layers:[ 
            {
                name:'Land Zoning',
                id:'land-zoning',
                url:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WMSServer',
                layerName:4,
                bounds:[[-38,39],[-28.15702055490766, 159.34057684750007]],
                isVisible:true,
                opacity:0.5,
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Planning/EPI_Primary_Planning_Layers/MapServer/WmsServer?service=WMS&request=GetMap&layers=2&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}',
                json:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/2?f=pjson'
            }, 
            {
                name:'FSR',
                id:'fsr',
                url:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WMSServer',
                layerName:5,
                isVisible:true,
                opacity:0.01,
                bounds:[[-37.11571532490041, 146.1766831521427], [-28.158307262494475,153.63694544428677]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Planning/EPI_Primary_Planning_Layers/MapServer/WmsServer?service=WMS&request=GetMap&layers=1&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}',
                json:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/1?f=pjson'
            }, 
            {
                name:'Height of Buildings',
                id:'building-height',
                url:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WMSServer',
                layerName:1,
                isVisible:true,
                opacity:0.01,
                bounds:[[-38,139],[-28.158307262494475, 153.63883177900004]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Planning/EPI_Primary_Planning_Layers/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}',
                json:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/5?f=pjson'
            }, 
            {
                name:'Lot Size',
                id:'lot-size',
                url:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WMSServer',
                layerName:2,
                isVisible:true,
                opacity:0.01,
                bounds:[[-38, 139], [-28.16563687599995, 153.6369444940001]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Planning/EPI_Primary_Planning_Layers/MapServer/WmsServer?service=WMS&request=GetMap&layers=4&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}',
                json:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/4?f=pjson'
            },
            {
                name:'Heritage',
                id:'heritage',
                url:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/EPI_Primary_Planning_Layers/MapServer/WMSServer/',
                layerName:6,
                isVisible:true,
                opacity:0.5,
                bounds:[[-38, 139],[-28.18421045699995, 153.63689452000006]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Planning/EPI_Primary_Planning_Layers/MapServer/WmsServer?service=WMS&request=GetMap&layers=0&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}',
                json:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/0?f=pjson'
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
                name:'Land Application',
                id:'land-application',
                url:'https://mapprod3.environment.nsw.gov.au/arcgis/services/PlanningEPI_Primary_Planning_Layers/MapServer/WMSServer',
                layerName:0,
                isVisible:true,
                opacity:0.01,
                bounds:[[ -37.528013948999956, 140.99926130831747], [-28.141279486999963, 159.3402948800001]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Planning/EPI_Primary_Planning_Layers/MapServer/WmsServer?service=WMS&request=GetMap&layers=6&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}',
                json:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/6?f=pjson'
            }
        ]
    },
    'EPI Development Control Layers':{
        id:'development-control-layers',
        isProperty:true,
        source:'https://mapprod1.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Development_Control_Layers/MapServer/export',
        layers:[
            {
                name:'Dwelling Density',
                id:'dwelling-density-layer',
                layerName:0,isVisible:true,opacity:0.01,
                bounds:[[-34.91561604341547, 150.5224677223223],[-33.21401504399995, 151.47356394200006]],
            },
            {
                name:'Foreshore Building Line',
                id:'foreshore-building-line',
                layerName:1,isVisible:true,opacity:0.01,
                bounds:[[-34.91561604341547, 150.5224677223223],[-33.21401504399995, 151.47356394200006]],
            },
            {
                name:'Local Provisions',
                id:'local-provisions',
                layerName:2,isVisible:true,opacity:0.01,
                bounds:[[-34.91561604341547, 150.5224677223223],[-33.21401504399995, 151.47356394200006]],
            },
        ]
    },
    // 
    'Development Control':{
        id:'development-control',
        isProperty:true,
        // https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/ePlanning/Planning_Portal_Development_Control/MapServer/
        // source:'https://mapprod3.environment.nsw.gov.au:443/arcgis/services/Planning/Development_Control/MapServer/WmsServer',
        source:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/ePlanning/Planning_Portal_Development_Control/MapServer/export',
        layers:[
            {
                name:'Special Infrastructure Contributions',
                id:'special-infrastructure',
                // layerName:7,
                layerName:218, isVisible:true,opacity:0.01,
                bounds:[[-34.91561604341547, 150.5224677223223],[-33.21401504399995, 151.47356394200006]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Greenfield Housing Code Area',
                id:'greenfield-housing',
                // layerName:6,
                layerName:222,isVisible:true,opacity:0.01,
                bounds:[[-37.528013948999956,140.99926130831747],[-28.141279486999963,159.3402948800001]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Local Provisions',
                id:'local-provisions',
                // layerName:5,
                layerName:223,isVisible:true,opacity:0.01,
                bounds:[[-37.37937199299995, 142.17960235300006],[-28.193894943999965,159.08330422300003]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Active Street Frontages',
                id:'active-street-frontages',
                // layerName:4,
                layerName:224,isVisible:true,opacity:0.01,
                bounds:[[-36.41698845299993, 148.6197632940001],[ -28.61866810691663, 153.61572401736558]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Additional Permitted Uses',
                id:'additional-permitted-uses',
                // layerName:3,
                layerName:225,isVisible:true,opacity:0.01,
                bounds:[[-37.25711818899998, 141.44154424700002], [-28.170940524999935, 159.0781158127744]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Key Sites',
                id:'key-sites',
                layerName:2,
                layerName:226,isVisible:true,opacity:0.01,
                bounds:[[-38, 139], [-28.16799747699997, 153.54935033000004]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Development_Control/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Urban Release Area',
                id:'urban-release-area',
                // layerName:1,
                layerName:227,isVisible:true,opacity:0.01,
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
                layerName:2,
                bounds:[[-36.91905531599997, 141.69770346100006],[-28.167527916999973, 153.59449700200025]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Hazard/MapServer/WmsServer?service=WMS&request=GetMap&layers=1&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Landslide Risk Land',
                id:'landslide-risk-land',
                layerName:1,
                bounds:[[-36.66481367799997, 147.852926872],[-28.71388766599995, 153.45107407800003]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Hazard/MapServer/WmsServer?service=WMS&request=GetMap&layers=1&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
        ]
    },
    'Protection':{
        id:'hazard',
        // https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Protection/MapServer/0
        isProperty:true,
        source:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer',
        layers:[
            {
                name:'Acid Sulfate Soils',
                id:'acid-sulfate-soils',
                layerName:12,isVisible:true,opacity:0.5,
                bounds:[[-37.47131246799995, 149.8492960750001],[-28.158307253999965, 153.62515875200006]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=1&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Airport Noise',
                id:'airport-noise',
                layerName:11,isVisible:true,opacity:0.5,
                bounds:[[-33.97060082499996, 150.532780999],[-31.05787996899994, 152.01368631200012]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=2&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Drinking Water Catchment',
                id:'drinking-water-catchment',
                layerName:10,isVisible:true,opacity:0.01,
                bounds:[[-36.00945061632382, 148.5536220880001],[-28.246185064999963, 153.59697941500008]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=3&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Groundwater Vulnerability',
                id:'groundwater-vulnerability',
                layerName:9,isVisible:true,opacity:0.01,
                bounds:[[ -36.550291081999944, 143.21216088100005],[-30.512751081999966, 151.23222935800004]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=4&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Mineral and Resource Land',
                id:'mineral-resource',
                layerName:8,isVisible:true,opacity:0.01,
                bounds:[[-35.413181614999985, 147.3151658380001],[-28.66706676499996, 153.01932742500003]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Obstacle Limitation Surface',
                id:'obstacle-limitation-surface',
                layerName:7,isVisible:true,opacity:0.01,
                bounds:[[-35.86555250299995, 145.42638061800005],[-28.30466605299995, 153.44135939000012]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=6&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Riparian Lands and Watercourses',
                id:'riparian-lands',
                layerName:6,isVisible:true,opacity:0.5,
                bounds:[[-37.26338158434629, 141.0013293400001],[-28.710697403999973, 153.47538800400002]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=7&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Salinity',
                id:'salinity',
                layerName:5,isVisible:true,opacity:0.01,
                bounds:[[-35.39814631399997, 146.473591004],[-29.197733722999942, 151.0091805410001]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=8&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Scenic Protection Land',
                id:'scenic-protection-land',
                layerName:4,
                bounds:[[-36.68993677299994, 148.4433061000001],[-30.883680699999957, 153.07273794500009]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=9&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Terrestrial Biodiversity',
                id:'terrestrial-biodiversity',
                layerName:3, isVisible:true,opacity:0.5,
                bounds:[[-37.504648369999984, 141.00218093600006],[-28.165625517999956, 153.55163724800002]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=10&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Wetlands',
                id:'wetlands',
                layerName:2,isVisible:true,opacity:0.5,
                bounds:[[-36.889320862999966, 141.00218102600002],[-28.713293111999974, 153.48181948]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=11&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
            {
                name:'Environmentally Sensitive Land',
                id:'environmentally-sensitive-land',
                layerName:1,isVisible:true,opacity:0.01,
                bounds:[[-35.1588681209999, 147.31264960400006],[-32.17104704099995, 151.646695431]],
                tile:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/Protection/MapServer/WmsServer?service=WMS&request=GetMap&layers=12&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}'
            },
        ]
    },
    'SEPP Biodiversity & Conservation':{
        id:'sepp-bio',
        source:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WMSServer',
        layers:[
            {
                "name":"Subject Land",
                "id":"subject-land-area",
                "layerName":"15", isVisible:true,opacity:0.01,
            },
            {
                "name":"Land Application",
                "id":"land-application-area",
                "layerName":"14", isVisible:true,opacity:0.01,
            },
            {
                "name":"Foreshores and Waterways Area",
                "id":"foreshores-and-waterways-area",
                "layerName":"13", isVisible:true,opacity:0.01,
            },
            {
                "name":"Hawkesbury-Nepean Riverine Scenic Area",
                "id":"hawkesbury-nepean-riverine-scenic-area",
                "layerName":"9",isVisible:true,opacity:0.01,
            },
            {
                "name":"Strategic Harbour Foreshore Sites",
                "id":"strategic-harbour-foreshore-sites",
                "layerName":"7",isVisible:true,opacity:0.01,
            },
            {
                "name":"Strategic Conservation Area",
                "id":"strategic-conservation-area",
                "layerName":"3",isVisible:true,opacity:0.01,
            },
            {
                "name":"Certified - Urban Capable Land",
                "id":"certified-urban-capable-land",
                "layerName":"2",isVisible:true,opacity:0.01,
            },
            {
                "name":"Avoided Land",
                "id":"avoided-land",
                "layerName":"1",isVisible:true,opacity:0.01,
            },
            {
                "name":"Foreshores and Waterways Area - Zone",
                "id":"foreshores-and-waterways-area-zone",
                "layerName":"4", isVisible:true,opacity:0.01,
                "bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],
                "tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=12&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"
            },
            {
                "name":"Hawkesbury-Nepean Catchment",
                "id":"hawkesbury-nepean-river-riverine",
                "layerName":"12",isVisible:true,opacity:0.01,
                "bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],
                "tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=11&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"
            },
            {
                "name":"Sydney Harbour Catchment",
                "id":"sydney-harbour-catchment",
                "layerName":"6",isVisible:true,opacity:0.01,
                "bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],
                "tile":""
            },
        ]
    },

    
    'SEPP Western Parkland':{
        id:'hazard',
        source:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer',
        layers:[

            {
                "name":"Floor Space Ratio (n:1)",
                "id":"floor-space-ratio-(n:1)",
                "layerName":"39", isVisible:true,opacity:0.01,
                "bounds":[[-37.115715,146.176683],[-28.158307,153.636945]],
            },
            {
                "name":"Land Zoning",
                "id":"land-zoning",
                "layerName":"38", isVisible:true,opacity:0.5,
                "bounds":[[-38,139],[-28.157021,159.340577]],
            },
            {
                "name":"Minimum Lot Size",
                "id":"minimum-lot-size",
                "layerName":"37", isVisible:true,opacity:0.01,
                "bounds":[[-38,139],[-28.165637,153.636944]],
            },
            {
                "name":"Height of Building",
                "id":"height-of-building",
                "layerName":"36",isVisible:true,opacity:0.01,
                "bounds":[[-38,139],[-28.158307,153.638832]],
            },
            {
                "name":"Flood",
                "id":"flood",
                "layerName":"35", isVisible:true,opacity:0.5,
                "bounds":[[-36.919055,141.697703],[-28.167528,153.594497]],
            },
            {
                "name":"Land Reservation Acquisition",
                "id":"land-reservation-acquisition",
                "layerName":"34",isVisible:true,opacity:0.01,
                "bounds":[[-37.115847,143.563941],[-28.638151,153.589086]],
            }, 
            {
                "name":"Additional Permitted Uses",
                "id":"additional-permitted-uses",
                "layerName":"33",isVisible:true,opacity:0.01,
                "bounds":[[-37.257118,141.441544],[-28.170941,159.078116]],
            },
            {
                "name":"Environmental Conservation Area",
                "id":"environmental-conservation-area",
                "layerName":"32",isVisible:true,opacity:0.01,
                "bounds":[[-33.947543,149.833031],[-29.477698,151.08344]],
            },
            {
                "name":"Native Vegetation Protection",
                "id":"native-vegetation-protection",
                "layerName":"31",isVisible:true,opacity:0.01,
                "bounds":[[-34.018565,150.708609],[-33.643644,150.968491]],
            },
            {
                "name":"Dwelling Density",
                "id":"dwelling-density",isVisible:true,opacity:0.01,
                "layerName":"30","bounds":[[-36.048157,150.096477],[-32.213313,152.550322]],
            },
            {
                "name":"Growth Centres",
                "id":"growth-centres",
                "layerName":"29",isVisible:true,opacity:0.01,
                "bounds":[[-34.279233,150.621106],[-33.631934,150.96972]],
            },
            {
                "name":"Heritage",
                "id":"heritage",
                "layerName":"28",isVisible:true,opacity:0.5,
                "bounds":[[-38,139],[-28.18421,153.636895]],
            },
            {
                "name":"Precinct Boundaries",
                "id":"precinct-boundaries",
                "layerName":"27",isVisible:true,opacity:0.01,
                "bounds":[[-34.279233,150.621106],[-33.631934,151.234679]],
            },
            {
                "name":"Riparian Lands and Watercourses",
                "id":"riparian-lands-and-watercourses",
                "layerName":"26", isVisible:true,opacity:0.5,
                "bounds":[[-37.263382,141.001329],[-28.710697,153.475388]],
            },
            {
                "name":"Special Provision",
                "id":"special-provision",
                "layerName":"25", isVisible:true,opacity:0.01,
                "bounds":[[-34.476939,150.525531],[-32.887884,151.759188]],
            },
            {"name":"Special Areas","id":"special-areas","layerName":"24",isVisible:true,opacity:0.01,"bounds":[[-34.030377,150.705122],[-33.702335,150.872984]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=24&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Urban Release Area","id":"urban-release-area","layerName":"23",isVisible:true,opacity:0.01,"bounds":[[-36.454737,142.179514],[-28.22246,153.603003]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=23&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Key Sites","id":"key-sites-sepp","layerName":"22",isVisible:true,opacity:0.01,"bounds":[[-38,139],[-28.167997,153.54935]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=22&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Transport & Arterial Road Infrastructure","id":"transport-&-arterial-road-infrastructure","layerName":"21",isVisible:true,opacity:0.01,"bounds":[[-33.94592,150.678331],[-33.787435,150.851858]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=21&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Terrestrial Biodiversity","id":"terrestrial-biodiversity-sepp","layerName":"19",isVisible:true,opacity:0.01,"bounds":[[-37.504648,141.002181],[-28.165626,153.551637]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=19&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Obstacle Limitation Surface","id":"obstacle-limitation-surface-sepp","layerName":"18",isVisible:true,opacity:0.01,"bounds":[[-35.865553,145.426381],[-28.304666,153.441359]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=18&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Airport Noise","id":"airport-noise-sepp","layerName":"16",isVisible:true,opacity:0.5,"bounds":[[-33.970601,150.532781],[-31.05788,152.013686]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=16&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
             

            {"name":"Light Control Zone D","id":"light-control-zone-d","layerName":"12",isVisible:true,opacity:0.01,"bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=12&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Light Control Zone C","id":"light-control-zone-c","layerName":"13",isVisible:true,opacity:0.01,"bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=13&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Light Control Zone B","id":"light-control-zone-b","layerName":"14",isVisible:true,opacity:0.01,"bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=14&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Light Control Zone A","id":"light-control-zone-a","layerName":"15",isVisible:true,opacity:0.01,"bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=15&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Wildlife Buffer Zone 13km","id":"wildlife-buffer-zone-13km","layerName":"8",isVisible:true,opacity:0.01,"bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=8&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Wildlife Buffer Zone 8km","id":"wildlife-buffer-zone-8km","layerName":"9",isVisible:true,opacity:0.01,"bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=9&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Wildlife Buffer Zone 3km","id":"wildlife-buffer-zone-3km","layerName":"10",isVisible:true,opacity:0.01,"bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=10&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            
            {"name":"Wind Turbine Buffer Zone 30km","id":"wind-turbine-buffer-zone-30km","layerName":"5",isVisible:true,opacity:0.01,"bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=5&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {"name":"Wind Turbine Buffer Zone 3km","id":"wind-turbine-buffer-zone-3km","layerName":"6",isVisible:true,opacity:0.01,"bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=6&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            {
                "name":"1 in 100 AEP Flood Extents",
                "id":"floods-extent-aep",
                "layerName":"3",isVisible:true,opacity:0.01,
                "bounds":[[-38,139],[-28.157021,159.340577]],
            },
            {
                "name":"Additional Controls",
                "id":"additional-controls",
                "layerName":"2",isVisible:true,opacity:0.01,
                "bounds":[[-38,139],[-28.157021,159.340577]],
            },
            
            
            
            
           
                 

            // {
            //     "name":"Bulk Water Supply Infrastructure",
            //     "id":"bulk-water-supply-infrastructure",
            //     "layerName":"1",
            //     "bounds":[[-33.951884,150.818964],[-33.808244,150.912399]],
            // },
            
           
           
            // {"name":"Windshear Assessment Trigger Area","id":"windshear-assessment-trigger-area","layerName":"17","bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=17&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
            // {"name":"Public Safety Area","id":"public-safety-area","layerName":"20","bounds":[[-37.379372,142.179602],[-28.193895,159.083304]],"tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/WmsServer?service=WMS&request=GetMap&layers=20&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"},
              
            // {
            //     "name":"Land Application",
            //     "id":"land-application",
            //     "layerName":"40",
            //     "bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],
            // },
            // {
            //     "name":"Subject Land",
            //     "id":"subject-land",
            //     "layerName":"41",
            //     "bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],
            // }
        ]
    },
    
    // Recheck this
    'SEPP Coastal Management':{
        id:'sepp-coastal-management',
        source:'https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Coastal_Management_2018/MapServer/WMSServer/WMSServer',
        layers:[
            {
                "name":"Coastal Wetlands and Littoral Rainforests Area",
                "id":"littoral-rainforest",
                "layerName":"6", "layers":["6","7"],
                "bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],
                "tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Coastal_Management_2018/MapServer/WmsServer?service=WMS&request=GetMap&layers=6&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"
            },
            {
                "name":"Coastal Vulnerability Area Map (Note: No map at this time)",
                "id":"coastal-vulnerability-area-map-note:-no-map-at-this-time",
                "layerName":"4",
                "bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],
                "tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Coastal_Management_2018/MapServer/WmsServer?service=WMS&request=GetMap&layers=4&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"
            },
            {
                "name":"Coastal Environment Area Map",
                "id":"coastal-environment-area-map",
                "layerName":"3",
                "bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],
                "tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Coastal_Management_2018/MapServer/WmsServer?service=WMS&request=GetMap&layers=3&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"
            },
            {
                "name":"Coastal Use Area Map",
                "id":"coastal-use-area-map",
                "layerName":"2",
                "bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],
                "tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Coastal_Management_2018/MapServer/WmsServer?service=WMS&request=GetMap&layers=2&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"
            },
            {
                "name":"Land Application Map",
                "id":"land-application-map",
                "layerName":"1",
                "bounds":[[-37.528014,140.999261],[-28.141279,159.340295]],
                "tile":"https://mapprod3.environment.nsw.gov.au/arcgis/services/Planning/SEPP_Coastal_Management_2018/MapServer/WmsServer?service=WMS&request=GetMap&layers=1&styles=default&format=image%2Fpng&transparent=true&version=1.1.1&width=256&height=256&srs=EPSG:3857&bbox={bbox-epsg-3857}"
            }
        ]
    },
    
    // 'Easements':{
    //     id:'easement',
    //     source:'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Land_Parcel_Property_Theme_multiCRS/FeatureServer/export?',
    //     isProperty:true,
    //     layers:[
    //         {"name":'Easements', 'id':'easements', 'layerName':'9'},
    //     ]
    // },
    // 'Contours':{},
    "SEPP (PCR)":{
        id:'sepp-pcr',
        isProperty:true,
        source:'https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Central_River_City_2021/MapServer/export?',
        layers:[
            {"name":"Subject Land","id":"sepp-pcr-subject-land","layerName":1,"isVisible":true,"opacity":0.01},
            {"name":"Land Application","id":"sepp-pcr-land-application","layerName":2,"isVisible":true,"opacity":0.01},
            {"name":"Floor Space Ratio (n:1)","id":"sepp-pcr-floor-space-ratio-(n:1)","layerName":3,"isVisible":true,"opacity":0.01},
            {"name":"Land Zoning","id":"sepp-pcr-land-zoning","layerName":4,"isVisible":true,"opacity":0.01},
            {"name":"Minimum Lot Size","id":"sepp-pcr-minimum-lot-size","layerName":5,"isVisible":true,"opacity":0.01},
            {"name":"Height of Building","id":"sepp-pcr-height-of-building","layerName":6,"isVisible":true,"opacity":0.01},
            {"name":"Reduced Level","id":"sepp-pcr-reduced-level","layerName":7,"isVisible":true,"opacity":0.01},
            {"name":"Flood","id":"sepp-pcr-flood","layerName":8,"isVisible":true,"opacity":0.01},
            {"name":"Land Reservation Acquisition","id":"sepp-pcr-land-reservation-acquisition","layerName":9,"isVisible":true,"opacity":0.01},
            {"name":"Additional Permitted Uses","id":"sepp-pcr-additional-permitted-uses","layerName":10,"isVisible":true,"opacity":0.01},
            {"name":"Acid Sulfate Soils","id":"sepp-pcr-acid-sulfate-soils","layerName":11,"isVisible":true,"opacity":0.01},
            {"name":"Environmental Conservation Area","id":"sepp-pcr-environmental-conservation-area","layerName":12,"isVisible":true,"opacity":0.01},
            {"name":"Native Vegetation Protection","id":"sepp-pcr-native-vegetation-protection","layerName":13,"isVisible":true,"opacity":0.01},
            {"name":"Intensive Urban Development","id":"sepp-pcr-intensive-urban-development","layerName":14,"isVisible":true,"opacity":0.01},
            {"name":"Active Street Frontages","id":"sepp-pcr-active-street-frontages","layerName":15,"isVisible":true,"opacity":0.01},
            {"name":"Dwelling Density","id":"sepp-pcr-dwelling-density","layerName":16,"isVisible":true,"opacity":0.01},
            {"name":"Growth Centres","id":"sepp-pcr-growth-centres","layerName":17,"isVisible":true,"opacity":0.01},
            {"name":"Heritage","id":"sepp-pcr-heritage","layerName":18,"isVisible":true,"opacity":0.01},
            {"name":"Precinct Boundaries","id":"sepp-pcr-precinct-boundaries","layerName":19,"isVisible":true,"opacity":0.01},
            {"name":"Riparian Lands and Watercourses","id":"sepp-pcr-riparian-lands-and-watercourses","layerName":20,"isVisible":true,"opacity":0.01},
            {"name":"Special Provision","id":"sepp-pcr-special-provision","layerName":21,"isVisible":true,"opacity":0.01},
            {"name":"Special Areas","id":"sepp-pcr-special-areas","layerName":22,"isVisible":true,"opacity":0.01}
        ]
    },
    "SEPP (P-EHC)":{
        id:"sepp-p-ehc",
        isProperty:true,
        source:"https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Eastern_Harbour_City_2021/MapServer/export?",
        layers:[
            {"name":"Subject Land","id":"sepp-p-ehc-subject-land","layerName":1,"isVisible":true,"opacity":0.01},
            {"name":"Land Application","id":"sepp-p-ehc-land-application","layerName":2,"isVisible":true,"opacity":0.01},
            {"name":"Floor Space Ratio (n:1)","id":"sepp-p-ehc-floor-space-ratio-(n:1)","layerName":3,"isVisible":true,"opacity":0.01},
            {"name":"Land Zoning","id":"sepp-p-ehc-land-zoning","layerName":4,"isVisible":true,"opacity":0.01},
            {"name":"Height of Building","id":"sepp-p-ehc-height-of-building","layerName":5,"isVisible":true,"opacity":0.01},
            {"name":"Gross Floor Area","id":"sepp-p-ehc-gross-floor-area","layerName":6,"isVisible":true,"opacity":0.01},
            {"name":"Additional Permitted Uses","id":"sepp-p-ehc-additional-permitted-uses","layerName":7,"isVisible":true,"opacity":0.01},
            {"name":"Luna Park Amusement Zone","id":"sepp-p-ehc-luna-park-amusement-zone","layerName":8,"isVisible":true,"opacity":0.01},
            {"name":"Sydney Harbour Foreshore Sites","id":"sepp-p-ehc-sydney-harbour-foreshore-sites","layerName":9,"isVisible":true,"opacity":0.01},
            {"name":"Sydney Harbour Port and Related Employment Lands","id":"sepp-p-ehc-sydney-harbour-port-and-related-employment-lands","layerName":10,"isVisible":true,"opacity":0.01}
        ]
    },
    "SEPP (P-WPC)": {
        id:"sepp-p-wpc",
        isProperty:true,
        source:"https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/export?",
        layers:[
            {"name":"Subject Land","id":"sepp-p-wpc-subject-land","layerName":1,"isVisible":true,"opacity":0.01},
            {"name":"Land Application","id":"sepp-p-wpc-land-application","layerName":2,"isVisible":true,"opacity":0.01},
            {"name":"Floor Space Ratio (n:1)","id":"sepp-p-wpc-floor-space-ratio-(n:1)","layerName":3,"isVisible":true,"opacity":0.01},
            {"name":"Land Zoning","id":"sepp-p-wpc-land-zoning","layerName":4,"isVisible":true,"opacity":0.01},
            {"name":"Minimum Lot Size","id":"sepp-p-wpc-minimum-lot-size","layerName":5,"isVisible":true,"opacity":0.01},
            {"name":"Height of Building","id":"sepp-p-wpc-height-of-building","layerName":6,"isVisible":true,"opacity":0.01},
            {"name":"Flood","id":"sepp-p-wpc-flood","layerName":7,"isVisible":true,"opacity":0.01},
            {"name":"Land Reservation Acquisition","id":"sepp-p-wpc-land-reservation-acquisition","layerName":8,"isVisible":true,"opacity":0.01},
            {"name":"Additional Permitted Uses","id":"sepp-p-wpc-additional-permitted-uses","layerName":9,"isVisible":true,"opacity":0.01},
            {"name":"Environmental Conservation Area","id":"sepp-p-wpc-environmental-conservation-area","layerName":10,"isVisible":true,"opacity":0.01},
            {"name":"Native Vegetation Protection","id":"sepp-p-wpc-native-vegetation-protection","layerName":11,"isVisible":true,"opacity":0.01},
            {"name":"Dwelling Density","id":"sepp-p-wpc-dwelling-density","layerName":12,"isVisible":true,"opacity":0.01},
            {"name":"Growth Centres","id":"sepp-p-wpc-growth-centres","layerName":13,"isVisible":true,"opacity":0.01},
            {"name":"Heritage","id":"sepp-p-wpc-heritage","layerName":14,"isVisible":true,"opacity":0.01},
            {"name":"Precinct Boundaries","id":"sepp-p-wpc-precinct-boundaries","layerName":15,"isVisible":true,"opacity":0.01},
            {"name":"Riparian Lands and Watercourses","id":"sepp-p-wpc-riparian-lands-and-watercourses","layerName":16,"isVisible":true,"opacity":0.01},
            {"name":"Special Provision","id":"sepp-p-wpc-special-provision","layerName":17,"isVisible":true,"opacity":0.01},
            {"name":"Special Areas","id":"sepp-p-wpc-special-areas","layerName":18,"isVisible":true,"opacity":0.01},
            {"name":"Urban Release Area","id":"sepp-p-wpc-urban-release-area","layerName":19,"isVisible":true,"opacity":0.01},
            {"name":"Key Sites","id":"sepp-p-wpc-key-sites","layerName":20,"isVisible":true,"opacity":0.01},
            {"name":"Transport & Arterial Road Infrastructure","id":"sepp-p-wpc-transport-&-arterial-road-infrastructure","layerName":21,"isVisible":true,"opacity":0.01},
            {"name":"Public Safety Area","id":"sepp-p-wpc-public-safety-area","layerName":22,"isVisible":true,"opacity":0.01},
            {"name":"Terrestrial Biodiversity","id":"sepp-p-wpc-terrestrial-biodiversity","layerName":23,"isVisible":true,"opacity":0.01},
            {"name":"Obstacle Limitation Surface","id":"sepp-p-wpc-obstacle-limitation-surface","layerName":24,"isVisible":true,"opacity":0.01},
            {"name":"Windshear Assessment Trigger Area","id":"sepp-p-wpc-windshear-assessment-trigger-area","layerName":25,"isVisible":true,"opacity":0.01},
            {"name":"Airport Noise","id":"sepp-p-wpc-airport-noise","layerName":26,"isVisible":true,"opacity":0.01},
            {"name":"Lighting Intensity Area","id":"sepp-p-wpc-lighting-intensity-area","layerName":27,"isVisible":true,"opacity":0.01},
            {"name":"Light Control Zone A","id":"sepp-p-wpc-light-control-zone-a","layerName":28,"isVisible":true,"opacity":0.01},
            {"name":"Light Control Zone B","id":"sepp-p-wpc-light-control-zone-b","layerName":29,"isVisible":true,"opacity":0.01},
            {"name":"Light Control Zone C","id":"sepp-p-wpc-light-control-zone-c","layerName":30,"isVisible":true,"opacity":0.01},
            {"name":"Light Control Zone D","id":"sepp-p-wpc-light-control-zone-d","layerName":31,"isVisible":true,"opacity":0.01},
            {"name":"Wildlife Buffer Zone","id":"sepp-p-wpc-wildlife-buffer-zone","layerName":32,"isVisible":true,"opacity":0.01},
            {"name":"Wildlife Buffer Zone 3km","id":"sepp-p-wpc-wildlife-buffer-zone-3km","layerName":33,"isVisible":true,"opacity":0.01},
            {"name":"Wildlife Buffer Zone 8km","id":"sepp-p-wpc-wildlife-buffer-zone-8km","layerName":34,"isVisible":true,"opacity":0.01},
            {"name":"Wildlife Buffer Zone 13km","id":"sepp-p-wpc-wildlife-buffer-zone-13km","layerName":35,"isVisible":true,"opacity":0.01},
            {"name":"Wind Turbine Buffer Zone","id":"sepp-p-wpc-wind-turbine-buffer-zone","layerName":36,"isVisible":true,"opacity":0.01},
            {"name":"Wind Turbine Buffer Zone 3km","id":"sepp-p-wpc-wind-turbine-buffer-zone-3km","layerName":37,"isVisible":true,"opacity":0.01},
            {"name":"Wind Turbine Buffer Zone 30km","id":"sepp-p-wpc-wind-turbine-buffer-zone-30km","layerName":38,"isVisible":true,"opacity":0.01},
            {"name":"1 in 100 AEP Flood Extents","id":"sepp-p-wpc-1-in-100-aep-flood-extents","layerName":39,"isVisible":true,"opacity":0.01},{"name":"Additional Controls","id":"sepp-p-wpc-additional-controls","layerName":40,"isVisible":true,"opacity":0.01},{"name":"Bulk Water Supply Infrastructure","id":"sepp-p-wpc-bulk-water-supply-infrastructure","layerName":41,"isVisible":true,"opacity":0.01}
            
        ]
    },
    "EPP (R&E)": {
        id:"epp-re",
        isProperty:true,
        source:"https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Resources_and_Energy_2021/MapServer/export?",
        layers:[
            {"name":"Land Application","id":"epp-re-land-application","layerName":1,"isVisible":true,"opacity":0.01},
            {"name":"Critical Industry Cluster Land (Viticulture)","id":"epp-re-critical-industry-cluster-land-(viticulture)","layerName":2,"isVisible":true,"opacity":0.01},
            {"name":"Critical Industry Cluster Land (Equine)","id":"epp-re-critical-industry-cluster-land-(equine)","layerName":3,"isVisible":true,"opacity":0.01},
            {"name":"Biophysical Strategic Agricultural Land","id":"epp-re-biophysical-strategic-agricultural-land","layerName":4,"isVisible":true,"opacity":0.01},
            {"name":"Future Residential Growth Area","id":"epp-re-future-residential-growth-area","layerName":5,"isVisible":true,"opacity":0.01},
            {"name":"Additional Rural Village Land","id":"epp-re-additional-rural-village-land","layerName":6,"isVisible":true,"opacity":0.01},
            {"name":"Coal Seam Gas Exclusion","id":"epp-re-coal-seam-gas-exclusion","layerName":7,"isVisible":true,"opacity":0.01},
            {"name":"Mineral and Resource Land","id":"epp-re-mineral-and-resource-land","layerName":8,"isVisible":true,"opacity":0.01}
        ]
    },
    "SEPP (R&H)": {
        id:"sepp-rh",
        isProperty:true,
        source:"https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Resilience_and_Hazards_2021/MapServer/export?",
        layers:[
            {"name":"Land Application Map","id":"epp-re-land-application-map","layerName":1,"isVisible":true,"opacity":0.01},
            {"name":"Coastal Wetlands and Littoral Rainforests Area Map","id":"epp-re-coastal-wetlands-and-littoral-rainforests-area-map","layerName":2,"isVisible":true,"opacity":0.01},
            {"name":"Coastal Wetlands","id":"epp-re-coastal-wetlands","layerName":3,"isVisible":true,"opacity":0.01},
            {"name":"Littoral Rainforest","id":"epp-re-littoral-rainforest","layerName":4,"isVisible":true,"opacity":0.01},
            {"name":"Coastal Vulnerability Area Map (Note: No map at this time)","id":"epp-re-coastal-vulnerability-area-map-(note:-no-map-at-this-time)","layerName":5,"isVisible":true,"opacity":0.01},
            {"name":"Coastal Environment Area Map","id":"epp-re-coastal-environment-area-map","layerName":6,"isVisible":true,"opacity":0.01},
            {"name":"Coastal Use Area Map","id":"epp-re-coastal-use-area-map","layerName":7,"isVisible":true,"opacity":0.01}
        ]
    },
    "SEPP (T&I)": {
        id:"sepp-ti",
        isProperty:true,
        source:"https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Transport_and_Infrastructure_2021/MapServer/export?",
        layers:[
            {"name":"Subject Land","id":"sepp-ti-subject-land","layerName":1,"isVisible":true,"opacity":0.01},
            {"name":"Land Application","id":"sepp-ti-land-application","layerName":2,"isVisible":true,"opacity":0.01},
            {"name":"Interim Rail Corridor Map","id":"sepp-ti-interim-rail-corridor-map","layerName":3,"isVisible":true,"opacity":0.01},
            {"name":"Sydney Metro West Tunnel (Sydney Metro)","id":"sepp-ti-sydney-metro-west-tunnel-(sydney-metro)","layerName":4,"isVisible":true,"opacity":0.01},
            {"name":"CBD Rail Link or CBD Metro (Zone B - Tunnel) (TfNSW)","id":"sepp-ti-cbd-rail-link-or-cbd-metro-(zone-b---tunnel)-(tfnsw)","layerName":5,"isVisible":true,"opacity":0.01},
            {"name":"CBD Metro (Zone A - Above Ground) (TfNSW)","id":"sepp-ti-cbd-metro-(zone-a---above-ground)-(tfnsw)","layerName":6,"isVisible":true,"opacity":0.01},
            {"name":"CBD Metro Station Extent (TfNSW)","id":"sepp-ti-cbd-metro-station-extent-(tfnsw)","layerName":7,"isVisible":true,"opacity":0.01},{"name":"Height of Building","id":"sepp-ti-height-of-building","layerName":8,"isVisible":true,"opacity":0.01},
            {"name":"Land Zoning","id":"sepp-ti-land-zoning","layerName":9,"isVisible":true,"opacity":0.01},
            {"name":"Special Provision","id":"sepp-ti-special-provision","layerName":10,"isVisible":true,"opacity":0.01},
            {"name":"Outer Harbour Area","id":"sepp-ti-outer-harbour-area","layerName":11,"isVisible":true,"opacity":0.01},
            {"name":"Lease Area","id":"sepp-ti-lease-area","layerName":12,"isVisible":true,"opacity":0.01},
            {"name":"Referral Area","id":"sepp-ti-referral-area","layerName":13,"isVisible":true,"opacity":0.01},
            {"name":"Additional Permitted Uses","id":"sepp-ti-additional-permitted-uses","layerName":14,"isVisible":true,"opacity":0.01}
        ]
    },
    "SEPP Major": {
        id:"sepp-major",
        isProperty:true,
        source:"https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Major_Infrastructure_Corridors_2020/MapServer/export?",
        layers:[
            {"name":"Land_Application","id":"sepp-major-land_application","layerName":1,"isVisible":true,"opacity":0.01}
        ]
    },

    "Natural Hazards": {
        id:"natural-hazards",
        isProperty:true,
        source:"https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/ePlanning/Planning_Portal_Hazard/MapServer/export?",
        layers:[
            {"name":"Bushfire Prone Land","id":"natural-hazards-bushfire-prone-land","layerName":229,"isVisible":true,"opacity":0.01},
            {"name":"Flood Planning","id":"natural-hazards-flood-planning","layerName":230,"isVisible":true,"opacity":0.01},
            {"name":"Hunter Valley Flood Mitigation Scheme Development Consent Area","id":"natural-hazards-hunter-valley-flood-mitigation-scheme-development-consent-area","layerName":231,"isVisible":true,"opacity":0.01},
            {"name":"Landslide Risk Land","id":"natural-hazards-landslide-risk-land","layerName":232,"isVisible":true,"opacity":0.01}
        ]
    },
    "Bushfire": {
        id:"bushfire",
        isProperty:true,
        source:"https://spatial.industry.nsw.gov.au/arcgis/rest/services/CrownLands_Bushfire/Bushfire_RFSData/MapServer/export?",
        layers:[
            {"name":"Fire Trail","id":"bushfire-fire-trail","layerName":1,"isVisible":true,"opacity":0.01},
            {"name":"BFMZ","id":"bushfire-bfmz","layerName":2,"isVisible":true,"opacity":0.01},
            {"name":"HR Works","id":"bushfire-hr-works","layerName":3,"isVisible":true,"opacity":0.01},
            {"name":"Bush Fire Prone Land","id":"bushfire-bush-fire-prone-land","layerName":4,"isVisible":true,"opacity":0.01},
            {"name":"Wild Fire History","id":"bushfire-wild-fire-history","layerName":5,"isVisible":true,"opacity":0.01},
            // {"name":"Jurisdiction","id":"bushfire-jurisdiction","layerName":6,"isVisible":true,"opacity":0.01},
            {"name":"Station","id":"bushfire-station","layerName":7,"isVisible":true,"opacity":0.01},
            {"name":"Neighbourhood Safer Places","id":"bushfire-neighbourhood-safer-places","layerName":8,"isVisible":true,"opacity":0.01},
            {"name":"BFMC","id":"bushfire-bfmc","layerName":9,"isVisible":true,"opacity":0.01},
            {"name":"NSW_Fire_Area","id":"bushfire-nsw_fire_area","layerName":10,"isVisible":true,"opacity":0.01},
            {"name":"Brigade","id":"bushfire-brigade","layerName":11,"isVisible":true,"opacity":0.01},
            {"name":"District","id":"bushfire-district","layerName":12,"isVisible":true,"opacity":0.01},
            {"name":"Region","id":"bushfire-region","layerName":13,"isVisible":true,"opacity":0.01},
            {"name":"Zone","id":"bushfire-zone","layerName":14,"isVisible":true,"opacity":0.01}
        ]
    },
    "Biodiversity": {
        id:"biodiversity",
        isProperty:true,
        source:"https://www.lmbc.nsw.gov.au/arcgis/rest/services/BV/BiodiversityValues/MapServer/export?",
        layers:[
            {"name":"Biodiversity Values","id":"biodiversity-biodiversity-values","layerName":0,"isVisible":true,"opacity":0.01}
        ]
    },
    "NSW Declared Wilderness": {
        id:"nsw-declared-wilderness",
        isProperty:true,
        source:"https://mapprod1.environment.nsw.gov.au/arcgis/rest/services/Landuse/decwild_D/MapServer/export?",
        layers:[
            {"name":"Labels","id":"nsw-declared-wilderness-labels","layerName":0,"isVisible":true,"opacity":0.01},
            {"name":"Boundaries","id":"nsw-declared-wilderness-boundaries","layerName":1,"isVisible":true,"opacity":0.01},
            {"name":"Areas","id":"nsw-declared-wilderness-areas","layerName":2,"isVisible":true,"opacity":0.01}
        ]
    },
    "Sydney Water Supply": {
        id:"sydney-water-supply",
        isProperty:true,
        source:"https://mapprod.waternsw.com.au/arcgis/rest/services/Public/Greater_Sydney_Declared_Catchment_and_Water_Supply_System/MapServer/export?",
        layers:[
            {"name":"Greater Sydney Dams and Reservoirs","id":"biodiversity-greater-sydney-dams-and-reservoirs","layerName":0,"isVisible":true,"opacity":0.01},
            {"name":"Water NSW Special & Controlled Areas","id":"biodiversity-water-nsw-special-&-controlled-areas","layerName":1,"isVisible":true,"opacity":0.01},
            {"name":"WaterNSW Declared Catchment - Total Area","id":"biodiversity-waternsw-declared-catchment---total-area","layerName":2,"isVisible":true,"opacity":0.01},
            {"name":"Greater Sydney Water Supply System","id":"biodiversity-greater-sydney-water-supply-system","layerName":3,"isVisible":true,"opacity":0.01},
            {"name":"WaterNSW Declared Catchment - Inner & Outer","id":"biodiversity-waternsw-declared-catchment---inner-&-outer","layerName":4,"isVisible":true,"opacity":0.01}
        ]
    },
    "AppTracker": {
        id:"app-tracker",
        isProperty:true,
        source:"https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/DA_Tracking/MapServer/export?",
        layers:[
            {"name":"DA_Tracking","id":"biodiversity-da_tracking","layerName":0,"isVisible":true,"opacity":0.01}
        ]
    },

    // "Liverpool DCP ": {
    //     id:"liverpool-dcp",
    //     isProperty:true,
    //     source:"/export?",
    //     layers:[
    //         {"name":"LCC DCP ROAD NETWORK","id":"liverpool-dcp-lcc-dcp-road-network","layerName":0,"isVisible":true,"opacity":0.01}
    //     ]
    // }


    // Arial Images:DONE
    // 1998 - https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1998/MapServer
    // 1994 - https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1994/MapServer
    // 1991 - https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1991/MapServer
    // 1986 - https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1986/MapServer
    // 1984 - https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1984/MapServer
    // 1975 - https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1975/MapServer
    // 1966 - https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1966/MapServer
    // 1965 - https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1965/MapServer
    // 1955 - https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1955/MapServer
    // 1947 - https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1947/MapServer
    // 1943 - https://portal.spatial.nsw.gov.au/tileservices/Hosted/HistoricalImagery1943/MapServer


    // Roads data
    // Road Layers:
    // Liverpool DCP - https://services6.arcgis.com/Ys4U0NCXGgyTtRWx/arcgis/rest/services/LCC_DCP_road_network/FeatureServer/0
    // Austral ILP - https://www.arcgis.com/home/item.html?id=146efec3b1d44b59ac86d3ca62c2e762
    // Leppington ILP - https://www.arcgis.com/home/item.html?id=36128d960b6a4b29b2ec19f0b84b413c
    // NSW Roads - https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Transport_Theme/FeatureServer/5

    // Aerial
    // Aerial - https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Imagery/MapServer
};