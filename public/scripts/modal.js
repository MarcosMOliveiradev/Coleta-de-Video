export default function Modal(){

const modalWrapper = document.querySelector('.modal-wrapper')
const cancelButton = document.querySelector('.button.cancel')

cancelButton.addEventListener("click", close)

  function open(){
    // tem a funcionalidade de abrir a modal
    modalWrapper.classList.add("active")
  };
  function close(){
    // tem a funcionalidade de remover a modal
    modalWrapper.classList.remove("active")
  };

  return{
    open,
    close
  }
}