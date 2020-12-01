let pageHeight = document.documentElement.clientHeight;
let parallaxWindow = document.querySelector('.preview .parallax-window');
parallaxWindow.style.height = pageHeight;
console.log(pageHeight);

let infoScroll = document.querySelector('.info-scroll');
infoScroll.onclick = function () {
  window.scrollTo(0, 10);
};