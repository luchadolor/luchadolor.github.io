/**
 * Populate sidebar menu with links when nav button is clicked
 * @param {Element} - Sidebar nav button
 */
function setContent(el) {
  document.querySelectorAll('.button').forEach(button => {
    button.className = 'button';
  });
  document.querySelectorAll('.box').forEach(box => {
    box.style.display = 'none';
  });
  el.className = `${el.className} active`;
  document.querySelector(el.dataset.rel).style.display = '';
}

/**
 * Set start page background
 */
function changeBg() {
  const n = new Date().getHours();
  const styles = {
    picture: '',
    color1: '',
    color2: '',
    message: '',
  };
  if (n >= 12 && n <= 17) {
    styles.picture = "url('background/background01.jpg')";
    styles.color1 = '#ee7546';
    styles.color2 = '#ca6769';
    styles.message = 'おはよう';
  } else if (n >= 0 && n <= 11) {
    styles.picture = "url('background/background02.png')";
    styles.color1 = '#557780';
    styles.color2 = '#2cc990';
    styles.message = 'easy.';
  } else if (n >= 18 && n <= 24) {
    styles.picture = "url('background/background03.png')";
    styles.color1 = '#7f548b';
    styles.color2 = '#822447';
    styles.message = 'take some time to breath.';
  }
  document.querySelector('#container').style.backgroundImage = styles.picture;
  document.querySelector('#border').style.background = styles.color1;
  document.querySelector('#box1').style.color = styles.color2;
  document.querySelector('#box2').style.color = styles.color2;
  document.querySelector('#box3').style.color = styles.color2;
  document.querySelector('#details').style.background = styles.color2;
  document.querySelector('#message').style.textShadow = `5px 5px ${
    styles.color1
  }`;
  document.querySelector('#message').innerHTML = styles.message;
}

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    setContent(e.currentTarget);
  });
});

const activeButton = document.querySelector('.button.active');
activeButton && setContent(activeButton);

changeBg();
