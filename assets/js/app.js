/* Main client script for the portfolio */
(function () {
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];

  // Theme handling
  const root = document.documentElement;
  const themeToggle = $('#themeToggle');
  const pref = localStorage.getItem('theme');
  if (pref) document.documentElement.setAttribute('data-theme', pref);
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // Mobile nav
  const nav = $('.nav');
  const navToggle = $('.nav-toggle');
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));

  // Header links
  const headerLinkedin = document.getElementById('headerLinkedin');
  const headerGithub = document.getElementById('headerGithub');
  const headerEmail = document.getElementById('headerEmail');

  // Starfield background
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  let w, h, stars;
  const DPR = Math.min(2, window.devicePixelRatio || 1);
  function resize() {
    w = canvas.clientWidth = canvas.offsetWidth;
    h = canvas.clientHeight = canvas.offsetHeight;
    canvas.width = Math.floor(w * DPR);
    canvas.height = Math.floor(h * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    initStars();
  }
  function initStars() {
    const count = Math.floor((w * h) / 8000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: 0.2 + Math.random() * 0.8,
      a: 0.4 + Math.random() * 0.6,
      r: 0.4 + Math.random() * 1.2,
    }));
  }
  function tick() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      s.x += 0.04 * s.z; if (s.x > w) s.x = 0;
      s.y += 0.02 * s.z; if (s.y > h) s.y = 0;
      ctx.globalAlpha = s.a;
      ctx.fillStyle = '#c8e7ff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(tick);

  // Helpers
  function el(tag, attrs = {}, ...children) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') e.className = v;
      else if (k === 'html') e.innerHTML = v;
      else e.setAttribute(k, v);
    }
    for (const c of children.flat()) {
      if (c == null) continue;
      e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    }
    return e;
  }

  function tag(text) { return el('span', { class: 'tag' }, text); }

  // Data-driven rendering
  const D = window.__RESUME__ || {};

  // Summary and CTAs
  $('#summary').textContent = D.summary || '';
  const email = D.contact?.email || '';
  const phone = D.contact?.phone || '';
  const loc = D.contact?.location || '';
  const emailCta = document.getElementById('emailCta');
  const linkedIn = D.contact?.linkedin || '#';
  const github = D.contact?.github || '#';
  const linkedinCta = document.getElementById('linkedinCta');
  const githubCta = document.getElementById('githubCta');
  if (emailCta) emailCta.href = email ? `mailto:${email}` : '#';
  if (linkedinCta) linkedinCta.href = linkedIn;
  if (githubCta) githubCta.href = github;
  if (headerLinkedin) headerLinkedin.href = linkedIn;
  if (headerGithub) headerGithub.href = github;
  if (headerEmail) headerEmail.href = email ? `mailto:${email}` : '#';

  // Hero stats
  const statsRoot = $('#hero-stats');
  const stats = D.heroStats || [];
  for (const s of stats) {
    const box = el('div', { class: 'stat' },
      el('div', { class: 'num', 'data-target': s.value }, String(s.value)),
      el('div', { class: 'label' }, s.label)
    );
    statsRoot.appendChild(box);
  }

  // Skills
  const sg = $('#skills-grid');
  for (const group of D.skills || []) {
    const card = el('article', { class: 'skill-card' },
      el('div', { class: 'skill-title' }, group.title),
      el('div', { class: 'tags' }, group.items.map(tag))
    );
    sg.appendChild(card);
  }

  // Experience timeline
  const tl = $('#timeline');
  for (const job of D.experience || []) {
    const jobEl = el('article', { class: 'item' },
      el('div', { class: 'role' }, `${job.role} — ${job.company}`),
      el('div', { class: 'meta' }, `${job.period}${job.location ? ' · ' + job.location : ''}`),
      job.tech ? el('div', { class: 'tech' }, `Tech: ${job.tech}`) : null,
      el('ul', {}, job.highlights.map(h => el('li', {}, h)))
    );
    tl.appendChild(jobEl);
  }

  // Projects
  const pg = $('#projects-grid');
  for (const p of D.projects || []) {
    const card = el('article', { class: 'project' },
      el('h3', {}, p.title),
      el('p', { class: 'desc' }, p.desc)
    );
    pg.appendChild(card);
  }

  // Achievements
  const ag = $('#achievements-grid');
  for (const a of D.achievements || []) {
    ag.appendChild(el('article', { class: 'metric' },
      el('div', { class: 'kicker' }, a.kicker),
      el('div', { class: 'num', 'data-target': a.value }, a.display || String(a.value)),
      el('div', { class: 'detail' }, a.detail)
    ));
  }

  // Contact
  const cl = $('#contact-list');
  const links = [
    { label: 'Email', value: email, href: email ? `mailto:${email}` : null },
    { label: 'Phone', value: phone, href: phone ? `tel:${phone.replace(/\D/g, '')}` : null },
    { label: 'Location', value: loc, href: null },
    { label: 'LinkedIn', value: linkedIn, href: linkedIn },
    { label: 'GitHub', value: github, href: github },
  ].filter(x => x.value);
  for (const c of links) {
    cl.appendChild(el('li', {}, c.href ? el('a', { href: c.href, target: c.href.startsWith('http') ? '_blank' : null, rel: 'noopener' }, `${c.label}: ${c.value}`) : `${c.label}: ${c.value}`));
  }

  // Count-up effect for numbers
  const counters = $$('[data-target]');
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target; io.unobserve(el);
      const target = Number(el.getAttribute('data-target'));
      const raw = (el.textContent || '').trim();
      const hasPlus = raw.includes('+');
      const hasK = raw.toLowerCase().includes('k');
      const duration = 1000 + Math.random() * 600;
      const start = performance.now();
      function step(t) {
        const p = Math.min(1, (t - start) / duration);
        const n = Math.floor(target * (0.1 + 0.9 * p));
        el.textContent = hasK ? `${n}k+` : hasPlus ? `${n}+` : String(n);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
  }, { threshold: 0.4 });
  counters.forEach(c => io.observe(c));

  // Footer year
  $('#year').textContent = new Date().getFullYear();

  // Scroll progress
  const progress = document.getElementById('progress');
  function onScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const height = (document.documentElement.scrollHeight - document.documentElement.clientHeight) || 1;
    const p = Math.min(1, scrollTop / height);
    progress.style.transform = `scaleX(${p})`;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll spy (active nav link)
  const sections = ['skills','experience','projects','achievements','contact'].map(id => document.getElementById(id)).filter(Boolean);
  const navLinks = $$('.nav-list a');
  const spy = new IntersectionObserver((ents) => {
    for (const e of ents) {
      if (!e.isIntersecting) continue;
      const id = e.target.id;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    }
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
  sections.forEach(s => spy.observe(s));

  // Reveal animations
  const revealables = $$('.reveal, .skill-card, .item, .project, .metric');
  const rev = new IntersectionObserver((ents) => {
    ents.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); } });
  }, { threshold: 0.18 });
  revealables.forEach(elm => rev.observe(elm));
})();
