import "jquery";

var categories = {

    "design": {
        title: "Дизайн",
        img: "img/1.jpg",
        subcategories: ["Веб-дизайн", "Графический дизайн", "Ланшафтный дизайн", "Продуктовый дизайн"]
    },

    "business": {
        title: "Бизнес",
        img: "img/2.jpg",
        subcategories: ["Предпринимательство", "Франшизы", "Подкатегория 1", "Подкатегория 2"]
    },

    "health": {
        title: "Здоровье",
        img: "img/3.jpg",
        subcategories: ["Здоровые дети", "Здоровье", "Фитнес", "Питание", "Категория"]
    },

    "it": {
        title: "IT",
        img: "img/3.jpg",
        subcategories: ["Программирование", "Логика", "Задачи", "Искуственный интеллект"]
    },

    "personal": {
        title: "Личное развитие",
        img: "img/3.jpg",
        subcategories: ["Психология", "Философия", "Права"]
    },

};


$(function () {
    //If link in js header categories
    // And if link has attribute data-category
    // When check her category in $categories var
    // And clear .js-header-subcategories and push new $categories.subcategories

    $(".js-header-categories a").on({
      mouseenter: function () {
          if($(this).attr("data-category")) {
              $(this).siblings(".active").removeClass("active");
              $(this).addClass("active");

              let currentCategory = categories[$(this).attr("data-category")];

              if(currentCategory) {
                  $(".js-header-subcategories a").remove();
                  currentCategory.subcategories.forEach(function (element, index) {
                      if(index === 0) {
                        $(".js-header-subcategories").append('<a href="#" class="active">'+element+'</a>');
                      }else {
                        $(".js-header-subcategories").append('<a href="#">'+element+'</a>');
                      }
                  });

              }
          }
      },
    });

    $(document).on("click", ".js-header-categories a, .js-header-subcategories a", function () {
        if($(window).width() < 1200) {
            console.log("categories click < 1200");
            console.log($(this).closest(".list"));
            $(this).closest(".list").next(".list").addClass("js-mobile-active")
            $(this).closest(".list").removeClass("js-mobile-active");
        }
    });

    $(document).on("click", ".js-mobile-back", function () {
        if($(window).width() < 1200) {
            let currentItem = $(this).closest(".catalog__lists").find(".list.js-mobile-active");
            let newItem = currentItem.prev(".list").addClass("js-mobile-active")
            currentItem.removeClass("js-mobile-active");
            if(!newItem.length) {
                $(this).closest(".catalog__lists").removeClass("js-mobile-active");
                $(this).closest(".header__dropdown").find(".catalog__puncts").addClass("js-mobile-active")
            }
        }
    });


    $(".js-mobile-checker").on("click", function (e) {
        if($(window).width() < 1200) {
            e.preventDefault();

            // If this is in mobile click, then, open next level of menu
            $(this).closest(".js-mobile-active").closest(".container").find(".catalog__lists").addClass("js-mobile-active").find("div").first().addClass("js-mobile-active")
            $(this).closest(".js-mobile-active").removeClass("js-mobile-active");
        }
    });

    $(document).on("click", ".js-mobile-search-open", function () {
        $(this).parent().find(".header__search").addClass("js-mobile-active");
        $(this).parent().find(".header__search").find("input").focus()
    })
});

