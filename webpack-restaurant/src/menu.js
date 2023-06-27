const menu =function(){
    const dishTypes=[
        "breakfast",
        "dishes",
        "plain meals",
        "bites & pastries"
    ]
    const dishes=[
        {
            type:"breakfast",
            image:"",
            name:"name",
            price:"10k"
        },
        {
            type:"breakfast",
            image:"",
            name:"name2",
            price:"15k"
        },
        {
            type:"dishes",
            image:"",
            name:"name",
            price:"10k"
        },
        {
            type:"dishes",
            image:"",
            name:"name2",
            price:"10k"
        },
        {
            type:"plain meals",
            image:"",
            name:"name",
            price:"10k"
        },
        {
            type:"plain meals",
            image:"",
            name:"name2",
            price:"10k"
        },
        {
            type:"bites & pastries",
            image:"",
            name:"name",
            price:"10k"
        },
        {
            type:"bites & pastries",
            image:"",
            name:"name2",
            price:"10k"
        }
    ]
    const container = document.getElementById('container')
    container.innerHTML=""

    for(let i = 0;i<dishTypes.length;i++){
        const type = document.createElement('h3')
        type.textContent=dishTypes[i]
        container.appendChild(type)

        for(let j=0;j<dishes.length;j++){

            if(dishTypes[i]==dishes[j].type){
                const dishesdiv = document.createElement('div')
    
                const image = document.createElement('img')
                image.src=dishes[j].image
                image.classList.add('menuImage')
                container.appendChild(image)
        
                const name = document.createElement('p')
                name.textContent=dishes[j].name
                dishesdiv.appendChild(name)
            
                const price = document.createElement('p')
                price.textContent=dishes[j].price
                dishesdiv.appendChild(price)
        
                container.appendChild(dishesdiv)
            }
        }
    }
}
export{menu}