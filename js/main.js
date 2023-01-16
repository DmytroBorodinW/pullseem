'use strict'

let html = document.querySelector('html');
let body = document.querySelector('body');
let sideBar = document.querySelector('.sidebar');
let navbar = document.querySelector('.navbar');
let burgerBtn = sideBar.querySelector('.burger__btn');
let navBurgerBtn = navbar.querySelector('.burger__btn');
let closeMenuBtn = sideBar.querySelector('.close__btn');
let main = document.querySelector('.main');

burgerBtn.addEventListener('click', () => {
	sideBar.classList.toggle('mini');
	main.classList.toggle('max');
});

navBurgerBtn.addEventListener('click', () => {
	sideBar.classList.add('active');
	body.classList.add('locked');
	html.classList.add('locked');
	wrap.classList.add('locked');
});
closeMenuBtn.addEventListener('click', () => {
	sideBar.classList.remove('active');
	body.classList.remove('locked');
	html.classList.remove('locked');
	wrap.classList.remove('locked');
	console.log('close');
})


// menu and submenu lists settings

let menuLinksArr = [...document.querySelectorAll('.menu__link')];
let submenusArr = [...document.querySelectorAll('.submenu__list')];

menuLinksArr.forEach(link => {
	let linkId = link.getAttribute('linkname');
	link.addEventListener('mouseover', () => {
		for (let i = 0; i < submenusArr.length; i++) {
			submenusArr[i].classList.remove('active');
			let submenuId = submenusArr[i].getAttribute('id');
			if (submenuId == linkId) {
				submenusArr[i].classList.add('active');
			}
		}
	})
})

//change language and page direction

console.log(window.innerWidth);

let selectBlock = document.querySelector('.languages');
let lanuagesArr = [...selectBlock.querySelectorAll('.option')];


let changeLanguageTitle = () => {
	if (window.innerWidth < 576) {
		lanuagesArr[0].label = 'En';
		lanuagesArr[1].label = 'He';
	}else {
		lanuagesArr[0].label = 'English';
		lanuagesArr[1].label = 'Hebrew';
	}
}

changeLanguageTitle();

window.addEventListener('resize', changeLanguageTitle);


selectBlock.addEventListener('change', (e) => {
	console.log(e);
	let val = e.srcElement.value;
	wrap.classList.remove('rtl');
	html.removeAttribute('dir');
	e.srcElement.attributes[0].nodeValue = '';
	
	if (val == 'true') {
		wrap.classList.add('rtl');
		e.srcElement.attributes[0].nodeValue = 'rtl'
		html.setAttribute('dir', 'rtl');
	}
})
	

let fsBlock = document.querySelector('.fs__block');
let bodyBlocksArr = [...fsBlock.querySelectorAll('.content__block__body')];
let blockButtonsArr = [...fsBlock.querySelectorAll('.content__btn')];

blockButtonsArr.forEach(btn => {
	btn.addEventListener('click', () => {
		blockButtonsArr.forEach(item => {
			item.classList.remove('active');
		})
		btn.classList.add('active');
		let index = blockButtonsArr.indexOf(btn);
		bodyBlocksArr.forEach(block => {
			block.classList.add('none');
			bodyBlocksArr[index].classList.remove('none');
		})
	})
})


// Create shortcard

let createShortCard = (option1, option2) => {
	let shortCardBlock = setElement('div', 'shortcard__block', '');
	let shortCard = setElement('div', 'shortcard', '');
	let shortCardOption1 = setElement('p', 'option__text', `${option1}`);
	let shortCardOption2 = setElement('p', 'option__text', `${option2}`);
	let editBtn = setElement('img', 'edit__btn', '');
	editBtn.setAttribute('src', 'imgs/pencil.svg');
	shortCard.append(shortCardOption1);
	shortCard.append(shortCardOption2);
	shortCard.append(editBtn);
	shortCardBlock.append(shortCard);
	return shortCardBlock;
}




// Select options

let shortCardsArr = [...document.querySelectorAll('.shortcard__add__block')];
let optionsBlock = document.querySelector('.options__block');
let selectOptionBlock = [...optionsBlock.querySelectorAll('.select__option__block')];
let optionListsArr = [...optionsBlock.querySelectorAll('.options__list')];
let options = [];

shortCardsArr.forEach(card => {
	let addBtn = card.querySelector('.add__btn');
	console.log(card.offsetTop);
	addBtn.addEventListener('click', () => {
		optionsBlock.classList.add('active');
		optionsBlock.style.top = `${card.offsetTop}px`;

		selectOptionBlock.forEach(block => {
			let arrowBtn = block.querySelector('svg');
			let index = selectOptionBlock.indexOf(block);
			arrowBtn.addEventListener('click', () => {
				optionsBlock.style.transform = 'translate(-100%, -70%)';
				if (wrap.classList.contains('rtl')) {
					optionsBlock.style.transform = 'translate(0, -70%)';
				}
				block.style.boxShadow = 'none';
				let mainBlockName = block.querySelector('.select__text').innerText;
				console.log(mainBlockName);
				let blockName = block.querySelector('.select__text');
				optionListsArr[index].classList.add('active');
				let listItemsArr = [...optionListsArr[index].querySelectorAll('.option__list__item ')];
				listItemsArr.forEach(li => {
					li.addEventListener('click', () => {
						let listItemTitle = li.querySelector('span').innerText;
						options.push(listItemTitle);
						console.log(options);
						optionListsArr[index].classList.remove('active');
						block.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0.35)';
						block.querySelector('.select__text').innerText = listItemTitle;
						selectOptionBlock[1].classList.remove('disabled');
						if (index == 1) {
							setTimeout(() => {
								optionsBlock.classList.remove('active');

								// append shortcard to block
								let shortcard = createShortCard(options[0],  options[1]);
								/*shortCardOption1.innerText = options[0];
								shortCardOption2.innerText = options[1];*/
								card.append(shortcard);
								selectOptionBlock[1].classList.add('disabled');
								card.classList.add('active');
							}, 1000)
						}
					})
				})
			})
		})	
	})
}) 


//Mobile view

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

