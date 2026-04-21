const progressBar = document.getElementById("scroll-progress");
const revealItems = document.querySelectorAll(".reveal");
const comparisonRows = document.querySelectorAll(".comparison-row");

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

  progressBar.style.width = `${percent}%`;
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

function revealComparisonRows() {
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  comparisonRows.forEach((row) => {
    if (row.classList.contains("is-visible")) {
      return;
    }

    const rect = row.getBoundingClientRect();
    const entersViewport = rect.top <= viewportHeight * 0.82;
    const remainsOnScreen = rect.bottom >= viewportHeight * 0.15;

    if (entersViewport && remainsOnScreen) {
      row.classList.add("is-visible");
    }
  });
}

updateScrollProgress();
revealComparisonRows();
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("scroll", revealComparisonRows, { passive: true });
window.addEventListener("resize", updateScrollProgress);
window.addEventListener("resize", revealComparisonRows);
