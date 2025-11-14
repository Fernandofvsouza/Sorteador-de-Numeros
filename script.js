//Dom
let quantityNumber = document.getElementById("numeros");
let fromNumber = document.getElementById("from");
let toNumber = document.getElementById("to");
let btnSortear = document.getElementById("btn-sorteio");
let rigthContainer = document.querySelector(".right");
let container = document.querySelector(".container-right");

let numbersSorteados = [];

//Eventos
btnSortear.addEventListener("click", sorteio);

//Função de aparecer o resultado
function showResult() {
    rigthContainer.style.display = "none";
    const divResult = document.createElement("div");
    divResult.classList.add("result-container");
    divResult.innerHTML = `
        <h1>Resultado do sorteio:</h1>
        <h3>1º Resultado:</h3>
        <h2 id="result-numbers">${numbersSorteados.join('-')}</h2>
        <button id="btn-new-sorteio">Sortear Novamente <i class="fa-solid fa-arrow-rotate-right"></i></button>
    `;
    container.appendChild(divResult);
    
}

//Função do sorteio
function sorteio(){
    if (quantityNumber.value === "" || fromNumber.value === "" || toNumber.value === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    let quantity = parseInt(quantityNumber.value);
    let from = parseInt(fromNumber.value);
    let to = parseInt(toNumber.value);

    

    if (from > to) {
        alert("O valor 'De' não pode ser maior que o valor 'Até'.");
        return;
    }

    //Logica do sorteio
    while(numbersSorteados.length < quantity){
        let randomNumber = Math.floor(Math.random() * (to - from + 1)) + from;
        if(!numbersSorteados.includes(randomNumber)){
            numbersSorteados.push(randomNumber);
            

            
        }
    }
    
    showResult();

 
}



