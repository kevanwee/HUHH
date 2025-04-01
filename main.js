document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  const preloaderText = document.getElementById("preloader-text");
  const mainContent = document.getElementById("main-content");
  const enterButton = document.querySelector(".mybutton");

  // Simulate loading process
  setTimeout(() => {
    preloaderText.innerHTML = "Ready! (• ω •`)";
    setTimeout(() => {
      preloader.classList.add("hidden"); // Hide preloader
      mainContent.classList.remove("hidden"); // Show main content
    }, 1000);
  }, 3000);

  // Prevent layout changes when "Enter Now" is clicked
  enterButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default behavior
    document.body.style.overflow = "hidden"; // Lock scrolling
    document.body.style.height = "100vh"; // Prevent height changes
    console.log("Enter Now button clicked!");
  });
});
