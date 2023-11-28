let selectId = document.querySelector('select')
let priceEuro = document.querySelector('.priceEuro')
let boldProf = document.querySelector('.boldProf')
let euroMat = document.querySelector('.euroMat')

let tubeSize = document.querySelector('.tubeSize')
let stubTube = document.querySelector('.stubTube')

let workValue = document.querySelector('.workProfNumber')


let A = document.querySelector('.widthA')
let B = document.querySelector('.widthB')
let C = document.querySelector('.widthC')
let D = document.querySelector('.widthD')
let H = document.querySelector('.heighS')
let step = document.querySelector('.step')
let lagName = document.querySelector('.lagName')

selectId.addEventListener('change', function ()
{
    let getValue = this.value

    if (getValue === 'Евроштакетник')
    {
        let euro =
            `
            <div class="euroPrice" style="padding-left: 15px; padding-top: 50px;">
                <h1 style="padding-bottom: 50px;">Стоимость евроштакетника</h1>
                     <span>Стоимость столбов за 1 п.м
                         <input type="number" placeholder="Введите значение"> <i>Руб.</i>
                     </span>
                     <span>Стоимость лаг за 1 п.м
                         <input type="number" placeholder="Введите значение"> <i>Руб.</i>
                     </span>
                     <span>Стоимость штакетника за 1 п.м
                         <input type="number" value="180" placeholder="Введите значение"> <i>Руб.</i>
                     </span>
                     <span>Стоимость саморезов за 1 шт.
                         <input type="number" placeholder="Введите значение"> <i>Руб.</i>
                     </span>
                     <span>Стоимость монтажа за 1 п.м
                         <input type="number" placeholder="Введите значение"> <i>Руб.</i>
                     </span>
            </div>
            `


        boldProf.style.display = "none"
        euroMat.style.display = "flex"
        priceEuro.innerHTML = euro

    }
    else
    {
        let prof =
            `
            <div class="profPrice" style="padding-left: 15px; padding-top: 50px;">
                <h1 style="padding-bottom: 50px;">Стоимость профнастила</h1>
                     <span>Стоимость столбов за 1 п.м
                         <input type="number" placeholder="Введите значение"> <i>Руб.</i>
                     </span>
                     <span>Стоимость лаг за 1 п.м
                         <input type="number" placeholder="Введите значение"> <i>Руб.</i>
                     </span>
                     <span>Стоимость профнастила за 1м2
                         <input type="number" value="620" placeholder="Введите значение" class="priceProf"> <i>Руб.</i>
                     </span>
                     <span>Стоимость саморезов за 1 шт.
                         <input type="number" placeholder="Введите значение"> <i>Руб.</i>
                     </span>
                     <span>Стоимость монтажа за 1 п.м
                         <input type="number" placeholder="Введите значение"> <i>Руб.</i>
                     </span>
            </div>
            `
        boldProf.style.display = "flex"
        priceEuro.innerHTML = prof
        euroMat.style.display = "none"
    }

})
tubeSize.addEventListener('change', function  ()
{
   if(tubeSize.value !== stubTube.value)
   {
       stubTube.value = tubeSize.value
   }
})
stubTube.addEventListener('change', function  ()
{
   if(stubTube.value !== tubeSize.value)
   {
       tubeSize.value = stubTube.value
   }
})

plusNumber = () =>
{
    if(workValue.value >= 2000){
        alert('Слишком большое число!')
    }
    else{
        let number = parseInt(workValue.value)
        number += 50
        workValue.value = number
    }

}
minusNumber = () =>
{
    if(workValue.value <=100)
    {
        alert('Невозможно вывести значение в минус!')
    }
    else{
    let numberMinus = parseInt(workValue.value)
    numberMinus -= 50
    workValue.value = numberMinus
    }
}


let calc = () =>
{
    let a = parseInt(A.value)
    let b = parseInt(B.value)
    let c = parseInt(C.value)
    let d = parseInt(D.value)
    let per = a+b+c+d
    let S = per * H.value
    let valueStep = S/step.value - 4
    console.log("Периметр: " + per)
    console.log("Площадь: " + S)
    console.log("Количество столбов и профнастила: " + valueStep)
    let price = (valueStep/6)
    let allPrice = (price + valueStep) * 620
    let lagvalue = valueStep * +lagName.value

    console.log("Количество саморезов: " + lagvalue* 5)
    console.log("Количество лаг на забор: "+lagvalue)
    console.log("Кол-во нахлеста: " + price)
    console.log("Кол-во листов всего: " + (price+valueStep))
    console.log("Стоимость профлистов с нахлестом: " + allPrice)

}




