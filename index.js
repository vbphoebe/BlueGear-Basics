function animate(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".upper",{
        y: -100,
        duration: 0.5,
        opacity: 0
    })

    gsap.to(".upper",{
        y: 5,
        duration: 0.5,
    })

    gsap.from('.first_page',{
        y: 200,
        duration: 0.5,
        opacity: 0
    })

    gsap.from(".quote h1",{
        scrollTrigger:{
            trigger: ".quote h1",
            toggleActions: "restart pause restart pause" 
        },
        y: 70,
        duration: 2,
        ease: "power1.inOut"
    });

    gsap.from(".left",{
        scrollTrigger:{
            trigger: ".left",
            toggleActions: "restart pause restart pause" 
        },
        x: -100,
        duration: 1,
        opacity: 0,
        ease: "power1.inOut"
    });

    gsap.from(".right",{
        scrollTrigger:{
            trigger: ".right",
            toggleActions: "restart pause restart pause" 
        },
        x: 100,
        duration: 1,
        opacity: 0,
        ease: "power1.inOut"
    });

    gsap.from(".quote2 h1",{
        scrollTrigger:{
            trigger: ".quote2 h1",
            toggleActions: "restart pause restart pause" 
        },
        y: -70,
        duration: 1,
        ease: "power1.inOut"
    });
}