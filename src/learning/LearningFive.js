import {useState} from "react";

export default function LearningFive({time = new Date()}) {
    const [style, setStyle] = useState('day');
    let hours = time.getHours();
    if (hours >= 0 && hours <= 6) {
        setStyle('night');
    }
    return (
        <h1 id="time" className={style}>
            {time.toLocaleTimeString()}
        </h1>
    );
}
