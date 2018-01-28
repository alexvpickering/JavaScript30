const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
console.log(checkboxes)

let lastChecked;

function handleCheck(e) {
  // check if shift key down
  // AND if checking it
  if(e.shiftKey && this.checked) {


    let encountered = 0
    checkboxes.forEach((checkbox, i) => {

      // increment encountered if checkbox is this or lastChecked
      (checkbox === this || checkbox === lastChecked) && encountered++

      // check if encountered one of this or lastChecked
      encountered === 1 && (checkbox.checked = true)

    })
  }
  lastChecked = this
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
