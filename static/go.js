let workerLoaded;
registerSW();
async function registerSW() {
  await navigator.serviceWorker.register("dn-sw.js", {
    scope: "/ar-dn",
  });
  const workerURL = "uv-sw.js";
  const worker = await navigator.serviceWorker.getRegistration(workerURL, {
    scope: __uv$config.prefix,
  });
  if (worker) return worker;
  return navigator.serviceWorker.register(workerURL, { scope: __uv$config.prefix });
}

          function encodeUrl(str) {
    if (!str) return str;
    return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
  }
        window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const encodedData = window.location.hash.substr(1);
        if (encodedData) {
          if (localStorage.getItem('Proxy') == 'Ultraviolet') {
            openUV(encodedData)
        } else if (localStorage.getItem('Proxy') == 'RH') {
            RouteRH(encodedData)
        } else if (localStorage.getItem('Proxy') == 'Dynamic') {
            Redir(encodedData)
        }
        }
    }, 1000);
  });
  
        function createSession() {
            document.getElementById('session-create-btn').click()
        }

        function RouteRH(encodedData) {
            if (!localStorage.getItem('visited')) {
        createSession()
        go(encodedData)
        setTimeout(() => {
            go(encodedData)
        }, 500);
        localStorage.setItem('visited', 'true');
    } else {
        go(encodedData)
    }
        }

        function go(url) {
            document.getElementById('session-url').value = url
            document.getElementById('session-go').click()
        }

        function openUV(url) {
    window.navigator.serviceWorker.register('./uv/sw.js', {
      scope: __uv$config.prefix
    }).then(() => {
      window.location.href = __uv$config.prefix + encodeUrl(url);
    });
  }


  

document.addEventListener('DOMContentLoaded', async function(){
  await worker();
  workerLoaded = true;
})

function prependHttps(url) {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'https://' + url;
  }
  return url;
}

function isUrl(val = "") {
  const urlPattern = /^(http(s)?:\/\/)?([\w-]+\.)+[\w]{2,}(\/.*)?$/;
  return urlPattern.test(val);
}

function Redir(targetURL) {
  console.log("Connecting to service -> loading");
if (typeof navigator.serviceWorker === "undefined") {
  alert(
    "An error occurred registering your service worker."
  );
}
const iValue = targetURL
const url = isUrl(iValue) ? prependHttps(iValue) : 'https://www.google.com/search?q=' + encodeURIComponent(iValue);
var userResponse = confirm("Using Dynamic is very unstable inside of iframes. We will open Dynamic in a new tab and your history will be shown Do you wish to proceed? ");
    if (userResponse) {
        window.open(location.href = '/ar-dn/' + Ultraviolet.codec.xor.decode(url));
        location.href = '/ar-dn/' + Ultraviolet.codec.xor.decode(url);
    } else {
        alert("You chose not to proceed. The action was canceled.");
    }

}

document.addEventListener("DOMContentLoaded", function() {
  // Get the value of the 'mode' parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.get('mode');

  if (mode) {
      const contentUrl = `go.html?mode=${mode}`;
      fetch(contentUrl)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Network response was not ok: ${response.status}`);
              }
              return response.text();
          })
          .then(content => {
            const decodedObject = decodeData(mode);

            const decodedUrl = decodedObject.url;
            const decodedName = decodedObject.name;
            const decodedProxyType = decodedObject.ProxyType;


            if (decodedProxyType) {
              if (decodedProxyType == 'Ultraviolet') {
                openUV(decodedUrl)
            } else if (decodedProxyType == 'RH') {
                RouteRH(decodedUrl)
            } else if (decodedProxyType== 'Dynamic') {
                Redir(decodedUrl)
            }
          }
          })
          .catch(error => {
              console.error('Error fetching content:', error);
          });
  } else {
      console.error('No mode parameter found in the URL.');
  }
});


function decodeData(encodedString) {
  const jsonString = atob(encodedString);
  const decodedObject = JSON.parse(jsonString);
  return decodedObject;
}