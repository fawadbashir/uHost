const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const selectPlanButtons = document.querySelectorAll('.plan button')
const modalActions = document.querySelectorAll('.modal__action')
const toggleButton = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')

const closeModal = () => {
  modal.classList.remove('open')
  backdrop.classList.remove('open')
  setTimeout(() => {
    backdrop.style.display = 'none'
  }, 10)
}

selectPlanButtons.forEach((button) => {
  button.addEventListener('click', () => {
    backdrop.style.display = 'block'
    modal.classList.add('open')
    setTimeout(() => {
      backdrop.classList.add('open')
    }, 10)
  })
})

if (modal) {
  modalActions.forEach((action) => {
    action.addEventListener('click', closeModal)
  })
}

backdrop.addEventListener('click', () => {
  // mobileNav.style.display = 'none'

  mobileNav.classList.remove('open')

  backdrop.classList.remove('open')

  modal.classList.remove('open')
})

toggleButton.addEventListener('click', () => {
  mobileNav.classList.add('open')

  backdrop.classList.add('open')
})
