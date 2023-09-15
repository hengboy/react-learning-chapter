import {useState} from "react";

const initialItems = [
    {title: 'KFC', id: 0},
    {title: '黄瓜', id: 1},
    {title: '西红柿', id: 2},
];
export default function Part1() {
    const [items, setItems] = useState(initialItems);
    const [selectedId, setSelectedId] = useState(0);

    const selectedItem = items.find(item => item.id === selectedId);

    function handleChangeItem(id, e) {
        setItems(items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    title: e.target.value
                };
            } else {
                return item;
            }
        }));
    }

    return (
        <>
            <h2>选择菜品</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={item.id}>
                        <input value={item.title}
                               onChange={(e) => handleChangeItem(item.id, e)}
                        />
                        {' '}
                        <button onClick={() => {
                            setSelectedId(item.id);
                        }}>
                            选择
                        </button>
                    </li>
                ))}
            </ul>
            <p>你选择的菜品：{selectedItem.title}.</p>
        </>
    );
}