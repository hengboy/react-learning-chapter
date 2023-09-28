import {foods, filterItems} from "./data";
import {useState} from "react";


function SearchBar({query, changeQuery}) {
    return (
        <label>
            搜索：{' '}
            <input
                value={query}
                onChange={changeQuery}
            />
        </label>
    );
}

function FoodList({items}) {
    return (
        <table>
            <tbody>
            {items.map(food => (
                <tr key={food.id}>
                    <td>{food.name}</td>
                    <td>{food.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default function Part3() {
    const [query, setQuery] = useState('');
    let filteredFoods = filterItems(foods, query);

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <>
            <SearchBar query={query} changeQuery={handleChange}/>
            <hr/>
            <FoodList items={filteredFoods}/>
        </>
    );
}