let h3s, ps, imgs, icons;
const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

let keys = [];
let eggActive = false;


window.addEventListener('load', e => {
  console.log('hi');
  h3s = Array.from(document.getElementsByTagName('h3')).map(x => x.outerHTML);
  ps = Array.from(document.getElementsByTagName('p')).map(x => x.outerHTML);
  imgs = Array.from(document.getElementsByTagName('img')).map(x => x.outerHTML);
  icons = Array.from(document.getElementsByTagName('i')).map(x => x.outerHTML);
})

window.addEventListener('keydown', e => {
  keys.push(e.key);
  if (keys.join().includes(konami.join())) {
    console.log('works', eggActive);
    keys = [];
    const h3New = document.getElementsByTagName('h3');
    const pNew = document.getElementsByTagName('p');
    const imgNew = document.getElementsByTagName('img');
    const iconNew = document.getElementsByTagName('i');
    if (eggActive == false) {
      document.body.style.background = getComputedStyle(document.body).background.replace(/linear-gradient\(.+\)/, 'linear-gradient(to right, rgb(34, 215, 29), rgb(253, 46, 246), rgb(155, 83, 0))');
      document.getElementsByClassName('big-text')[0].textContent = 'Unpleasant Gradient';
  
      h3New[0].textContent = 'Front doors it\'s showed up at';
      for (let i = 1; i < h3New.length; i++) {
        h3New[i].textContent = 'Unpleasant Gradient';
        pNew[i - 1].textContent = 'This unpleasant gradient shows up in your website';
      }
  
      for (const i of imgNew) {
        i.src = 'images/upg.png';
      }
  
      for (const i of iconNew) {
        i.outerHTML = '<i><img src="images/upg.png"/></i>'
      }

      eggActive = true;
    } else {
      document.body.style.background = getComputedStyle(document.body).background.replace(/linear-gradient\(.+\)/, 'linear-gradient(to right, rgb(0, 0, 128), rgb(128, 0, 128), rgb(0, 0, 128))');
      document.getElementsByClassName('big-text')[0].textContent = 'EleKtr1X';

      for (const i in h3New) {
        h3New[i].outerHTML = h3s[i];
      }

      for (const i in pNew) {
        pNew[i].outerHTML = ps[i];
      }
      
      for (const i in iconNew) {
        iconNew[i].outerHTML = icons[i];
      }

      for (const i in imgNew) {
        imgNew[i].outerHTML = imgs[i];
      }
      eggActive = false;
    }
  }
}, true);
