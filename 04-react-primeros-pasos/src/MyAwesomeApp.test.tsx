import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from '@testing-library/react';

describe('MyAwesomeApp', () => {
    test('shpuld render first and last name', () => {
        const { container } = render(<MyAwesomeApp />);
        console.log(container.innerHTML);
        screen.debug() // muy util para visualizar el DOM creado
        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');
        // expect(h1).toBe('Frnando')
        expect(h1?.innerHTML).toContain('Fernando')
        expect(h3?.innerHTML).toContain('Herrera')
    })
    test('shpuld render first and last name - screen', () => {
        render(<MyAwesomeApp />);
        screen.debug() // muy util para visualizar el DOM creado
        const h1 = screen.getByRole('heading', {
            level: 1
        });

        const h1_test_id = screen.getByTestId('first-name-label');

        // expect(h1).toBe('Frnando')
        expect(h1_test_id?.innerHTML).toContain('Fernando')
    });

    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot()

    })
})