const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
console.log(checkboxes)

let lastChecked;

function handleCheck(e) {
  // check if shift key down
  // AND if checking it
  if(e.shiftKey && this.checked) {


    let inBetween = false
    checkboxes.forEach((checkbox, i) => {

      // increment encountered if checkbox is this or lastChecked
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = ! inBetween
      }

      // check if encountered one of this or lastChecked
      inBetween && (checkbox.checked = true)
    })
  }
  lastChecked = this
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
