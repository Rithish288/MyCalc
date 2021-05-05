class Calculator{
    constructor(processPart, resultPart){
        this.processPart = processPart
        this.resultPart = resultPart
        this.clear()
    }

    clear(){
        this.processPart = ''
        this.resultPart = ''
        this.operation = undefined
    }

    delete(){

    }

    click(number){
        this.result = number
    }

    chooseOperation(operation){

    }

    calculate(){

    }

    updateDisplay(){
        this.resultPart.innerText = this.resultPart
    }

}

const numBtns = document.querySelectorAll('[data-number]')
const operBtns = document.querySelectorAll('[data-operation]')
const clearBtn = document.querySelector('[data-clear]')
const removeBtn = document.querySelector('[data-remove]')
const equalBtn = document.querySelector('[data-equals]')
const processPart = document.querySelector('[data-process]')
const resultPart = document.querySelector('[data-result]')

const calculator = new Calculator(
    processPart,
    resultPart
)

numBtns.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.click(button.innerText)
        calculator.updateDisplay()
    })
})