import './App.css';
import {useState} from "react";
import Clock from "./clock/Clock";
import Gallery from "./gallery/Gallery";

function App() {
    const [color, setColor] = useState('lightcoral');
    return (
        <div>
            <p>
                选择一个颜色：{' '}
                <select value={color} onChange={e => setColor(e.target.value)}>
                    <option value="lightcoral">浅珊瑚色</option>
                    <option value="midnightblue">午夜蓝</option>
                    <option value="rebeccapurple">丽贝卡紫</option>
                </select>
            </p>
            <Clock color={color}/>
            <Gallery/>
        </div>
    );
}

export default App;
