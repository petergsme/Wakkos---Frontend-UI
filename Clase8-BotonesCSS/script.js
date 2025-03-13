// BOTON HACE QUE SALGA EL MODAL

const buttonToOpenModal = document.querySelector('.btn');
const buttonToCloseModal = document.querySelector('#modal .btn--secondary');
const modalSection = document.querySelector('#modal');

buttonToOpenModal.addEventListener('click', (event) => {
  modalSection.classList.toggle('modal-hidden');
});

buttonToCloseModal.addEventListener('click', (event) => {
  modalSection.classList.toggle('modal-hidden');
});
