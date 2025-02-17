// 打开 Lightbox
function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox-img").src = images[currentIndex];
    document.getElementById("lightbox").style.display = "flex";
  }

  // 关闭 Lightbox
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }

  // 切换图片
  function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = images.length - 1; // 循环到最后一张
    } else if (currentIndex >= images.length) {
      currentIndex = 0; // 循环到第一张
    }
    document.getElementById("lightbox-img").src = images[currentIndex];
  }

  // 键盘事件
  document.addEventListener("keydown", (e) => {
    if (document.getElementById("lightbox").style.display === "flex") {
      if (e.key === "ArrowLeft") changeImage(-1);
      if (e.key === "ArrowRight") changeImage(1);
      if (e.key === "Escape") closeLightbox();
    }
  });
  
  // Lightbox焦点管理
  const lightbox = document.getElementById('lightbox');
  lightbox.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
  });

