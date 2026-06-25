function initParticleBackground() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let animationId;
  let width = 0;
  let height = 0;

  function isLightMode() {
    return document.documentElement.classList.contains("light-mode");
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

    const count = Math.min(80, Math.floor((width * height) / 18000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const light = isLightMode();
    const nodeColor = light ? "rgba(8, 145, 178, 0.5)" : "rgba(34, 211, 238, 0.6)";
    const maxDist = 140;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          if (light) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 * (1 - dist / maxDist)})`;
          } else {
            ctx.strokeStyle = `rgba(129, 140, 248, ${0.15 * (1 - dist / maxDist)})`;
          }
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(draw);
  }

  resize();
  draw();

  window.addEventListener("resize", resize);
  window.addEventListener("themechange", () => {});

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize", resize);
  };
}

function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading");
  if (loading) {
    loading.style.display = "block";
    setTimeout(() => {
      loading.style.display = "none";
    }, 500);
  }

  document.body.classList.add("loaded");
  initParticleBackground();
  initScrollReveal();
});
