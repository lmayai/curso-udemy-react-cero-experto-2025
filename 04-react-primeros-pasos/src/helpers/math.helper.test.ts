import { test, expect, describe } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('Add', () => {
    test('should add two numbers', () => {
        // Arrange
        console.log('hola')
        const a = 1;
        const b = 2;

        // Act
        const result = add(a, b);
        console.log({ result })

        // Assert
        expect(result).toBe(3)
    });
    test('should add two negative numbers', () => {
        // Arrange
        console.log('hola')
        const a = -3;
        const b = -4;

        // Act
        const result = add(a, b);
        console.log({ result })

        // Assert
        expect(result).toBe(-7)
    });
})

describe('Subtract', () => {
    test('shpuld subtract two number', () => {
        const result = subtract(3, 1)
        expect(result).toBe(2);
    });
    test('shpuld be result cero when numbers are the same', () => {
        const result = subtract(3, 3)
        expect(result).toBe(0);
    });
});

describe('Multiply', () => {
    test('should multiply two numbers', () => {
        const result = multiply(3, 3);
        expect(result).toBe(9)
    });
    test('Should multiply two negative number, and return a postive result', () => {
        const result = multiply(-2, -2);
        expect(result).toBe(4)
    })
});

describe('Divide', () => {
    test('should divide two numbers', () => {
        const result = divide(2, 2);
        expect(result).toBe(1)
    })
});
