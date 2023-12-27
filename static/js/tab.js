let tabs = 0;
function createTab() {
  const newTab = document.createElement('div');
  tabs = tabs + 1;
  newTab.id = tabs;
  newTab.className = 'tab';
  newTab.innerText = 'Tab ' + tabs;
  document.getElementById('tabs').appendChild(newTab);
  const FQ = document.body.querySelectorAll('iframe');
      FQ.forEach((iframe) => {
        iframe.style.display = 'none';
      });
  const I = document.createElement('iframe');
  I.className = 'Main';
  I.id = tabs + 'iframe';
  document.body.appendChild(I);
  I.src = './main.html';

  const addBTN = document.getElementById('add')
  document.head.appendChild(addBTN)
  document.getElementById('tabs').appendChild(addBTN)
}
document.getElementById('add').onclick = function () {
  
  const newTab = document.createElement('div');
  tabs = tabs + 1;
  newTab.id = tabs;
  newTab.className = 'tab';
  newTab.innerText = 'Tab ' + tabs;
  document.getElementById('tabs').appendChild(newTab);
  const FQ = document.body.querySelectorAll('iframe');
      FQ.forEach((iframe) => {
        iframe.style.display = 'none';
      });
  const I = document.createElement('iframe');
  I.className = 'Main';
  I.style.display = 'flex';
  I.id = tabs + 'iframe';

  document.body.appendChild(I);
  
  const addBTN = document.getElementById('add')
  document.head.appendChild(addBTN)
  document.getElementById('tabs').appendChild(addBTN);
  I.src = './main.html';
  newTab.click();

  (function () {
    const currentTabId = tabs;
    newTab.onclick = function () {
      document.getElementById('TabID').value = currentTabId;
      const iframes = document.body.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        iframe.style.display = 'none';
      });

      const iframeToShow = document.getElementById(currentTabId + 'iframe');
      
      iframeToShow.style.display = 'flex';
    };

  })();
  
  
};


const b = document.getElementById('add')
b.click()