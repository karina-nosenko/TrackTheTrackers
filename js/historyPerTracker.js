const getTrackerHistory = (tracker) => {
    chrome.storage.sync.get(data => {
        if(tracker == "Twitter") {
            return data.Twitter;
        }
        if(tracker == "Facebook") {
            return data.Facebook;
        }
        if(tracker == "Google") {
            return data.Google;
        }
        if(tracker == "Outbrain") {
            return data.Outbrain;
        }
    })
};

const showTrackerHistory = (tracker) => {
    const linksListElement = document.getElementById(tracker+'History');
    const linksList = getTrackerHistory(tracker);

    if(linksList.length === 0) {
        linksListElement.innerHTML = `<center>No history for the ${ tracker } tracker was found.</center>`;
        return;
    }

    linksList.foreach(link => {
        linksListElement.innerHTML += `<li><a href="${ link }">${ link }</a></li>`;
    });   
}