const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsList = document.querySelector('#bands')



bands.sort((a, b) => {
  const firstBand  = a.replace('The ', '').replace('An ', '').replace('A ', '')
  const secondBand = b.replace('The ', '').replace('An ', '').replace('A ', '')
  return firstBand > secondBand ? 1 : -1
})

const bandsItems = bands.map(band => {
    return `
    <li>
      ${band}
    </li>
    `
}).join('')


bandsList.innerHTML = bandsItems;
console.log(bandsItems)
