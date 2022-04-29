let trackersFound = false;

const getHostName = () => {
    return window.location.hostname;
}

const displayCurrentTracker = (tracker) => {
    if(!tracker) {
        // TODO: display empty list message
        return;
    }
    trackersFound = true;

    // TODO: display the tracker
}

const findCurrentTrackers = (hostName) => {
    chrome.storage.sync.get(data => {
        if(data.Facebook.includes(hostName)) {
            displayCurrentTracker('Facebook');
        }
        if(data.Twitter.includes(hostName)) {
            displayCurrentTracker('Twitter');
        }
        if(data.Outbrain.includes(hostName)) {
            displayCurrentTracker('Outbrain');
        }
        if(data.Google.includes(hostName)) {
            displayCurrentTracker('Google');
        }

        if(!trackersFound) {
            displayCurrentTracker();    // Empty list message will be displayed
        }
    })
}

window.addEventListener('load', () => {
    chrome.tabs.query({currentWindow:true,active:true},([tab])=>{
        chrome.scripting.executeScript({
            target: {tabId:tab.id},
            function: getHostName
        }, (frames) => {
            frames.forEach(frame => {
                if(frame.result){
                    findCurrentTrackers(frame.result);           
                }
            });
        })
    })
})