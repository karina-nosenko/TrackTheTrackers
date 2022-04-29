chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({Facebook:[],Twitter:[],Outbrains:[],Google:[]});
});