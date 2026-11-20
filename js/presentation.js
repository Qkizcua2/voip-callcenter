/* =========================================================
   Presentation slides — Call Center on Asterisk
   Simple manual navigation: arrows / space, also
   'j'/'k' for red/green style users (j=next, k=prev).
   ========================================================= */

(function () {
    "use strict";

    var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
    var counter = document.getElementById("slideCounter");
    var current = -1;

    function show(index) {
        if (index < 0) index = 0;
        if (index > slides.length - 1) index = slides.length - 1;
        current = index;
        slides.forEach(function (s, i) {
            s.classList.toggle("active", i === current);
        });
        counter.textContent = (current + 1) + "/" + slides.length;
    }

    window.openWeb = function () {
        window.open("index.html", "_blank").focus();
    };

    show(0);

    document.addEventListener("keydown", function (e) {
        // Prevent scrolling when navigating
        if (e.key === "ArrowLeft" || e.key === "j" || e.key === "k" ||
            e.key === " " || e.key === "PageUp" || e.key === "PageDown" ||
            e.key === "Escape") {
            e.preventDefault();
        }

        switch (e.key) {
            case "ArrowRight":
            case " ":
            case "PageDown":
                show(current + 1);
                break;
            case "ArrowLeft":
            case "PageUp":
                show(current - 1);
                break;
            case "j":
                show(current + 1);
                break;
            case "k":
                show(current - 1);
                break;
            case "Escape":
                window.openWeb();
                break;
        }
    });
})();
