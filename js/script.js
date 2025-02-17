document.addEventListener("DOMContentLoaded", function () {
  console.log("页面加载完成！");

  // 显示加载提示
  const loading = document.getElementById("loading");
  if (loading) {
    loading.style.display = "block";

    // 模拟内容加载，500ms 后隐藏加载提示
    setTimeout(() => {
      loading.style.display = "none";
    }, 500);
  }

  // 页面加载完成后，为 body 添加 loaded 类
  document.body.classList.add("loaded");
});

