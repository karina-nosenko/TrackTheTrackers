// let changeColor = document.getElementById("changeColor");

// // Initialize button with user's preferred color
// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// // The body of this function will be executed as a content script inside the
// // current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }

// let changeColor = document.getElementById("trackers");
// changeColor.innerHTML += 'abcsdddd';
// chrome.storage.sync.get("text1", ( text ) => {

//     if (text.text1)
//         changeColor.innerHTML += text.text1;
// });
// chrome.storage.sync.get("text2", ( text ) => {
//     if (text.text2)
//         changeColor.innerHTML += text.text2;
// });
// chrome.storage.sync.get("text3", (text ) => {
//     if (text.text3)
//         changeColor.innerHTML = text.text3;
// });
// chrome.storage.sync.get("text4", ( text ) => {
//     if (text.text4)
//         changeColor.innerHTML += text.text4;
// });
// chrome.storage.sync.get("text5", ( text ) => {
//     if (text.text5)
//         changeColor.innerHTML += text.text5;
// });
// chrome.storage.sync.get("text6", ( text ) => {
//     if (text.text6)
//         changeColor.innerHTML += text.text6;
// });
function getHostName(){
    return window.location.hostname;
}
function listTrackers(hostName){
    let changeColor = document.getElementById("trackers");
    chrom.storage.sync.get(data=>{
        if(data.Facebook.includes(hostName)){
            changeColor.innerHTML += "Facebook";
        }
        if(data.Twitter.includes(hostName)){
            changeColor.innerHTML += "Twitter";
        }
        if(data.OutBrains.includes(hostName)){
            changeColor.innerHTML += "OutBrains";
        }
        if(data.Google.includes(hostName)){
            changeColor.innerHTML += "Google";
        }
    })
}
//hostname
window.onload = ()=>{
    chrom.tabs.query({currentWindow:true,active:true},(tabs)=>{
        chrom.scrtipting.executeScript({
            target:{tabId:tabs[0].id},
            function:getHostName
        },(frames)=>{
            frames.forEach(frame => {
               if(frame.result){
                listTrackers(frame.result);
               }
            });
        })
    })
}