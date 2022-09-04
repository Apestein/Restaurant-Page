function createHome() {
    const div = document.createElement('div')
    div.classList.add('home')
    const h1 = document.createElement('h1')
    h1.textContent = "Rat who grew up in the slum is world's #1 chef"
    const ratImg = document.createElement('img')
    ratImg.src = 'img/rat.jpeg'
    ratImg.alt = 'rat'
    const p = document.createElement('p')
    p.textContent = 'Cooking that taste like home'
    div.appendChild(h1)
    div.appendChild(ratImg)
    div.appendChild(p)
    document.querySelector('#content').appendChild(div)
}
export default createHome