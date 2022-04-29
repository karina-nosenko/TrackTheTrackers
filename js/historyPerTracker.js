const getHistoryOfTracker = (tracker) => {
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

// TODO: display history for each tracker