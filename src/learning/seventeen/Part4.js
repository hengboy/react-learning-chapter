import {useState} from "react";

function EditContact({initialData, onSave}) {
    const [name, setName] = useState(initialData.name);
    const [email, setEmail] = useState(initialData.email);
    return (
        <section>
            <label>
                名称：
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <label>
                邮箱：
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </label>
            <button onClick={() => {
                const updatedData = {
                    id: initialData.id,
                    name: name,
                    email: email
                };
                onSave(updatedData);
            }}>
                保存
            </button>
            <button onClick={() => {
                setName(initialData.name);
                setEmail(initialData.email);
            }}>
                重置
            </button>
        </section>
    );
}

function ContactList({
                         contacts,
                         selectedId,
                         onSelect
                     }) {
    return (
        <section>
            <ul>
                {contacts.map(contact =>
                    <li key={contact.id}>
                        <button
                            onClick={() => {
                                onSelect(contact.id);
                            }}
                            style={contact.id === selectedId ? {background: "blue", color: "white"} : {}}>
                            {contact.id === selectedId ?
                                <b>{contact.name}</b> :
                                contact.name
                            }
                        </button>
                    </li>
                )}
            </ul>
        </section>
    );
}

const initialContacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'bob@mail.com'}
];

export default function Part4() {
    const [
        contacts,
        setContacts
    ] = useState(initialContacts);
    const [
        selectedId,
        setSelectedId
    ] = useState(0);
    const selectedContact = contacts.find(c =>
        c.id === selectedId
    );

    function handleSave(updatedData) {
        const nextContacts = contacts.map(c => {
            if (c.id === updatedData.id) {
                return updatedData;
            } else {
                return c;
            }
        });
        setContacts(nextContacts);
    }

    return (
        <div>
            <ContactList
                contacts={contacts}
                selectedId={selectedId}
                onSelect={id => setSelectedId(id)}
            />
            <hr/>
            <EditContact
                key={selectedId}
                initialData={selectedContact}
                onSave={handleSave}
            />
        </div>
    )
}