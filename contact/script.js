window.addEventListener('DOMContentLoaded', async _ => {
  let vscodeDetails = document.getElementById('vscode-details');
  let vscodeWorkspace = document.getElementById('vscode-workspace');
  let vscodeImg = document.getElementById('vscode-img');
  let spotifyTrack = document.getElementById('spotify-track-name');
  let spotifyImg = document.getElementById('spotify-img');
  let spotifyArtist = document.getElementById('spotify-artist');
  let spotifyLink = document.getElementById('spotify-link');
  let spotifyTimeProgress = document.getElementById('spotify-time-progress');
  let spotifyTimeEnd = document.getElementById('spotify-time-end');

  if (document.getElementsByClassName('statuses')[0]) {
    const res = await fetch('https://api.statusbadges.me/presence/398967501662322701');
    const data = await res.json();

    const vscode = data.activities.filter(x => x.name == 'Visual Studio Code')[0];
    vscodeDetails.innerText = vscode ? vscode.details : 'Nothing right now';
    vscodeWorkspace.innerText = vscode && vscode.state ? vscode.state : 'N/A';
    if (vscode) {
      vscodeImg.src = `https://cdn.discordapp.com/app-assets/${vscode.application_id}/${vscode.assets.large_image}.png`;
      vscodeImg.alt = vscode.assets.large_text;
    }

    const spotify = data.activities.filter(x => x.name == 'Spotify')[0];

    console.log(vscode);
    spotifyTrack.innerText = spotify ? spotify.details : 'Nothing right now';
    spotifyArtist.innerText = spotify ? spotify.state.replaceAll(/(\w); /g, '$1, ') : 'N/A';

    if (spotify) {
      spotifyLink.href = `https://open.spotify.com/track/${spotify.sync_id}`;
      spotifyImg.src = `https://i.scdn.co/image/${spotify.assets.large_image.split(':')[1]}`;
      spotifyImg.alt = spotify.assets.large_text;

      let progress = Math.floor(Date.now() - spotify.timestamps.start);
      let end = Math.floor(spotify.timestamps.end - spotify.timestamps.start);
      spotifyTimeProgress.innerText = msToDuration(progress);
      spotifyTimeEnd.innerText = msToDuration(spotify.timestamps.end - spotify.timestamps.start);

      const interval = setInterval(() => {
        // you might think i could just add 1000ms to `progress`, but if you're tabbed out the interval
        // straight up just doesn't run
        progress = Math.floor(Date.now() - spotify.timestamps.start);
        spotifyTimeProgress.innerText = msToDuration(progress);

        if (progress >= end - 1) {
          clearInterval(interval);
        }
      }, 1000);
    }
  }
});



function msToDuration(ms) {
  let s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
}