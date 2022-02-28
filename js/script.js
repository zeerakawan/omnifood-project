///////////////////////////////////////////////////////////
// TO UPDATE THE CURRENT YEAR IN FOOTER SECTION
const yearCopyright = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearCopyright.textContent = currentYear;

// Activating mobile nav
const mobNavElement = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

mobNavElement.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// SMOOTH SCROLLING
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // SCROLL BOTTOM TO TOP
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // SCROLL TO OTHER LINKS
    if (href !== "#" && href.startsWith(href)) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    // CLOSE THE MOB NAVIGATION AFTER CLICK FROM NAV
    if (link.classList.contains("main-nav-links")) {
      headerElement.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// STICKY NAVIGATION
const sectionHeroElement = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ents = entries[0];

    if (!ents.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ents.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // IN the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroElement);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
