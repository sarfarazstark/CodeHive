import data from './data.json' assert { type: 'json' };
console.log(data.restaurantName);

const menu = document.querySelector('.menu-item').querySelectorAll('li');
menu.forEach(el => {
  el.addEventListener('click', function(){
    
  })
})

