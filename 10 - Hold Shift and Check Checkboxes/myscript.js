const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
console.log(checkboxes)

let lastChecked;

function handleCheck(e) {
  // check if shift key down
  // AND if checking it
  if(e.shiftKey && this.checked) {

    let lastIndex;
    let currentIndex;

    checkboxes.forEach((checkbox, i) => {
      if (checkbox === this) {
        currentIndex = i;
      } else if (checkbox === lastChecked) {
        lastIndex = i;
      }
    })

    checkboxes.forEach((checkbox, i) => {
      if ((i < currentIndex && i > lastIndex) ||
          (i > currentIndex && i < lastIndex)) {
        checkbox.checked = true;
      }
    })

    console.log(lastIndex)
    console.log(currentIndex)
  }

  lastChecked = this
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
