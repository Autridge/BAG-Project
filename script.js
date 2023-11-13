'use strict';

const modal = document.querySelector('.feedback');
const overlay = document.querySelector('.feedback__overlay');
const btnCloseModal = document.querySelector('.feedback__close-modal');
const btnsOpenModal = document.querySelector('.open-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Redirect to the success page 
function submitForm() {
    window.location.href = 'success.html'; 
}