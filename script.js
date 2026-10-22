// Select a work card to change the lead photograph and featured heading.
document.documentElement.classList.add("js-ready");
const featureData = {
  poem: {
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2400&q=88",
    alt: "Low sunlight spilling over a misty field",
    caption: "A different way of seeing.",
    heading: "A place for words to become something else.",
    eyebrow: "Featured work · Poetry"
  },
  essay: {
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2400&q=88",
    alt: "A notebook and writing materials in soft natural light",
    caption: "The things we keep, and what they keep of us.",
    heading: "The things we keep.",
    eyebrow: "Featured work · Essay"
  },
  art: {
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=2400&q=88",
    alt: "Colorful abstract painting in a gallery",
    caption: "An image can open a door.",
    heading: "Study in Red.",
    eyebrow: "Featured work · Visual art"
  }
};
function selectFeature(card) {
  const data = featureData[card.dataset.feature];
  if (!data) return;
  const photo = document.getElementById("hero-photo");
  photo.style.opacity = "0.2";
  window.setTimeout(() => {
    photo.src = data.image;
    photo.alt = data.alt;
    photo.onload = () => { photo.style.opacity = "1"; };
    photo.style.opacity = "1";
  }, 140);
  document.getElementById("hero-caption").textContent = data.caption;
  document.getElementById("feature-heading").textContent = data.heading;
  document.querySelector(".feature-copy .eyebrow").textContent = data.eyebrow;
  document.querySelectorAll(".work-item[data-feature]").forEach(item => {
    item.setAttribute("aria-pressed", String(item === card));
  });
}
document.querySelectorAll(".work-item[data-feature]").forEach(card => {
  card.setAttribute("aria-pressed", "false");
  card.addEventListener("click", () => selectFeature(card));
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectFeature(card);
    }
  });
});
