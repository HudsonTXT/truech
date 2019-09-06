import "jquery";

$(function () {
    $(document).on("click", ".filter__change-view", function (e) {
        $(this).closest("section").find(".row").toggleClass("col-to-row")
    });

});
