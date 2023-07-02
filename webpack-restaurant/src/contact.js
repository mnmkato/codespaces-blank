import branchesData from './data/branches.json5'

const contact =function(){
    const branches= branchesData
  
    const container = document.getElementById('container')
    container.innerHTML=""
    container.classList.remove("containerHome")
    
    const heading = document.createElement('h1')
    heading.textContent='Contact us'
    heading.classList.add('headContact')
    container.appendChild(heading)

    const contactdivContainer = document.createElement('div')
    contactdivContainer.classList.add('contactdivContainer')
    container.appendChild(contactdivContainer);

    for(let i=0;i<branches.length;i++){

        const contactdiv = document.createElement('div')
        contactdiv.classList.add('contactDiv')

        const branchName = document.createElement('h3')
        branchName.textContent=branches[i].name
        contactdiv.appendChild(branchName)
    
        const branchLocation = document.createElement('p')
        branchLocation.textContent=branches[i].location
        contactdiv.appendChild(branchLocation)
    
        const branchTel = document.createElement('p')
        branchTel.textContent=branches[i].tel
        contactdiv.appendChild(branchTel)

        contactdivContainer.appendChild(contactdiv)
    }
}
export{contact}