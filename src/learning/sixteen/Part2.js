import {useState} from "react";

function Input({label, text, changeText}) {
    return (
        <label>
            {label}
            {'：'}
            <input value={text} onChange={changeText}/>
        </label>
    );
}

export default function Part2() {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <Input label="第一个输入框" text={text} changeText={handleChange}/>
            {' '}
            <Input label="第二个输入框" text={text} changeText={handleChange}/>
        </>
    )
}