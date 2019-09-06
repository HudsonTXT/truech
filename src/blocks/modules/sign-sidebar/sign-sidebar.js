import 'jquery';
import {tns} from "tiny-slider/src/tiny-slider";

$(document).ready(() => {
    var container = ".sign-slider";
    if($(container).length) {
        var promoSlider = tns({
            container: container,
            items: 1,
            autoplay: true,
            nav: true,
            navPosition: "bottom",
            speed: 1000,
            mouseDrag: true,
            slideBy: 1,
        });
    }


});

