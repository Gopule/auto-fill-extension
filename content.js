chrome.runtime.onMessage.addListener(function (_request, _sender, sendResponse) {
  try {
    const body = document.querySelector("body")
    const stopButton = document.createElement('div');
    stopButton.style.position = "sticky"
    stopButton.style.top = "20px"
    stopButton.style.backgroundColor = "red"
    stopButton.style.width = "32px"
    stopButton.style.height = "32px"
    stopButton.style.left = "50%"
    stopButton.style.borderRadius = "7px"
    stopButton.style.cursor = "pointer"
    document.body.insertBefore(stopButton, document.body.firstElementChild);

    const changedElements = new Set()

    body.addEventListener("change", (event) => {
      changedElements.add(event.target)
    })

    stopButton.addEventListener("click", () => {
      const changes = {}

      for (const element of changedElements) {
        console.log("each element", element)
        const indentifiers = ["id", "class", "name"]

        for (const indentifier of indentifiers) {
          const indentity = element.getAttribute(indentifier)

          if (indentity) {
            changes[indentifier] = {indentity: element.value}
            break
          }
        }
      }

      console.log("changes", changes)
    })
    // const tag = document.querySelectorAll("input")[0].value = request.value;
    sendResponse({ status: "Success!" });
  } catch (error) {
    console.log(error);
    sendResponse({ status: "Exception occurred!" });
  }
});

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
{/* <div class="border-container">
  <div class="top-border">
    <div class="top-left-border"></div>
    <div class="top-right-border"></div>
  </div>
  <div class="bottom-border">
    <div class="bottom-left-border"></div>
    <div class="bottom-right-border"></div>
  </div>
</div> */}
