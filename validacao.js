
  // Seleciona o elemento input
const inputA = document.getElementById('campoA');
const inputB = document.getElementById('campoB');
const form = document.querySelector('form');
const button = document.querySelector('button');
let buttonCliked = false;


var mensagem = document.createElement("div");
mensagem.textContent = "";


inputA.addEventListener('change', function(event) {
    if ( Number(inputA.value) > Number(inputB.value) )
    {
        inputA.classList.add('green');
        inputB.classList.add('green');
        inputA.classList.remove('red');
        inputB.classList.remove('red');
        inputA.classList.remove('yellow');
        inputB.classList.remove('yellow');

        alert("A > B (cor verde)")

    }
    else if( Number(inputA.value) === Number(inputB.value) ) {
        inputA.classList.remove('green');
        inputB.classList.remove('green');
        inputA.classList.add('yellow');
        inputB.classList.add('yellow');
        inputA.classList.remove('red');
        inputB.classList.remove('red');
        alert("A = B (cor amarela)")
    }
    else{
        inputA.classList.remove('green');
        inputB.classList.remove('green');
        inputA.classList.add('red');
        inputB.classList.add('red');
        inputA.classList.remove('yellow');
        inputB.classList.remove('yellow');
        alert("A < B (cor vermelha)")
    }
});

inputB.addEventListener('change', function(event) {
    if ( Number(inputA.value) > Number(inputB.value) ){
        inputA.classList.add('green');
        inputB.classList.add('green');
        inputA.classList.remove('red');
        inputB.classList.remove('red');
        inputA.classList.remove('yellow');
        inputB.classList.remove('yellow');
        alert("A > B (cor verde)")

    }
    else if( Number(inputA.value) === Number(inputB.value) ) {
        inputA.classList.remove('green');
        inputB.classList.remove('green');
        inputA.classList.add('yellow');
        inputB.classList.add('yellow');
        inputA.classList.remove('red');
        inputB.classList.remove('red');
        alert("A = B (cor amarela)")
    }
    else{
        inputA.classList.remove('green');
        inputB.classList.remove('green');
        inputA.classList.add('red');
        inputB.classList.add('red');
        inputA.classList.remove('yellow');
        inputB.classList.remove('yellow');
        alert("A < B (cor vermelha)")

    }
});


button.addEventListener('click', function(evento) {
    evento.preventDefault();
    buttonClicked=true;
    checkButtonClick();
    
});

function checkButtonClick() {
    if (buttonClicked) {
    alert("O botão foi clicado!");
    form.submit()

    } else {
    console.log("O botão ainda não foi clicado.");
    }
}


