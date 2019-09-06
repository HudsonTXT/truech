import 'jquery';
import {tns} from "tiny-slider/src/tiny-slider";

$(document).ready(() => {
    var container = ".promoblock__carousel";
    if ($(container).length) {
        var promoSlider = tns({
            container: container,

            autoplay: true,
            nav: true,
            navPosition: "bottom",
            speed: 1000,

            mouseDrag: false,
            slideBy: 1,
            responsive: {
                0: {
                    items: 1,
                    gutter: 0
                },
                600: {
                    items: 2,
                    gutter: 16
                },
                1200: {
                    items: 2.5,
                    gutter: 16,
                }
            }
        });
    }

});
$(document).ready(() => {
    var container = ".slider-reviews__wrapper";
    if ($(container).length) {
        var promoSlider = tns({
            container: container,
            autoplay: true,
            nav: true,
            navPosition: "bottom",
            speed: 1000,
            slideBy: 1,
            items: 1,
            gutter: 0,
            controlsText: ['<i class="fal fa-chevron-left"></i>', '<i class="fal fa-chevron-right"></i>'],
        });
    }

});

$(document).ready(() => {
    var container = ".courses__carousel";
    if ($(container).length) {
        var promoSlider = tns({
            container: container,

            autoplay: true,
            nav: true,
            navPosition: "bottom",
            speed: 1000,

            mouseDrag: true,
            slideBy: 1,
            responsive: {
                0: {
                    items: 1,
                    gutter: 0
                },
                600: {
                    items: 2,
                    gutter: 16
                },
                1200: {
                    items: 4,
                    gutter: 16,
                }
            }
        });
    }

});


$(document).ready(() => {
    var container = ".speakers__carousel";
    if ($(container).length) {
        var promoSlider = tns({
            container: container,

            autoplay: true,
            nav: true,
            navPosition: "bottom",
            speed: 1000,

            mouseDrag: true,
            slideBy: 1,
            responsive: {
                0: {
                    items: 1,
                    gutter: 0
                },
                600: {
                    items: 2,
                    gutter: 16
                },
                1200: {
                    items: 4,
                    gutter: 16,
                }
            }
        });
    }

});
