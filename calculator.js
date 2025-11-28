function calculate(a, b, op) {
    a = parseFloat(a.replace(',', '.'));
    b = parseFloat(b.replace(',', '.'));

    let result = 0;

    switch (op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case 'x': result = a * b; break;
        case '÷': result = b === 0 ? 0 : a / b; break;
        default: throw new Error("Operador inválido");
    }

    return String(result).replace('.', ',');
}

function toggleSign(value) {
    return String(parseFloat(value.replace(',', '.')) * -1).replace('.', ',');
}

function percentage(value) {
    return String(parseFloat(value.replace(',', '.')) / 100).replace('.', ',');
}

// Detecta ambiente
if (typeof module !== 'undefined' && module.exports) {
    // Node / Jest
    module.exports = { calculate, toggleSign, percentage };
} else {
    // Navegador
    window.calculate = calculate;
    window.toggleSign = toggleSign;
    window.percentage = percentage;
}


