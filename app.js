const openBtn = document.getElementById('about-modalBtn');

// Grabbing modal element
const modal = document.getElementById('aboutMeModal');

// Grabbing close button
const close = document.getElementById('close');
const mainTitle = document.querySelector('.main-title');

const openModal = () => {
	modal.style.display = 'block';
	mainTitle.style.display = 'none';
};

// const blockText = () => {

// 	openModal();
// };

const closeModal = () => {
	modal.style.display = 'none';
	mainTitle.style.display = 'block';
};

openBtn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);

const timeline = gsap.timeline();

// console.log(timeline)

timeline
	.from('.header', {
		opacity: 0,
		duration: 1.0,
		delay: 1.0,
	})
	.from('.main-title', {
		opacity: 0,
		y: '20%',
		duration: 1.0,
	});
