$('.slider-1').slick({
    dots: false,
    infinite: true,
    prevArrow: ".section-1-prev",
    nextArrow: ".section-1-next",
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.destination-slider').slick({
    dots: false,
    infinite: true,
    prevArrow: ".section-3-prev",
    nextArrow: ".section-3-next",
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                autoplay: true,
            }
            
        }
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.S5-slider').slick({
    prevArrow: ".section-5-prev",
    nextArrow: ".section-5-next",
});

// NavBar
let navIcon = document.querySelector(".menu-icon");
let navMenu = document.querySelector("#nav-menu");
let navFlag = 0;

navIcon.addEventListener("click", () => {
    navIcon.classList.toggle("active");
    document.body.classList.toggle("overflow-y-hidden");
    if (navFlag === 0)
    {
        navMenu.style.right = 0;
        navMenu.style.visibility = "visible";
        navMenu.style.opacity = 1;
        navFlag++;
    }
    else {
        navMenu.style.right = "-100%";
        navMenu.style.visibility = "hidden";
        navMenu.style.opacity = 0;
        navFlag--;
    }
});