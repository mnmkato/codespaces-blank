const contact =function(){
    const branches=[{
        name:"Kireka",
        tel:"0756 001 002",
        location:"The Junction Mall, Namugongo road opposite Shell Kireka"
    },
    {
        name:"Bugolobi",
        tel:"0709 001 002",
        location:"Middle East Hospital & Complex Opp. Bugolobi medical centre"
    }]
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

    const socialdiv = document.createElement('div')
    socialdiv.classList.add('socialdiv')
/*
    const fb = document.createElement('i')
    fb.classList.add('fa-brands','fa-facebook')
    socialdiv.appendChild(fb)

    const insta = document.createElement('i')
    insta.classList.add('fa-brands','fa-instagram')
    socialdiv.appendChild(insta)

    
    const twitter = document.createElement('i')
    twitter.classList.add('fa-brands','fa-twitter')
    socialdiv.appendChild(twitter)
*/
    socialdiv.textContent='@mashafoods_'
    container.appendChild(socialdiv);
}
export{contact}