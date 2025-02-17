document.addEventListener("DOMContentLoaded", async function () {
    const gallery = document.getElementById("gallery");
    const loading = document.createElement("div");
    loading.className = "loading";
    gallery.appendChild(loading);
    try {
      // 获取 JSON 文件
      const response = await fetch(
        "https://cdn.jsdelivr.net/gh/kerwin1950/photo-gallery@main/images.json"
      );
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      gallery.innerHTML = ""; // 清除加载状态

      images = data.images; // 将图片 URL 存储到 images 数组

      // 遍历图片列表并插入 HTML
      data.images.forEach((url, index) => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Gallery Image";
        img.loading = "lazy"; // 懒加载
        img.onclick = function () {
          openLightbox(index);
        };
        gallery.appendChild(img);
      });
    } catch (error) {
      console.error("Error loading images:", error);
    }
  });

