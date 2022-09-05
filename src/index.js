import createContact from "./contact";
import createHome from "./home";
import createMenu from "./menu";

function createHeader() {
    const contentDiv = document.querySelector('#content')
    const header = document.createElement('header')
    const h1 = document.createElement('h1')
    h1.textContent = "Gusteau's"
    const nav = document.createElement('nav')
    const homeBtn = document.createElement('button')
    homeBtn.onclick = () => {
        const tabContent = document.querySelector('#content>div')
        tabContent.remove()
        createHome()
    }
    homeBtn.textContent = 'Home'
    const menuBtn = document.createElement('button')
    menuBtn.onclick = () => {
        const tabContent = document.querySelector('#content>div')
        tabContent.remove()
        createMenu()
    }
    menuBtn.textContent = 'Menu'
    const contactBtn = document.createElement('button')
    contactBtn.onclick = () => {
        const tabContent = document.querySelector('#content>div')
        tabContent.remove()
        createContact()
    }
    contactBtn.textContent = 'Contact'
    nav.appendChild(homeBtn)
    nav.appendChild(menuBtn)
    nav.appendChild(contactBtn)
    header.appendChild(h1)
    header.appendChild(nav)
    contentDiv.appendChild(header)
}
createHeader()
createHome()