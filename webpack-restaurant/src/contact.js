const contact =function(){
    const branches=[{
        name:"Branch 1 name",
        tel:"Branch 1 tel",
        location:"Branch 1 location"
    },
    {
        name:"Branch 2 name",
        tel:"Branch 2 tel",
        location:"Branch 2 location"
    }]
    const container = document.getElementById('container')
    container.innerHTML=""

    const heading = document.createElement('h1')
    heading.textContent='Contact us'
    container.appendChild(heading)

    for(let i=0;i<branches.length;i++){

        const contactdiv = document.createElement('div')

        const branchName = document.createElement('h3')
        branchName.textContent=branches[i].name
        contactdiv.appendChild(branchName)
    
        const branchLocation = document.createElement('p')
        branchLocation.textContent=branches[i].location
        contactdiv.appendChild(branchLocation)
    
        const branchTel = document.createElement('p')
        branchTel.textContent=branches[i].tel
        contactdiv.appendChild(branchTel)

        container.appendChild(contactdiv)
    }

}
export{contact}