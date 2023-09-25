function realizarOperaciones() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese dos números válidos.");
        return;
    }

    let resultados = "";

    for (let i = 1; i <= 5; i++) {
        let resultado;
        let operacion;

        switch (i) {
            case 1:
                resultado = numero1 + numero2;
                operacion = "Suma";
                break;
            case 2:
                resultado = numero1 - numero2;
                operacion = "Resta";
                break;
            case 3:
                resultado = numero1 * numero2;
                operacion = "Multiplicación";
                break;
            case 4:
                resultado = numero1 / numero2;
                operacion = "División";
                break;
            case 5:
                resultado = numero1 % numero2;
                operacion = "Módulo";
                break;
        }

        resultados += `${operacion}: ${numero1} ${i === 5 ? '%' : ''} ${numero2} = ${resultado}\n`;
    }

    alert(resultados);
}