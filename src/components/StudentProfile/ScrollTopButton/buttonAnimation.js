import $ from "jquery";
import * as Waves from "node-waves";

window.jQuery = window.$ = $;

// Back to top
var amountScrolled = 200;

$(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
        $("button.back-to-top").addClass("show");
        Waves.attach("button.back-to-top", "waves-effect");
        Waves.init();
    } else {
        $("button.back-to-top").removeClass("show");
    }
});
