chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.url.indexOf("example.com") !== -1) {
      return { redirectUrl: "https://google.com" };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);