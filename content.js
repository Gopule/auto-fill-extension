chrome.runtime.onMessage.addListener(function (
  _request,
  _sender,
  sendResponse
) {
  try {
    const currentUrl = window.location.href;
    const body = document.querySelector("body");
    const stopButton = document.createElement("div");
    enableStopButton(stopButton);
    document.body.insertBefore(stopButton, document.body.firstElementChild);

    const changedElements = new Set();

    body.addEventListener("change", (event) => {
      changedElements.add(event.target);
    });

    stopButton.addEventListener("click", async () => {
      const tags = new Set();
      changedElements.forEach((element) => tags.add(element.tagName));

      const tagData = {};
      tags.forEach((tag) => {
        tagData[tag] = [];
        document.querySelectorAll(`${tag}`).forEach((element, i) => {
          if (changedElements.has(element)) {
            const indexValue = {};
            indexValue[i] = element.value;
            tagData[tag].push(indexValue);
          }
        });
      });

      const data = {};
      data[currentUrl] = tagData;

      await chrome.storage.local.set(data);
      disableStopButton(stopButton);

      const result = await chrome.storage.local.get(currentUrl);
      console.log(result);
    });

    // const tag = document.querySelectorAll("input")[0].value = request.value;
    sendResponse({ status: "Success!" });
  } catch (error) {
    console.log(error);
    sendResponse({ status: "Exception occurred!" });
  }
});

const enableStopButtonStyle = {
  position: "sticky",
  top: "20px",
  backgroundColor: "red",
  width: "32px",
  height: "32px",
  left: "50%",
  borderRadius: "7px",
  cursor: "pointer",
};

const enableStopButton = (stopButton) => {
  for (const [key, value] of Object.entries(enableStopButtonStyle)) {
    stopButton.style[key] = value;
  }
};

const disableStopButton = (stopButton) => {
  stopButton.style.display = "none";
};

// chrome.storage.sync.set({key: value}, function() {
//   console.log('Value is set to ' + value);
// });

// chrome.storage.sync.get(['key'], function(result) {
//   console.log('Value currently is ' + result.key);
// });

// position: sticky;
// top: 20px;
// background-color: red;
// width: 32px;
// height: 32px;
// left: 50%;
// border-radius: 7px;
// cursor: pointer;

// function appendBorderToBody(body) {
//   const borderContainer = document.createElement("div")
//   borderContainer.style.padding = "10px"
//   borderContainer.style.height = "100vh"
//   borderContainer.style.display = "flex"
//   borderContainer.style.justifyContent = "space-between"

//   const borderTop = document.createElement("div")
//   borderTop.style.display = "flex"
//   borderTop.style.position = "sticky"
//   borderTop.style.top = "10px"
//   borderTop.style.justifyContent = "space-between"
//   borderTop.style.alignItems = "center"

//   const borderBottom = document.createElement("div")
//   borderBottom.style.display = "flex"
//   borderBottom.style.position = "sticky"
//   borderBottom.style.bottom = "10px"
//   borderBottom.style.justifyContent = "space-between"
//   borderBottom.style.alignItems = "center"

//   const topLeftBorder = document.createElement("div")
//   topLeftBorder.style.height = "150px"
//   topLeftBorder.style.width = "150px"
//   topLeftBorder.style.borderTop = "2px solid red"
//   topLeftBorder.style.borderLeft = "2px solid red"

//   const topRightBorder = document.createElement("div")
//   topRightBorder.style.height = "150px"
//   topRightBorder.style.width = "150px"
//   topRightBorder.style.borderTop = "2px solid red"
//   topRightBorder.style.borderRight = "2px solid red"

//   const bottomLeftBorder = document.createElement("div")
//   bottomLeftBorder.style.height = "150px"
//   bottomLeftBorder.style.width = "150px"
//   bottomLeftBorder.style.borderBottom = "2px solid red"
//   bottomLeftBorder.style.borderLeft = "2px solid red"

//   const bottomRightBorder = document.createElement("div")
//   bottomRightBorder.style.height = "150px"
//   bottomRightBorder.style.width = "150px"
//   bottomRightBorder.style.borderBottom = "2px solid red"
//   bottomRightBorder.style.borderRight = "2px solid red"

//   borderTop.appendChild(topLeftBorder)
//   borderTop.appendChild(topRightBorder)
//   borderBottom.appendChild(bottomLeftBorder)
//   borderBottom.appendChild(bottomRightBorder)

//   borderContainer.appendChild(borderTop)
//   borderContainer.appendChild(borderBottom)

//   body.appendChild(borderContainer)
//   console.log(borderContainer)
//   return body
// }
{
  /* <div class="border-container">
  <div class="top-border">
    <div class="top-left-border"></div>
    <div class="top-right-border"></div>
  </div>
  <div class="bottom-border">
    <div class="bottom-left-border"></div>
    <div class="bottom-right-border"></div>
  </div>
</div> */
}
