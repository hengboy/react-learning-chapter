function Item({name, isPacked}) {
    return <li className="item">
        {isPacked ? (<del>
            {name + "√"}
        </del>) : name}
    </li>;
}

const data = [
    {"name": "手机充电器", isPacked: true},
    {"name": "移动充电宝", isPacked: true},
    {"name": "茶杯", isPacked: false}
];
export default function PackingList() {
    const items = data.map(item => {
        return <Item
            name={item.name}
            isPacked={item.isPacked}
        />
    });
    return (
        <section>
            <h1>我的行李清单：</h1>
            <ul>
                {items}
            </ul>
        </section>
    );
}