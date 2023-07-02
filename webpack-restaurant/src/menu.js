const menu =function(){
    const drinkTypes=[
        "Coffee Bar",
        "Regular Teas",
        "Medicinal Teas",
        "Iced Teas",
        "Espresso Creations",
        'Flavoured Espresso Creations',
        'Iced Coffees',
        'Fresh Juices',
        'Healthy Juices',
        'MilkShakes',
        'Smoothies',
        'Lemonades',
        'Nojitos',
        'Signature Creations',
        'Soft Drinks',
        'Dessert',
        'Add Ons'
    ] 
    const drinks=[
        {
            type:0,
            name:"V60",
            price:"9000"
        },
        {
            type:0,
            name:"Chemex Coffee",
            price:"8000"
        },
        {
            type:0,
            name:"Aero Press Cofee",
            price:"8000"
        },
        {
            type:0,
            name:"Hot Chocolate",
            price:"10000"
        },
        {
            type:1,
            name:"African Tea",
            price:"10000"
        },
        {
            type:1,
            name:"English Tea",
            price:"8000"
        },
        {
            type:1,
            name:"Black Tea",
            price:"8000"
        },
        {
            type:1,
            name:"Indian Tea",
            price:"8000"
        },
        {
            type:1,
            name:"Masala Tea",
            price:"8000"
        },
        {
            type:1,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:2,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:2,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:2,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:3,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:3,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:3,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:4,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:5,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:5,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:5,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:6,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:6,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:6,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:6,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:6,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:6,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:7,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:7,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:7,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:7,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:7,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:7,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:7,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:7,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:8,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:8,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:8,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:8,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:8,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:8,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:8,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:9,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:9,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:9,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:9,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:9,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:9,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:9,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:10,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:10,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:10,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:10,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:10,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:10,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:10,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:11,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:11,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:11,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:11,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:11,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:12,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:12,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:12,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:12,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:12,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:12,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:13,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:13,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:13,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:13,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:14,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:14,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:15,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:15,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:15,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:15,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:15,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:16,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:16,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:16,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:16,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:16,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:16,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:16,
            name:"Indian Tea Masala",
            price:"10000"
        },
        {
            type:16,
            name:"Indian Tea Masala",
            price:"10000"
        }
    ]
    const foodTypes=[
        'Katogo Express',
        "Masha's breakfast combo",
        "Pic n' bite",
        'in-house pastries',
        'Rolexes & Omeletes',
        'Beef & Liver voly',
        'Chicken corner',
        "Fish Corner",
        "Goat Meat Lovers",
        "Vegeterian Island",
        "Plain Meals",
        "Rice creations",
        "Masha Speciale",
        "Pizerria corner",
        "Sensational Salads & healthy soups",
        'Jamah Special Platters'
    ]
    const food=[
        {
            type:0,
            name:"Katogo Beef",
            price:"10000"
        },
        {
            type:0,
            name:"Half Katogo + Half Rice",
            price:"15000"
        },
        {
            type:0,
            name:"ADD ONS",
            price:"3000"
        },
        {
            type:1,
            name:"Combo 01",
            price:"25000"
        },
        {
            type:1,
            name:"Combo 02",
            price:"25000"
        },
        {
            type:1,
            name:"Combo 03",
            price:"22000"
        },
        {
            type:2,
            name:"Chapatti",
            price:"3000"
        },
        {
            type:2,
            name:"Pair of Donuts",
            price:"3000"
        },
        {
            type:2,
            name:"Pair of Mandazi",
            price:"3000"
        },
        {
            type:2,
            name:"Pair of Beef Sausages",
            price:"5000"
        },
        {
            type:2,
            name:"Chap | Kebab",
            price:"5000"
        },
        {
            type:2,
            name:"Samosa(Beef | Veg), or Mixed",
            price:"5000"
        },
        {
            type:2,
            name:"French Toast",
            price:"7000"
        },
        {
            type:2,
            name:"American Pancakes",
            price:"10000"
        },
        {
            type:3,
            name:"Muffins(per piece)",
            price:"3000"
        },
        {
            type:3,
            name:"Muffins(per piece)",
            price:"3000"
        },
        {
            type:3,
            name:"Muffins(per piece)",
            price:"3000"
        },
        {
            type:3,
            name:"Muffins(per piece)",
            price:"3000"
        },
        {
            type:3,
            name:"Muffins(per piece)",
            price:"3000"
        },
        {
            type:4,
            name:"Plain Omelete",
            price:"8000"
        },
        {
            type:4,
            name:"Plain Omelete",
            price:"8000"
        },
        {
            type:4,
            name:"Plain Omelete",
            price:"8000"
        },
        {
            type:4,
            name:"Plain Omelete",
            price:"8000"
        },
        {
            type:5,
            name:"Pan Fried Liver",
            price:"25000"
        },
        {
            type:5,
            name:"Pan Fried Liver",
            price:"25000"
        },
        {
            type:5,
            name:"Pan Fried Liver",
            price:"25000"
        },
        {
            type:5,
            name:"Pan Fried Liver",
            price:"25000"
        },
        {
            type:5,
            name:"Pan Fried Liver",
            price:"25000"
        },
        {
            type:5,
            name:"Pan Fried Liver",
            price:"25000"
        },
        {
            type:6,
            name:"Bread Crumb Coated Chicken",
            price:"25000"
        },
        {
            type:6,
            name:"Bread Crumb Coated Chicken",
            price:"25000"
        },
        {
            type:6,
            name:"Bread Crumb Coated Chicken",
            price:"25000"
        },
        {
            type:6,
            name:"Bread Crumb Coated Chicken",
            price:"25000"
        },
        {
            type:6,
            name:"Bread Crumb Coated Chicken",
            price:"25000"
        },
        {
            type:6,
            name:"Bread Crumb Coated Chicken",
            price:"25000"
        },
        {
            type:7,
            name:"Bread Crumb Coated Fish Fillet",
            price:"25000"
        },
        {
            type:7,
            name:"Bread Crumb Coated Fish Fillet",
            price:"25000"
        },
        {
            type:7,
            name:"Bread Crumb Coated Fish Fillet",
            price:"25000"
        },
        {
            type:7,
            name:"Bread Crumb Coated Fish Fillet",
            price:"25000"
        },
        {
            type:8,
            name:"Deep Fried Goat",
            price:"25000"
        },
        {
            type:8,
            name:"Deep Fried Goat",
            price:"25000"
        },
        {
            type:8,
            name:"Deep Fried Goat",
            price:"25000"
        },
        {
            type:9,
            name:"Vegetable Curry",
            price:"20000"
        },
        {
            type:9,
            name:"Fresh Beans",
            price:"20000"
        },
        {
            type:10,
            name:"Plain Chips",
            price:"20000"
        },
        {
            type:10,
            name:"Plain Chips",
            price:"20000"
        },
        {
            type:10,
            name:"Plain Chips",
            price:"20000"
        },
        {
            type:10,
            name:"Plain Chips",
            price:"20000"
        },
        {
            type:10,
            name:"Plain Chips",
            price:"20000"
        },
        {
            type:10,
            name:"Plain Chips",
            price:"20000"
        },
        {
            type:10,
            name:"Plain Chips",
            price:"20000"
        },
        {
            type:10,
            name:"Plain Chips",
            price:"20000"
        },
        {
            type:11,
            name:"Steamed/Veg Rice + Gravy",
            price:"15000"
        },
        {
            type:11,
            name:"Steamed/Veg Rice + Gravy",
            price:"15000"
        },
        {
            type:11,
            name:"Steamed/Veg Rice + Gravy",
            price:"15000"
        },
        {
            type:12,
            name:"Goat Pilao",
            price:"30000"
        },
        {
            type:12,
            name:"Goat Pilao",
            price:"30000"
        },
        {
            type:12,
            name:"Goat Pilao",
            price:"30000"
        },
        {
            type:13,
            name:"BBQ Chicken Pizza",
            price:"30000"
        },
        {
            type:13,
            name:"BBQ Chicken Pizza",
            price:"30000"
        },
        {
            type:13,
            name:"BBQ Chicken Pizza",
            price:"30000"
        },
        {
            type:14,
            name:"Avocadoes Baked Beans Salads",
            price:"15000"
        },
        {
            type:14,
            name:"Avocadoes Baked Beans Salads",
            price:"15000"
        },
        {
            type:14,
            name:"Avocadoes Baked Beans Salads",
            price:"15000"
        },
        {
            type:14,
            name:"Avocadoes Baked Beans Salads",
            price:"15000"
        },
        {
            type:14,
            name:"Avocadoes Baked Beans Salads",
            price:"15000"
        },
        {
            type:15,
            name:"D' Masha's Lusaniya",
            price:"70000"
        }
    ]
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