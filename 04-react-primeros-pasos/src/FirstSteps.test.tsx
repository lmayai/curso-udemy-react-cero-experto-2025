import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstSteps";

const mockItemCounter = vi.fn((props: unknown) => {
    return (<div
        data-testid="ItemCounter"
        name={props.itemName}
        quantity={props.quantity}
    />)
})

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}))

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => (
//         <div
//             data-testid="ItemCounter"
//             name={props.itemName}
//             quantity={props.quantity}
//         />

//     )
// }))


describe('FirstSteps', () => {
    beforeEach(() => {
        vi.clearAllMocks(); //Importante, para limpiar antes que cada prueba
    });

    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
    })

    test('should get itemsInCart values', () => {
        render(<FirstStepsApp />);
        const itemCounters = screen.getAllByTestId('ItemCounter')
        console.log(itemCounters.length)
        expect(itemCounters.length).toBe(9)
    })

    test('should render with props', () => {
        render(<FirstStepsApp />);
        expect(mockItemCounter).toHaveBeenCalledTimes(9) // cada prueba debe ser atomica
        expect(mockItemCounter).toHaveBeenCalledWith(
            { itemName: 'Nintendo', quantity: 0 }
        )
        expect(mockItemCounter).toHaveBeenCalledWith(
            { itemName: 'PS5', quantity: 0 }
        )
        expect(mockItemCounter).toHaveBeenCalledWith(
            { itemName: 'Xbox', quantity: 0 }
        )
    })
});