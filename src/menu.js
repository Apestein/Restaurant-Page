function createMenu() {
    const div = document.createElement('div')
    div.classList.add('menu')
    const article1 = document.createElement('article')
    const name1 = document.createElement('h3')
    name1.textContent = 'Ratatouille'
    const img1 = document.createElement('img')
    img1.src = 'img/ratatouille.jpg'
    img1.alt = 'ratatouille'
    const p1 = document.createElement('p')
    p1.textContent =' tomato, garlic, onion, courgette (zucchini), aubergine (eggplant), capsicum (bell pepper), and some combination of leafy green herbs common to the region'
    article1.appendChild(name1)
    article1.appendChild(img1)
    article1.appendChild(p1)
    const article2 = document.createElement('article')
    const name2 = document.createElement('h3')
    name2.textContent = 'Rat Poison'
    const img2 = document.createElement('img')
    img2.src = 'img/poison.jpg'
    img2.alt = 'poison'
    const p2 = document.createElement('p')
    p2.textContent = 'rat poison, deadly to rats, kills kitchen rats'
    article2.appendChild(name2)
    article2.appendChild(img2)
    article2.appendChild(p2)
    div.appendChild(article1)
    div.appendChild(article2)
    document.querySelector('#content').appendChild(div)
}
export default createMenu