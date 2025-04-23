const banner = document.getElementById("bannerSection");
const preview = document.getElementById("hoverPreview");

banner.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;

  // Update position directly under the cursor
  preview.style.left = x + 10 + "px"; // Small offset
  preview.style.top = y + 10 + "px";  // Small offset

  // Make sure the image is visible when hovering
  preview.style.opacity = 1;
});

banner.addEventListener("mouseleave", () => {
  preview.style.opacity = 0;
});
