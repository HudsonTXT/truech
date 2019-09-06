$(document).ready(function () {

    //Star SYSTEM
    $(".stars-grid .star").on({
        mouseenter: function () {
            let starGrade = $(this).attr("data-n");
            $(this).parent().find(".hover").removeClass("hover");

            $.each($(this).parent().find(".star"), function (i, el) {
                let currentGrage = +$(el).attr("data-n");
                if(currentGrage <= starGrade) {
                    $(el).addClass("hover");
                }
                
            });
        },
        mouseleave: function () {
            $(this).parent().find(".hover").removeClass("hover");
        },
        click: function () {
            let starGrade = $(this).attr("data-n");
            $(this).parent().find(".active, .hover").removeClass("active").removeClass("hover");

            $.each($(this).parent().find(".star"), function (i, el) {
                let currentGrage = +$(el).attr("data-n");
                if(currentGrage <= starGrade) {
                    $(el).addClass("active");
                }

            });


            $(this).closest(".item").find(".btn.js-reviews-next-step").removeAttr("disabled")

        }
    });

    //Сделать кнопку активной
    //При ее нажатии перейди к следующему шагу: открыть итем и сделать в шапке активным предмет!
    $(".js-reviews-next-step").on("click", function () {

        if(!$(this).attr("disabled")) {
            changeReviewStep();
        }

    });

    // При нажатии на иконку шага, возвращаться к нему

    $(".modal--review__head .item").on("click", function (e) {
        console.log($(this).attr("data-step"));
        if($(this).hasClass("old")) {
            $(this).closest(".modal__content").find(".modal--review__content .item.active").removeClass("active");
            $(this).closest(".modal__content").find(".modal--review__content .item[data-step="+$(this).attr("data-step")+"]").addClass("active");

            changeReviewStep($(this).attr("data-step"))
        }
    });



});



function changeReviewStep(step) {
    console.log(step);
    let currentStep;
    if(typeof step === "undefined") {
        currentStep = +$("#read-review__stepper").find("i").text();
    } else {
        currentStep = +step;
        currentStep--;
    }



    if(currentStep != 4) {
        //Сначала обновляем шаги
        $("#read-review__stepper").find("i").text(currentStep+1);
        //Заканчиваем с текущим шагом
        $(".modal--review__head").find('[data-step="'+currentStep+'"]').removeClass("active").addClass("old");
        $(".modal--review__content").find('[data-step="'+currentStep+'"]').removeClass("active");

        //Активируем следующий шаг
        $(".modal--review__head").find('[data-step="'+(currentStep+1)+'"]').addClass("active");
        $(".modal--review__content").find('[data-step="'+(currentStep+1)+'"]').addClass("active");
    } else {
        //send some data infos


        // null modal
        $(".modal--review__content").find(".item.active").removeClass("active")
        $(".modal--review__content").find('.item[data-step="1"]').addClass("active")
        $(".modal--review__content").find(".star").removeClass("active");

        $(".modal--review__head").find(".old").removeClass("old");
        $(".modal--review__head").find(".active").removeClass("active");
        $(".modal--review__head").find('.item[data-step="1"]').addClass("active")


        $(".modal__head").find("#read-review__stepper i").text("1");




    }


}

