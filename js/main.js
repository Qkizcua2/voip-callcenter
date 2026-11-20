/* =========================================================
   Call Center on Asterisk — VoIP I semestral project
   Navigation behaviour:
   - highlight the section currently being read (scroll spy)
   - toggle the sidebar on small screens
   ========================================================= */

(function () {
    "use strict";

    /* ---------- Mobile sidebar toggle ---------- */
    var toggle = document.getElementById("navToggle");
    var sidebar = document.getElementById("sidebar");

    if (toggle && sidebar) {
        toggle.addEventListener("click", function () {
            var open = sidebar.classList.toggle("open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });

        // Close the sidebar after clicking a link (mobile only)
        sidebar.addEventListener("click", function (event) {
            if (event.target.classList.contains("nav-link")) {
                sidebar.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    /* ---------- Scroll spy: mark the active section ---------- */
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
    var sections = links
        .map(function (link) {
            var id = link.getAttribute("href").slice(1); // remove "#"
            return document.getElementById(id);
        })
        .filter(Boolean);

    function setActive(id) {
        links.forEach(function (link) {
            var match = link.getAttribute("href") === "#" + id;
            link.classList.toggle("active", match);
        });
    }

    if ("IntersectionObserver" in window && sections.length) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
        );
        sections.forEach(function (section) {
            observer.observe(section);
        });
    }
})();
