const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var tl = gsap.timeline()

tl.to("#loader",{
    y:"100vh",
    scale:0.7,
    duration:0
})
tl.to("#loader",{
    y:"-5vh",
    duration:1,
    delay:1
})
tl.to("#loader",{
    y:"0vh",
    rotate:-720,
    scale:1,
    duration:1,
    delay:0.7
})