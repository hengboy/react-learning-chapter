import Clock from "./Clock";
import {useState} from "react";

export default function AllowChangeColorClock() {
    const [color, setColor] = useState('lightcoral');
    return (
        <p>
            选择一个颜色：{' '}
            <select value={color} onChange={e => setColor(e.target.value)}>
                <option value="lightcoral">浅珊瑚色</option>
                <option value="midnightblue">午夜蓝</option>
                <option value="rebeccapurple">丽贝卡紫</option>
            </select>
            <Clock color={color}/>
        </p>
    );
}