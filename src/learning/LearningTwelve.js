import {useState} from "react";
import {useImmer} from "use-immer";

let nextId = 3;
const initialArtists = [
    {id: 0, name: 'Marta Colvin Andrade'},
    {id: 1, name: 'Lamidi Olonade Fakeye'},
    {id: 2, name: 'Louise Nevelson'},
];

export function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialArtists);

    function handleAddClick() {
        setArtists([
            ...artists,
            {id: nextId++, name: name}
        ]);
    }

    function handleRemoveClick(removeId) {
        setArtists(
            artists.filter(a => a.id !== removeId)
        )
    }

    return (
        <>
            <h1>振奋人心的雕塑家们：</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleAddClick}>添加
            </button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}
                        {' '}
                        <button onClick={() => handleRemoveClick(artist.id)}>
                            删除
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

let initialShapes = [
    {id: 0, type: 'circle', x: 50, y: 300},
    {id: 1, type: 'square', x: 150, y: 300},
    {id: 2, type: 'circle', x: 250, y: 300},
];

function ShapeEditor() {
    const [shapes, setShapes] = useState(
        initialShapes
    );

    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                // 不作改变
                return shape;
            } else {
                // 返回一个新的圆形，位置在下方 50px 处
                return {
                    ...shape,
                    y: shape.y + 50,
                };
            }
        });
        // 使用新的数组进行重渲染
        setShapes(nextShapes);
    }

    return (
        <>
            <button onClick={handleClick}>
                所有圆形向下移动！
            </button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        background: 'purple',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle'
                                ? '50%' : '',
                        width: 20,
                        height: 20,
                    }}/>
            ))}
        </>
    );
}

let initialCounters = [
    0, 0, 0
];

function CounterList() {
    const [counters, setCounters] = useState(
        initialCounters
    );

    function handleIncrementClick(index) {
        const nextCounters = counters.map((c, i) => {
            // 递增被点击的计数器
            if (i === index) {
                return c + 1;
            } else {
                return c;
            }
        });
        setCounters(nextCounters);
    }

    return (
        <ul>
            {counters.map((counter, i) => (
                <li key={i}>
                    {counter}
                    <button onClick={() => handleIncrementClick(i)}>+1</button>
                </li>
            ))}
        </ul>
    );
}

const initialPart4List = [
    {id: 0, title: 'Big Bellies'},
    {id: 1, title: 'Lunar Landscape'},
    {id: 2, title: 'Terracotta Army'},
];

function Part4() {
    const [list, setList] = useState(initialPart4List);

    function handleReverseClick() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }

    return (
        <>
            <button onClick={handleReverseClick}>
                反转
            </button>
            <ul>
                {list.map(artwork => (
                    <li key={artwork.id}>{artwork.title}</li>
                ))}
            </ul>
        </>
    );
}

const initialPart5List = [
    {id: 0, title: 'Big Bellies', seen: false},
    {id: 1, title: 'Lunar Landscape', seen: false},
    {id: 2, title: 'Terracotta Army', seen: true},
];

function Part5() {
    const [myList, setMyList] = useState(initialPart5List);
    const [yourList, setYourList] = useState(initialPart5List);

    function handleToggleMyList(artworkId, nextSeen) {
        handleToggleList(myList, artworkId, nextSeen, setMyList);
    }

    function handleToggleYourList(artworkId, nextSeen) {
        handleToggleList(yourList, artworkId, nextSeen, setYourList);
    }

    function handleToggleList(list, artworkId, nextSeen, setValueFunc) {
        const nextList = list.map(artwork => {
            if (artwork.id === artworkId) {
                return {
                    ...artwork,
                    seen: nextSeen
                };
            } else {
                return artwork;
            }
        });
        setValueFunc(nextList);
    }

    return (
        <>
            <h1>艺术愿望清单</h1>
            <h2>我想看的艺术清单：</h2>
            <ArtworkItem
                artworks={myList}
                onToggle={handleToggleMyList}/>
            <h2>你想看的艺术清单：</h2>
            <ArtworkItem
                artworks={yourList}
                onToggle={handleToggleYourList}/>
        </>
    );
}

function Part6() {
    const [myList, updateMyList] = useImmer(initialPart5List);
    const [yourList, updateYourList] = useImmer(initialPart5List);

    function handleToggleList(list, artworkId, nextSeen, updateListFunc) {
        updateListFunc(draft => {
            const artwork = draft.find(a => a.id === artworkId);
            artwork.seen = nextSeen;
        });
    }

    return (
        <>
            <h1>艺术愿望清单</h1>
            <h2>我想看的艺术清单：</h2>
            <ArtworkItem
                artworks={myList}
                onToggle={(artworkId, nextSeen) => {
                    handleToggleList(myList, artworkId, nextSeen, updateMyList)
                }}/>
            <h2>你想看的艺术清单：</h2>
            <ArtworkItem
                artworks={yourList}
                onToggle={(artworkId, nextSeen) => {
                    handleToggleList(yourList, artworkId, nextSeen, updateYourList)
                }}/>
        </>
    );
}

function ArtworkItem({artworks, onToggle}) {
    return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={e => {
                                onToggle(artwork.id,
                                    e.target.checked
                                );
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}

export default function LearningTwelve() {
    return <>
        <h2>Part 1</h2>
        <List/>
        <hr/>
        <h2>Part 2</h2>
        <ShapeEditor/>
        <hr/>
        <h2>Part 3</h2>
        <CounterList/>
        <hr/>
        <h2>Part 4</h2>
        <Part4/>
        <hr/>
        <h2>Part 5（useState）</h2>
        <Part5/>
        <hr/>
        <h2>Part 6（useImmer）</h2>
        <Part6/>
    </>;
}