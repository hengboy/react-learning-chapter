import {useState} from "react";
import './style.css';

function ContactList({selectedContact, contacts, onSelect}) {
    return (
        <section className="contact-list">
            <ul>
                {contacts.map(contact =>
                    <li key={contact.id}
                    >
                        <button onClick={() => onSelect(contact)}
                                style={selectedContact.id === contact.id ? {background: "blue", color: "white"} : {}}
                        >
                            {contact.name}
                        </button>
                    </li>
                )}
            </ul>
        </section>
    );
}

function Chat({contact, text, onChangeText}) {
    return (
        <section className="chat">
            <textarea
                value={text}
                placeholder={'跟 ' + contact.name + ' 聊一聊'}
                onChange={onChangeText}
            />
            <br/>
            <button>发送到{contact.email}</button>
        </section>
    );
}

const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'bob@mail.com'}
];
export default function Part1() {
    const [to, setTo] = useState(contacts[0]);
    const [temps, setTemps] = useState([
        {id: 0, tempText: ''},
        {id: 1, tempText: ''},
        {id: 2, tempText: ''}
    ]);
    let toTemp = temps.filter(tt => tt.id === to.id);

    function handleChangeText(e) {
        setTemps(temps.map(temp => {
            if (temp.id === to.id) {
                return {
                    ...temp,
                    tempText: e.target.value
                }
            } else {
                return temp;
            }
        }));
    }

    return (
        <div>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
            <Chat key={to.id} contact={to} text={toTemp.tempText} onChangeText={handleChangeText}/>
        </div>
    );
}