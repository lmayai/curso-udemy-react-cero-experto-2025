import { useState } from "react";

import './ItemCounter.css'
import styles from './ItemCounter.module.css'

interface Props {
    itemName: string;
    quantity?: number;
    // quantity: number | undefined;
}

// export const ItemCounter = ({ name }: { name: string }) => 
export const ItemCounter = (props: Props) => {
    const { itemName, quantity } = props

    const [count, setCount] = useState(quantity || 0)

    const handleAdd = () => {
        console.log(`Clickk ${itemName}`);
        setCount(count + 1)
    }
    const handleSubtract = () => {
        console.log(`Clickk subtract ${itemName}`);
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <section
            // style={{
            //     display: 'flex',
            //     alignItems: 'center',
            //     gap: 10,
            //     marginTop: 10
            // }}
            className="item-row"
        >
            <span className="item-text" style={{
                color: count === 0 ? 'red' : 'black'
            }}>{itemName}</span>
            <button onClick={handleAdd}
                onMouseEnter={() => {
                    console.log('On mouse enter');
                }}
                className={styles['color-coral']}
            >+1</button>
            {/* <button onClick={() => {
                console.log(`CLick ${itemName}`);
            }}>+1</button> */}
            <span>{count}</span>
            <button onClick={handleSubtract}>-1</button>
        </section>
    )
}

