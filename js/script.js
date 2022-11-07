
$('.slid1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 10000,
    lazyLoad: false,
    center:true,
    nav: false,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

$('.slid2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 30000,
    lazyLoad: false,
    center:true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 1
        }
    }
})

$('.slid3').owlCarousel({
    items:4,
    lazyLoad:true,
    loop:true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    margin:10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
