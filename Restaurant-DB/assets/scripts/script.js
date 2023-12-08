import data from './data.json' assert { type: 'json' };
import reviews from './reviews.json' assert { type: 'json' };
import team from './team.json' assert { type: 'json' };
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider.js'
console.log(data.restaurantName);

const listHeaderName = document.querySelector('[data-list-name]')
const pop = document.querySelector('.pop');
const menu = document.querySelector('.menu-item').querySelectorAll('li');
const listShow = document.querySelector('#item-list');
menu.forEach(el => {
  el.addEventListener('click', function () {
    document.querySelector('body').style.overflow = 'hidden';
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
    <h2 class="font-bold mr-4 text-sm">${el.author}</h2>
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
  autoplay: true,
  loop: true,
  autoplayButtonOutput: false,
  edgePadding: 40,
  controlsContainer: '#custom-control'
});

const outlets = [
  {
    address: '8, BT Road, Thakur Corner, Sodepur, Kolkata, West Bengal',
    phone: '+919748528886',
    timing: 'Open: 12.00AM - 11.30PM',
    img: 'outlet.png',
    url: "https://maps.app.goo.gl/ScgFYokDjSh5k9ZQ6"
  },
  {
    address: '18/36, Mall Road, K B C Sarani, Dum Dum, Kolkata, West Bengal',
    phone: '+919836580920',
    timing: 'Open: 11.00AM - 01.30AM',
    img: 'outlet2.png',
    url: 'https://maps.app.goo.gl/HHsCegvWfbJfsynF7'
  },
  {
    address: '213, Grey Street, State Bank Of India, Shyambazar, Kolkata, West Bengal 700006',
    phone: '+919163284024',
    timing: 'Open: 11.00AM - 11.00PM',
    img: 'outlet3.jpg',
    url: 'https://maps.app.goo.gl/Y7Fvg9wA86QZDypV8'
  }
];

const outletContainer = document.querySelector('.outlet');

outlets.forEach(element => {
  const html =
    `<div class="bg-moss-green p-4 w-80 md:w-[30%] rounded-lg text-wheat flex flex-col">
  <img src="assets/images/${element.img}" alt="outlet" class="rounded-[4px] mb-4">
  <div class="flex flex-col mb-2">
  <h1 class="text-lg">${element.address}</h1>
  <p class="mb-auto text-hunyadi-yellow">${element.timing}</p>
  </div>
  <div class="flex items-center justify-center mt-auto">
    <a href="tel:${element.phone}" class="text-2xl font-bold md:text-xl mr-auto">${element.phone}</a>
    <a href="${element.url}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-map-pin">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg></a>
  </div>
</div>`
  outletContainer.insertAdjacentHTML('afterbegin', html);
})

const card = document.querySelector('.cards')
team.member.forEach(el => {
  let links = [];
  el.links.forEach(el => {
    links = links + el;
  })
  console.log(links);
  const html =
`<div class="bg-white w-[350px] md:last:col-start-[-3] h-auto p-4 rounded-lg flex flex-col">
  <div class="flex flex-col items-center mb-6">
    <div class="w-full flex items-center h-24 rounded-lg ${el.gradient}"></div>
    <img src="${el.image}" alt="${el.name}"
      class="w-28 rounded-full -mt-16 border-4 border-moss-green">
  </div>
  <h1 class="text-moss-green text-center font-bold text-2xl">${el.name}</h1>
  <p class="text-center text-gray-500 font-bold">${el.role}</p>
  <div class="flex justify-center mt-8">
  <a  href="mailto:" class="h-auto w-auto rounded-2xl ${el.gradient} p-1">
    <span class="rounded-xl  flex h-full w-full items-center justify-center bg-gray-800 px-8 py-3 text-white">
      EMAIL
    </a>
  </div>
  <div class="flex justify-center gap-4 mt-6">${links}</div>
</div>`;
  card.insertAdjacentHTML('afterbegin', html);
})