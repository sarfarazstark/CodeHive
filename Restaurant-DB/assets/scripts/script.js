import data from './data.json' assert { type: 'json' };
import reviews from './reviews.json' assert { type: 'json' };
import {tns} from '../../node_modules/tiny-slider/src/tiny-slider.js'
console.log(data.restaurantName);

const listHeaderName = document.querySelector('[data-list-name]')
const pop = document.querySelector('.pop');
const menu = document.querySelector('.menu-item').querySelectorAll('li');
const listShow = document.querySelector('#item-list');
menu.forEach(el => {
  el.addEventListener('click', function(){
    listShow.innerHTML = '';
    pop.classList.remove('hidden');
    pop.classList.add('flex');
    pop.classList.add('transition-all');
    listHeaderName.innerText = el.dataset.name;
    data[el.dataset.name].forEach(value => {
      const html = `<div class="items flex items-start mb-4">
      <img src="${value.image}" alt="${value.name}" class="w-1/4 h-auto rounded-xl mr-2">
      <div>
        <h2 class="font-bold text-xl">${value.name}</h2>
        <p class="font-bold text-amber-500">₹${value.price}</p>
        <p class="text-sm opacity-80">${value.description}</p>
      </div>
    </div>`;
    listShow.insertAdjacentHTML('afterbegin', html);
    });
  })
})

const reviewContainer = document.querySelector('.my-slider');
reviews.reviews.forEach(el => {
  const html = `<div class="w-96 h-auto p-4 bg-wheat rounded-md">
  <div class="flex items-center mb-4">
    <img src="assets/images/visitors/${el.img}" alt="${el.author}" class="w-12 h-12 rounded-full mr-2">
    <h2 class="font-bold mr-4">${el.author}</h2>
    <ul class="flex">
     <li class="text-amber-500"><svg class="w-4 h-4 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg></li>
     <li class="text-amber-500"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg></li>
     <li class="text-amber-500"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg></li>
     <li class="text-amber-500"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg></li>
     <li class="text-amber-500"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg></li>
  </ul>
  </div>
  <blockquote class="italic text-sm">‟${el.content}”</blockquote>
</div>`
reviewContainer.insertAdjacentHTML('afterbegin', html);
})

var slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 1,
  autoplay: false,
  autoplayButtonOutput: false,
  edgePadding: 50,
  controlsContainer: '#custom-control',
  gutter: 20
});