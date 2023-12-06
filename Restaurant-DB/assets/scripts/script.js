import data from './data.json' assert { type: 'json' };
console.log(data.restaurantName);

let menuToggle = false;
const nav = document.querySelector('#nav-bar');
const navList = nav.querySelectorAll('li');
// console.log(navList);
const toggleMenu = function () {
  if (menuToggle) {
    nav.classList.remove('flex');
    nav.classList.add('hidden');
    menuToggle = false
  } else {
    nav.classList.remove('hidden');
    nav.classList.add('flex');
    nav.classList.add('transition-all')
    menuToggle = true
  }
}
navList.forEach(navEl => {
  navEl.addEventListener('click', function () {
    if (menuToggle) {
      nav.classList.remove('flex');
      nav.classList.add('hidden');
      menuToggle = false
    }
  })
});

import { createIcons, icons } from '../lucide';

// Caution, this will import all the icons and bundle them.
createIcons({ icons });
const menu = document.querySelector('.menu-item').querySelectorAll('li');
menu.forEach(menuEl => {
  menuEl.addEventListener('click', function () {

  })
})
