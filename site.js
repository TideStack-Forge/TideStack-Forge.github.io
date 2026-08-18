if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const waves = Array.from(document.querySelectorAll('.ouro-wave'));
const sectionLinks = Array.from(document.querySelectorAll('.ouro-nav-link[href^="#"]'));
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

let waveFrame = 0;

function updateWaves() {
  waveFrame = 0;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  waves.forEach((wave, index) => {
    const direction = index % 2 === 0 ? 1 : -1;
    const x = Math.sin(scrollTop / 190 + index * 0.72) * 18 * direction;
    const y = Math.cos(scrollTop / 260 + index * 0.5) * 5;
    wave.style.setProperty('--ouro-wave-x', `${x.toFixed(2)}px`);
    wave.style.setProperty('--ouro-wave-y', `${y.toFixed(2)}px`);
  });
}

if (!prefersReducedMotion && waves.length > 0) {
  updateWaves();
  window.addEventListener(
    'scroll',
    () => {
      if (waveFrame) return;
      waveFrame = window.requestAnimationFrame(updateWaves);
    },
    { passive: true },
  );
}

if ('IntersectionObserver' in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!activeEntry) return;

      const activeHref = `#${activeEntry.target.id}`;
      sectionLinks.forEach((link) => {
        const active = link.getAttribute('href') === activeHref;
        link.dataset.active = String(active);
        link.style.color = active ? 'var(--ouro-ink)' : 'var(--ouro-ink-2)';
      });
    },
    { rootMargin: '-38% 0px -52% 0px', threshold: [0, 0.2, 0.55] },
  );

  sections.forEach((section) => observer.observe(section));
}
