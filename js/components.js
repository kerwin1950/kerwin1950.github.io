// 公共组件
const components = {
  nav() {
    // 检查是否已经存在导航栏
    const existingNav = document.querySelector(".site-nav");
    if (existingNav) return;

    const nav = document.createElement("nav");
    nav.className = "site-nav";
    nav.innerHTML = `
              <a href="index.html" class="home">Kerwin Xue</a>
              <div class="nav-right">
                <a href="my_cv.html">个人简历</a>
                <a href="my_projects.html">我的项目</a>
                <a href="my_blog.html">博客</a>
                <a href="my_gallery.html">相册</a>
                <i id="theme-icon" class="fas fa-moon"></i>
            </div>
          `;
    document.body.insertBefore(nav, document.body.firstChild);
  },
  footer() {
    // 检查是否已经存在页脚
    const existingFooter = document.querySelector(".site-footer");
    if (existingFooter) return;

    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
        
          <div>
            <a href="mailto:kerwin1950@gmail.com" style="margin: 0 10px; color: #bbb; text-decoration: none">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/kerwin1950" target="_blank" style="margin: 0 10px; color: #bbb; text-decoration: none">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/kerwinxue2024/" target="_blank" style="margin: 0 10px; color: #bbb; text-decoration: none">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p style="margin-top: 10px; font-size: 12px">© 2025 Kerwin Xue</p>
      
      `;
    document.body.appendChild(footer);
  },
  head() {
    document.head.insertAdjacentHTML(
      "beforeend",
      `
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Kerwin Xue的个人主页" />
      <meta property="og:description" content="探索技术、分享经验，欢迎来到我的个人空间！" />
      <meta name="description" content="Kerwin Xue的个人主页，展示个人项目、博客文章和简历。" />
      <meta name="keywords" content="Kerwin Xue, 个人主页, 开发者, 技术博客, 编程, 代码, 项目, 简历" />
      <meta name="author" content="Kerwin Xue" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      <link rel="icon" type="image/x-icon" href="../img/favicon.ico" />
      <title>Kerwin Xue's Page</title>
      <script>
    (function() {
      const savedTheme = localStorage.getItem("theme") || "dark"; // 默认暗色模式
      if (savedTheme === "light") {
        document.documentElement.classList.add("light-mode");
      }
    })();
  </script>
    `
    );
  },
};
// 在 components.js 中添加
function adjustLayout() {
  const nav = document.querySelector(".site-nav");
  const footer = document.querySelector(".site-footer");
  const gallery = document.querySelector(".gallery");
  const mainContent = document.querySelector(".main-content");
  if (nav && gallery) {
    gallery.style.marginTop = `${nav.offsetHeight + 20}px`;
  }

  if (footer && gallery) {
    gallery.style.marginBottom = `${footer.offsetHeight + 20}px`;
  }
  if (nav && mainContent) {
    mainContent.style.marginTop = `${nav.offsetHeight + 20}px`;
  }

  if (footer && mainContent) {
    mainContent.style.marginBottom = `${footer.offsetHeight + 20}px`;
  }
}

function setupThemeToggle() {
  // 主题切换逻辑
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  const savedTheme=localStorage.getItem("theme")||"dark";
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    themeIcon.classList.replace("fa-moon","fa-sun");
  } 
  // 监听点击事件
  themeIcon.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
      themeIcon.classList.replace("fa-moon", "fa-sun"); // 变成太阳
      localStorage.setItem("theme", "light");
    } else {
      themeIcon.classList.replace("fa-sun", "fa-moon"); // 变成月亮
      localStorage.setItem("theme", "dark");
    }
  });
}
// 修改初始化代码
document.addEventListener("DOMContentLoaded", () => {
  components.head();
  components.nav();
  components.footer();
  adjustLayout();
  setupThemeToggle(); 
  window.addEventListener("resize", adjustLayout);
});
