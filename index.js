let prof = document.querySelector('.profMenu')
let menu = document.querySelector('.dropMenu')

function dropButtton()
{
    document.querySelector(".dropDownMenu").classList.toggle("show")
    console.log("Привет!!!")
}

function takeMenu()
{


    console.log("Вывелся текст!!!")
    const numberTemplate =
        `
         <button onclick="dropButtton()" class="dropMenu">%answer%</button>
        `

    const numberHTML = numberTemplate.replace('%answer', prof)
    menu.innerHTML = numberHTML
}