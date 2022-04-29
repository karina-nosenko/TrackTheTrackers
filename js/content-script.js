const addDomainToStorageOfTracker = (tracker) => {
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
        addDomainToStorageOfTracker("Twitter");
    }
    if (serializedDOM.search('fbq') > -1) {
        addDomainToStorageOfTracker("Facebook");
    }
    if (serializedDOM.search('obApi') > -1) {
        addDomainToStorageOfTracker("Outbrains");
    }
    if (serializedDOM.search('gtag') > -1) {
        addDomainToStorageOfTracker("Google");
    }
    if (serializedDOM.search('qpl') > -1) {
        addDomainToStorageOfTracker("Google");
    }
}

scanPageForTrackers();