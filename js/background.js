chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({Microsoft:[],Facebook:[],Twitter:[],Outbrain:[],Adobe:[]});
});