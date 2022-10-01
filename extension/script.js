document.getElementById("auto-fill").addEventListener("click", () => {
  /* Auto fill form */
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {
        value: document.getElementById("value").value,
      },
      function (response) {
        console.log(response.status);
      }
    );
  });
});
