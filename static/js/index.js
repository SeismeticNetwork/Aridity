const butt = document.getElementById('option');
let a = 0;

butt.onclick = function () {
    const menu = document.getElementById('m_enu');
    if (a === 1) {
        menu.style.display = 'none';
        a = 0;
    } else {
        // Calculate the position of the button
        const rect = butt.getBoundingClientRect();
        const topPosition = rect.bottom + window.scrollY;
        const leftPosition = rect.left + window.scrollX;

        // Set the menu position
        menu.style.position = 'absolute';
        menu.style.top = `${topPosition}px`;
        menu.style.left = `${leftPosition - 120}px`;

        // Make the menu visible
        menu.style.display = 'block';
        
        a = 1;
    }
}


document.getElementById('ab').onclick = function() {
  AB()
  function AB(){let inFrame;try{inFrame=window!==top;}catch(e){inFrame=true;}
if(!inFrame&&!navigator.userAgent.includes("Firefox")){const popup=open("about:blank","_blank");if(!popup||popup.closed){alert("Please allow popups and redirects.");}else{const doc=popup.document;const iframe=doc.createElement("iframe");const style=iframe.style;const link=doc.createElement("link");const name=localStorage.getItem("name")||"My Drive - Google Drive";const icon=localStorage.getItem("icon")||"https://ssl.gstatic.com/assets/media/branding/product/1x/drive_2020q4_32dp.png";doc.title=name;link.rel="icon";link.href=icon;iframe.src=location.href;style.position="fixed";style.top=style.bottom=style.left=style.right=0;style.border=style.outline="none";style.width=style.height="100%";doc.head.appendChild(link);doc.body.appendChild(iframe);location.replace("https://classroom.google.com");}}}
}

document.getElementById('h').onclick = function() {
    const iframes = document.body.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        
        if (iframe.style.display == 'flex') {
          iframe.src = '../main.html'
        } else {
          console.log(' ')
        }

      });
  }
  
  document.getElementById('c').onclick = function() {
    const ID = getTabID();
    document.getElementById(ID).remove()
    document.getElementById(ID + 'iframe').remove()
  }

  document.getElementById('s').onclick = function() {
    const iframes = document.body.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        
        if (iframe.style.display == 'flex') {
          iframe.src = '../Settings.html'
        } else {
          console.log(' ')
        }

      });
  }

  function getTabID() {
    let ID;
    const iframes = document.body.querySelectorAll('iframe');
  
    iframes.forEach((iframe) => {
      if (iframe.style.display === 'flex') {
        ID = parseInt(iframe.id, 10);
        // Exit the loop once the first matching iframe is found
        return;
      }
    });
  
    return ID;
  }
  