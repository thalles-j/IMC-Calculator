function calcularIMC(){
    const form = document.querySelector('.form-container');
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const inputPeso = e.target.querySelector('.inputPeso')
        const inputAltura = e.target.querySelector('.inputAltura')

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
        const nivelImc = getNivelImc(imc)
        console.log(imc)

        
    });
    function getNivelImc(imc){
        const nivel = ['Abaixo do Peso', 'Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2', 'Obesidade grau 3']

        if(imc >= 39.9)return nivel[5];
        if(imc >= 34.9)return nivel[4];
        if(imc >= 29.9)return nivel[3];
        if(imc >= 24.9)return nivel[2];
        if(imc >= 18.5)return nivel[1];
        if(imc < 18.5)return nivel[0];
    }
    
    function getImc(peso,altura){
        const imc = peso / altura **2;
        return imc.toFixed(2);
    }

    function criarP(className){
        const p = document.createElement('p');
        p.classList.add(className)
    }

    function setResultado(msg, IsValid){
        const result = document.querySelector('.result');
        result.innerHTML = `<p> SEU IMC:</p>` 
    }

    const p = criarP();
    p.innerHTML = msg;
    result.appendChild(p)
}