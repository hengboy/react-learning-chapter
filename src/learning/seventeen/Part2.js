import {useState} from "react";

function Form() {
    const [text, setText] = useState('');
    return (
        <textarea
            value={text}
            onChange={e => setText(e.target.value)}
        />
    );
}

export default function Part2() {
    const [showHint, setShowHint] = useState(false);
    return (
        <div>
            {showHint && (<p><i>提示：你最喜欢的城市？</i></p>)}
            <Form/>
            <button onClick={() => {
                setShowHint(!showHint);
            }}>{showHint ? '隐藏提示' : '显示提示'}
            </button>
        </div>
    );
}