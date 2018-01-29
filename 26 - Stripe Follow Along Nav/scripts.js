const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')


function handleEnter() {
this.classList.add('trigger-enter')
setTimeout(() => this.classList.add('trigger-enter-active'), 150)

background.classList.add('open')

const dropdown = this.querySelector('.dropdown')

const dropdownCoords = dropdown.getBoundingClientRect()
const navCoords = nav.getBoundingClientRect()

background.style.width = `${dropdownCoords.width}px`
background.style.height = `${dropdownCoords.height}px`
background.style.transform = `
  translate(${dropdownCoords.left - navCoords.left}px,
            ${dropdownCoords.top - navCoords.top}px)`

}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active')
  background.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))

triggers.getBoun
