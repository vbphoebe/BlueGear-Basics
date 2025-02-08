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

    gsap.from(".title",{
        y: 200,
        duration: 0.5,
        opacity: 0
    });

    gsap.from(".center",{
        scrollTrigger:{
            trigger: ".center",
            toggleActions: "restart pause restart pause" 
        },
        x: 90,
        duration: 0.8,
        opacity: 0,
        ease: "power1.inOut"
    });

    gsap.from(".sub-caption",{
        scrollTrigger:{
            trigger: ".sub-caption",
            toggleActions: "restart pause restart pause" 
        },
        x: -70,
        duration: 0.8,
        opacity: 0,
        ease: "power1.inOut"
    });

    gsap.from(".function, .function_2, .function_3, .function_4",{
        scrollTrigger:{
            trigger: ".function, .function_2, .function_3, .function_4",
            toggleActions: "restart pause restart pause" 
        },
        y: -70,
        duration: 1,
        opacity: 0,
        ease: "power1.inOut"
    });

    gsap.from(".function_5, .function_6, .function_7, .function_8 ",{
        scrollTrigger:{
            trigger: ".function_5, .function_6, .function_7, .function_8 ",
            toggleActions: "restart pause restart pause" 
        },
        y: 70,
        duration: 1,
        opacity: 0,
        ease: "power1.inOut"
    });

    gsap.from(".M img",{
        scrollTrigger:{
            trigger: ".M img",
            toggleActions: "restart pause restart pause" 
        },
        x: 60,
        duration: 1,
        opacity: 0,
        ease: "power1.inOut"
    });

    gsap.from(".L h3",{
        scrollTrigger:{
            trigger: ".M img",
            toggleActions: "restart pause restart pause" 
        },
        x: -60,
        duration: 1,
        opacity: 0,
        ease: "power1.inOut"
    });
}
