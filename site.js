if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const waves = Array.from(document.querySelectorAll('.ouro-wave:not(.ouro-footer-wave)'));
const boundaryWaves = Array.from(document.querySelectorAll('.ouro-boundary-wave'))
  .map((wave, index) => ({
    wave,
    path: wave.querySelector('path'),
    isBottom: wave.classList.contains('ouro-wave-bottom'),
    seed: index * 0.64,
  }))
  .filter((item) => item.path);
const sectionLinks = Array.from(document.querySelectorAll('.ouro-nav-link[href^="#"]'));
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

let waveFrame = 0;
let lastWaveScrollTop = window.scrollY || document.documentElement.scrollTop;
let lastWaveTime = performance.now();
let lastWaveInputAt = lastWaveTime;
let waveEnergy = 0;
let waveTargetEnergy = 0;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function getScrollTop() {
  return window.scrollY || document.documentElement.scrollTop;
}

function buildWavePath({ isBottom, seed }, scrollProgress, energy, settlePhase) {
  const xs = [0, 360, 720, 1080, 1440];
  const baseY = isBottom ? 58 : 54;
  const restAmplitude = isBottom ? 19 : 17;
  const liveAmplitude = 26 * energy;
  const phase = scrollProgress * Math.PI * 3.2 + seed + settlePhase;
  const drift = Math.sin(scrollProgress * Math.PI * 1.4 + seed) * 6;
  const points = xs.map((x) => {
    const progress = x / 1440;
    const rest = Math.sin(progress * Math.PI * 2 + seed) * restAmplitude;
    const live = Math.sin(progress * Math.PI * 2 - phase) * liveAmplitude;
    const lift = Math.sin(progress * Math.PI + phase * 0.42) * liveAmplitude * 0.36;
    return clamp(baseY + rest + live + lift + drift, 16, 106);
  });

  let d = `M0,${points[0].toFixed(1)}`;
  for (let index = 0; index < xs.length - 1; index += 1) {
    const x0 = xs[index];
    const x1 = xs[index + 1];
    const y0 = points[index];
    const y1 = points[index + 1];
    const handle = (x1 - x0) / 2;
    d += ` C${(x0 + handle).toFixed(1)},${y0.toFixed(1)} ${(x1 - handle).toFixed(1)},${y1.toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}`;
  }

  return isBottom ? `${d} L1440,120 L0,120 Z` : `${d} L1440,0 L0,0 Z`;
}

function updateWaves() {
  waveFrame = 0;
  const now = performance.now();
  const scrollTop = getScrollTop();
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const scrollProgress = scrollTop / maxScroll;
  const timeSinceInput = now - lastWaveInputAt;

  if (timeSinceInput > 80) {
    waveTargetEnergy *= 0.84;
  }

  waveEnergy += (waveTargetEnergy - waveEnergy) * 0.18;
  if (timeSinceInput > 120) {
    waveEnergy *= 0.94;
  }

  const settleProgress = clamp(timeSinceInput / 920, 0, 1);
  const settleEase = 1 - Math.pow(1 - settleProgress, 3);
  const settlePhase = Math.sin(settleEase * Math.PI * 2.5) * waveEnergy * 2.2;

  waves.forEach((wave, index) => {
    const direction = index % 2 === 0 ? 1 : -1;
    const x = Math.sin(scrollProgress * Math.PI * 3 + settlePhase + index * 0.5) * (6 + waveEnergy * 10) * direction;
    const y = Math.cos(scrollProgress * Math.PI * 2.4 + settlePhase + index * 0.42) * (2 + waveEnergy * 5);
    wave.style.setProperty('--ouro-wave-x', `${x.toFixed(2)}px`);
    wave.style.setProperty('--ouro-wave-y', `${y.toFixed(2)}px`);
  });

  boundaryWaves.forEach((item) => {
    item.path.setAttribute('d', buildWavePath(item, scrollProgress, waveEnergy, settlePhase));
  });

  if (waveEnergy > 0.004 || waveTargetEnergy > 0.004 || timeSinceInput < 960) {
    waveFrame = window.requestAnimationFrame(updateWaves);
  }
}

function requestWaveUpdate() {
  if (waveFrame) return;
  waveFrame = window.requestAnimationFrame(updateWaves);
}

function handleWaveScroll() {
  const now = performance.now();
  const scrollTop = getScrollTop();
  const elapsed = Math.max(16, now - lastWaveTime);
  const velocity = Math.abs(scrollTop - lastWaveScrollTop) / elapsed;

  lastWaveScrollTop = scrollTop;
  lastWaveTime = now;
  lastWaveInputAt = now;
  waveTargetEnergy = clamp(velocity * 0.85 + 0.08, 0.12, 1);
  requestWaveUpdate();
}

if (!prefersReducedMotion && waves.length > 0) {
  updateWaves();
  window.addEventListener(
    'scroll',
    handleWaveScroll,
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
