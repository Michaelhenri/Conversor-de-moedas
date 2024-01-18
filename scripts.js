const convertButton = document.querySelector('.convert-button')
const currencySelectToConvert = document.querySelector('.currency-select-to-convert')//Converter para
const currencySelectConvertFrom = document.querySelector('.currency-select-convert-from')//Converter de

function convertValues() { //função para fazer a conversão e formatação dos valores
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-from-convert')//Valor a ser convertido
    const currencyValueConverted = document.querySelector('.currency-value')//Resultado

    const dolarToday = 4.8
    const euroToday = 6.2


    //converte Real para Dolar e Euro
    if (currencySelectToConvert.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelectToConvert.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    //converte Dolar e Euro para Real
    if (currencySelectConvertFrom.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue * dolarToday)
    }

    if (currencySelectConvertFrom.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue * euroToday)
    }

        // para trocar o <p class="currency-value-from-convert">R$ 0,00</p>
    if (currencySelectConvertFrom.value == 'real') { 
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
    }

    if (currencySelectConvertFrom.value == 'dolar') { 
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue)
    }

    if (currencySelectConvertFrom.value == 'euro') { 
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue)
    }


}

function changeCurrency() {     //função para troca de moedas do select 'converter de' e 'converter para'
    const converteFromName = document.getElementById('converte-from-name')
    const converteFromImage = document.querySelector('.converte-from-img')
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')


    if (currencySelectConvertFrom.value == 'dolar') {
        converteFromName.innerHTML = 'Dólar americano'
        converteFromImage.src = './assets/dolar.png'
    }

    if (currencySelectConvertFrom.value == 'real') {
        converteFromName.innerHTML = 'Real'
        converteFromImage.src = './assets/real.png'
    }

    if (currencySelectConvertFrom.value == 'euro') {
        converteFromName.innerHTML = 'Euro'
        converteFromImage.src = './assets/euro.png'
    }

    if (currencySelectToConvert.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/dolar.png'
    }

    if (currencySelectToConvert.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    if (currencySelectToConvert.value == 'real') {
        currencyName.innerHTML = 'Real'
        currencyImage.src = './assets/real.png'
    }

    convertValues()
}


currencySelectToConvert.addEventListener('change', changeCurrency)
currencySelectConvertFrom.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)
convertButton.addEventListener('click', function() {
    window.scrollTo(0, document.documentElement.scrollHeight);
})

//Conversão inválida de duas moedas iguais
function invalidConvert() { 
    
    // Verifica se as moedas selecionadas são as mesmas.
    if (currencySelectConvertFrom.value === currencySelectToConvert.value) {
        // Exibe uma mensagem de erro.
        location.reload(alert('Conversão inválida, moedas iguais')) ;
        // Prevenimos a conversão da moeda.
    }   
}
