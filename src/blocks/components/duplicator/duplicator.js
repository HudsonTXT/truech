$(function () {
    $(".duplicator").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".duplicated").find(".duplicate-it").clone().removeClass("duplicate-it").addClass("duplicate-copy").appendTo($(this).closest(".duplicated").find(".duplicate-copies"));
        $(this).closest(".duplicated").find(".duplicate-copies .duplicate-copy").last().find(".input-panel").each(function (e) {
            console.log(e);
            let thisRandom = Math.random();
            let thisLabel = $(this).find("label");
            let thisInput = $(this).find("input");
            thisInput.prop("name", thisInput.prop("name")+"_"+thisRandom);
            thisInput.prop("id", thisInput.prop("id")+"_"+thisRandom);
            thisLabel.prop("for", thisLabel.prop("for")+"_"+thisRandom);
        });




    });



});