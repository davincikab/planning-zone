let columnValues = {
  'heritage':{
    name:'', 
    columns:["EPI_NAME","LAY_CLASS","H_ID","H_NAME","SIG"], 
    columnName:["Epi Name", "Layer Class", "H Id", "H Name","Sig"]
  },
  'fsr':{
    name:"Floor Space Ratio", 
    columns:["EPI_NAME","LAY_NAME","SYM_CODE","FSR","LEGIS_REF_AREA","LEGIS_REF_CLAUSE","LEGIS_REF_VALUE"], 
    columnName:[]
  },
  'land-reserve':{
    name: "Land Reservation Acquisition",
    columns:["EPI_NAME","LAY_CLASS"], 
    columnName:[]
  },
  'land-zoning':{
    name:"Land Zoning", 
    columns:["EPI_NAME","LAY_CLASS","SYM_CODE","PURPOSE"], 
    columnName:[]
  },  
  'lot-size':{
    name:"Lot Size", 
    columns:["EPI_NAME","LAY_NAME","SYM_CODE","LEGIS_REF_AREA","LEGIS_REF_CLAUSE","LEGIS_REF_VALUE","LOT_SIZE","UNITS"], 
    columnName:[]
  }, 
  'building-height':{
    name:"Height of Building", 
    columns:["UNITS","MAX_B_H_M"], 
    columnName:[]
  },  
  'land-application':{
    name:"Land Application",
    columns:["EPI_NAME"],
    columnName:[]
  },


  //development control
  "special-infrastructure":{
    name:"Special Infrastructure Contributions",
    columns:["LAY_CLASS","SIC_AREA","RATE_RESIDENTIAL","RATE_INDUSTRIAL","RATE_NOT_PRECINCT_PLAN","RATE_VALID_TO","RATE_GENERIC"],
    columnName:[]
  },
  "greenfield-housing":{
    name:"Greenfield Housing Code Area",
    columns:["EPI_NAME","LAY_CLASS","LEGIS_REF_AREA"],
    columnName:[]
  },
  "local-provisions":{
    name:"Local Provisions",
    columns:["EPI_NAME","LAY_NAME","LAY_CLASS"],
    columnName:[]
  },
  "active-street-frontages":{
    name:"Active Street Frontages",
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },
  "additional-permitted-uses":{
    name:"Additional Permitted Uses",
    columns:["EPI_NAME","LAY_CLASS","LABEL"],
    columnName:[]
  },
  "key-sites":{
    name:"Key Sites",
    columns:["EPI_NAME","LAY_CLASS","LABEL","KEYSITE_ID","SYM_CODE"],
    columnName:[]
  },
  "urban-release-area":{
    name:"Urban Release Area",
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },

  // Harzard
  "flood-zoning":{
    name:"Flood Planning",
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },
  "landslide-risk-land":{
    name:"Landslide Risk Land",
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },

  // protection
  "acid-sulfate-soils":{
    name:"Acid Sulfate Soils", 
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },
  "airport-noise":{
    name:"Airport Noise", 
    columns:["EPI_NAME","LAY_NAME","ANEF_CODE"],
    columnName:[]
  },
  "drinking-water-catchment":{
    name:"Drinking Water Catchment", 
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },
  "groundwater-vulnerability":{
    name:"Groundwater Vulnerability", 
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },
  "mineral-resource":{
    name:"Mineral and Resource Land", 
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },
  "obstacle-limitation-surface":{
    name:"Obstacle Limitation Surface", 
    columns:["EPI_NAME","MAXIMUM_HEIGHT"],
    columnName:[]
  },
  "riparian-lands":{
    name:"Riparian Lands and Watercourses", 
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },
  "salinity":{
    name:"Salinity", 
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },
  "scenic-protection-land":{
    name:"Scenic Protection Land", 
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },
  "terrestrial-biodiversity":{
    name:"Terrestrial Biodiversity", 
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },
  "wetlands":{
    name:"Wetlands", 
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },
  "environmentally-sensitive-land":{
    name:"Environmentally Sensitive Land", 
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },

  // sepp biodiversity
  "foreshores-and-waterways-area":{
    name:"Foreshores and Waterways Area", 
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },
  "hawkesbury-nepean-river-riverine":{
    name:"Hawkesbury-Nepean Catchment", 
    columns:["EPIName","EPIType", "Class", "LAY_CLASS","LABEL"],
    columnName:[]
  },
  "sydney-harbour-catchment":{
    name:"Sydney Harbour Heritage", 
    columns:["EPI_NAME","LABEL"],
    columnName:[]
  },
  "avoided-land":{
    name:"Avoided Land", 
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },

  // "certified-urban-capable-land":{},},"foreshores-and-waterways-area-zone":{},{},{}
  // {},"hawkesbury-nepean-riverine-scenic-area":{},"strategic-harbour-foreshore-sites":{},"strategic-conservation-area":{},

  // Coastal Management
  "coastal-vulnerability-area-map-note:-no-map-at-this-time":{
    name:"Coastal Vulnerability Area Map (Note: No map at this time)",
    columns:["EPI_NAME","LABEL"],
    columnName:[]
  },
  "coastal-environment-area-map":{
    name:"Coastal Environment Area Map",
    columns:["EPI_NAME","LABEL"],
    columnName:[]
  },
  "coastal-use-area-map":{
    name:"Coastal Use Area Map",
    columns:["EPI_NAME","LABEL"],
    columnName:[]
  },
  "land-application-map":{
    name:"Land Application Map",
    columns:["EPI_NAME","LAY_CLASS","LEGIS_REF_AREA","LEGIS_REF_CLAUSE","LEGIS_REF_VALUE"],
    columnName:[]
  },

  // SEPP Precincts Western Parkland City 2021
  "floor-space-ratio-(n:1)":{
    name:"Floor Space Ratio (n:1)", 
    columns:["EPI_NAME","FSR"], 
    columnName:[]
  },
  "minimum-lot-size":{
    name:"Minimum Lot Size", 
    columns:["EPI_NAME","LOT_SIZE","UNITS","PRECINCT"], 
    columnName:[]
},
  "flood":{
    name:"Flood", 
    columns:["EPI_NAME","LAY_CLASS","COMMENT"], 
    columnName:[]
},
  "environmental-conservation-area":{
    name:"Environmental Conservation Area", 
    columns:["EPI_NAME","LAY_CLASS","Shape"],
    columnName:[]
  },
  "native-vegetation-protection":{
    name:"Native Vegetation Protection", 
    columns:["EPI_NAME","LAY_CLASS"],
    columnName:[]
  },
  "dwelling-density":{
    name:"Dwelling Density", 
    columns:["EPI_NAME","LABEL","SYM_CODE"],
    columnName:[]
  },
  "growth-centres":{
    name:"Growth Centres", 
    columns:["EPI_NAME","LABEL"],
    columnName:[]
  },
  "precinct-boundaries":{
    name:"Precinct Boundaries", 
    columns:["EPI_NAME","LAY_CLASS","PRECINCT"],
    columnName:[]
  },
  "special-provision":{
    name:"Special Provision", 
    columns:["EPI_NAME","LAY_CLASS","SYM_CODE"],
    columnName:[]
  },
  "special-areas":{
      name:"Special Areas", 
    columns:["EPI_NAME","LAY_CLASS","SYM_CODE"],
     columnName:[]
  },
  "transport-&-arterial-road-infrastructure":{
    name:"Transport & Arterial Road Infrastructure", 
    columns:["EPI_NAME","LAY_NAME","LAY_CLASS","LABEL","PCO_REF_KEY","SYM_CODE"],
    columnName:[]
  },
  "floods-extent-aep":{
    name:"1 in 100 AEP Flood Extents", 
    columns:["EPI_NAME","LAY_NAME","LAY_CLASS","LABEL"],
    columnName:[]
  },
  "additional-controls":{
    name:"Additional Controls",
    columns:["EPI_NAME","MAP_NAME","LEGIS_REF_AREA"],
    columnName:[]
  },

  // :{},"land-zoning":{},{},"height-of-building":{},"land-reservation-acquisition":{},"additional-permitted-uses":{},
  // {},{},{},{},"heritage":{},{},"riparian-lands-and-watercourses":{},{},{},"urban-release-area":{},"key-sites-sepp":{},
  // {},"terrestrial-biodiversity-sepp":{},"obstacle-limitation-surface-sepp":{},"airport-noise-sepp":{},"light-control-zone-d":{},
  // "light-control-zone-c":{},"light-control-zone-b":{},"light-control-zone-a":{},"wildlife-buffer-zone-13km":{},
  // "wildlife-buffer-zone-8km":{},"wildlife-buffer-zone-3km":{},"wind-turbine-buffer-zone-30km":{},"wind-turbine-buffer-zone-3km":{},
  // "floods-extent-aep":{},:{}

  // cadastre

  // address search
  "address-attributes":{
    name:"Address Point Attributes", 
    columns:["PRINCIPALADDRESSSITEOID","ADDRESSSTRINGOID","GURASID","shape","OBJECTID","CREATEDATE","GURASID_AS","ADDRESSTYPE","RURALADDRESS","PRINCIPALADDRESSTYPE","ADDRESSSTRINGTYPE","PRINCIPALADDRESSSITEOID_AS","OFFICIALADDRESSSTRINGOID","ROADSIDE","HOUSENUMBERFIRSTPREFIX","HOUSENUMBERFIRST","HOUSENUMBERFIRSTSUFFIX","HOUSENUMBERSECONDPREFIX","HOUSENUMBERSECOND","HOUSENUMBERSECONDSUFFIX","ROADNAME","ROADTYPE","ROADSUFFIX","UNITTYPE","UNITNUMBERPREFIX","UNITNUMBER","UNITNUMBERSUFFIX","LEVELTYPE","LEVELNUMBERPREFIX","LEVELNUMBER","LEVELNUMBERSUFFIX","ADDRESSSITENAME","BUILDINGNAME","LOCATIONDESCRIPTION","PRIVATESTREETNAME","PRIVATESTREETTYPE","PRIVATESTREETSUFFIX","SECONDROADNAME","SECONDROADTYPE","SECONDROADSUFFIX","SUBURBNAME","STATE","POSTCODE","COUNCIL","DELIVERYPOINTID","DELIVERYPOINTBARCODE","ADDRESSCONFIDENCE","CONTRIBUTORORIGIN","CONTRIBUTORID","CONTRIBUTORALIGNMENT","ROUTEOID","GNAFPRIMARYSITEID","CONTAINMENT","PROPID","SPPROPID","ROAD","ROADSUBURBPOST","HSDETAILS","HSNOFRST","HSNOSECND","UNITDETAILS","LVLDETAILS","ESRI_OID"],
    columnName:[]
  },
    "lot-address":{
    name:"Lot", 
    columns:["OBJECTID","CADID","CREATEDATE","MODIFIEDDATE","CONTROLLINGAUTHORITYOID","PLANOID","PLANNUMBER","PLANLABEL","ITSTITLESTATUS","ITSLOTID","STRATUMLEVEL","HASSTRATUM","CLASSSUBTYPE","LOTNUMBER","SECTIONNUMBER","PLANLOTAREA","PLANLOTAREAUNITS","STARTDATE","ENDDATE","LASTUPDATE","PACKETID","ISPROCESSED","RECORDSTATUS","SHAPE","Area_H","SHAPE.STArea()","SHAPE.STLength()"],
    columnName:[]
  },
  "suburb":{
    name:"Suburb", 
    columns:["SUBURBNAME","POSTCODE"],
    columnName:[]
  },
  "lga":{
    name:"Local Government Area", 
    columns:["LGANAME","COUNCILNAME"],
    columnName:[]
  },
    

 
}