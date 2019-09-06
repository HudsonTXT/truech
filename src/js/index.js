
import 'jquery-ui/ui/data'
import 'jquery-ui/ui/i18n/datepicker-ru';

import './import/jquery.input.mask.min'


$(document).ready(function () {


    /* Open catalog button on hover */

    $(".btn.header__catalog-open").mouseenter(function () {
        $(".header__catalog.js-toggler-target").addClass("js-toggler-open");
    }).mouseleave(function (e) {
        // console.log(e);
    });

    $(document).on({
        mousemove: function (e) {
            // console.log(e.target);

            if(!$(e.target).closest(".js-toggler-open").length && !$(e.target).hasClass("js-toggler-open") && !$(e.target).closest(".header__catalog__wrapper").length && !$(e.target).hasClass("header__catalog__wrapper") && !$(e.target).closest(".js-mobile-open").length && !$(e.target).hasClass("js-mobile-open")) {
                $(".header__catalog.js-toggler-target").removeClass("js-toggler-open");
            }


        }
    });


    //Toggler function
    //Если нажали на .js-toggler , то ищем у него data-атрибут с селектором дропдауна
    //Ищем дропдаун в документе с селектором и тогглим его
    $(document).on("click", ".js-toggler", function () {

        let selector = $(this).attr("data-target");
        if(selector) {
            if($(this).attr("data-body-lock") === "true") {
                $("body").toggleClass("body--lock"); //bodyLockToggle
            }
            if ($(this).hasClass("js-toggler-parent")) {
                $(".js-toggler-open").removeClass("js-toggler-open");
                $(this).parent().find(".js-toggler-target" + selector).toggleClass("js-toggler-open");
            } else {
                $(".js-toggler-target" + selector).toggleClass("js-toggler-open");
                $(".js-toggler-open:not(" + selector + ")").removeClass("js-toggler-open");
            }

            return false;
        }


    });


    //Обрабатываем все клики
    // Если у нас в документе есть класс js-toggler-open
    // То мы смотрим, куда кликнул пользователь
    // Если клик вне области цели, то закрываем цель. Иначе ничо не далем
    //А также если клик не на тогглер
    $(document).on("click", function (e) {
        // console.log(e.target);
        if(!$(e.target).closest(".js-toggler").length && !$(e.target).hasClass("js-toggler")) {
            if($(document).find(".js-toggler-open").length) {
                if(!$(e.target).closest(".js-toggler-open").length && !$(e.target).hasClass("js-toggler-open")) {
                    $(document).find(".js-toggler-open").removeClass("js-toggler-open");
                    if($("body").hasClass("body--lock")) {
                        $("body").toggleClass("body--lock"); //bodyLockToggle
                    }
                }
            }
        }


        // Если нам нужно закрыть дропдаун при выборе
        if($(e.target).closest(".js-toggler-close-on-select").length || $(e.target).hasClass(".js-toggler-close-on-select")) {
            if($(e.target).closest(".js-toggler-close-on-select").length) {
                $(e.target).closest(".js-toggler-close-on-select").find(".js-toggler-close-on-select__item").removeClass("active");
                $(e.target).closest(".js-toggler-close-on-select__item").addClass("active");
            }
            $(e.target).closest(".js-toggler-close-on-select").removeClass("js-toggler-open");
            if($("body").hasClass("body--lock")) {
                $("body").toggleClass("body--lock"); //bodyLockToggle
            }

            return false;
        }
    });

    $(document).on("click", ".js-toggler-closer", function () {
        $(this).closest(".js-toggler-open").removeClass("js-toggler-open");
    });


    $(document).on("click", ".footer__title", function () {
        $(this).parent().toggleClass("js-footer__col--opened")
    });


    $(document).on("touchstart", ".sidebar__user", function () {
        $(this).closest(".cabinet__sidebar").toggleClass("js-sidebar__links--opened");
    });

});

import "jquery-ui/ui/widgets/slider";
import "jquery-ui/ui/widgets/sortable";
import "./import/modules";
import "./import/components";
import "./import/lightbox"
import "jquery-modal"

/* Full height */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$( "#slider-range" ).slider({
    range: true,
    min: 1,
    max: 365,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
        $("#filter-value-min").text(ui.values[ 0 ]);
        $("#filter-value-max").text(ui.values[ 1 ]);
    }


});
$("#filter-value-min").text($( "#slider-range" ).slider( "values", 0 ));
$("#filter-value-max").text($( "#slider-range" ).slider( "values", 1 ));


// плавный скролл

$(document).ready(function () {
    $("a.easing-scroll").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top-40;
        $('html').animate({ scrollTop: destination }, 500);

        return false;
    });
});

// Register questions system

$(".js-sign-form").on("submit", function (e) {
    e.preventDefault();
    let currentStep = +$("#js-sign-step").text();
    if(currentStep !== 3) {
        $("#js-sign-step").text(currentStep + 1);
        $(this).parent().find('[data-step="'+currentStep+'"]').removeClass("form__stepper--active").slideUp();
        $(this).parent().find('[data-step="'+(currentStep+1)+'"]').addClass("form__stepper--active");
    }
});


// Prices in course

$("#course-prices .prices-grid").on("click", "[data-packet]", function () {
    console.log("packet change: " + $(this).attr("data-packet"));
    $(this).parent().find(".active").removeClass("active");
    $(this).addClass("active");

    $(".packet__features").find(".card.active").removeClass("active");
    $(".packet__features").find('.card[data-packet="'+$(this).attr("data-packet")+'"]').addClass("active");
});


let sortableParams = {
    axis: "y",
    containment: "parent",
    items: "li:not(li:last)",
    placeholder: "ui-sortable-placeholder",
    cursor: "move",
};

// Sortable in add course
$( ".program-course ul" ).sortable(sortableParams);
// $( ".program-course ul" ).disableSelection();

//Delete part of inputs

$(document).on("click", ".program-course .js-delete", function (e) {
    e.preventDefault();

    let objType = $(this).closest("li").attr("data-type");

    if (objType === "module") {
        $(this).closest("li").remove();
    } else if(objType === "part") {
        // console.log($(this).closest("li"));
        $(this).closest("li").next("ul").remove();
        $(this).closest("li").remove();
    }

});

$(document).on("click", ".program-course .js-new", function (e) {
    e.preventDefault();

    $(this).closest("li").next("ul").append($(this).closest("li").next("ul").find("li").last().clone());
    $( ".program-course ul" ).sortable("refresh")
});

$(document).on("input", ".inputs-panel--userable input", function () {
    let objType = $(this).closest("li").attr("data-type");
    // console.log("This is: ", objType);

    let parent = $(this).closest("li").parent();
    if ($(this).closest("li").is(parent[0].lastElementChild)) {
        // Создаем дубликат объектов при вводе текста
        let node = $(this).closest("li").clone();

        if (objType === "part") {
            let nullSubNode = $(this).closest("ul").find('[data-type="module"]').last().clone();
            nullSubNode = nullSubNode.find("input").attr({
                "placeholder": "Новый модуль",
                "name": "cabinet_part_"+($('.program-course li[data-type="module"]').length + 1),
                "id": "cabinet_part_"+($('.program-course li[data-type="module"]').length + 1)
            }).val("").closest("li");
            nullSubNode = nullSubNode.find("label").attr({
                "for": "cabinet_part_"+($('.program-course li[data-type="module"]').length + 1)
            }).closest("li");
            let nullSubNodeUl = $("<ul></ul>").append(nullSubNode);

            nullSubNodeUl.appendTo(parent);
            $( ".program-course ul" ).sortable(sortableParams);

        }


        let placeholder;

        switch (objType) {
            case "part" :
                placeholder = "Новая часть";
                break;
            case "module" :
                placeholder = "Новый модуль";
                break;
            case "feature" :
                placeholder = "Новое преимущество";
        }
        let nullNode = node;

        nullNode = nullNode.find("input").attr({
            "placeholder": placeholder,
            "name": ("cabinet_"+objType+"_")+($('.program-course li[data-type='+objType+']').length + 1),
            "id": ("cabinet_"+objType+"_")+($('.program-course li[data-type='+objType+']').length + 1)
        }).val("").closest("li");

        nullNode = nullNode.find("label").attr({
            "for": ("cabinet_"+objType+"_")+($('.program-course li[data-type='+objType+']').length + 1)
        }).closest("li");

        if(objType === "feature") {
            nullNode = nullNode.find("label").text("Преимущество №" + ($('.program-course li[data-type='+objType+']').length + 1)).closest("li");
        }
        // console.log("Main Node : ", nullNode);
        nullNode.appendTo(parent);

    }
});

$(document).on("input", ".js-visible-toggler__watch", function (e) {
        if($(this).hasClass("js-visible__invert")) {
            $(this).closest(".js-visible-toggler").find(".js-visible-toggler__elements").toggleClass("visible", !$(this).find("input").prop("checked"));
        } else {
            $(this).closest(".js-visible-toggler").find(".js-visible-toggler__elements").toggleClass("visible", $(this).find("input").prop("checked"));
        }

});

$(function() {
    $( ".datepicker" ).datepicker({
        nextText: "",
        prevText: "",
    });

    $(document).on("click", ".drop-zone, .description-zone", function () {
        $(this).closest(".input-panel").find("input").click();
    });

    $(document).on("input", ".drop-zone__input", function (e) {
        console.log("change input");
        let file = e.target.files[0];
        let reader = new FileReader();
        let fileInput = $(this);

        reader.onloadend = function () {
            //console.log(reader.result);
            fileInput.closest(".input-panel").find(".drop-zone").css({backgroundImage: "url('" + reader.result + "')"}).addClass("drop-zone-changed");
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            console.warn("none");
        }

    });

    $('.mask-phone input').mask("+7 999 999-99-99");

});
