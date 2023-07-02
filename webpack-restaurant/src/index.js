import {home} from './home.js'
import {menu} from './menu.js'
import {contact} from './contact.js'

const content = document.getElementById('content')

const heading = document.createElement('div')
heading.classList.add("heading")
content.appendChild(heading)

const logo = document.createElement('h1')
logo.textContent='masha foods'
logo.classList.add("logo")
heading.appendChild(logo)

const nav = document.createElement('nav')
nav.classList.add("nav")

const linkHome = document.createElement('div')
const linkMenu = document.createElement('div')
const linkContact = document.createElement('div')

linkHome.textContent='Home'
linkMenu.textContent='Menu'
linkContact.textContent='Contact'

nav.appendChild(linkHome)
nav.appendChild(linkMenu)
nav.appendChild(linkContact)

heading.appendChild(nav)

linkHome.addEventListener("click",home)
linkMenu.addEventListener("click",menu)
linkContact.addEventListener("click",contact)

const container = document.createElement('div')
container.id='container'
content.appendChild(container)

menu();