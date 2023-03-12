gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 1.5,
	effects: true
})

gsap.fromTo('.hero-section', { opacity: 1 }, {
	opacity: 0,
	scrollTrigger: {
		trigger: '.hero-section',
		start: 'center',
		end: '820',
		scrub: true
	}
})

let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

itemsL.forEach(item => {
	gsap.fromTo(item, { opacity: 0, x: -50 }, {
		opacity: 1, x: 0,
		scrollTrigger: {
			trigger: item,
			start: '-850',
			end: '-100',
			scrub: true
		}
	})
})

let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

itemsR.forEach(item => {
	gsap.fromTo(item, { opacity: 0, x: 50 }, {
		opacity: 1, x: 0,
		scrollTrigger: {
			trigger: item,
			start: '-750',
			end: 'top',
			scrub: true
		}
	})
})

// Audio

let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
	audio.pause()
}