
export default function (app, { trackingId }) {
    let gtagScript = document.createElement('script');
    let inlineScript = document.createElement('script');
    
    gtagScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=' + trackingId);
    gtagScript.toggleAttribute('async', true);
    document.head.appendChild(gtagScript);
    
    inlineScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        
        function gtag() {
            dataLayer.push(arguments);
        }
        
        gtag('js', new Date());
        gtag('config', '${trackingId}');
    `;
    document.head.appendChild(inlineScript);
}
