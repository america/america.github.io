(function () {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var targets = document.querySelectorAll(
        ".post-entry, .post-single .post-title, .page .post-title, .post-single .post-content > *:first-child"
    );
    if (!targets.length) return;

    targets.forEach(function (el) {
        el.classList.add("reveal-ready");
    });

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-in");
                } else {
                    entry.target.classList.remove("reveal-in");
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach(function (el) {
        observer.observe(el);
    });
})();
