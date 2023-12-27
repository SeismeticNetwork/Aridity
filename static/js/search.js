function handleKeyPress(event) {
  if (event.keyCode === 13) {
    processInput();
  }
}

function processInput() {
  var inputValue = document.getElementById("url-bar").value;
  const URL = search(inputValue, 'https://www.google.com/search?q=%s')
  const iframes = document.body.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        
        if (iframe.style.display == 'flex') {
          iframe.src = '../go.html#' + URL
        } else {
          console.log(' ')
        }

      });

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