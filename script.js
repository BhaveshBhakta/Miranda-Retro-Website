var tl = gsap.timeline()

tl.to("#loader",{
    y:"100vh",
    scale:0.85,
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