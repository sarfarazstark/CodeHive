import team from './team.json' assert { type: 'json' };

const card = document.querySelector('.cards');
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
  <a  href="mailto:${el.email}" class="h-auto w-auto rounded-2xl ${el.gradient} p-1">
    <span class="rounded-xl  flex h-full w-full items-center justify-center bg-gray-800 px-8 py-3 text-white">
      EMAIL
    </span>
    </a>
  </div>
  <div class="flex justify-center gap-4 my-6">${links}</div>
</div>`;
  card.insertAdjacentHTML('afterbegin', html);
})