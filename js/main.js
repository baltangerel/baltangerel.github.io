// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav ul");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  menu.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => menu.classList.remove("open"))
  );
}

// Project filter buttons (home page)
const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".project-card");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((b) => b.classList.toggle("active", b === button));
    cards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.hidden = filter !== "all" && !categories.includes(filter);
    });
  });
});

// Lightbox: click any gallery or cover image to view it full size
const zoomable = document.querySelectorAll(".gallery img, .diagram img, img.cover");
if (zoomable.length) {
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = '<img alt=""><p></p>';
  document.body.appendChild(box);
  const boxImg = box.querySelector("img");
  const boxCaption = box.querySelector("p");

  zoomable.forEach((img) => {
    img.addEventListener("click", () => {
      boxImg.src = img.src;
      boxImg.alt = img.alt;
      const caption = img.closest("figure")?.querySelector("figcaption");
      boxCaption.textContent = caption ? caption.textContent : img.alt;
      box.classList.add("open");
    });
  });

  const close = () => box.classList.remove("open");
  box.addEventListener("click", close);
  document.addEventListener("keydown", (e) => e.key === "Escape" && close());
}

// Home page: make the header solid once you scroll past the top of the photo
const header = document.querySelector(".home .site-header");
if (header) {
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// Fade sections in as they scroll into view
if ("IntersectionObserver" in window) {
  const targets = document.querySelectorAll(
    ".about-grid, .skill-group, .project-card, .contact .container, .case-study > *"
  );
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 }
  );
  targets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

// Footer year
document.querySelectorAll(".year").forEach((el) => (el.textContent = new Date().getFullYear()));
