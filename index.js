let selectId = document.querySelector('select')
let priceEuro = document.querySelector('.priceEuro')


selectId.addEventListener('change', function ()
{
    let getValue = this.value
    // console.log(getValue)

    if (getValue === 'Евроштакетник')
    {
        let euro =
            `
            <div class="euroPrice">
                <h1>Стоимость евроштакетника</h1>
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
                     <span>Стоимость монтажа за 1 погонный метр
                         <input type="number" placeholder="Введите значение"> <i>Руб.</i>
                     </span>
            </div>
            `

        priceEuro.innerHTML = euro
    }
    else
    {
        let prof =
            `
            <div class="profPrice">
                <h1>Стоимость профнастила</h1>
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

        priceEuro.innerHTML = prof
    }


})

