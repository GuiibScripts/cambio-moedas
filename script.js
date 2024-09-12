//Cotação Atual
const USD = 4.87
const EUR = 5.32
const GBP = 6.02


// Retornar Elementos
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")



//Remover Texto da pesquisa
amount.addEventListener("input", () => {
    const notText = /\D+/g
    amount.value = amount.value.replace(notText, "")
})

// Evento Submit
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }


}

// Converter Moeda
function convertCurrency(amount, price, symbol) {

    try {
        //retornando valor Total
        let total = amount * price
        
        if(isNaN(total)){
            return alert("O Valor precisa ser Número")
        }
        
        result.textContent = `${total} Reais`.replace(".", ",")

        description.textContent = `${symbol} 1 = ${formatBRL(price)}`
        footer.classList.add("show-result")
        console.log(result.textContent)


    } catch (error) {
        console.log(error)
        alert("Conversão nao efetuada, digite novamente...")
        footer.classList.remove("show-result")


    }

}


//Formatar para R$ BRL
function formatBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}

