function calcularImc(){
    const botaoCalcular = document.querySelector('#btnCalcular');
    botaoCalcular.addEventListener('click', function(e) {

        const inputPeso = document.querySelector('#inputPeso')
        const inputAltura = document.querySelector('#inputAltura')

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

        const msg = `SEU IMC: ${imc} (${nivelImc})`;
        setResultado(msg, true);
        

        
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
        let imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

    function criarP() {
        const p = document.createElement('p');
        return p;
    }

    function criarSpan() {
        const span = document.createElement('span');
        return span;
    }

    function setResultado(msg, isValid){
        const result = document.querySelector('#result');
        result.innerHTML = "" ;

        if (isValid) {
            
            const p = criarP();
            p.classList.add('p-result');
            p.innerHTML = msg;
            result.appendChild(p);
        } else {
            
            const span = criarSpan();
            span.classList.add('bg-danger', 'text-white');
            span.innerHTML = msg;
            result.appendChild(span);
        }
    }
}  

calcularImc()