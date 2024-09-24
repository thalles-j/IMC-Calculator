function calcularImc(){
    const botaoCalcular = document.querySelector('#btnCalcular');
    const inputPeso = document.querySelector('#inputPeso');
    const inputAltura = document.querySelector('#inputAltura');

    function aplicarMascaraPeso(e) {
        let valor = e.target.value.replace(/\D/g, ''); 
        if (valor.length > 3) {
            valor = valor.slice(0, 3) + '.' + valor.slice(3); 
        }
        e.target.value = valor;
    }

    function aplicarMascaraAltura(e) {
        let valor = e.target.value.replace(/\D/g, ''); 
        if (valor.length > 1) {
            valor = valor.slice(0, 1) + '.' + valor.slice(1);
        }
        e.target.value = valor;
    }

    inputPeso.addEventListener('input', aplicarMascaraPeso);
    inputAltura.addEventListener('input', aplicarMascaraAltura);

    botaoCalcular.addEventListener('click', () => {
        const peso = parseFloat(inputPeso.value);
        const altura = parseFloat(inputAltura.value);

        if (!peso || peso < 10 || peso > 600) {
            setResultado('Peso inválido ou não existente.', false);
            return;
        }

        if (!altura || altura < 0.8 || altura > 3.0) {
            setResultado('Altura inválida ou não existente.', false);
            return;
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);

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
            result.classList.remove('border-danger')
            p.classList.add('p-result');
            p.innerHTML = msg;
            result.appendChild(p);
        } else {
            
            const span = criarSpan();
            result.classList.add('border-danger',);
            span.innerHTML = msg;
            result.appendChild(span);
        }
    }
}  

calcularImc()