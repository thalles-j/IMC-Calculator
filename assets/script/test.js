function calcularIMC(){
    const form = document.querySelector("#form");
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const inputPeso = e.target.querySelector('#peso')
        const inputAltura = e.target.querySelector('#altura')

        const peso = Number(inputPeso.value)
        const altura = Number(inputAltura.value)

        if(!peso){
            setResultado('Peso inválido', false);
            return
        }
        if(!altura){
            setResultado('Altura inválido', false);
            return
        }
        const imc = getImc(peso,altura);

        

    });
    function getImc(peso,altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2);


    }

    function criaP(className){
        const p = document.createElement('p');
        p.classList.add(className);
    }
    
    function setResultado(msg, IsValid){
        const result = document.querySelector('#result')
        result.innerHTML = '';

        const p = criaP();
        p.innerHTML = msg;
        result.appendChild(p);


    }
}