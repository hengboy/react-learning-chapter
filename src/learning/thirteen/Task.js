export default function Task({todo, onChange, onDelete}) {
    return (
        <label>
            <input type="checkbox"
                   checked={todo.done}
                   onChange={e => {
                       onChange({
                           ...todo,
                           done: e.target.checked
                       })
                   }}
            />
        </label>
    );
}