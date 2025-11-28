const { calculate, toggleSign, percentage } = require('./calculator.js');

describe('Função calculate()', () => {

    test('soma dois valores corretamente', () => {
        expect(calculate('2', '3', '+')).toBe('5');
        expect(calculate('10,5', '2,5', '+')).toBe('13');
    });

    test('subtrai valores corretamente', () => {
        expect(calculate('7', '3', '-')).toBe('4');
        expect(calculate('10,5', '0,5', '-')).toBe('10');
    });

    test('multiplica valores corretamente', () => {
        expect(calculate('4', '5', 'x')).toBe('20');
        expect(calculate('2,5', '2', 'x')).toBe('5');
    });

    test('divide valores corretamente', () => {
        expect(calculate('10', '2', '÷')).toBe('5');
        expect(calculate('7,5', '2,5', '÷')).toBe('3');
    });

    test('retorna 0 ao dividir por zero', () => {
        expect(calculate('10', '0', '÷')).toBe('0');
    });

    test('lança erro ao usar operador inválido', () => {
        expect(() => calculate('2', '3', '?')).toThrow("Operador inválido");
    });
});


describe('Função toggleSign()', () => {

    test('inverte sinal de número positivo', () => {
        expect(toggleSign('5')).toBe('-5');
    });

    test('inverte sinal de número negativo', () => {
        expect(toggleSign('-3')).toBe('3');
    });

    test('funciona com decimais', () => {
        expect(toggleSign('2,5')).toBe('-2,5');
    });
});


describe('Função percentage()', () => {

    test('converte número para porcentagem', () => {
        expect(percentage('50')).toBe('0,5');
        expect(percentage('10')).toBe('0,1');
    });

    test('funciona com decimais', () => {
        expect(percentage('2,5')).toBe('0,025');
    });
});
