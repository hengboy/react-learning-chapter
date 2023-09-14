import {useState} from "react";

/**
 * status取值：'submitting', 'error', 'success'、'typing'
 * @param status
 * @returns {JSX.Element}
 * @constructor
 */
function Form() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>恭喜你，答对了！</h1>
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting')
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('error');
            setError(err);
        }
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea value={answer}
                          onChange={handleTextareaChange}
                          disabled={status === 'submitting'}
                />
                <br/>
                <button disabled={answer.length === 0 || status === 'submitting'}>
                    Submit
                </button>
                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </form>
        </>
    )
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}

export default function Part3() {
    return (
        <>
            <Form/>
        </>
    );
}
