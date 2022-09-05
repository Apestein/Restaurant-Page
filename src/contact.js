function createContact() {
    const div = document.createElement('div')
    div.classList.add('contact')
    const p1 = document.createElement('p')
    p1.textContent = 'Phone Number: 123-456-7890'
    const p2 = document.createElement('p')
    p2.textContent = 'Email: rats@gmail.com'
    const img = document.createElement('img')
    img.src = 'img/location.jpg'
    img.alt = 'location'
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(img)
    document.querySelector('#content').appendChild(div)
}
export default createContact