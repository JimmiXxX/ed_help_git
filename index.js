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
let H = document.querySelector('.heightS')
let step = document.querySelector('.step')
let lagValue = document.querySelector('.lagValue')
const lagOption = document.querySelector('.lagOption')

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
                         <input type="number" placeholder="Введите значение" class="pillarPrice"> <i>Руб.</i>
                     </span>
                     <span>Стоимость лаг за 1 п.м
                         <input type="number" placeholder="Введите значение" class="LagPrice"> <i>Руб.</i>
                     </span>
                     <span>Стоимость штакетника за 1 п.м
                         <input type="number" value="180" placeholder="Введите значение" class="fencePrice"> <i>Руб.</i>
                     </span>
                     <span>Стоимость саморезов за 1 шт.
                         <input type="number" placeholder="Введите значение" class="selfTappingScrewsPrice"> <i>Руб.</i>
                     </span>
                     <span>Стоимость монтажа за 1 п.м
                         <input type="number" placeholder="Введите значение" class="InstallationPrice"> <i>Руб.</i>
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
                     <span>Стоимость столбов за 1м2
                         <input type="number" placeholder="Введите значение" class="profPillarPrice"> <i>Руб.</i>
                     </span>
                     <span>Стоимость лаг за 1м2
                         <input type="number" placeholder="Введите значение" class="profLagPrice"> <i>Руб.</i>
                     </span>
                     <span>Стоимость профнастила за 1м2
                         <input type="number" value="620" placeholder="Введите значение" class="profPrice"> <i>Руб.</i>
                     </span>
                     <span>Стоимость саморезов за 1 шт.
                         <input type="number" placeholder="Введите значение" class="selfTappingScrewsPrice"> <i>Руб.</i>
                     </span>
                     <span>Стоимость монтажа за 1м2
                         <input type="number" placeholder="Введите значение" class="InstallationPrice"> <i>Руб.</i>
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



const Pillar_Price = document.querySelector('.pillarPrice') // Объявление стоимости столбов у штакетника
const Lag_Price = document.querySelector('.LagPrice') // Объявление стоимости лаг у штакетника
const Fence_Price = document.querySelector('.fencePrice') // Объявление стоимости штакетника
const SelfTappingScrews_Price = document.querySelector('.selfTappingScrewsPrice') // Объявление стоимости саморезов
const Installation_Price = document.querySelector('.InstallationPrice') // Объявление стоимости монтажа
const ProfPillar_Price = document.querySelector('.profPillarPrice') // Объявление стоимости столбов у профнастила
const ProfLag_Price = document.querySelector('.profLagPrice') // Объявление стоимости лаг у профнастила
const Prof_Price = document.querySelector('.profPrice') // Объявление стоимости профнастила


let calc = () =>
{

    const aliases = {
        "ГОСТ хуеты": 350,
        "ГОСТ говна": 400,
    }

    let keys = Object.keys(aliases)
    console.log(keys)

    keys.forEach((element) =>{
        const option = document.createElement("option")
        option.setAttribute("value", element)
        option.innerHTML = element
        lagOption.appendChild(option)
        })

    for(let key in aliases)
    {
        console.log(key)
        let test = aliases[key]
        console.log(test)
    }


    // const price = aliases[selectValue]





    // let store = lagOption.selectedIndex
    // let price = 0
    //
    // switch (store)
    // {
    //     case 0:
    //     {
    //         price = 638
    //         break
    //     }
    //     case 1:
    //     {
    //         price = 104
    //         break
    //     }
    //     case 2:
    //     {
    //         price = 996
    //         break
    //     }
    //     case 3:
    //     {
    //         price = 765
    //         break
    //     }
    //     case 4:
    //     {
    //         price = 366
    //         break
    //     }
    //     case 5:
    //     {
    //         price = 269
    //         break
    //     }
    //     case 6:
    //     {
    //         price = 160
    //         break
    //     }
    //     case 7:
    //     {
    //         price = 335
    //         break
    //     }
    //     case 8:
    //     {
    //         price = 464
    //         break
    //     }
    //     case 9:
    //     {
    //         price = 366
    //         break
    //     }
    // }


    const Perimeter = Number(A.value) + Number(B.value)  // Расчет периметра
    const Square = Perimeter * H.value  // Расчет площади (периметр * высота столбов)
    const valueStep = Square/step.value - 4 // Количество столбов и профлистов
    const Overlap = Math.floor(valueStep/6) // Количество нахлеста
    const PriceOverlap = (Overlap + valueStep) * 620 // Цена профнастила с нахлестом
    const lag = valueStep * lagValue.value // Количество лаг на весь забор
    const SelfTappingScrewsValue = lag * 5 // Количество саморезов

    // console.log("Периметр: " + Perimeter)
    // console.log("Площадь: " + Square)
    // console.log("Количество столбов и профнастила: " + valueStep)
    // console.log("Количество саморезов: " + SelfTappingScrewsValue)
    // console.log("Количество лаг на забор: " + lag)
    // console.log("Кол-во нахлеста: " + Overlap)
    // console.log("Кол-во листов всего: " + (Overlap+valueStep))
    // console.log("Стоимость профлистов с нахлестом: " + PriceOverlap)

}




