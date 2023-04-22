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


var MemberSwiper = new Swiper(".member-swiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1000: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
        800: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        200: {
            slidesPerView: 2,
            spaceBetween: 0,
        }
    }
});
MemberSwiper.autoplay.stop();

gsap.fromTo("#member", {}, {
    scrollTrigger: {
        trigger: "#member",
        start: "bottom 80%",
        onEnter: () => {
            MemberSwiper.autoplay.start();
        },
        onLeave: () => {
            MemberSwiper.autoplay.pause();
        },
        onEnterBack: () => {
            MemberSwiper.autoplay.resume();
        },
    }
})
var TestiomialSwiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
TestiomialSwiper.autoplay.stop();
gsap.fromTo("#testimonial", {}, {
    scrollTrigger: {
        trigger: "#testimonial",
        start: "center bottom",
        onEnter: () => {
            TestiomialSwiper.autoplay.start();
        },
        onLeave: () => {
            TestiomialSwiper.autoplay.pause();
        },
        onEnterBack: () => {
            TestiomialSwiper.autoplay.resume();
        },
    }
})

var HeaderSwiper = new Swiper(".header-swiper", {
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
    if (offset > 100 && offset < 600) {
        nav.classList.add('half-nav')
        nav.classList.remove('white-nav')
    }
    else if (offset >= 600) {
        nav.classList.add('white-nav')
        nav.classList.remove('half-nav')
    }
    else {
        nav.classList.remove('white-nav')
        nav.classList.remove('half-nav')
    }
});
var departmentCounter = document.getElementById("department-counter");
var memberCounter = document.getElementById("member-counter");
var eventsCounter = document.getElementById("events-counter");

function counter(element, maxNumber, delay) {
    var number = 0;
    element.innerText = number;
    const interval = setInterval(function () {
        element.innerText = number;
        if (number < maxNumber) {
            number++;
        } else {
            clearInterval(interval);
        }
    }, delay)
}


gsap.fromTo("#department-counter", {}, {
    scrollTrigger: {
        trigger: "#department-counter",
        start: "bottom 95%",
        onEnter: () => {
            counter(departmentCounter, 8, 50);
        }
    }
})
gsap.fromTo("#member-counter", {}, {
    scrollTrigger: {
        trigger: "#member-counter",
        start: "bottom 95%",
        onEnter: () => {
            counter(memberCounter, 66, 7);
        }
    }
})
gsap.fromTo("#events-counter", {}, {
    scrollTrigger: {
        trigger: "#events-counter",
        start: "bottom 95%",
        onEnter: () => {
            counter(eventsCounter, 3, 125);
        }
    }
})


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