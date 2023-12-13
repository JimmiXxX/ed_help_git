const selectId = document.querySelector( '.MainType' )
const priceEuro = document.querySelector( '.priceEuro' )
const boldProf = document.querySelector( '.boldProf' )
const euroMat = document.querySelector( '.euroMat' )
const hiddenMenu = document.querySelector( '.hiddenMenu' )
const euroBlock = document.querySelector( '.euroBlock' )
const profBlock = document.querySelector( '.profBlock' )
const workProf = document.querySelector( '.workProf' )
const dataCreate = document.querySelector( '.dataCreate' )

const tubeSize = document.querySelector( '.tubeSize' ) //Труба для столбов
const stubTube = document.querySelector( '.stubTube' ) //Заглушки на столбы
const workValue = document.querySelector( '.workProfNumber' )
const printCalcResult = document.querySelector( '.printCalcResult' )

const Pillar_Price = document.querySelector( '.pillarPrice' ) // Объявление стоимости столбов у штакетника
const Lag_Price = document.querySelector( '.LagPrice' ) // Объявление стоимости лаг у штакетника
const Fence_Price = document.querySelector( '.fencePrice' ) // Объявление стоимости штакетника
const SelfTappingScrews_Price = document.querySelector( '.selfTappingScrewsPriceProf' ) // Объявление стоимости саморезов
const ProfPillar_Price = document.querySelector( '.profPillarPrice' ) // Объявление стоимости столбов у профнастила
const ProfLag_Price = document.querySelector( '.profLagPrice' ) // Объявление стоимости лаг у профнастила
const Prof_Price = document.querySelector( '.profPrice' ) // Объявление стоимости профнастила
const InstallationPrice = document.querySelector( '.InstallationPrice_Prof' ) // Объявление стоимости монтажа

let A = document.querySelector( '.widthA' )
let B = document.querySelector( '.widthB' )
let C = document.querySelector( '.widthC' )
let D = document.querySelector( '.widthD' )
let H = document.querySelector( '.heightS' )
let step = document.querySelector( '.step' )
let lagValue = document.querySelector( '.lagValue' )
const lagOption = document.querySelector( '.lagOption' )


selectId.addEventListener( 'change', function () {
    let getValue = this.value
    if ( getValue === 'Евроштакетник' ) {
        euroBlock.style.display = 'block'
        profBlock.style.display = 'none'
        hiddenMenu.style.display = 'block'
        boldProf.style.display = "none"
        euroMat.style.display = "flex"
        workProf.style.display = 'none'
    } else {
        euroBlock.style.display = 'none'
        profBlock.style.display = 'block'
        hiddenMenu.style.display = 'block'
        boldProf.style.display = "flex"
        euroMat.style.display = "none"
        workProf.style.display = 'flex'
    }
} )


plusNumber = () => {
    if ( workValue.value >= 2000 ) {
        workValue.value = 150
    } else {
        let number = parseInt( workValue.value )
        number += 50
        workValue.value = number
    }

}
minusNumber = () => {
    if ( workValue.value <= 100 ) {
        workValue.value = 2000
    } else {
        let numberMinus = parseInt( workValue.value )
        numberMinus -= 50
        workValue.value = numberMinus
    }
}

const lagAllSize = {
    "50х50х2х6000": 366,
    "40х40х1.5х6000": 225,
    "40х20х1.5х6000": 164,
    "25х25х1.5х6000": 140,
    "20х20х1.5х6000": 104,
    "15х15х1.5х6000": 75,
}

const tubeAllSize = {
    "60*60*2,0": 638,
    "20*20*1,5": 104,
    "80*80*4,0": 996,
    "80*80*3,0х12000": 765,
    "50*50*2,0х6000": 366,
    "40*40*2,0х6000": 269,
    "30*30*2,0х6000": 160,
    "50*25*1,5": 335,
    "60*40*3х6000": 464,
    "50*50*2,0": 366,
}
let keysTube = Object.keys( tubeAllSize )
let keysStube = Object.keys( tubeAllSize )
keysTube.forEach( ( key ) => {
    const tubeSizes = document.createElement( 'option' )
    tubeSizes.setAttribute( 'value', key )
    tubeSizes.innerHTML = key
    tubeSize.appendChild( tubeSizes )
} )
keysStube.forEach( ( key ) => {
    const tubeSizes = document.createElement( 'option' )
    tubeSizes.setAttribute( 'value', key )
    tubeSizes.innerHTML = key
    stubTube.appendChild( tubeSizes )
} )


let keysLag = Object.keys( lagAllSize )
keysLag.forEach( ( keys ) => {
    const option = document.createElement( "option" )
    option.setAttribute( "value", keys )
    option.innerHTML = keys
    lagOption.appendChild( option )

} )


tubeSize.value = stubTube.value

tubeSize.addEventListener( 'change', () => {
    if ( tubeSize.value !== stubTube.value ) {
        stubTube.value = tubeSize.value
    }
} )
stubTube.addEventListener( 'change', () => {
    if ( stubTube.value !== tubeSize.value ) {
        tubeSize.value = stubTube.value
    }
} )

tubeSize.addEventListener( 'change', () => {
    let ValuePriceProf = tubeAllSize[tubeSize.value]
    ProfPillar_Price.value = ValuePriceProf
    Pillar_Price.value = ValuePriceProf
} )
stubTube.addEventListener( 'change', () => {
    let ValuePriceProf = tubeAllSize[tubeSize.value]
    ProfPillar_Price.value = ValuePriceProf
    Pillar_Price.value = ValuePriceProf
} )

lagOption.addEventListener( 'change', () => {
    ProfLag_Price.value = lagAllSize[lagOption.value]

} )


let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}


const calcTube = () => {


    printCalcResult.style.display = 'block'
    const Perimeter = Number( A.value ) + Number( B.value ) + Number( C.value ) + Number( D.value ) // Расчет периметра
    const Square = Perimeter * H.value  // Расчет площади (периметр * высота столбов)
    const valueStep = Square / step.value - 4 // Количество столбов и профлистов
    const Overlap = Math.ceil( valueStep / 6 ) // Количество нахлеста
    const PriceOverlap = (Overlap + valueStep) * ProfLag_Price.value // Цена профнастила с нахлестом
    const lag = valueStep * lagValue.value // Количество лаг на весь забор
    const SelfTappingScrewsValue = lag * 5 // Количество саморезов
    const priceInstall = InstallationPrice.value * Perimeter
    dataCreate.innerHTML = new Date().toLocaleDateString( 'ru', options )

    const allPrice = PriceOverlap + (SelfTappingScrewsValue * SelfTappingScrews_Price.value) + priceInstall + (valueStep * ProfPillar_Price.value) + (valueStep * ProfLag_Price.value)


    document.querySelector( '.resultPerimeter' ).innerHTML = Perimeter
    document.querySelector( '.resultPlaza' ).innerHTML = Square
    document.querySelector( '.resultPillar' ).innerHTML = valueStep
    document.querySelector( '.resultSelfTapping' ).innerHTML = SelfTappingScrewsValue
    document.querySelector( '.resultLag' ).innerHTML = lag
    document.querySelector( '.resultList' ).innerHTML = Overlap + valueStep

    document.querySelector( '.priceProf' ).innerHTML = PriceOverlap
    document.querySelector( '.priceSelfTapping' ).innerHTML = SelfTappingScrewsValue * SelfTappingScrews_Price.value
    document.querySelector( '.priceInstallation' ).innerHTML = priceInstall
    document.querySelector( '.pricePillar' ).innerHTML = valueStep * ProfPillar_Price.value
    document.querySelector( '.priceLag' ).innerHTML = valueStep * ProfLag_Price.value
    document.querySelector( '.priceAll' ).innerHTML = allPrice
}










