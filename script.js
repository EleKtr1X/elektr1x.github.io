const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

let saved = {};
let keys = [];
let eggActive = false;

window.addEventListener('load', () => {
  saved = {
    h3:  [...document.querySelectorAll('h3')].map(x => x.outerHTML),
    p:   [...document.querySelectorAll('p')].map(x => x.outerHTML),
    '.icons i': [...document.querySelectorAll('.icons i')].map(x => x.outerHTML),
    'img:not(button img)': [...document.querySelectorAll('img')].map(x => x.outerHTML),
    'button:not(#menu-icon)': [...document.querySelectorAll('button:not(#menu-icon)')].map(x => x.outerHTML),
  };
});

window.addEventListener('keydown', e => {
  keys.push(e.key);
  if (keys.join().includes(konami.join())) {
    keys = [];

    if (eggActive == false) {
      document.body.style.background = getComputedStyle(document.body).background.replace(/linear-gradient\(.+\)/, 'linear-gradient(to right, rgb(34, 215, 29), rgb(253, 46, 246), rgb(155, 83, 0))');
      document.querySelector('.big-text').textContent = 'Unpleasant Gradient';

      for (const i of document.querySelectorAll('h3'))
        i.textContent = 'Unpleasant Gradient';

      for (const i of document.querySelectorAll('p'))
        i.textContent = 'This unpleasant gradient shows up in your website';

      for (const i of document.querySelectorAll('img:not(button img)'))
        i.src = '/images/upg.png';

      for (const i of document.querySelectorAll('.icons i'))
        i.outerHTML = '<i><img src="/images/upg.png"/></i>';

      for (const i of document.querySelectorAll('button:not(#menu-icon)')) {
        for (const icon of i.querySelectorAll('i')) {
          icon.outerHTML = '<i><img src="/images/upg.png"/></i>';
        }
        i.childNodes[1].textContent = " It's here ";
      }

      eggActive = true;
    } else {
      document.body.style.background = getComputedStyle(document.body).background.replace(/linear-gradient\(.+\)/, 'linear-gradient(to right, rgb(0, 0, 128), rgb(128, 0, 128), rgb(0, 0, 128))');
      document.querySelector('.big-text').textContent = 'EleKtr1X';

      for (let [k, v] of Object.entries(saved)) {
        console.log(k);
        [...document.querySelectorAll(k)].forEach((x, i) => {
          console.log(k, v);
          x.outerHTML = v[i];
        })
      };

      eggActive = false;
    }
  }
}, true);
