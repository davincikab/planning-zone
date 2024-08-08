let PdfModule = function(map) {
    this.map = map;
    this.source = document.getElementById("pdf-div");
    this.miniMap = document.getElementById("mini-map");
    this.mapElement = document.getElementById("map");

    this.imageViewModal = document.getElementById("image-modal");
    this.imageSection = document.getElementById("image-section");
    this.spinnerContainer = document.getElementById("spinner-container");

    this.closeBtn = document.getElementById('close-pdf');
    this.closeImgBtn = document.getElementById("close-img");

    this.openPdfViewBtn = document.getElementById("open-pdf-view");
    this.buttonPrintPDF = document.getElementById("print-pdf");
    this.buttonImageView = document.getElementById("print-map-image");
    this.downloadButton = document.getElementById("donwnload-img");


    this.doc = new jsPDF();

    this.init = () => {
        // event listeners
        this.closeBtn.onclick = () => this.togglePDFView();
        this.openPdfViewBtn.onclick = () => {
            this.handlePrintAction();
        }

        this.buttonPrintPDF.onclick = () => {
            this.printPDF();
        }
        this.buttonImageView.onclick = () =>  this.printMapToPicture();

        this.closeImgBtn.onclick = () => this.toggleImageView();

        this.downloadButton.onclick = () => this.downloadImage();

        this.renderMap();
    }

    this.renderMap = () => {
        if(this.minimap) {
            this.minimap.remove();
        }


        this.minimap = L.map('mini-map', {
            center:{lat: -33.68953, lng: 150.60774},
            maxBounds:[[-38.03, 139.965 ], [-27.839, 155.258]],
            zoom: 15,
            maxZoom:22,
            interactive:false,
            zoomControl:false
        });

        this.darkTheme  = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}' + (L.Browser.retina ? '@2x.png' : '.png'), {
            attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20,
            minZoom: 0,
            opacity:1
        }).addTo(this.minimap);
    }

    this.updateSelectedProperty = (feature) => {
        this.renderMap();

        if(this.propertyPolygon) {
            this.propertyPolygon.remove();
        }

        console.log(feature);

        let polygonGeo = {"type":"FeatureCollection", "features":[feature]};
        this.propertyPolygon = L.geoJSON(polygonGeo, {
            style:function(ft) {
                return {
                    color:'#f87217',
                    weight:2.5,
                    fillColor:'transparent'
                }
            }
        }).addTo(this.minimap);


        this.minimap.fitBounds(this.propertyPolygon.getBounds(), { padding:L.point(30,30)});
    }
    
    this.updateSource = (sourceId) => {
        this.source = document.getElementById(sourceId);
    }

    this.renderPDF = () => {
        this.doc.fromHTML(
            this.source,
            15,
            15,
            // {'width': 180,'elementHandlers': elementHandler}
        );

        this.doc.output("dataurlnewwindow");
    }

    this.togglePDFView = () => {
        this.source.classList.toggle('d-none');

        document.querySelector("body").classList.remove("printing");
    }

    this.setLocation = (center) => {
        this.location = center;
    }

    this.renderLocationMarker = () => {
        if(this.locationMarker) {
            this.locationMarker.remove();
        }


        this.locationMarker = L.marker(this.location);
        // .addTo(this.minimap);
    }

    this.getLocationAddress = () => {
        // console.log(map);

        this.location = this.location || this.map.getCenter();

        let apiKey = "pk.eyJ1IjoiaGlnaGlxIiwiYSI6ImNsNnVwbHFhMDBsamozbnA1ajBraHlqbmMifQ.mP1mWm5OxGRKfiN0qiH-bg";
        let endpoints = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.location.lng},${this.location.lat}.json?access_token=${apiKey}`;

        fetch(endpoints)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.features) {
                let add = data.features[0]['place_name'];
                this.updateAddress(add);
            }
            
        })
        .catch(console.error);
    }

    this.getPropertyInfo = () => {
        let planningLayers = layerControl.layers['Primary Planning Layer'];
    }

    this.queryLayer = async() => {

    }

    // update property info
    this.updatePropertyInfo = (info) => {
        this.propertyInfo = info;

        // update the rendered items;
        document.getElementById("detailed-info").innerHTML = info;
    }

    this.updateSummaryInfo = (info) => {
        // surbub, lga,
        // document.getElementById("");
    }

    this.updateAddress = (address) => {
        this.address = address;

        // update rendered address
        document.getElementById("report-address").innerHTML = this.address;
        // document.getElementById("details-address").innerHTML = this.address
    }

    this.updateCouncilName = (council) => {
        this.councilName = council;

        // document.getElementById("city-council").innerHTML = council;
    }


    this.handlePrintAction = () => {
        // popup
        console.log("Print Action");
        this.spinnerContainer.classList.remove("d-none");
        document.getElementById("spinner-info").innerHTML = "Processing PDF...";

        this.renderMap();
        setTimeout(() => {
            pdfModule.minimap.setView(pdfModule.location);
            this.togglePDFView();
            this.spinnerContainer.classList.add("d-none");
            document.querySelector("body").classList.add("printing");

            this.updateSelectedProperty(this.targetFeature);
            this.renderLocationMarker();
            // domtoimage.toPng(document.querySelector("#map"), {quality:0.45})
            // .then((dataUrl) => {
            //     var img = new Image();
            //     img.src = dataUrl;

            //     this.miniMap.innerHTML = `<img src="${dataUrl}" />`;
            //     this.togglePDFView();
            //     this.spinnerContainer.classList.add("d-none");
            // })
            // .catch(function (error) {
            //     console.error('oops, something went wrong!', error);
            // });

           
       
        
            // html2canvas(
            //     document.querySelector("#map"), 
            //     { 
            //         useCORS:true,
            //         width:this.mapElement.clientWidth, 
            //         height:this.mapElement.clientHeight 
            //     }
            // ).then(canvas => {
            //     var imageData = canvas.toDataURL("image/png");
            //     // this.miniMap.appendChild(canvas);

            //     this.miniMap.innerHTML = `<img src="${imageData}" />`;
            //         this.togglePDFView();
            //         this.spinnerContainer.classList.add("d-none");
            // });

            // this.cadastreFeature.query
        }, 100);

        // this.getLocationAddress();
        // this.getPropertyInfo();
    }


    this.printPDF = () => {
        document.querySelector("body").classList.add("printing");
        window.print();

        return;
        let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
        let title = "Property Report";

        mywindow.document.write(`<html>
            <head>
                <title>${title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
                <style>
                    :root  {--black:#000;
                        --light:#ddd;
                        --white:#fff;
                        --primary:#f87217;} body{margin:0; padding:0; position:relative} .pdf-div {height: auto;width: 100%;margin: 0 auto;background-color: white;box-shadow: 0px 0px 0.5rem #fff;}.pdf-div .pdf-header {display: flex;background-color: teal; width:100%; }.pdf-div .pdf-header img {height: 150px;}.pdf-div .title-section {background-color: var(--primary);flex:1;display: flex;overflow: hidden;}.title-section .slant-bg {background-color: white;width: 100px;height: 150%;transform: rotate(10deg);margin-left: -50px;margin-top: -50px;}.title-section .text {padding-left: 1.5rem;display: flex;flex-direction: column;align-items: center;justify-content: center;margin-bottom: 1rem;}.title-section h2 {color:white;font-size: 2.5rem;margin:0 0 1rem;}.title-section .address {color:var(--white);font: 1.5rem;font-style: normal;}.section-intro {display: flex;padding:0 3rem;margin-top: 1rem;}.mini-map {width: 300px;background-color: var(--light); overflow:hidden}.section-intro .map-info {padding-left: 2rem;}.section-info .item {display: flex;margin:0.5rem 0;}.section-info .item div:first-child {width: 120px;margin-right: 1rem;}.section {padding:1rem 3rem 0;}.section .section-title, .section-title {color:var(--primary);font-size: 1.25rem;margin:0.5rem 0 1rem;font-weight: 600;}.section .section-subtitle {color:var(--black);}
                    .info-click-feature {border-left: 1px solid #939393;margin: 0.5rem;padding: 0 8px;font-weight: 500;}.info-click-feature-attribute {display: block;font-size: .95rem;line-height: 1.5;margin-bottom: 4px;width: 100%;}.info-click-feature-attribute-value {font-size: 0.8rem;}.mini-map img {object-fit: cover;width: 300px;height: 280px;}.popup-header {padding: 10px;border-bottom: 1px solid #ddd;font-size: 15px;}.popup-content .popup-body {max-height: 300px;overflow-y: auto;}.leaflet-popup-content table {padding:10px;}.table tr .keys {font-weight: 600;text-transform: capitalize;}td.keys {text-transform: capitalize;}
                    .print-pdf {
                        display:none !important;
                    }

                    .pdf-div {position: fixed;z-index: 3;top: 5%;left: 20%;height: 90vh;overflow-y: auto; width: 100%;margin: 0 auto;background-color: white;box-shadow: 0px 0px 0.5rem #000;}.pdf-div .pdf-header {display: flex;background-color: white;justify-content: flex-end;}.pdf-div .pdf-header img {width: 300px;}.pdf-div .title-section {flex:1;display: flex;overflow: hidden;height: 70vh;color:black !important;}.pdf-body {margin-bottom: 1.5rem;font-size: 15px;}.pdf-body .page {height: 100vh;position: relative;padding:50px;border-bottom:5px solid #000;}.page-header {font-size: 25px;font-weight: 800;color:#F87418;}.page-footer {position: absolute;bottom: 0px;width: 90%;height: 100px;display: flex;align-items: center;justify-content: space-between;}.title-section .slant-bg {background-color: white;width: 100px;height: 150%;transform: rotate(10deg);margin-left: -50px;margin-top: -50px;}.title-section .text {padding-left: 1.5rem;display: flex;flex-direction: column;justify-content: center;margin-bottom: 1rem;}.title-section h2 {color:var(--primary);font-size: 3.5rem;margin:0 0 0.25rem;}.title-section .address {color:var(--white);font: 1.5rem;font-style: normal;}.section-intro {display: flex;padding:0 3rem;margin-top: 2rem;}.mini-map {height: 250px;overflow: hidden;flex: 1;}.mini-map #map {width: 100%;height: 100%;}.mini-map img {object-fit: cover;width: 100%;height: 350px;}.section-intro .map-info {padding-left: 2rem;flex:1;}.section-info .item {display: flex;margin:0.5rem 0;justify-content: space-between;}.section-info .item div:last-child {font-size:13px;}.section-info .item div:first-child {margin-right: 1rem;}.section {padding: 1rem 3rem 0;}.section .section-title, .section-title {color:var(--primary);font-size: 1.25rem;margin:0.5rem 0 1rem;font-weight: 600;}.section .section-subtitle {color:var(--black);}.info-click-feature {border-left: 1px solid #939393;margin: 0.5rem;padding: 0 8px;font-weight: 500;}.info-click-feature-attribute {display: block;font-size: .95rem;line-height: 1.5;margin-bottom: 4px;width: 100%;}.info-click-feature-attribute-value {font-size: 0.8rem;}.mini-map img {object-fit: cover;width: 300px;height: 280px;}.popup-header {padding: 10px;border-bottom: 1px solid #ddd;font-size: 15px;}.popup-content .popup-body {max-height: 300px;overflow-y: auto;}.leaflet-popup-content table {padding:10px;}.table tr .keys {font-weight: 600;text-transform: capitalize;}td.keys {text-transform: capitalize;}

                    body { 
                        margin: 0; 
                        padding: 0; 
                        font-family: 'Poppins', sans-serif;
                    }

                    .section-intro .map-info {
                        flex: 1;
                    }

                    .pdf-body {
                        margin-bottom: 1.5rem;
                        font-size:15px;
                    }

                    .mini-map {
                        height: 250px;
                        overflow: hidden;
                        background-color: white;
                        flex: 1;
                    }
                    
                    .mini-map #map {
                        width: 100%;
                        height: 100%;
                    }
                    
                    .mini-map img {
                        object-fit: cover;
                        width: 100%;
                        height: 350px;
                    }

                    .section-info .item div:last-child {
                        font-size:13px;
                    }
                    

                    @media print {
                        .pdf-div .title-section{
                            background-color: #f87217 !important;
                            -webkit-print-color-adjust: exact; 
                        }


                    }
                </style>
            </head>
        `);
        
        mywindow.document.write('<body><div class="pdf-div">');
        mywindow.document.write(this.source.innerHTML);
        mywindow.document.write('</div></body></html>');

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        
        mywindow.onload = () => {
            mywindow.print();
        };
        // mywindow.close();

        return true;
    }

    this.toggleImageView = () => {
        console.log("Home");
        this.imageViewModal.classList.toggle("d-none");
    }
    // print map
    this.printMapToPicture = () => {
        this.spinnerContainer.classList.remove("d-none");
        document.getElementById("spinner-info").innerHTML = "Converting Map To Image...";

        setTimeout(()=> {
            html2canvas(
                document.querySelector("#map"), 
                { 
                    useCORS:true,
                    width:this.mapElement.clientWidth, 
                    height:this.mapElement.clientHeight 
                }
            ).then(canvas => {
                console.log(canvas);
                // this.miniMap.appendChild(canvas);
    
                var imageData = canvas.toDataURL("image/png");
                this.imageSection.innerHTML = `<img src="${imageData}" height="100%" />`;
    
                this.toggleImageView();
                this.spinnerContainer.classList.add("d-none");
            });
        }, 100)
        
    }

    this.downloadImage = () => {
        let container = document.getElementById("modal-container");

        this.spinnerContainer.classList.remove("d-none");
        document.getElementById("spinner-info").innerHTML = "Processing the Map...";

        setTimeout(()=> {
            html2canvas(
                document.querySelector("#modal-container"), 
                { 
                    useCORS:true,
                    width:container.clientWidth, 
                    height:container.clientHeight 
                }
            ).then(canvas => {
                var imageData = canvas.toDataURL("image/png");
    
                let downloadLink = document.getElementById("download-link")
                downloadLink.href = imageData;
                downloadLink.click();

                this.spinnerContainer.classList.add("d-none");

                this.toggleImageView();
            });
        }, 100);
    
    }

    
}

let pdfModule = new PdfModule(map);
pdfModule.init();