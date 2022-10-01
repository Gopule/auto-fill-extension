chrome.runtime.onInstalled.addListener(async () => {
  const url = chrome.runtime.getURL("welcome/home.html");
  await chrome.tabs.create({ url });
});
