// Get popup elements
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const closePopup = document.getElementById("closePopup");

// Add click event to all gallery images
document.querySelectorAll(".gallery table img").forEach(img => {
  img.addEventListener("click", () => {
    popupImage.src = img.src;                     // set image
    popupTitle.textContent = img.dataset.title;   // set title from data-title
    popup.style.display = "flex";                 // show popup
  });
});

// Close popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Optional: close popup when clicking outside content
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
