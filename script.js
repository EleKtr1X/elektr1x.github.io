let h3, p, img, ic;
const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

let keys = [];
let eggActive = false;

window.addEventListener('load', () => {
  h3 = Array.from(document.getElementsByTagName('h3')).map(x => x.outerHTML);
  p = Array.from(document.getElementsByTagName('p')).map(x => x.outerHTML);
  img = Array.from(document.getElementsByTagName('img')).map(x => x.outerHTML);
  ic = Array.from(document.getElementsByTagName('i')).map(x => x.outerHTML);
});

window.addEventListener('keydown', e => {
  keys.push(e.key);
  if (keys.join().includes(konami.join())) {
    keys = [];
    const h3DOM = document.getElementsByTagName('h3');
    const pDOM = document.getElementsByTagName('p');
    const imgDOM = document.getElementsByTagName('img');
    const iDOM = document.getElementsByTagName('i');
    const buttonDOM = document.getElementsByTagName('button');

    if (eggActive == false) {
      document.body.style.background = getComputedStyle(document.body).background.replace(/linear-gradient\(.+\)/, 'linear-gradient(to right, rgb(34, 215, 29), rgb(253, 46, 246), rgb(155, 83, 0))');
      document.getElementsByClassName('big-text')[0].textContent = 'Unpleasant Gradient';
  
      for (const i of h3DOM) { i.textContent = 'Unpleasant Gradient'; }
      for (const i of pDOM) { i.textContent = 'This unpleasant gradient shows up in your website'; }
      for (const i of buttonDOM) { i.textContent.replace(/<i .+>?(.+)<\/i>?/, 'It\'s here'); }
      for (const i of imgDOM) { i.src = 'images/upg.png'; }
      for (const i of iDOM) { i.outerHTML = '<i><img src="images/upg.png"/></i>' }

      eggActive = true;
    } else {
      document.body.style.background = getComputedStyle(document.body).background.replace(/linear-gradient\(.+\)/, 'linear-gradient(to right, rgb(0, 0, 128), rgb(128, 0, 128), rgb(0, 0, 128))');
      document.getElementsByClassName('big-text')[0].textContent = 'EleKtr1X';

      for (const i in h3DOM) {
        h3DOM[i].outerHTML = h3[i];
      }

      for (const i in pDOM) {
        pDOM[i].outerHTML = p[i];
      }
      
      for (const i in iDOM) {
        iDOM[i].outerHTML = ic[i];
      }

      for (const i in imgDOM) {
        imgDOM[i].outerHTML = img[i];
      }
      eggActive = false;
    }
  }
}, true);
