window.addEventListener('DOMContentLoaded', async _ => {
  let vscodeStatus = document.getElementById('status-vscode');
  let spotifyStatus = document.getElementById('status-spotify');
  let spotifyLink = document.getElementById('spotify-link');
  let spotifyLinkIcon = document.getElementById('spotify-link-icon');

  if (document.getElementsByClassName('statuses')[0]) {
    const res = await fetch('https://api.statusbadges.me/presence/398967501662322701');
    const data = await res.json();

    const vscode = data.activities.filter(x => x.name == 'Visual Studio Code')[0];
    vscodeStatus.innerText = vscode ? vscode.details : 'Nothing right now';

    const spotify = data.activities.filter(x => x.name == 'Spotify')[0];

    spotifyStatus.innerText = spotify
      ? `"${spotify.details}" by ${spotify.state.replaceAll(/(\w); /g, '$1, ')}`
      : 'Nothing right now'

    if (spotify) {
      spotifyLink.href = `https://open.spotify.com/track/${spotify.sync_id}`;
      spotifyLinkIcon.style.display = 'inline-block';
    }

    // spotifyStatus.parentElement.parentElement.outerHTML = spotify ?
    // `
    // <div class="button">
    // <a target="_blank" href="https://open.spotify.com/track/${spotify.sync_id}" style="text-decoration: none">
    // <button>
    // <i class="ti ti-brand-spotify" style="color: #1ed760"></i>
    //   <span id="status-spotify">
    //     "${spotify.details}" by ${spotify.state.replaceAll(/(\w); /g, '$1, ')}
    //   </span>
    //   </button>
    //   </a>
    // </div>
    // ` : `
    // <div class="button">
    // <button>
    // <i class="ti ti-brand-spotify" style="color: #1ed760"></i>
    // <span id="status-spotify">
    //   Nothing right now
    // </span>
    // </button>
    // </div>`;
  }
});