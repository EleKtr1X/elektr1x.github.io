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

function sizeCheck() {
  console.log('called')
  if (window.innerWidth <= 800) {
    const projs = document.getElementsByClassName('projects');
    for (const i of projs) {
      i.classList.remove('projects');
      i.classList.add('projects-small', 'xp');
    }
  } else {
    const projs = document.getElementsByClassName('xp');
    for (const i of projs) {
      i.classList.remove('xp');
      i.classList.remove('projects-small');
      i.classList.add('projects');
    }
  }
}

function menu(icon, items, menuOpen) {
  console.log('start');
  if (menuOpen) {
    icon.style.position = 'relative';
    icon.style.top = '';
    icon.style.right = '';
    icon.className = 'ti ti-menu-2';
    items.style.display = 'none';
  } else {
    icon.style.position = 'absolute';
    icon.style.top = '10px';
    icon.style.right = '10px';
    icon.className = 'ti ti-x';
    items.style.display = 'flex';
  }
  console.log('end');
  return !menuOpen;
}

window.addEventListener('DOMContentLoaded', async _ => {
  sizeCheck();

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
    spotifyStatus.parentElement.outerHTML = spotify ?
    `
    <a target="_blank" href="https://open.spotify.com/track/${spotify.sync_id}" style="text-decoration: none">
    <div class="status">
    <i class="ti ti-brand-spotify" style="color: #1ed760"></i>
      <span id="status-spotify">
        ${spotify.details} - ${spotify.state.replace(';', ',')}
      </span>
      <i class="ti ti-external-link"></i>
    </div>
    </a>
    ` : `
    <div class="status">
    <i class="ti ti-brand-spotify" style="color: #1ed760"></i>
    <span id="status-spotify">
      Nothing right now
    </span>
    </div>`;
  }
});

window.addEventListener('resize', _ => sizeCheck());