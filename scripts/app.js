'use strict'
let habbits =[];
const habbitKey = 'HABBIT_KEY';
/*page*/
const page = {
	menu:document.querySelector('.menu__list'),
};
/*utils*/
 function loadData(){
	const habbitsString = localStorage.getItem( habbitKey);
	const habbitArray =JSON.parse(habbitsString);
	if(Array.isArray(habbitArray)){
		habbits = habbitArray;
	}
 }
 function safeData(){
	localStorage.setItem(habbitKey,JSON.stringify(habbits));
 }
/*render*/
function rerenderMenu(activeHabbit){
	for(const habbit of habbits){
		const existed = document.querySelector(`[menu-habbit-id="${habbit.id}]`);
		if(!existed){
			const element = document.createElement('button');
			element.setAttribute('menu-habbit-id',habbit.id);
			element.classList.add('menu__item');
			element.addEventListener('click',() => rerender(habbit.id));
			element.innerHTML =`<img src="./images/${habbit.icon}.svg" alt="${habbit.name}" />`;
			if(activeHabbit.id === habbit.id){
				element.classList.add('menu__item__active');
			}
			page.menu.appendChild(element);
			continue;
		}
		if(activeHabbit.id === habbit.id){
			existed.classList.add('menu__item_active');
		}
		else{
			existed.classList.remove('menu__item_active');
		}
	}
}

function rerender(activeHabbitId){
 const activeHabbit =habbits.find(habbit =>habbit.id === activeHabbitId);
 rerenderMenu(activeHabbit);
};

 /*init*/ 
 (() => {
	loadData();
	rerender(habbits[0].id);
	})();
	