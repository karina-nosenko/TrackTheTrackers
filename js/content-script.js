var serializer = new XMLSerializer();
var text = serializer.serializeToString(document.body);
console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
// chrome.storage.local.clear(() => {

let counter = 0;
if (text.search('twq') > -1) {
    console.log("1111111");
    counter++;
    chrome.storage.sync.get(data => {
        if (!data.Twitter.includes(window.location.hostname)) {
            data.Twitter.push(window.location.hostname);
            chrome.storage.sync.set({ ["Twitter"]: data.Twitter });
        }
    })
    chrome.storage.sync.set({ 'text1': 'The page contains a Twitter tracker\n' });
    console.log("1111111");
}
if (text.search('fbq') > -1) {
    counter++;
    chrome.storage.sync.get(data => {
        if (!data.Facebook.includes(window.location.hostname)) {
            data.Facebook.push(window.location.hostname);
            chrome.storage.sync.set({ ["Facebook"]: data.Facebook });
        }
    })
    chrome.storage.sync.set({ 'text2': 'The page contains a facebook tracker\n' });
    // window.location.hostname;
    console.log("2222222");
}
if (text.search('obApi') > -1) {      //https://www.mako.co.il/news-channel12
    console.log("aaaa333333333333");
    chrome.storage.sync.get(data => {
        if (!data.Outbrains.includes(window.location.hostname)) {
            data.Outbrains.push(window.location.hostname);
            chrome.storage.sync.set({ ["Outbrains"]: data.Outbrains });
        }
    })
    // counter++;
    // let changeColor = document.getElementById("trackers");
    // changeColor.innerHTML += 'abcsdddd';
    // chrome.storage.sync.set({ 'text3': 'The page contains a outbrain tracker\n' });
    console.log("aaa333333333333/");
}
if (text.search('gtag') > -1) {      //
    counter++;
    chrome.storage.sync.get(data => {
        if (!data.Google.includes(window.location.hostname)) {
            data.Google.push(window.location.hostname);
            chrome.storage.sync.set({ ["Google"]: data.Google });
        }
    })
    chrome.storage.sync.set({ 'text4': 'The page contains a google tracker\n' });
    console.log("444444444");
}
if (text.search('qpl') > -1) {      //
    chrome.storage.sync.get(data => {
        if (!data.Google.includes(window.location.hostname)) {
            data.Google.push(window.location.hostname);
            chrome.storage.sync.set({ ["Google"]: data.Google });
        }
    })
    counter++;
    chrome.storage.sync.set({ 'text5': 'The page contains a google tracker\n' });
    console.log("55555555555");
}
if (counter == 0) {
    counter = 0;
    chrome.storage.sync.set({ 'text6': 'No trackers\n' });
}
