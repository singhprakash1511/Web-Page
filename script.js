var tl = gsap.timeline();

tl.from(".navitem",{
    stagger: .3,
    duration: 1.5,
    y: 20,
    delay: 0.3,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('#line', {
    width: 0,
    duration: 1,
    ease: 'Expo.easeInOut',
}, '-=2')
.from('.leftitem', {
    stagger: .3,
    duration: 2,
    delay:0.2,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')
.from('#right img', {
    duration: 2,
    scale: 1.05,
    delay:0.2,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')