import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo', quantity: 1 },
    { productName: 'PS5', quantity: 2 },
    { productName: 'Xbox', quantity: 3 },
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de comptras</h1>
            <ItemCounter itemName="Nintendo" quantity={0} />
            <ItemCounter itemName="PS5" quantity={0} />
            <ItemCounter itemName="Xbox" quantity={0} />

            {
                itemsInCart.map((item: ItemInCart) => (
                    <ItemCounter key={item.productName} itemName={item.productName} quantity={item.quantity} />
                ))
            }

            {/* O así con destructuring 
                El key debe ser unico y ayuda a react
            */}
            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} itemName={productName} quantity={quantity} />
                ))
            }


        </>
    )
}