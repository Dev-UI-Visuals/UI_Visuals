gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


function scrollDown(id) {
    gsap.to(window,
        {
            duration: .4,
            scrollTo: {
                y: id,
                offsetY: 90
            }
        }
    )
}



var swiper = new Swiper(".member-swiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     1000: {
    //         slidesPerView: 2,
    //         spaceBetween: 0,
    //     },
    //     600: {
    //         slidesPerView: 1,
    //         spaceBetween: 0,
    //     }
    // }
})

var swiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     1000: {
    //         slidesPerView: 2,
    //         spaceBetween: 0,
    //     },
    //     600: {
    //         slidesPerView: 1,
    //         spaceBetween: 0,
    //     }
    // }
})
var swiper = new Swiper(".header-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
})

var navElements = document.getElementById("#nav");
window.addEventListener('scroll', function () {
    const offset = window.pageYOffset;

    if (offset > 50)
        nav.classList.add('white-nav')
    else
        nav.classList.remove('white-nav')
});

gsap.fromTo("#about-head-fade", {
    opacity: 0
}, {
    opacity: 1,
    duration: ".5",
    delay: ".1",
    ease: "none",
    scrollTrigger: {
        trigger: "#about-head-fade",
        start: "bottom 95%"
    }
})
gsap.fromTo("#why-ui-fade", {
    opacity: 0
}, {
    opacity: 1,
    duration: 0.5,
    delay: 0.1,
    ease: "none",
    scrollTrigger: {
        trigger: "#why-ui-fade",
        start: "center 95%",
    }
})
gsap.fromTo("#department-fade", {
    opacity: 0
}, {
    opacity: 1,
    duration: 0.5,
    delay: 0.1,
    ease: "none",
    scrollTrigger: {
        trigger: "#department-fade",
        start: "bottom 95%",
    }
})
gsap.fromTo("#team-fade", {
    translateY: "100%"
}, {
    translateY: "0%",
    duration: 0.15,
    delay: 0.3,
    ease: "none",
    scrollTrigger: {
        trigger: "#team-fade",
        start: "bottom 95%",
    }
})
gsap.fromTo("#event-fade", {
    opacity: 0
}, {
    opacity: 1,
    duration: 0.5,
    delay: 0.1,
    ease: "none",
    scrollTrigger: {
        trigger: "#event-fade",
        start: "bottom 95%",
    }
})

gsap.fromTo(".past-event", {
    opacity: 0,
    translateY: "20%"
}, {
    opacity: 1,
    translateY: "0%",
    duration: 0.2,
    delay: 0.3,
    ease: "none",
    scrollTrigger: {
        trigger: ".past-event",
        start: "top 95%",
    }
})