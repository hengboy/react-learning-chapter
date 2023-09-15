import {useState} from "react";
import {initialLetters} from "./letter_data";

function Letter({
                    letter,
                    onToggle,
                    isSelected,
                }) {
    return (
        <li className={
            isSelected ? 'selected' : ''
        }>
            <label>
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {
                        onToggle(letter.id);
                    }}
                />
                {letter.subject}
            </label>
        </li>
    )
}

export default function Part6() {
    const [selectedIds, setSelectedIds] = useState([0, 1]);
    const selectedCount = selectedIds.length;

    function handleToggle(toggledId) {
        let isHave = selectedIds.includes(toggledId);
        setSelectedIds(
            isHave ?
                selectedIds.filter(id => id !== toggledId) :
                [...selectedIds, toggledId]
        );
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {initialLetters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isSelected={
                            selectedIds.includes(letter.id)
                        }
                        onToggle={handleToggle}
                    />
                ))}
                <hr/>
                <p>
                    <b>
                        You selected {selectedCount} letters
                    </b>
                </p>
            </ul>
        </>
    );
}