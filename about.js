function play(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".upper",{
        y: -100,
        duration: 0.5,
        opacity: 0
    });

    gsap.to(".upper",{
        y: 5,
        duration: 0.5,
    });

    gsap.from(".content",{
        y: 200,
        duration: 0.5,
        opacity: 0
    });

    gsap.from(".mission",{
        scrollTrigger:{
            trigger: ".mission",
            toggleActions: "restart pause restart pause" 
        },
        x: -1000,
        duration: 1.5,
        ease: "power1.inOut"
    });

    gsap.from(".personal_bg",{
        scrollTrigger:{
            trigger: ".personal_bg",
            toggleActions: "restart pause restart pause" 
        },
        x: 1000,
        duration: 1.3,
        ease: "power1.inOut"
    });
}
