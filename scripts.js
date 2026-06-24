const convertButton = document.querySelector(".convert-button")
const currencyFrom = document.querySelector("#currency-from")
const currencyTo = document.querySelector("#currency-chosen")

function convertValues() {

    const inputCurrencyValue = parseFloat(
        document.querySelector(".input-currency").value
    )

    if (isNaN(inputCurrencyValue)) {
        return
    }

    const currencyValueToConvert =
        document.querySelector(".currency-value-to-convert")

    const currencyValueConverted =
        document.querySelector(".currency-value")

    const fromCurrency =
        document.querySelector("#currency-from").value

    const toCurrency =
        document.querySelector("#currency-chosen").value

    const rates = {
        brl: 1,
        usd: 5.02,
        eur: 5.86,
        gbp: 6.77,
        btc: 380631.32
    }

    const formats = {
        brl: { locale: "pt-BR", currency: "BRL" },
        usd: { locale: "en-US", currency: "USD" },
        eur: { locale: "de-DE", currency: "EUR" },
        gbp: { locale: "en-GB", currency: "GBP" }
    }

    // Converte a moeda de origem para BRL
    const valueInBRL = inputCurrencyValue * rates[fromCurrency]

    // Converte BRL para a moeda destino
    const convertedValue = valueInBRL / rates[toCurrency]

    // Valor de origem
    if (fromCurrency !== "btc") {
        currencyValueToConvert.innerHTML =
            new Intl.NumberFormat(
                formats[fromCurrency].locale,
                {
                    style: "currency",
                    currency: formats[fromCurrency].currency
                }
            ).format(inputCurrencyValue)
    } else {
        currencyValueToConvert.innerHTML =
            inputCurrencyValue.toFixed(8) + " BTC"
    }

    // Valor convertido
    if (toCurrency !== "btc") {
        currencyValueConverted.innerHTML =
            new Intl.NumberFormat(
                formats[toCurrency].locale,
                {
                    style: "currency",
                    currency: formats[toCurrency].currency
                }
            ).format(convertedValue)
    } else {
        currencyValueConverted.innerHTML =
            convertedValue.toFixed(8) + " BTC"
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("logo-value-to-convert")

    if (currencyTo.value === "brl") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    if (currencyTo.value === "usd") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencyTo.value === "eur") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencyTo.value === "gbp") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencyTo.value === "btc") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

function changeFromCurrency() {

    const currencyName = document.getElementById("currency-from-name")
    const currencyImage = document.getElementById("logo-from")

    if (currencyFrom.value === "brl") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    if (currencyFrom.value === "usd") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencyFrom.value === "eur") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencyFrom.value === "gbp") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencyFrom.value === "btc") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

currencyFrom.addEventListener("change", changeFromCurrency)
currencyTo.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", () => {

    const inputValue = parseFloat(
        document.querySelector(".input-currency").value
    )

    if (isNaN(inputValue)) {
        alert("Digite um valor válido!")
        return
    }

    convertValues()
})
changeCurrency()
changeFromCurrency()