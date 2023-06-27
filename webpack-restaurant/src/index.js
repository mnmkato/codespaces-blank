import {home} from './home.js'
import {menu} from './menu.js'
import {contact} from './contact.js'

const content = document.getElementById('content')

const heading = document.createElement('h1')
heading.textContent='webpack-restaurant'
content.appendChild(heading)

const nav = document.createElement('nav')

const linkHome = document.createElement('div')
const linkMenu = document.createElement('div')
const linkContact = document.createElement('div')

linkHome.textContent='Home'
linkMenu.textContent='Menu'
linkContact.textContent='Contact'

nav.appendChild(linkHome)
nav.appendChild(linkMenu)
nav.appendChild(linkContact)

content.appendChild(nav)

linkHome.addEventListener("click",home)
linkMenu.addEventListener("click",menu)
linkContact.addEventListener("click",contact)

const container = document.createElement('div')
container.id='container'
content.appendChild(container)

menu();