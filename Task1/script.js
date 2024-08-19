const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");

function openModal() {
  const url = new URL(window.location);
  url.searchParams.set("modal", "true");
  window.history.pushState({}, "", url);
  modalOverlay.classList.remove("hidden");
}

function closeModal() {
  const url = new URL(window.location);
  url.searchParams.delete("modal");
  window.history.pushState({}, "", url);
  modalOverlay.classList.add("hidden");
}

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("modal") === "true") {
    modalOverlay.classList.remove("hidden");
  }
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) {
    closeModal();
  }
});
