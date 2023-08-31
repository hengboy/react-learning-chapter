import {useState} from "react";


function TrafficLight() {
    const [walk, setWalk] = useState(true);

    function handleClick() {
        alert(`${walk}`);
        alert(`${!walk ? 'Walk' : 'Stop'} is next!`);
        setWalk(!walk);
    }

    return (
        <>
            <button onClick={handleClick}>
                Change to {walk ? 'Stop' : 'Walk'}
            </button>
            <h1 style={{
                color: walk ? 'darkgreen' : 'darkred'
            }}>
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>
    );
}

function SendMessage() {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 5000);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                To:{' '}
                <select
                    value={to}
                    onChange={e => setTo(e.target.value)}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </p>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    );
}

export default function LearningEight() {
    return (
        <div>
            <h2>Part 1</h2>
            <SendMessage/>
            <hr/>
            <TrafficLight/>
        </div>
    );
}