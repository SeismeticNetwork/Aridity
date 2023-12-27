function handleKeyPress(event) {
    if (event.keyCode === 13) {
      processInput();
    }
  }

  function processInput() {
    var inputValue = document.getElementById("inputField").value;
    const URL = search(inputValue, 'https://www.google.com/search?q=%s')
    window.location.href = './go.html#' + URL
  }

  function search(input, template) {
try {
  return new URL(input).toString();
} catch (err) {
}

try {
  const url = new URL(`http://${input}`);
  if (url.hostname.includes(".")) return url.toString();
} catch (err) {
}

return template.replace("%s", encodeURIComponent(input));
}

function AB_OS() {
  var inputValue = document.getElementById("inputField").value;
    const URL = search(inputValue, 'https://www.google.com/search?q=%s')
    Open_AB('../go.html#' + URL)
}

function DR_OS() {
  var inputValue = document.getElementById("inputField").value;
    const URL = search(inputValue, 'https://www.google.com/search?q=%s')
    window.open('../go.html#' + URL)
}

function Open_AB(url) {
  const popup = open("about:blank", "_blank");
    if (!popup || popup.closed) {
      alert("Please allow popups and redirects.");
    } else {
      const doc = popup.document;
      const iframe = doc.createElement("iframe");
      const style = iframe.style;
      const link = doc.createElement("link");
      const name = localStorage.getItem("name") || "My Drive - Google Drive";
      const icon =
        localStorage.getItem("icon") ||
        "https://ssl.gstatic.com/assets/media/branding/product/1x/drive_2020q4_32dp.png";
      doc.title = name;
      link.rel = "icon";
      link.href = url;
      iframe.src = url;
      style.position = "fixed";
      style.top = style.bottom = style.left = style.right = 0;
      style.border = style.outline = "none";
      style.width = style.height = "100%";
      doc.head.appendChild(link);
      doc.body.appendChild(iframe);
}}

function Direct(url) {
  const popup = open("about:blank", "_blank");
    if (!popup || popup.closed) {
      alert("Please allow popups and redirects.");
    } else {
      const doc = popup.document;
      const style = iframe.style;
      const bg = doc.createElement('script');
      bg.innerHTML = 'window.location.href="' + url + '";' 
      doc.body.appendChild(bg);
      const bigText = doc.createElement('h1');
      const link = doc.createElement("link");
      bigText.textContent = 'Loading...'
      const name = localStorage.getItem("name") || "My Drive - Google Drive";
      const icon =
        localStorage.getItem("icon") ||
        "https://ssl.gstatic.com/assets/media/branding/product/1x/drive_2020q4_32dp.png";
      doc.title = name;
      link.rel = "icon";
      style.position = "fixed";
      style.top = style.bottom = style.left = style.right = 0;
      style.border = style.outline = "none";
      style.width = style.height = "100%";
      doc.head.appendChild(link);
      doc.body.append(bigText);
}}


const tipsArray = [
  "we the best music",
  "stay hydrated",
  "who uses proxies on the weekends",
  "The chances of you seeing this are 25%",
  "Try Seismetic you wont regret it",
  "i like fire trucks",
  "🫠 😃🥺😈",
  "a",
  "b",
  "c",
  "In the settings there are settings",
  "not rammerhead browser",
  "the most un user friendly browser",
  "opinions",
  "what ever happend to hannah montanta",
  "frick septembersrich",
];

const tipElement = document.getElementById('Tip');
const randomIndex = Math.floor(Math.random() * tipsArray.length);
tipElement.textContent = tipsArray[randomIndex];