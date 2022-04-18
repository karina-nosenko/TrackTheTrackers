var serializer = new XMLSerializer();
var text = serializer.serializeToString(document.body);

if(text.search('twq') > -1) {
    chrome.storage.sync.set({ 'text': 'The page contains a Twitter tracker' });
} else {
    chrome.storage.sync.set({ 'text': 'Twitter tracker not found in the current page' });
}