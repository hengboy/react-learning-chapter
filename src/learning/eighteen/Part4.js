import {useReducer} from "react";
import {messengerReducer, initialState} from "./part4/messengerReducer";
import ContactList from "./part4/ContactList";
import Chat from "./part4/Chat";

export default function Part4() {
    const [state, dispatch] = useReducer(messengerReducer, initialState);
    const contact = contacts.find((c) => c.id === state.selectedId);
    const message = state.messages[state.selectedId];
    return (
        <div>
            <ContactList
                contacts={contacts}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Chat
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </div>
    );
}
const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'bob@mail.com'},
];