const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsList = document.querySelector('#bands')

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/gi, '').trim()
}


bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1)

const bandsItems = bands.map(band => {
    return `
    <li>
      ${band}
    </li>
    `
}).join('')


bandsList.innerHTML = bandsItems;
console.log(bandsItems)
