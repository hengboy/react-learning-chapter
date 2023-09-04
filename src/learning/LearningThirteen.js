import {initialProducts} from './data/ThirteenData';
import {useState} from "react";

function Part1() {
    const [products, setProducts] = useState(initialProducts);

    function handleIncreaseClick(productId) {
        let nextProducts = products.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    count: product.count + 1
                }
            } else {
                return product;
            }
        });
        setProducts(nextProducts);
    }

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}
                    {' '}
                    (<b>{product.count}</b>)
                    {' '}
                    <button onClick={() => {
                        handleIncreaseClick(product.id);
                    }}>
                        +
                    </button>
                </li>
            ))}
        </ul>
    );
}

function Part2() {
    const [products, setProducts] = useState(initialProducts);

    function handleIncreaseClick(productId) {
        let nextProducts = products.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    count: product.count + 1
                }
            } else {
                return product;
            }
        });
        setProducts(nextProducts)
    }

    function handleReduceClick(productId) {
        let nextProducts = products.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    count: product.count - 1
                }
            } else {
                return product;
            }
        });
        nextProducts = nextProducts.filter(product => product.count > 0);
        setProducts(nextProducts);
    }

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}
                    {' '}
                    (<b>{product.count}</b>)
                    {' '}
                    <button onClick={() => handleIncreaseClick(product.id)}>
                        +
                    </button>
                    {' '}
                    <button onClick={() => handleReduceClick(product.id)}>
                        -
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default function LearningThirteen() {
    return (
        <>
            <h2>Part 1（更新购物车中的商品数量）</h2>
            <Part1/>
            <hr/>
            <h2>Part 2（删除购物车中的商品）</h2>
            <Part2/>
        </>
    );
}