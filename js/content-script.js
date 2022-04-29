const addTrackerToStorage = (tracker) => {
chrome.storage.sync.get(data => {
        if (!data[tracker].includes(window.location.hostname)) {
            data[tracker].push(window.location.hostname);
            chrome.storage.sync.set({ [tracker]: data[tracker] });
        }
    })
}

const scanPageForTrackers = () => {
    var serializer = new XMLSerializer();
    var serializedDOM = serializer.serializeToString(document.body);

    if (serializedDOM.search('twq') > -1) {
        addTrackerToStorage("Twitter");
    }
    if (serializedDOM.search('fbq') > -1) {
        addTrackerToStorage("Facebook");
    }
    if (serializedDOM.search('obApi') > -1) {
        addTrackerToStorage("Outbrain");
    }
    if (serializedDOM.search('gtag') > -1) {
        addTrackerToStorage("Google");
    }
    if (serializedDOM.search('qpl') > -1) {
        addTrackerToStorage("Google");
    }
}

scanPageForTrackers();