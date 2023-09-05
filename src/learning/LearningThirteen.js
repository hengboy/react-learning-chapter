import {initialProducts} from './data/ThirteenData';
import {useState} from "react";
import AddTodo from "./thirteen/AddTodo";
import TaskList from "./thirteen/TaskList";

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

let nextTodoId = 3;
const initialTodos = [
    {id: 0, title: 'Buy milk', done: true},
    {id: 1, title: 'Eat tacos', done: false},
    {id: 2, title: 'Brew tea', done: false},
];

function Part3() {
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(title) {
        setTodos([
            ...todos,
            {
                id: nextTodoId++,
                title: title,
                done: false
            }
        ]);
    }

    function handleChangeTodo(updatedTodo) {
        setTodos(todos.map(todo => {
            if (todo.id === updatedTodo.id) {
                return updatedTodo;
            } else {
                return todo;
            }
        }));
    }

    function handleDeleteTodo(todoId) {
        setTodos(todos.filter(todo => todo.id !== todoId));
    }

    return (
        <>
            <AddTodo
                onAddTodo={handleAddTodo}/>
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}/>
        </>
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
            <hr/>
            <h2>Part 3（修复 mutation 的问题 ）</h2>
            <Part3/>
        </>
    );
}