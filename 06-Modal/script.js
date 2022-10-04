"use strict";

const ESCAPE_KEY = "Escape";

const modal1 = document.querySelector(".modal-1");
const modal2 = document.querySelector(".modal-2");
const modal3 = document.querySelector(".modal-3");
const btnsCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

function openModal() {
  if (this.id === "btn1") {
    modal1.classList.remove("hidden");
  }
  if (this.id === "btn2") {
    modal2.classList.remove("hidden");
  }
  if (this.id === "btn3") {
    modal3.classList.remove("hidden");
  }
}

function closeModal(e) {
  console.log(e);
  if (this.id === "md1") {
    modal1.classList.add("hidden");
  }
  if (this.id === "md2") {
    modal2.classList.add("hidden");
  }
  if (this.id === "md3") {
    modal3.classList.add("hidden");
  }
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

for (let i = 0; i < btnsCloseModal.length; i++) {
  btnsCloseModal[i].addEventListener("click", closeModal);
}
