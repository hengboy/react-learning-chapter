import {initialLetters} from "./letter_data";
import {useState} from "react";
import './style.css';

function Letter({
                    letter,
                    isHighlighted,
                    onHover,
                    onToggleStar,
                }) {
    return (
        <li
            className={
                isHighlighted ? 'highlighted' : ''
            }
            onFocus={() => {
                onHover(letter);
            }}
            onPointerMove={() => {
                onHover(letter);
            }}
        >
            <button onClick={() => {
                onToggleStar(letter);
            }}>
                {letter.isStarred ? 'Unstar' : 'Star'}
            </button>
            {letter.subject}
        </li>
    )
}

export default function Part5() {
    const [letters, setLetters] = useState(initialLetters);
    const [highlightedLetterId, setHighlightedLetterId] = useState(null);

    function handleHover(letter) {
        setHighlightedLetterId(letter.id);
    }

    function handleStar(starred) {
        setLetters(letters.map(letter => {
            if (letter.id === starred.id) {
                return {
                    ...letter,
                    isStarred: !letter.isStarred
                };
            } else {
                return letter;
            }
        }));
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isHighlighted={
                            letter.id === highlightedLetterId
                        }
                        onHover={handleHover}
                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </>
    );
}