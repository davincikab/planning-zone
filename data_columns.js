let dataSources = [
    {
      "Name": "Heritage",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/0?f=pjson"
    },
    {
      "Name": "FSR",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/1?f=pjson"
    },
    {
      "Name": "Land Zoning",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/2?f=pjson"
    },
    {
      "Name": "Land Reserved for Acquisition",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/3?f=pjson"
    },
    {
      "Name": "Lot Size",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/4?f=pjson"
    },
    {
      "Name": "Height of Buildings",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/5?f=pjson"
    },
    {
      "Name": "Land Application",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/EPI_Primary_Planning_Layers/MapServer/6?f=pjson"
    },
    {
      "Name": "SIC",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Development_Control/MapServer/1?f=pjson"
    },
    {
      "Name": "GHC",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Development_Control/MapServer/2?f=pjson"
    },
    {
      "Name": "Local Provisions",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Development_Control/MapServer/3?f=pjson"
    },
    {
      "Name": "Active Street Frontages",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Development_Control/MapServer/4?f=pjson"
    },
    {
      "Name": "Additional Permited Use",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Development_Control/MapServer/5?f=pjson"
    },
    {
      "Name": "Key Sites",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Development_Control/MapServer/6?f=pjson"
    },
    {
      "Name": "Urban Release Area",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Development_Control/MapServer/7?f=pjson"
    },
    {
      "Name": "Flood Risk",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Hazard/MapServer/1?f=pjson"
    },
    {
      "Name": "Landslide Risk",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Hazard/MapServer/2?f=pjson"
    },
    {
      "Name": "Acid Sulfate Soils",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Protection/MapServer/1?f=pjson"
    },
    {
      "Name": "Airport Noise",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Protection/MapServer/2?f=pjson"
    },
    {
      "Name": "Drinking Water Catchment",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Protection/MapServer/3?f=pjson"
    },
    {
      "Name": "Grounwater Vulnerability",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Protection/MapServer/4?f=pjson"
    },
    {
      "Name": "Mineral and Resource Land",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Protection/MapServer/5?f=pjson"
    },
    {
      "Name": "OLS",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Protection/MapServer/6?f=pjson"
    },
    {
      "Name": "Riparian Land and Watercourses",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Protection/MapServer/7?f=pjson"
    },
    {
      "Name": "Salinity",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Protection/MapServer/8?f=pjson"
    },
    {
      "Name": "Scenic Protection",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Protection/MapServer/9?f=pjson"
    },
    {
      "Name": "Terrestrial Biodiversity",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Protection/MapServer/10?f=pjson"
    },
    {
      "Name": "Wetlands",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Protection/MapServer/11?f=pjson"
    },
    {
      "Name": "Environmentally Sensitive Land",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/Protection/MapServer/12?f=pjson"
    },
    {
      "Name": "Critical Habitat Area",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/3?f=pjson"
    },
    {
      "Name": "Foreshores and Waterways",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/4?f=pjson"
    },
    {
      "Name": "Hawkesbury-Nepean",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/5?f=pjson"
    },
    {
      "Name": "Scenic Protection",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/7?f=pjson"
    },
    {
      "Name": "Sydney Harbour Catchment",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/13?f=pjson"
    },
    {
      "Name": "Wetlands Protection Area",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Biodiversity_and_Conservation_2021/MapServer/15?f=pjson"
    },
    {
      "Name": "Coastal Wetlands and Littoral Rainforests Area",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Coastal_Management_2018/MapServer/1?f=pjson"
    },
    {
      "Name": "Coastal Vulnerability Area",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Coastal_Management_2018/MapServer/4?f=pjson"
    },
    {
      "Name": "Coastal Environment Area",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Coastal_Management_2018/MapServer/5?f=pjson"
    },
    {
      "Name": "Coastal Use Area",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Coastal_Management_2018/MapServer/6?f=pjson"
    },
    {
      "Name": "Land Application",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Coastal_Management_2018/MapServer/7?f=pjson"
    },
    {
      "Name": "FSR",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/3?f=pjson"
    },
    {
      "Name": "Land Zoning",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/4?f=pjson"
    },
    {
      "Name": "Lot Size",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/5?f=pjson"
    },
    {
      "Name": "Height of Buildings",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/6?f=pjson"
    },
    {
      "Name": "Flood Risk",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/7?f=pjson"
    },
    {
      "Name": "Land Reserved for Acquisition",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/8?f=pjson"
    },
    {
      "Name": "Additional Permited Use",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/9?f=pjson"
    },
    {
      "Name": "Environmental Conservation Area",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/10?f=pjson"
    },
    {
      "Name": "Native Vegetation Protection",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/11?f=pjson"
    },
    {
      "Name": "Dwelling Density",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/12?f=pjson"
    },
    {
      "Name": "Growth Centres",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/13?f=pjson"
    },
    {
      "Name": "Heritage",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/14?f=pjson"
    },
    {
      "Name": "Precinct Boundaries",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/15?f=pjson"
    },
    {
      "Name": "Riparian Land and Watercourses",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/16?f=pjson"
    },
    {
      "Name": "Special Provision",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/17?f=pjson"
    },
    {
      "Name": "Special Areas",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/18?f=pjson"
    },
    {
      "Name": "Urban Release Area",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/19?f=pjson"
    },
    {
      "Name": "Key Sites",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/20?f=pjson"
    },
    {
      "Name": "Transport & Arterial Road Infrastructure",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/21?f=pjson"
    },
    {
      "Name": "Terrestrial Biodiversity",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/23?f=pjson"
    },
    {
      "Name": "OLS",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/24?f=pjson"
    },
    {
      "Name": "Airport Noise",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/26?f=pjson"
    },
    {
      "Name": "Lighting Intensity Area",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/27?f=pjson"
    },
    {
      "Name": "Wildlife Buffer Zone",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/32?f=pjson"
    },
    {
      "Name": "Wind Turbine Buffer Zone",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/36?f=pjson"
    },
    {
      "Name": "1 in 100 AEP Flood Extents",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/39?f=pjson"
    },
    {
      "Name": "Additional Controls",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Planning/SEPP_Precincts_Western_Parkland_City_2021/MapServer/40?f=pjson"
    },
    {
      "Name": "Cadastre",
      "Json": "https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Cadastre/MapServer/4?f=pjson"
    },
    {
      "Name": "Labels",
      "Json": "https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Cadastre/MapServer/0?f=pjson"
    },
    {
      "Name": "Sales Records",
      "Json": "https://maps.six.nsw.gov.au/arcgis/rest/services/public/Valuation/MapServer/0?f=pjson"
    },
    {
      "Name": "Valuations",
      "Json": "https://maps.six.nsw.gov.au/arcgis/rest/services/public/Valuation/MapServer/4?f=pjson"
    },
    {
      "Name": "Property Boundaries",
      "Json": "https://maps.six.nsw.gov.au/arcgis/rest/services/public/Valuation/MapServer/8?f=pjson"
    },
    {
      "Name": "Easements",
      "Json": "https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Land_Parcel_Property_Theme_multiCRS/FeatureServer/9?f=pjson"
    },
    {
      "Name": "Contours",
      "Json": "https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Elevation_and_Depth_Theme_multiCRS/FeatureServer/2?f=pjson"
    },
    {
      "Name": "Address Attributes",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/AddressSearch/MapServer/6?f=pjson"
    },
    {
      "Name": "Lot",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/AddressSearch/MapServer/0?f=pjson"
    },
    {
      "Name": "Suburb",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/AddressSearch/MapServer/1?f=pjson"
    },
    {
      "Name": "LGA",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/AddressSearch/MapServer/3?f=pjson"
    },
    {
      "Name": "Legal Identifiers",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/LotSearch/MapServer/0?f=pjson"
    },
    {
      "Name": "",
      "Json": "https://mapprod3.environment.nsw.gov.au/arcgis/rest/services/Common/LotSearch/MapServer?f=pjson"
    }
];

const columnsMap = {};
console.log("Cols");
async function getLayerColumns() {
    let request = dataSources.slice(0,).map(item => fetch(item.Json));

    try {
        let responsePromise = await Promise.all(request).then(responses => Promise.all(responses.map(res => res.json())))
        let responseData = await responsePromise;
        
        console.log(responseData);
        let colsMap = responseData.filter(item => !item.error && item.fields).reduce((a,b) => {
            console.log(b);
            a[b.name] = b.fields.map(field => field.name);
            return a;
        }, {});

        console.log(JSON.stringify(colsMap));
    } catch (error) {
        console.log(error);
    }
} 

// getLayerColumns();