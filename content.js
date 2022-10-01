chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  try {
    const tag = document.querySelectorAll("input")[0].value = request.value;

    sendResponse({ status: "Success!" });
  } catch (error) {
    console.log(error);
    sendResponse({ status: "Exception occurred!" });
  }
});
