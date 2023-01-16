let navCont1 = document.querySelector('.navbar__container');
let navCont2 = document.querySelector('.navbar__border__container');

let pageNavLinksArr = [...navCont1.querySelectorAll('.page__link')];
let pagesArr = [...document.querySelectorAll('.page')];

let removeClass = (item, className) => {
	item.classList.remove(className);
}

pageNavLinksArr.forEach(link => {
	let index = pageNavLinksArr.indexOf(link);

	link.addEventListener('click', () => {
		pageNavLinksArr.forEach(item => {removeClass(item, 'active')});
		pagesArr.forEach(item => {removeClass(item, 'active')});
		link.classList.add('active');
		pagesArr[index].classList.add('active');
	});
})


// Page 2

let page2Wrap = document.querySelector('.page_2');
let selectBlockP2 = page2Wrap.querySelector('.select__block');
let selectOptionBlock1 = page2Wrap.querySelector('.select__options__block');
let selectTitle = page2Wrap.querySelector('.select__title');
let optionsArr = [...selectOptionBlock1.querySelectorAll('.option')];

selectBlockP2.addEventListener('click', () => {
	selectOptionBlock1.classList.toggle('active');
});

optionsArr.forEach(option => {
	option.addEventListener('click', () => {
		let newOptionText = selectTitle.innerText;
		selectTitle.innerText = option.innerText;
		option.innerText = newOptionText;
	});
});

// Page 3

let selectBlockP3 = document.querySelector('.page3__select__block');
let selectOptionBlock3 = selectBlockP3.querySelector('.select__options__block');
let selectTitleBlock3 = selectBlockP3.querySelector('.select__title__block');
let selectTitle3 = selectBlockP3.querySelector('.select__title');
let optionsArr3 = [...selectOptionBlock3.querySelectorAll('.option')];

selectBlockP3.addEventListener('click', () => {
	selectOptionBlock3.classList.toggle('active');
	selectTitleBlock3.classList.toggle('active');
});

optionsArr3.forEach(option => {
	option.addEventListener('click', () => {
		let newOptionText = selectTitle3.innerText;
		selectTitle3.innerText = option.innerText;
		option.innerText = newOptionText;
	});
});


let selectBlockP31 = document.querySelector('.table__select__block');
let selectOptionBlock31 = selectBlockP31.querySelector('.select__options__block');
let selectTitleBlock31 = selectBlockP31.querySelector('.select__title__block');
let selectTitle31 = selectBlockP31.querySelector('.title');
let optionsArr31 = [...selectOptionBlock31.querySelectorAll('.option')];

selectBlockP31.addEventListener('click', () => {
	selectOptionBlock31.classList.toggle('active');
	selectTitleBlock31.classList.toggle('active');
});

optionsArr31.forEach(option => {
	option.addEventListener('click', () => {
		let newOptionText = selectTitle31.innerText;
		selectTitle31.innerText = option.innerText;
		option.innerText = newOptionText;
	});
});

// Page 4

let page4 = document.querySelector('.page_4');
let selectBlockP4 = page4.querySelector('.select__block');
let selectOptionBlock4 = selectBlockP4.querySelector('.select__options__block');
let selectTitleBlock4 = selectBlockP4.querySelector('.select__title__block');
let selectTitle4 = selectBlockP4.querySelector('.title');
let optionsArr4 = [...selectOptionBlock4.querySelectorAll('.option')];

selectBlockP4.addEventListener('click', () => {
	selectOptionBlock4.classList.toggle('active');
});

optionsArr4.forEach(option => {
	option.addEventListener('click', () => {
		let newOptionText = selectTitle4.innerText;
		selectTitle4.innerText = option.innerText;
		option.innerText = newOptionText;
	});
});
