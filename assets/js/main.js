(function () {
  "use strict";

  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  var panels = Array.prototype.slice.call(document.querySelectorAll(".panel"));
  document.documentElement.classList.add("reveal-ready");

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -7% 0px", threshold: 0.06 });

  panels.forEach(function (panel, index) {
    if (index === 0) {
      panel.classList.add("is-visible");
    } else {
      observer.observe(panel);
    }
  });
}());
