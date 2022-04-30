const showTrackerHistory = (tracker) => {
    const linksListElement = document.getElementById(tracker+'History');

    chrome.storage.sync.get(data => {
        const linksList = data[tracker];

        if(linksList && linksList.length === 0) {
            linksListElement.innerHTML = `<center>No History Found.</center>`;
            return;
        }

        Array.from(linksList).forEach(link => {
            linksListElement.innerHTML += `<li><a href="${ link }">${ link }</a></li>`;
        });
    });
}

const adobe = document.getElementById('AdobeHistory');
const facebook = document.getElementById('FacebookHistory');
const twitter = document.getElementById('TwitterHistory');
const outbrain = document.getElementById('OutbrainHistory');
const microsoft = document.getElementById('MicrosoftHistory');

if(adobe) {
    showTrackerHistory('Adobe');
}
if(facebook) {
    showTrackerHistory('Facebook');
}
if(twitter) {
    showTrackerHistory('Twitter');
}
if (outbrain) {
    showTrackerHistory('Outbrain');
}
if (microsoft) {
    showTrackerHistory('Microsoft');
}