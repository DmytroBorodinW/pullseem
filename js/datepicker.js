let datapickersArr = [...document.querySelectorAll('.date__input')];

datapickersArr.forEach(picker => {
	picker.addEventListener('click', () => {
		picker.classList.add('active');
	})
})