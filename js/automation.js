let swtichBlocksArr = [...document.querySelectorAll('.switch')];
console.log(swtichBlocksArr);

swtichBlocksArr.forEach(block => {
	block.addEventListener('click', () => {
		let switchBtn = block.querySelector('input');
		let switchTitle = block.querySelector('.switch__title');
		if (switchBtn.checked == true) {
			switchTitle.innerText = 'Active';
			switchTitle.classList.add('active');
		} else if (switchBtn.checked == false) {
			switchTitle.innerText = 'Inactive';
			switchTitle.classList.remove('active');
		}

	})
})