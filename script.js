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


function menu(icon, items, menuOpen) {
  if (menuOpen) {
    icon.style.position = 'relative';
    icon.style.top = '';
    icon.style.right = '';
    icon.className = 'ti ti-menu-2';
    items.style.display = 'none';
    icon
  } else {
    icon.style.position = 'absolute';
    icon.style.top = '10px';
    icon.style.right = '10px';
    icon.className = 'ti ti-x';
    items.style.display = 'flex';
  }
  return !menuOpen;
}

window.addEventListener('DOMContentLoaded', async _ => {
  let button = document.getElementById('menu-icon');
  let items = document.getElementById('menu-items');
  let icon = button.childNodes[1];
  let menuOpen = false;

  button.addEventListener('click', () => {
    menuOpen = menu(icon, items, menuOpen);
  });

  button.addEventListener('touchcancel', () => {
    menuOpen = menu(icon, items, menuOpen);
  });

  let vscodeStatus = document.getElementById('status-vscode');
  let spotifyStatus = document.getElementById('status-spotify');
  if (document.getElementsByClassName('statuses')[0]) {
    const res = await fetch('https://api.statusbadges.me/presence/398967501662322701');
    const data = await res.json();

    const vscode = data.activities.filter(x => x.name == 'Visual Studio Code')[0];
    vscodeStatus.innerHTML = vscode ? vscode.details : 'Nothing right now';

    const spotify = data.activities.filter(x => x.name == 'Spotify')[0];
    spotifyStatus.parentElement.parentElement.outerHTML = spotify ?
    `
    <div class="button">
    <a target="_blank" href="https://open.spotify.com/track/${spotify.sync_id}" style="text-decoration: none">
    <button>
    <i class="ti ti-brand-spotify" style="color: #1ed760"></i>
      <span id="status-spotify">
        "${spotify.details}" by ${spotify.state.replaceAll(/(\w); /g, '$1, ')}
      </span>
      <i class="ti ti-external-link"></i>
      </button>
      </a>
    </div>
    ` : `
    <div class="button">
    <button>
    <i class="ti ti-brand-spotify" style="color: #1ed760"></i>
    <span id="status-spotify">
      Nothing right now
    </span>
    </button>
    </div>`;
  }
});