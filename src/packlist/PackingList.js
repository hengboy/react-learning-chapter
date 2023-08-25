function Item({name, isPacked, importance}) {
    return <li className="item">
        {name}
        {importance > 0 && "（重要性：" + importance + "）"}
        {' '}
        {isPacked ? '✔' : "❎"}
    </li>;
}

const data = [
    {"name": "手机充电器", isPacked: true, importance: 10},
    {"name": "移动充电宝", isPacked: true, importance: 5},
    {"name": "茶杯", isPacked: false, importance: 2}
];
export default function PackingList() {
    const items = data.map(item => {
        return <Item
            key={item.name}
            name={item.name}
            isPacked={item.isPacked}
            importance={item.importance}
        />
    });
    return (
        <section>
            <ul>
                {items}
            </ul>
        </section>
    );
}