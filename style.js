let sepp = {
   "WMS_Capabilities": {
      "Service": {
         "Name": {
            "__cdata": " WMS "
         },
         "Title": {
            "__cdata": " public_NSW_Cadastre "
         },
         "Abstract": "WMS",
         "KeywordList": {
            "Keyword": {
               "__cdata": " "
            }
         },
         "OnlineResource": {
            "_xmlns:xlink": "http://www.w3.org/1999/xlink",
            "_xlink:type": "simple",
            "_xlink:href": "http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?"
         },
         "ContactInformation": {
            "ContactPersonPrimary": {
               "ContactPerson": {
                  "__cdata": " "
               },
               "ContactOrganization": {
                  "__cdata": " "
               }
            },
            "ContactPosition": {
               "__cdata": " "
            },
            "ContactAddress": {
               "AddressType": {
                  "__cdata": " "
               },
               "Address": {
                  "__cdata": " "
               },
               "City": {
                  "__cdata": " "
               },
               "StateOrProvince": {
                  "__cdata": " "
               },
               "PostCode": {
                  "__cdata": " "
               },
               "Country": {
                  "__cdata": " "
               }
            },
            "ContactVoiceTelephone": {
               "__cdata": " "
            },
            "ContactFacsimileTelephone": {
               "__cdata": " "
            },
            "ContactElectronicMailAddress": {
               "__cdata": " "
            }
         },
         "Fees": {
            "__cdata": " "
         },
         "AccessConstraints": {
            "__cdata": " "
         },
         "MaxWidth": "4096",
         "MaxHeight": "4096"
      },
      "Capability": {
         "Request": {
            "GetCapabilities": {
               "Format": [
                  "application/vnd.ogc.wms_xml",
                  "text/xml"
               ],
               "DCPType": {
                  "HTTP": {
                     "Get": {
                        "OnlineResource": {
                           "_xmlns:xlink": "http://www.w3.org/1999/xlink",
                           "_xlink:type": "simple",
                           "_xlink:href": "http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?"
                        }
                     }
                  }
               }
            },
            "GetMap": {
               "Format": [
                  "image/bmp",
                  "image/jpeg",
                  "image/tiff",
                  "image/png",
                  "image/png8",
                  "image/png24",
                  "image/png32",
                  "image/gif",
                  "image/svg+xml"
               ],
               "DCPType": {
                  "HTTP": {
                     "Get": {
                        "OnlineResource": {
                           "_xmlns:xlink": "http://www.w3.org/1999/xlink",
                           "_xlink:type": "simple",
                           "_xlink:href": "http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?"
                        }
                     }
                  }
               }
            },
            "GetFeatureInfo": {
               "Format": [
                  "application/vnd.esri.wms_raw_xml",
                  "application/vnd.esri.wms_featureinfo_xml",
                  "application/vnd.ogc.wms_xml",
                  "application/geojson",
                  "text/xml",
                  "text/html",
                  "text/plain"
               ],
               "DCPType": {
                  "HTTP": {
                     "Get": {
                        "OnlineResource": {
                           "_xmlns:xlink": "http://www.w3.org/1999/xlink",
                           "_xlink:type": "simple",
                           "_xlink:href": "http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?"
                        }
                     }
                  }
               }
            },
            "GetStyles": {
               "Format": [
                  "application/vnd.ogc.sld+xml"
               ],
               "DCPType": {
                  "HTTP": {
                     "Get": {
                        "OnlineResource": {
                           "_xmlns:xlink": "http://www.w3.org/1999/xlink",
                           "_xlink:type": "simple",
                           "_xlink:href": "http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?"
                        }
                     }
                  }
               }
            }
         },
         "Exception": {
            "Format": [
               "application/vnd.ogc.se_xml",
               "application/vnd.ogc.se_inimage",
               "application/vnd.ogc.se_blank",
               "text/xml",
               "XML"
            ]
         },
         "Layer": [
            {
               "Title": {
                  "__cdata": " Cadastre "
               },
               "CRS": [
                  "CRS:84",
                  "EPSG:4326",
                  "EPSG:3857",
                  "EPSG:102100"
               ],
               "EX_GeographicBoundingBox": {
                  "westBoundLongitude": "140.999313",
                  "eastBoundLongitude": "159.084568",
                  "southBoundLatitude": "-37.440737",
                  "northBoundLatitude": "-28.157021"
               },
               "BoundingBox": [
                  {
                     "_CRS": "CRS:84",
                     "_minx": "140.999313",
                     "_miny": "-37.440737",
                     "_maxx": "159.084568",
                     "_maxy": "-28.157021"
                  },
                  {
                     "_CRS": "EPSG:4326",
                     "_minx": "-37.440737",
                     "_miny": "140.999313",
                     "_maxx": "-28.157021",
                     "_maxy": "159.084568"
                  },
                  {
                     "_CRS": "EPSG:3857",
                     "_minx": "15695971.703500",
                     "_miny": "-4500719.260500",
                     "_maxx": "17709213.067500",
                     "_maxy": "-3268784.951625"
                  },
                  {
                     "_CRS": "EPSG:102100",
                     "_minx": "15695971.703500",
                     "_miny": "-4500719.260500",
                     "_maxx": "17709213.067500",
                     "_maxy": "-3268784.951625"
                  }
               ],
               "Layer": [
                  {
                     "Title": {
                        "__cdata": " Cadastre "
                     },
                     "Abstract": {
                        "__cdata": " A group layer for controlling the display of cadastral outline symbology for plan, section and lot. "
                     },
                     "CRS": [
                        "CRS:84",
                        "EPSG:4326",
                        "EPSG:3857",
                        "EPSG:102100"
                     ],
                     "EX_GeographicBoundingBox": {
                        "westBoundLongitude": "140.999313",
                        "eastBoundLongitude": "159.084568",
                        "southBoundLatitude": "-37.440737",
                        "northBoundLatitude": "-28.157021"
                     },
                     "BoundingBox": [
                        {
                           "_CRS": "CRS:84",
                           "_minx": "140.999313",
                           "_miny": "-37.440737",
                           "_maxx": "159.084568",
                           "_maxy": "-28.157021"
                        },
                        {
                           "_CRS": "EPSG:4326",
                           "_minx": "-37.440737",
                           "_miny": "140.999313",
                           "_maxx": "-28.157021",
                           "_maxy": "159.084568"
                        },
                        {
                           "_CRS": "EPSG:3857",
                           "_minx": "15695971.703500",
                           "_miny": "-4500719.260500",
                           "_maxx": "17709213.067500",
                           "_maxy": "-3268784.951625"
                        },
                        {
                           "_CRS": "EPSG:102100",
                           "_minx": "15695971.703500",
                           "_miny": "-4500719.260500",
                           "_maxx": "17709213.067500",
                           "_maxy": "-3268784.951625"
                        }
                     ],
                     "Layer": [
                        {
                           "Name": "1",
                           "Title": {
                              "__cdata": " Lot "
                           },
                           "Abstract": {
                              "__cdata": " "
                           },
                           "CRS": [
                              "CRS:84",
                              "EPSG:4326",
                              "EPSG:3857",
                              "EPSG:102100"
                           ],
                           "EX_GeographicBoundingBox": {
                              "westBoundLongitude": "140.999313",
                              "eastBoundLongitude": "159.084568",
                              "southBoundLatitude": "-37.440737",
                              "northBoundLatitude": "-28.157021"
                           },
                           "BoundingBox": [
                              {
                                 "_CRS": "CRS:84",
                                 "_minx": "140.999313",
                                 "_miny": "-37.440737",
                                 "_maxx": "159.084568",
                                 "_maxy": "-28.157021"
                              },
                              {
                                 "_CRS": "EPSG:4326",
                                 "_minx": "-37.440737",
                                 "_miny": "140.999313",
                                 "_maxx": "-28.157021",
                                 "_maxy": "159.084568"
                              },
                              {
                                 "_CRS": "EPSG:3857",
                                 "_minx": "15695971.703500",
                                 "_miny": "-4500719.260500",
                                 "_maxx": "17709213.067500",
                                 "_maxy": "-3268784.951625"
                              },
                              {
                                 "_CRS": "EPSG:102100",
                                 "_minx": "15695971.703500",
                                 "_miny": "-4500719.260500",
                                 "_maxx": "17709213.067500",
                                 "_maxy": "-3268784.951625"
                              }
                           ],
                           "Style": {
                              "Name": "default",
                              "Title": "1",
                              "LegendURL": {
                                 "Format": [
                                    "image/png"
                                 ],
                                 "OnlineResource": {
                                    "_xmlns:xlink": "http://www.w3.org/1999/xlink",
                                    "_xlink:href": "http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=1",
                                    "_xlink:type": "simple"
                                 },
                                 "_width": "16",
                                 "_height": "16"
                              }
                           },
                           "_queryable": "1"
                        },
                        {
                           "Name": "2",
                           "Title": {
                              "__cdata": " PlanExtent "
                           },
                           "Abstract": {
                              "__cdata": " The current extent/perimeter of a plan, excluding roads and non-current lots. Metadata_link http://sdinsw/sdi.nsw.gov.au/catalog/search/resource/details.page?uuid=%7B199E23E0-B7DE-41B1-AFB4-78AE8EE651B1%7D "
                           },
                           "CRS": [
                              "CRS:84",
                              "EPSG:4326",
                              "EPSG:3857",
                              "EPSG:102100"
                           ],
                           "EX_GeographicBoundingBox": {
                              "westBoundLongitude": "140.999313",
                              "eastBoundLongitude": "159.084568",
                              "southBoundLatitude": "-37.440737",
                              "northBoundLatitude": "-28.157021"
                           },
                           "BoundingBox": [
                              {
                                 "_CRS": "CRS:84",
                                 "_minx": "140.999313",
                                 "_miny": "-37.440737",
                                 "_maxx": "159.084568",
                                 "_maxy": "-28.157021"
                              },
                              {
                                 "_CRS": "EPSG:4326",
                                 "_minx": "-37.440737",
                                 "_miny": "140.999313",
                                 "_maxx": "-28.157021",
                                 "_maxy": "159.084568"
                              },
                              {
                                 "_CRS": "EPSG:3857",
                                 "_minx": "15695971.703500",
                                 "_miny": "-4500719.260500",
                                 "_maxx": "17709213.067500",
                                 "_maxy": "-3268784.951625"
                              },
                              {
                                 "_CRS": "EPSG:102100",
                                 "_minx": "15695971.703500",
                                 "_miny": "-4500719.260500",
                                 "_maxx": "17709213.067500",
                                 "_maxy": "-3268784.951625"
                              }
                           ],
                           "Style": {
                              "Name": "default",
                              "Title": "2",
                              "LegendURL": {
                                 "Format": [
                                    "image/png"
                                 ],
                                 "OnlineResource": {
                                    "_xmlns:xlink": "http://www.w3.org/1999/xlink",
                                    "_xlink:href": "http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=2",
                                    "_xlink:type": "simple"
                                 },
                                 "_width": "16",
                                 "_height": "16"
                              }
                           },
                           "MaxScaleDenominator": "94494.047619",
                           "_queryable": "1"
                        },
                        {
                           "Name": "3",
                           "Title": {
                              "__cdata": " SectionExtent "
                           },
                           "Abstract": {
                              "__cdata": " The current section extent/perimeter of a plan, excluding roads. Metadata_link http://sdinsw/sdi.nsw.gov.au/catalog/search/resource/details.page?uuid=%7BF7112218-6884-468B-98A8-3CEC3500C59B%7D "
                           },
                           "CRS": [
                              "CRS:84",
                              "EPSG:4326",
                              "EPSG:3857",
                              "EPSG:102100"
                           ],
                           "EX_GeographicBoundingBox": {
                              "westBoundLongitude": "141.001141",
                              "eastBoundLongitude": "153.635972",
                              "southBoundLatitude": "-37.217041",
                              "northBoundLatitude": "-28.168100"
                           },
                           "BoundingBox": [
                              {
                                 "_CRS": "CRS:84",
                                 "_minx": "141.001141",
                                 "_miny": "-37.217041",
                                 "_maxx": "153.635972",
                                 "_maxy": "-28.168100"
                              },
                              {
                                 "_CRS": "EPSG:4326",
                                 "_minx": "-37.217041",
                                 "_miny": "141.001141",
                                 "_maxx": "-28.168100",
                                 "_maxy": "153.635972"
                              },
                              {
                                 "_CRS": "EPSG:3857",
                                 "_minx": "15696175.195250",
                                 "_miny": "-4469402.858000",
                                 "_maxx": "17102678.157750",
                                 "_maxy": "-3270183.981750"
                              },
                              {
                                 "_CRS": "EPSG:102100",
                                 "_minx": "15696175.195250",
                                 "_miny": "-4469402.858000",
                                 "_maxx": "17102678.157750",
                                 "_maxy": "-3270183.981750"
                              }
                           ],
                           "Style": {
                              "Name": "default",
                              "Title": "3",
                              "LegendURL": {
                                 "Format": [
                                    "image/png"
                                 ],
                                 "OnlineResource": {
                                    "_xmlns:xlink": "http://www.w3.org/1999/xlink",
                                    "_xlink:href": "http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=3",
                                    "_xlink:type": "simple"
                                 },
                                 "_width": "16",
                                 "_height": "16"
                              }
                           },
                           "MaxScaleDenominator": "47247.023810",
                           "_queryable": "1"
                        },
                        {
                           "Name": "4",
                           "Title": {
                              "__cdata": " Rural_PlanExtent "
                           },
                           "Abstract": {
                              "__cdata": " The current extent/perimeter of a plan, excluding roads and non-current lots. Metadata_link http://sdinsw/sdi.nsw.gov.au/catalog/search/resource/details.page?uuid=%7B199E23E0-B7DE-41B1-AFB4-78AE8EE651B1%7D "
                           },
                           "CRS": [
                              "CRS:84",
                              "EPSG:4326",
                              "EPSG:3857",
                              "EPSG:102100"
                           ],
                           "EX_GeographicBoundingBox": {
                              "westBoundLongitude": "140.999313",
                              "eastBoundLongitude": "159.084568",
                              "southBoundLatitude": "-37.440737",
                              "northBoundLatitude": "-28.157021"
                           },
                           "BoundingBox": [
                              {
                                 "_CRS": "CRS:84",
                                 "_minx": "140.999313",
                                 "_miny": "-37.440737",
                                 "_maxx": "159.084568",
                                 "_maxy": "-28.157021"
                              },
                              {
                                 "_CRS": "EPSG:4326",
                                 "_minx": "-37.440737",
                                 "_miny": "140.999313",
                                 "_maxx": "-28.157021",
                                 "_maxy": "159.084568"
                              },
                              {
                                 "_CRS": "EPSG:3857",
                                 "_minx": "15695971.703500",
                                 "_miny": "-4500719.260500",
                                 "_maxx": "17709213.067500",
                                 "_maxy": "-3268784.951625"
                              },
                              {
                                 "_CRS": "EPSG:102100",
                                 "_minx": "15695971.703500",
                                 "_miny": "-4500719.260500",
                                 "_maxx": "17709213.067500",
                                 "_maxy": "-3268784.951625"
                              }
                           ],
                           "Style": {
                              "Name": "default",
                              "Title": "4",
                              "LegendURL": {
                                 "Format": [
                                    "image/png"
                                 ],
                                 "OnlineResource": {
                                    "_xmlns:xlink": "http://www.w3.org/1999/xlink",
                                    "_xlink:href": "http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=4",
                                    "_xlink:type": "simple"
                                 },
                                 "_width": "16",
                                 "_height": "16"
                              }
                           },
                           "MinScaleDenominator": "94494.992560",
                           "MaxScaleDenominator": "944940.476190",
                           "_queryable": "1"
                        },
                        {
                           "Name": "5",
                           "Title": {
                              "__cdata": " Large_Rural_PlanExtent "
                           },
                           "Abstract": {
                              "__cdata": " The current extent/perimeter of a plan, excluding roads and non-current lots. Metadata_link http://sdinsw/sdi.nsw.gov.au/catalog/search/resource/details.page?uuid=%7B199E23E0-B7DE-41B1-AFB4-78AE8EE651B1%7D "
                           },
                           "CRS": [
                              "CRS:84",
                              "EPSG:4326",
                              "EPSG:3857",
                              "EPSG:102100"
                           ],
                           "EX_GeographicBoundingBox": {
                              "westBoundLongitude": "140.999313",
                              "eastBoundLongitude": "159.084568",
                              "southBoundLatitude": "-37.440737",
                              "northBoundLatitude": "-28.157021"
                           },
                           "BoundingBox": [
                              {
                                 "_CRS": "CRS:84",
                                 "_minx": "140.999313",
                                 "_miny": "-37.440737",
                                 "_maxx": "159.084568",
                                 "_maxy": "-28.157021"
                              },
                              {
                                 "_CRS": "EPSG:4326",
                                 "_minx": "-37.440737",
                                 "_miny": "140.999313",
                                 "_maxx": "-28.157021",
                                 "_maxy": "159.084568"
                              },
                              {
                                 "_CRS": "EPSG:3857",
                                 "_minx": "15695971.703500",
                                 "_miny": "-4500719.260500",
                                 "_maxx": "17709213.067500",
                                 "_maxy": "-3268784.951625"
                              },
                              {
                                 "_CRS": "EPSG:102100",
                                 "_minx": "15695971.703500",
                                 "_miny": "-4500719.260500",
                                 "_maxx": "17709213.067500",
                                 "_maxy": "-3268784.951625"
                              }
                           ],
                           "Style": {
                              "Name": "default",
                              "Title": "5",
                              "LegendURL": {
                                 "Format": [
                                    "image/png"
                                 ],
                                 "OnlineResource": {
                                    "_xmlns:xlink": "http://www.w3.org/1999/xlink",
                                    "_xlink:href": "http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=5",
                                    "_xlink:type": "simple"
                                 },
                                 "_width": "16",
                                 "_height": "16"
                              }
                           },
                           "MinScaleDenominator": "944941.421131",
                           "MaxScaleDenominator": "9449404.761905",
                           "_queryable": "1"
                        }
                     ],
                     "_queryable": "1"
                  },
                  {
                     "Title": {
                        "__cdata": " Cadastre_Labels "
                     },
                     "Abstract": {
                        "__cdata": " A group layer for controlling the display of cadastral labelling for plan, section and lot. "
                     },
                     "CRS": [
                        "CRS:84",
                        "EPSG:4326",
                        "EPSG:3857",
                        "EPSG:102100"
                     ],
                     "EX_GeographicBoundingBox": {
                        "westBoundLongitude": "140.999313",
                        "eastBoundLongitude": "159.084568",
                        "southBoundLatitude": "-37.440737",
                        "northBoundLatitude": "-28.157021"
                     },
                     "BoundingBox": [
                        {
                           "_CRS": "CRS:84",
                           "_minx": "140.999313",
                           "_miny": "-37.440737",
                           "_maxx": "159.084568",
                           "_maxy": "-28.157021"
                        },
                        {
                           "_CRS": "EPSG:4326",
                           "_minx": "-37.440737",
                           "_miny": "140.999313",
                           "_maxx": "-28.157021",
                           "_maxy": "159.084568"
                        },
                        {
                           "_CRS": "EPSG:3857",
                           "_minx": "15695971.703500",
                           "_miny": "-4500719.260500",
                           "_maxx": "17709213.067500",
                           "_maxy": "-3268784.951625"
                        },
                        {
                           "_CRS": "EPSG:102100",
                           "_minx": "15695971.703500",
                           "_miny": "-4500719.260500",
                           "_maxx": "17709213.067500",
                           "_maxy": "-3268784.951625"
                        }
                     ],
                     "Layer": [
                        {
                           "Name": "7",
                           "Title": {
                              "__cdata": " Lot_Labels "
                           },
                           "Abstract": {
                              "__cdata": " A parcel of land created in a plan of subdivison or title e.g Lot 10 in DP12345. Metadata_link http://sdinsw/sdi.nsw.gov.au/catalog/search/resource/details.page?uuid=%7B0A6AA566-AFFC-4932-AC60-71144956CF77%7D "
                           },
                           "CRS": [
                              "CRS:84",
                              "EPSG:4326",
                              "EPSG:3857",
                              "EPSG:102100"
                           ],
                           "EX_GeographicBoundingBox": {
                              "westBoundLongitude": "140.999313",
                              "eastBoundLongitude": "159.084568",
                              "southBoundLatitude": "-37.440737",
                              "northBoundLatitude": "-28.157021"
                           },
                           "BoundingBox": [
                              {
                                 "_CRS": "CRS:84",
                                 "_minx": "140.999313",
                                 "_miny": "-37.440737",
                                 "_maxx": "159.084568",
                                 "_maxy": "-28.157021"
                              },
                              {
                                 "_CRS": "EPSG:4326",
                                 "_minx": "-37.440737",
                                 "_miny": "140.999313",
                                 "_maxx": "-28.157021",
                                 "_maxy": "159.084568"
                              },
                              {
                                 "_CRS": "EPSG:3857",
                                 "_minx": "15695971.703500",
                                 "_miny": "-4500719.260500",
                                 "_maxx": "17709213.067500",
                                 "_maxy": "-3268784.951625"
                              },
                              {
                                 "_CRS": "EPSG:102100",
                                 "_minx": "15695971.703500",
                                 "_miny": "-4500719.260500",
                                 "_maxx": "17709213.067500",
                                 "_maxy": "-3268784.951625"
                              }
                           ],
                           "Style": {
                              "Name": "default",
                              "Title": "7",
                              "LegendURL": {
                                 "Format": [
                                    "image/png"
                                 ],
                                 "OnlineResource": {
                                    "_xmlns:xlink": "http://www.w3.org/1999/xlink",
                                    "_xlink:href": "http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=7",
                                    "_xlink:type": "simple"
                                 },
                                 "_width": "16",
                                 "_height": "16"
                              }
                           },
                           "_queryable": "1"
                        },
                        {
                           "Name": "8",
                           "Title": {
                              "__cdata": " SectionExtent_Labels "
                           },
                           "Abstract": {
                              "__cdata": " The current section extent/perimeter of a plan, excluding roads. Multi-part features have been exploded to single-part for labelling purposes. Metadata_link http://sdinsw/sdi.nsw.gov.au/catalog/search/resource/details.page?uuid=%7BF7112218-6884-468B-98A8-3CEC3500C59B%7D "
                           },
                           "CRS": [
                              "CRS:84",
                              "EPSG:4326",
                              "EPSG:3857",
                              "EPSG:102100"
                           ],
                           "EX_GeographicBoundingBox": {
                              "westBoundLongitude": "141.001141",
                              "eastBoundLongitude": "153.635972",
                              "southBoundLatitude": "-37.217041",
                              "northBoundLatitude": "-28.168100"
                           },
                           "BoundingBox": [
                              {
                                 "_CRS": "CRS:84",
                                 "_minx": "141.001141",
                                 "_miny": "-37.217041",
                                 "_maxx": "153.635972",
                                 "_maxy": "-28.168100"
                              },
                              {
                                 "_CRS": "EPSG:4326",
                                 "_minx": "-37.217041",
                                 "_miny": "141.001141",
                                 "_maxx": "-28.168100",
                                 "_maxy": "153.635972"
                              },
                              {
                                 "_CRS": "EPSG:3857",
                                 "_minx": "15696175.195250",
                                 "_miny": "-4469402.858000",
                                 "_maxx": "17102678.157750",
                                 "_maxy": "-3270183.981750"
                              },
                              {
                                 "_CRS": "EPSG:102100",
                                 "_minx": "15696175.195250",
                                 "_miny": "-4469402.858000",
                                 "_maxx": "17102678.157750",
                                 "_maxy": "-3270183.981750"
                              }
                           ],
                           "Style": {
                              "Name": "default",
                              "Title": "8",
                              "LegendURL": {
                                 "Format": [
                                    "image/png"
                                 ],
                                 "OnlineResource": {
                                    "_xmlns:xlink": "http://www.w3.org/1999/xlink",
                                    "_xlink:href": "http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=8",
                                    "_xlink:type": "simple"
                                 },
                                 "_width": "16",
                                 "_height": "16"
                              }
                           },
                           "MaxScaleDenominator": "47247.023810",
                           "_queryable": "1"
                        },
                        {
                           "Name": "9",
                           "Title": {
                              "__cdata": " PlanExtent_Labels "
                           },
                           "Abstract": {
                              "__cdata": " The current extent/perimeter of a plan, excluding roads and non-current lots. Multi-part features have been exploded to single-part for labelling purposes. Metadata_link http://sdinsw/sdi.nsw.gov.au/catalog/search/resource/details.page?uuid=%7B199E23E0-B7DE-41B1-AFB4-78AE8EE651B1%7D "
                           },
                           "CRS": [
                              "CRS:84",
                              "EPSG:4326",
                              "EPSG:3857",
                              "EPSG:102100"
                           ],
                           "EX_GeographicBoundingBox": {
                              "westBoundLongitude": "140.999313",
                              "eastBoundLongitude": "159.084568",
                              "southBoundLatitude": "-37.440737",
                              "northBoundLatitude": "-28.157021"
                           },
                           "BoundingBox": [
                              {
                                 "_CRS": "CRS:84",
                                 "_minx": "140.999313",
                                 "_miny": "-37.440737",
                                 "_maxx": "159.084568",
                                 "_maxy": "-28.157021"
                              },
                              {
                                 "_CRS": "EPSG:4326",
                                 "_minx": "-37.440737",
                                 "_miny": "140.999313",
                                 "_maxx": "-28.157021",
                                 "_maxy": "159.084568"
                              },
                              {
                                 "_CRS": "EPSG:3857",
                                 "_minx": "15695971.703500",
                                 "_miny": "-4500719.260500",
                                 "_maxx": "17709213.067500",
                                 "_maxy": "-3268784.951625"
                              },
                              {
                                 "_CRS": "EPSG:102100",
                                 "_minx": "15695971.703500",
                                 "_miny": "-4500719.260500",
                                 "_maxx": "17709213.067500",
                                 "_maxy": "-3268784.951625"
                              }
                           ],
                           "Style": {
                              "Name": "default",
                              "Title": "9",
                              "LegendURL": {
                                 "Format": [
                                    "image/png"
                                 ],
                                 "OnlineResource": {
                                    "_xmlns:xlink": "http://www.w3.org/1999/xlink",
                                    "_xlink:href": "http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=9",
                                    "_xlink:type": "simple"
                                 },
                                 "_width": "16",
                                 "_height": "16"
                              }
                           },
                           "MaxScaleDenominator": "94494.047619",
                           "_queryable": "1"
                        }
                     ],
                     "_queryable": "1"
                  }
               ]
            }
         ]
      },
      "_xmlns": "http://www.opengis.net/wms",
      "_xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "_xmlns:esri_wms": "http://www.esri.com/wms",
      "_version": "1.3.0",
      "_xsi:schemaLocation": "http://www.opengis.net/wms http://schemas.opengis.net/wms/1.3.0/capabilities_1_3_0.xsd http://www.esri.com/wms http://maps.six.nsw.gov.au/arcgis/services/public/NSW_Cadastre/MapServer/WmsServer?version=1.3.0%26service=WMS%26request=GetSchemaExtension"
   }
}