var keys = [], konami = "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a";
window.addEventListener("keydown", e => {
  keys.push(e.key);
  if (keys.join().includes(konami)) {
    keys = [];
    const h3s = document.getElementsByTagName('h3');
    const ps = document.getElementsByTagName('p');
    const imgs = document.getElementsByTagName('img');
    const icons = document.getElementsByTagName('i');

    console.log('works');
    document.body.style.background = 'linear-gradient(to right, rgb(34, 215, 29), rgb(253, 46, 246), rgb(155, 83, 0)) 0% 50% / 400% 400%';
    document.getElementsByClassName('big-text')[0].textContent = 'Unpleasant Gradient';

    h3s[0].textContent = 'Doors it\'s showed up at';
    for (let i = 1; i < h3s.length; i++) {
      h3s[i].textContent = 'Unpleasant Gradient';
      ps[i - 1].textContent = 'This unpleasant gradient shows up in your website';
    }

    for (let i of imgs) {
      i.src = 'images/upg.png';
    }
    let l = icons.length;

    for (let i = 0; i < l; i++) {
      console.log(icons.length);
      console.log(icons[0].outerHTML)
      icons[0].outerHTML = '<img src="images/upg.png"/>'
    }
  }
}, true);
