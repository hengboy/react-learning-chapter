import {useState} from "react";

function Contact({contact}) {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <p><b>{contact.name}</b></p>
            {expanded &&
                <p><i>{contact.email}</i></p>
            }
            <button onClick={() => {
                setExpanded(!expanded);
            }}>
                {expanded ? '隐藏' : '显示'}邮箱
            </button>
        </>
    );
}

const contacts = [
    {id: 0, name: 'Alice', email: 'alice@mail.com'},
    {id: 1, name: 'Bob', email: 'bob@mail.com'},
    {id: 2, name: 'Taylor', email: 'taylor@mail.com'}
];
export default function Part6() {
    const [reverse, setReverse] = useState(false);

    const displayedContacts = [...contacts];
    if (reverse) {
        displayedContacts.reverse();
    }

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    value={reverse}
                    onChange={e => {
                        setReverse(e.target.checked)
                    }}
                />{' '}
                以相反的顺序显示
            </label>
            <ul>
                {displayedContacts.map((contact, i) =>
                    <li key={contact.id}>
                        <Contact contact={contact}/>
                    </li>
                )}
            </ul>
        </>
    );
}