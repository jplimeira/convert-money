const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector("#currency-chosen")

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor a converter
    const currencyValueConverted = document.querySelector(".currency-value") // Valor convertido
    const chosenCurrency = document.querySelector("#currency-chosen").value // Pega a informação de qual moeda foi escolhida
    const dolarToday = 5.02
    const euroToday = 5.86
    const gbpToday = 6.77
    const btcToday = 380631.32


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    if (isNaN(inputCurrencyValue)) {
        alert("Digite um valor válido!")
        return
    }

    if (chosenCurrency === "usd") {
        const convertedValue = inputCurrencyValue / dolarToday


        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)

    }

    if (chosenCurrency === "eur") {
        const convertedValue = inputCurrencyValue / euroToday

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue)

    }

    if (chosenCurrency === "gbp") {
        const convertedValue = inputCurrencyValue / gbpToday

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertedValue)

    }

    if (chosenCurrency === "btc") {
        const convertedValue = inputCurrencyValue / btcToday

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(convertedValue)

    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("logo-value-to-convert")

    if (currencySelect.value === "usd") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value === "eur") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value === "gbp") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value === "btc") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)