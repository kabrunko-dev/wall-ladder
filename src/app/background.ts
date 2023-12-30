async function getCurrentTab(): Promise<chrome.tabs.Tab[]> {
  const queryOptions = { active: true, lastFocusedWindow: true };
  return await chrome.tabs.query(queryOptions);
}

chrome.runtime.onMessage.addListener(async (message) => {
  if (message === 'curr-tab-btn') {
    const [tab] = await getCurrentTab()
    
    if(tab) {
      chrome.tabs.update({url: `https://freedium.cfd/${tab.url}`});
    }
  }
});