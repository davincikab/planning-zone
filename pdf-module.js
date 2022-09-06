let PdfModule = function() {
    this.source = document.getElementById("pdf-div");
    this.miniMap = document.getElementById("mini-map");
    this.mapElement = document.getElementById("map");

    this.closeBtn = document.getElementById('close-pdf');
    this.openPdfViewBtn = document.getElementById("open-pdf-view");
    this.buttonPrintPDF = document.getElementById("print-pdf");

    this.doc = new jsPDF();

    this.init = () => {
        // event listeners
        this.closeBtn.onclick = () => this.togglePDFView();
        this.openPdfViewBtn.onclick = () => {
            this.handlePrintAction();
        }
        this.buttonPrintPDF.onclick = () => this.printPDF();
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
    }

    // update property info
    this.updatePropertyInfo = (info) => {
        this.propertyInfo = info;

        // update the rendered items;
    }

    this.updateAddress = (address) => {
        this.address = address;

        // update rendered address
    }


    this.handlePrintAction = () => {
        // popup
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
            this.miniMap.innerHTML = `<img src="${imageData}" />`;

            this.togglePDFView();
            // var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
        });
    }


    this.printPDF = () => {

        let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
        let title = "Property Report";

        mywindow.document.write(`<html>
            <head>
                <title>${title}</title>
                <style>
                    :root  {--black:#000;--light:#ddd;--white:#fff;--primary:teal;} body{margin:0; padding:0; position:relative} .pdf-div {height: auto;width: 100%;margin: 0 auto;background-color: white;box-shadow: 0px 0px 0.5rem #fff;}.pdf-div .pdf-header {display: flex;background-color: teal; width:100%; }.pdf-div .pdf-header img {height: 150px;}.pdf-div .title-section {background-color: var(--primary);flex:1;font-style: italic;display: flex;overflow: hidden;}.title-section .slant-bg {background-color: white;width: 100px;height: 150%;transform: rotate(10deg);margin-left: -50px;margin-top: -50px;}.title-section .text {padding-left: 1.5rem;display: flex;flex-direction: column;align-items: center;justify-content: end;margin-bottom: 1rem;}.title-section h2 {color:white;font-size: 2.5rem;margin:0 0 1rem;}.title-section .address {color:var(--white);font: 1.5rem;font-style: normal;}.section-intro {display: flex;padding:0 3rem;margin-top: 1rem;}.mini-map {width: 300px;background-color: var(--light); overflow:hidden}.section-intro .map-info {padding-left: 2rem;}.section-info .item {display: flex;margin:0.5rem 0;}.section-info .item div:first-child {width: 120px;margin-right: 1rem;}.section {padding:1rem 3rem 0;}.section .section-title, .section-title {color:var(--primary);font-size: 1.25rem;margin:0.5rem 0 1rem;font-weight: 600;}.section .section-subtitle {color:var(--black);}
                    .mini-map {
                        height: 250px;
                        overflow: hidden;
                        background-color: var(--primary);
                    }
                    
                    .mini-map img {
                        object-fit: cover;
                        width: calc(300px - 1rem);
                        height: 250px;
                    }
                    @media print {
                        .pdf-div .title-section{
                            background-color: teal !important;
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
}

let pdfModule = new PdfModule();
pdfModule.init();