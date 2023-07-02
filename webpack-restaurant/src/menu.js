import drinkTypesData from './data/drinkTypes.json5'
import drinksData from './data/drinks.json5'
import foodTypesData from './data/foodTypes.json5'
import foodData from './data/food.json5'

const menu =function(){
    
    const drinkTypes=drinkTypesData
    const drinks=drinksData
    const foodTypes=foodTypesData
    const food=foodData

    const container = document.getElementById('container')
    container.innerHTML=""
    container.classList.remove("containerHome")

    populatemenu(food, foodTypes,"Food Menu")
    populatemenu(drinks, drinkTypes,"Drinks Menu")
    
}
function populatemenu(dishes, dishTypes,heading){

    const menuHeading = document.createElement('h3')
    menuHeading.classList.add('menuHeading')
    menuHeading.textContent=heading
    container.appendChild(menuHeading)

    const menuGrid = document.createElement('div')
    menuGrid.classList.add('menuGrid')
    container.appendChild(menuGrid)
   
    for(let i = 0;i<dishTypes.length;i++){
        const menudivContainer = document.createElement('div')
        menudivContainer.classList.add('menudivContainer')
        menuGrid.appendChild(menudivContainer);

        const type = document.createElement('h3')
        type.textContent=dishTypes[i]
        menudivContainer.appendChild(type)

        for(let j=0;j<dishes.length;j++){

            if(dishTypes[i]==dishTypes[dishes[j].type]){
                const dishesdiv = document.createElement('div')
 
                const name = document.createElement('p')
                name.textContent=dishes[j].name
                dishesdiv.appendChild(name)
            
                const price = document.createElement('p')
                price.textContent=dishes[j].price
                dishesdiv.appendChild(price)
                dishesdiv.classList.add('dishesdiv')
        
                menudivContainer.appendChild(dishesdiv)
            }
        }
    }
}
export{menu}