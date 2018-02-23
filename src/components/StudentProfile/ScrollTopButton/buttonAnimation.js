import $ from "jquery";
window.jQuery = window.$ = $;

// Back to top
var amountScrolled = 200;

$(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
        $("button.back-to-top").addClass("show");
    } else {
        $("button.back-to-top").removeClass("show");
    }
});

