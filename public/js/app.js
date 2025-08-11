const welcomePage = document.querySelector('.welcomePage')
const menuBtn = document.querySelector('.menuBtn')
const toggleMenu = document.querySelector('.toggleMenu')
const linkBtn = document.querySelectorAll('.linkBtn')
const loginBtn = document.querySelector('.loginBtn')
const contentsSec = document.querySelector('.contentsSec')
const notifications = document.querySelector('.notifications')
const profileMenu = document.querySelector('.profileMenu')
const floatingMgs = document.querySelector('.floatingMgs')
const librarySec = document.querySelector('.librarySec')
const homeSec = document.querySelector('.homeSec')
const searchSec = document.querySelector('.searchSec')
const cloud1L = document.querySelector('.cloud1L')



//welcome page with logo
setTimeout(function () {
  welcomePage.style.display = 'none';
}, 2000);

//Drodown menu section
menuBtn.addEventListener("click", () => {
  toggleMenu.style.display = 'block';
})

linkBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleMenu.style.display = 'none';
  });
});

//Login section
loginBtn.addEventListener("click", () => {
  contentsSec.innerHTML = 'login page';
})

//notifications section
notifications.addEventListener("click", () => {
  contentsSec.innerHTML = 'notifications page';
})


//profileMenu section
profileMenu.addEventListener("click", () => {
  contentsSec.innerHTML = 'profileMenu page';
})

//cloud1AImodel section
floatingMgs.addEventListener("click", () => {
  contentsSec.innerHTML = 'cloud1AImodel page';
})

//librarySec section
librarySec.addEventListener("click", () => {
  contentsSec.innerHTML = 'librarySec page';
})

//home section
homeSec.addEventListener("click", () => {
  contentsSec.innerHTML = 'homeSec page';
})

//search section
searchSec.addEventListener("click", () => {
  contentsSec.innerHTML = 'search page';
})

//cloud1L logo icon section
cloud1L.addEventListener("click", () => {
  window.location.reload()
  //should take user home, not reloading, bro fix this in the future!!
})