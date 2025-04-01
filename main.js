document.addEventListener("DOMContentLoaded", () => {
  
    const preloader = document.getElementById("preloader");
    const preloaderText = document.getElementById("preloader-text");
    const mainContent = document.getElementById("main-content");

    // Simulate loading process
    setTimeout(() => {
        preloaderText.innerHTML = "Ready! (• ω •`)";
        setTimeout(() => {
            preloader.classList.add("hidden");
            mainContent.classList.remove("hidden");
        }, 1000);
    }, 3000); // Initial delay for "Tidying up room..."
});
