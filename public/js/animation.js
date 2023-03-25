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
(
    function () {
        var indx = 0;
        var imageList = [
            {
                img: "/image/Code_Bricks_Event_1.jpg",
                position: "center center"
            },
            {
                img: "/image/Code_Bricks_Event_2.png",
                position: "center top"
            },
            {
                img: "/image/Metting.png",
                position: "center center"
            }
        ];
        var element = document.getElementById("bg");
        element.style.backgroundSize = "cover";
        element.style.backgroundRepeat = "no-repeat";
        element.style.background = `linear-gradient(rgb(237, 237, 237, 1),rgb(237, 237, 237, 0.6),rgb(237, 237, 237, 1)),url(${imageList[indx].img})`;
        element.style.backgroundPosition = `${imageList[indx].position}`;
        setInterval(function () {
            if (indx < imageList.length) {
                element.style.backgroundSize = "fit";
                element.style.background = `linear-gradient(rgb(237, 237, 237, 1),rgb(237, 237, 237, 0.6),rgb(237, 237, 237, 1)),url(${imageList[indx].img})`;
                element.style.backgroundPosition = `${imageList[indx].position}`;
                element.style.backgroundRepeat = "no-repeat";
                indx = indx + 1;
            } else {
                indx = 0;
            }
        }, 3000)

    }
)()


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

var indx = 0;
function nextLeader() {
    indx = indx + 1;
    if (indx < 6) {
        var element = document.getElementById("leader");
        element.style.marginLeft = `-${indx * 170}px`;
    } else {
        indx = 0;
        var element = document.getElementById("leader");
        element.style.marginLeft = `0px`;
    }
}

gsap.fromTo("#nav", {
    backgroundColor: "transparent"
}, {
    backgroundColor: "#fafafa",
    duration: .1,
    scrollTrigger: {
        trigger: "#nav",
        start: "100% top",
        end: "110% 13%",
        onEnter: () => {
            gsap.fromTo("#nav", {
                backgroundColor: "#fafafa"
            }, {
                backgroundColor: "transparent",
                duration: .1,
                scrollTrigger: {
                    trigger: "#nav",
                }
            })
        },
        onEnterBack: () => {
            gsap.fromTo("#nav", {
                backgroundColor: "#fafafa"
            }, {
                backgroundColor: "transparent",
                duration: .1,
                scrollTrigger: {
                    trigger: "#nav",
                }
            })
        },
        onLeaveBack: () => {
            gsap.fromTo("#nav", {
                backgroundColor: "#fafafa"
            }, {
                backgroundColor: "transparent",
                duration: .1,
                scrollTrigger: {
                    trigger: "#nav",
                }
            })
        },
        onLeave: () => {
            gsap.fromTo("#nav", {
                backgroundColor: "transparent"
            }, {
                backgroundColor: "#fafafa",
                duration: .1,
                scrollTrigger: {
                    trigger: "#nav",
                }
            })
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