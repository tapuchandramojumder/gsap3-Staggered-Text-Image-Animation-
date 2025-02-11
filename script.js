let tl = gsap.timeline({ defaults: { ease: "power2.out" } });



// Navigation Animation
tl.from("#nav h3", {
    y: -50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
});

// Hero Text Animation
tl.from("#hero h1", {
    x: -500,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
});

tl.from("h1",{
    x:-500,
    opacity:0,
    duration:.8,
    delay:0.2,
    stagger:.4,
})


tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:.8,
    delay:0.2,
    stagger:.4,
})


document.querySelectorAll("#gallery img").forEach(img => {
    img.addEventListener("mouseover", () => {
        gsap.to(img, { scale: 1.1, duration: 0.3 });
    });
    img.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.3 });
    });
});




