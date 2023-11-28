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
    
};