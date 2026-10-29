// Site behavior: header state, menu overlay, theme toggle, scroll reveal, local clock.
(function () {
  var root = document.documentElement;
  var body = document.body;

  // Theme: dark by default, "light" persisted under the same key the rest of the site reads.
  var themeButton = document.querySelector("[data-theme-toggle]");
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      if (next === "light") root.setAttribute("data-theme", "light");
      else root.removeAttribute("data-theme");
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }

  // Header switches from "over the photo" to solid once the hero has mostly scrolled away.
  var hero = document.querySelector(".hero");
  if (hero && "IntersectionObserver" in window) {
    new IntersectionObserver(
      function (entries) {
        body.classList.toggle("is-scrolled", !entries[0].isIntersecting);
      },
      { rootMargin: "-68px 0px 0px 0px", threshold: 0.12 }
    ).observe(hero);
  }

  // Menu: the bar's menu button opens the overlay and becomes its close button.
  var menu = document.getElementById("menu");
  var toggle = document.querySelector("[data-menu-toggle]");

  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    menu.inert = !open;
    menu.setAttribute("aria-hidden", String(!open));
    body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (menu && toggle) {
    toggle.addEventListener("click", function () {
      setMenu(!menu.classList.contains("is-open"));
    });
    // following any link while the menu is open (in it or in the bar) closes it
    document.addEventListener("click", function (event) {
      if (menu.classList.contains("is-open") && event.target.closest("#menu a, .bar a")) setMenu(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape" || !menu.classList.contains("is-open")) return;
      setMenu(false);
      toggle.focus();
    });
  }

  // Scroll reveal.
  var revealables = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var revealer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          revealer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealables.forEach(function (el) {
      revealer.observe(el);
    });
  } else {
    revealables.forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  // Local time in Atlanta.
  var clock = document.querySelector("[data-clock]");
  if (clock && window.Intl) {
    var format = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/New_York",
      timeZoneName: "short",
    });
    var tick = function () {
      clock.textContent = format.format(new Date()).toLowerCase();
    };
    tick();
    setInterval(tick, 30000);
  }
})();
