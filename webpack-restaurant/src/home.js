const home =function(){
    
    const container = document.getElementById('container')
    container.innerHTML=""

    const image = document.createElement('img')
    image.src="capture.png"
    container.appendChild(image)

    const text = document.createElement('p')
    text.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure odio at rem omnis delectus sequi similique nemo beatae alias perspiciatis blanditiis deserunt, iusto illum impedit, cum quam quod. Pariatur.'
    container.appendChild(text)
}
export{home}