const numInput = document.getElementById("num1")
const operando = document.getElementById("operando")
const display = document.getElementById("display")
let num1Value = ""

const botones = document.querySelector(".calculator")
botones.addEventListener("click" ,(evento)=>{
    if (evento.target.id == "sum"){
        operando.textContent="+"
        num1Value = numInput.value
        numInput.value="" 
    }
    if (evento.target.id == "rest"){
        operando.textContent="-"
        num1Value = numInput.value
        numInput.value="" 
    }
    if (evento.target.id == "multi"){
        operando.textContent="*"
        num1Value = numInput.value
        numInput.value="" 
    }
    if (evento.target.id == "divi"){
        operando.textContent="/"
        num1Value = numInput.value
        numInput.value="" 
    }
    if (evento.target.id == "clear"){
        operando.textContent=""
        numInput.value = "";
        display.textContent = "";
        num1Value = ""
    }

    if (evento.target.id == "igual"){
        const num2Value = numInput.value
        if (!isNaN(num1Value) && !isNaN(num2Value)) {
            if(operando.textContent=="+")
                display.textContent = Number(num1Value) + Number(num2Value)
            if(operando.textContent=="-")
                display.textContent = num1Value - num2Value
            if(operando.textContent=="*")
                display.textContent = num1Value * num2Value
            if(operando.textContent=="/")
                display.textContent = num1Value / num2Value
            if(operando.textContent=="")
                display.textContent = ""
        } else {
            display.textContent = "Invalid input"
        }
    }
})
