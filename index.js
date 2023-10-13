let selectId = document.querySelector('select')
let priceEuro = document.querySelector('.priceEuro')
let boldProf = document.querySelector('.boldProf')
let workProf = document.querySelector('.workProf')

selectId.addEventListener('change', function ()
{
    let getValue = this.value
    // console.log(getValue)

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
                         <input type="number" placeholder="Введите значение"> <i>Руб.</i>
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
        workProf.style.display = "none"
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
                         <input type="number" placeholder="Введите значение"> <i>Руб.</i>
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
        workProf.style.display = "flex"
        priceEuro.innerHTML = prof
    }

})

