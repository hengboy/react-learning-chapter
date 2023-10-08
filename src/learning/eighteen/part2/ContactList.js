export default function ContactList({contacts, selectedId, dispatch}) {
    return (
        <section className="contact-list">
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <button
                            style={selectedId === contact.id ? {background: "blue", color: "white"} : {}}
                            onClick={() => {
                                dispatch({
                                    type: 'changed_selection',
                                    contactId: contact.id
                                });
                            }}>
                            {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
