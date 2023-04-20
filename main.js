//variabled
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const operando = document.getElementById("operando")
const display = document.getElementById("display")
// const igual = document.getElementById("igual")
// const suma = document.getElementById("sum")
const botones = document.querySelector(".calculator")

//elementos de escucha hacia los botones de (suma.resta.multiplicacion,divicion)
botones.addEventListener("click" ,(evento)=>{
    if (evento.target.id == "sum"){
        operando.textContent="+"
    }
    if (evento.target.id == "rest"){
        operando.textContent="-"
    }
    if (evento.target.id == "multi"){
        operando.textContent="*"
    }
    if (evento.target.id == "divi"){
        operando.textContent="/"
    }
    if (evento.target.id == "clear"){
        operando.textContent=""
        operando.textContent = "";
        num1.value = "";
        num2.value = "";
        display.textContent = "";
    }
    
    if (evento.target.id == "igual"){
        const num1Value =+num1.value
        const num2Value =+num2.value
    //validacion
        if (!isNaN(num1Value) && !isNaN(num2Value)) {
            if(operando.textContent=="+")
                display.textContent = num1Value + num2Value
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
