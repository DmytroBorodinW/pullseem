'use strict'

let html = document.querySelector('html');
let body = document.querySelector('body');
let wrap = document.querySelector('.wrap');
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
		lanuagesArr[0].label = 'He';
		lanuagesArr[1].label = 'En';
	}else {
		lanuagesArr[0].label = 'עברית';
		lanuagesArr[1].label = 'English';
	}
}

changeLanguageTitle();

window.addEventListener('resize', changeLanguageTitle);


selectBlock.addEventListener('change', (e) => {
	let val = e.srcElement.value;
	wrap.classList.remove('rtl');
	html.removeAttribute('dir');
	e.srcElement.attributes[0].nodeValue = '';
	
	if (val == 'false') {
		wrap.classList.add('rtl');
		e.srcElement.attributes[0].nodeValue = 'rtl'
		html.setAttribute('dir', 'rtl');
	}
})

// Create element

let setElement = (elName, elClass, elCont) => {
	let newElement = document.createElement(elName);
	newElement.classList.add(elClass);
	newElement.innerText = elCont;
	return newElement;
}	

// Show full title

let groupNameBlocksArr = [...document.querySelectorAll('.table__col.group__name, .title__block')];

groupNameBlocksArr.forEach(block => {
	let infoBlock = block.querySelector('.group__info__block');
	let title = block.querySelector('.group__name').innerText;
	let fullTitle = setElement('p', 'full__group__name', title);
	infoBlock.appendChild(fullTitle);
})

let showFullTitle = () => {
	groupNameBlocksArr.forEach(block => {
		let groupInfoBlock = block.querySelector('.group__info__block');
		let groupNameBlock = groupInfoBlock.querySelector('.group__name');
		let groupInfoBlockWidth = groupInfoBlock.offsetWidth;
		let groupNameBlockWidth = groupNameBlock.scrollWidth;
		if (groupInfoBlockWidth < groupNameBlockWidth) {
			groupNameBlock.style.whiteSpace = 'nowrap';
			groupNameBlock.style.textOverflow = 'ellipsis';
			groupNameBlock.style.overflow = 'hidden';
			block.addEventListener('mouseover', () => {
				let fullTitleBlock = block.querySelector('.full__group__name');
				fullTitleBlock.classList.add('active');
			});
			block.addEventListener('mouseleave', () => {
				let fullTitleBlock = block.querySelector('.full__group__name');
				fullTitleBlock.classList.remove('active');
			})
		}
	})
}

showFullTitle();

window.addEventListener('resize', showFullTitle)


//Mobile view

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});



