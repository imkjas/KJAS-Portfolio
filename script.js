document.querySelectorAll(".carousel-nav").forEach((nav) => {
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(nav.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");
  const navButtons = document.querySelectorAll(".carousel-nav");

  // Create Intersection Observer
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  let activeId = entry.target.id;
                  
                  // Remove active class from all buttons
                  navButtons.forEach((nav) => {
                      nav.classList.remove("active");
                  });

                  // Find the corresponding nav button and add active class
                  document.querySelector(`.carousel-nav[href="#${activeId}"]`).classList.add("active");
              }
          });
      },
      { threshold: 0.6 } // 60% of the project must be visible to trigger
  );

  // Observe each project
  projects.forEach((project) => observer.observe(project));
});
