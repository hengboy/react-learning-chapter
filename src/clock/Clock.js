import {useEffect, useState} from "react";

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

export default function Clock({color = 'lightcoral'}) {
    const time = useTime();
    return (
        <h1 style={{color: color}}>
            {time.toLocaleTimeString()}
        </h1>
    );
}