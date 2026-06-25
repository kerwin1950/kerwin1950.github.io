const components = {
  nav() {
    if (document.querySelector(".site-nav")) return;

    const nav = document.createElement("nav");
    nav.className = "site-nav";
    nav.innerHTML = `
      <a href="index.html" class="home">Jim Xue</a>
      <div class="nav-right">
        <a href="my_cv.html">Resume</a>
        <a href="my_projects.html">Projects</a>
        <a href="my_blog.html">Blog</a>
        <i id="theme-icon" class="fas fa-moon" title="Toggle theme"></i>
      </div>
    `;
    document.body.insertBefore(nav, document.body.firstChild);
  },

  footer() {
    if (document.querySelector(".site-footer")) return;

    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
      <div>
        <a href="mailto:jim@plexon.com.hk" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://github.com/kerwin1950" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/xuejinwei2024" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <p>© 2026 Jim Xue</p>
    `;
    document.body.appendChild(footer);
  },

  head() {
    document.head.insertAdjacentHTML(
      "beforeend",
      `
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Jim Xue | Technical Support Engineer" />
      <meta property="og:description" content="Personal website and resume of Jim Xue, Technical Support Engineer at Hong Kong Plexon Limited." />
      <meta name="description" content="Jim Xue, Technical Support Engineer at Hong Kong Plexon Limited. Neuroscience equipment support, troubleshooting, customer training, and repair coordination." />
      <meta name="keywords" content="Jim Xue, Kerwin Xue, Plexon, neuroscience equipment, technical support, resume" />
      <meta name="author" content="Jim Xue" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      <link rel="icon" type="image/x-icon" href="img/favicon.ico" />
      <script>
        (function() {
          const savedTheme = localStorage.getItem("theme") || "dark";
          if (savedTheme === "light") {
            document.documentElement.classList.add("light-mode");
          }
        })();
      </script>
    `
    );
  },
};

function adjustLayout() {
  const nav = document.querySelector(".site-nav");
  const footer = document.querySelector(".site-footer");
  const mainContent = document.querySelector(".main-content, .home-page");

  if (nav && mainContent) {
    mainContent.style.marginTop = `${nav.offsetHeight + 20}px`;
  }

  if (footer && mainContent) {
    mainContent.style.marginBottom = `${footer.offsetHeight + 20}px`;
  }
}

function setupThemeToggle() {
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;
  if (!themeIcon) return;

  const savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }

  themeIcon.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
      themeIcon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "light");
    } else {
      themeIcon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "dark");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  components.head();
  components.nav();
  components.footer();
  adjustLayout();
  setupThemeToggle();
  window.addEventListener("resize", adjustLayout);
});
