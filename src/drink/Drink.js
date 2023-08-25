/**
 * 饮品列表数据
 * @type {[{part: string, name: string, content: string, age: string},{part: string, name: string, content: string, age: string}]}
 */
const drinks = [
    {name: "tea", "part": "leaf", "content": "15–70 mg/cup", age: "4,000+ years"},
    {name: "coffee", "part": "bean", "content": "80–185 mg/cup", age: "1,000+ years"},
];

function Drink({drink}) {
    return (
        <section>
            <h1>{drink.name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{drink.part}</dd>
                <dt>Caffeine content</dt>
                <dd>{drink.content}</dd>
                <dt>Age</dt>
                <dd>{drink.age}</dd>
            </dl>
        </section>
    );
}

export default function DrinkList() {
    const drinkList = drinks.map(drink => {
        return <Drink drink={drink}/>;
    });
    return (
        <div>
            {drinkList}
        </div>
    );
}
