import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
    test('should render with default values', () => {
        const name = 'test item';

        render(<ItemCounter itemName={name} />);
        screen.debug()

        expect(screen.getByText(name)).toBeDefined()
    });

    test('should render with custom quantity', () => {
        const name = 'test item';
        const quantity = 10
        render(<ItemCounter itemName={name} quantity={quantity} />);

        expect(screen.getByText(name)).toBeDefined()
        expect(screen.getByText(quantity)).toBeDefined()
    });

    test('should add quantity', () => {
        const name = 'test item';
        const quantity = 1
        render(<ItemCounter itemName={name} quantity={quantity} />);

        const [buttonAdd, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd);
        expect(screen.getByText(2)).toBeDefined()
    });

    test('should subtract quantity', () => {
        const name = 'test item';
        const quantity = 1
        render(<ItemCounter itemName={name} quantity={quantity} />);

        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);
        expect(screen.getByText(0)).toBeDefined()
    })

    test('should set red style when 0', () => {
        const quantity = 0;
        const name = 'Item Name'
        render(<ItemCounter itemName={name} quantity={quantity} />);
        const itemText = screen.getByText(name)
        console.log(itemText.style.color)
        expect(itemText.style.color).toBe('red')
    })

    test('should be black style when is not 0', () => {
        const quantity = 1;
        const name = 'Item Name'
        render(<ItemCounter itemName={name} quantity={quantity} />);
        const itemText = screen.getByText(name)
        console.log(itemText.style.color)
        expect(itemText.style.color).toBe('black')
    })
});