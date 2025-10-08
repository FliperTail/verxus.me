// Update footer year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll back to top
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 400 ? "block" : "none";
});
