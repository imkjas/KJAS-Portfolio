document.querySelectorAll(".carousel-nav").forEach((nav) => {
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(nav.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "nearest", // Keeps it from jumping to the top
      inline: "center", // Ensures horizontal centering
    });
  });
});
