import {useState} from "react";

export default function Task({todo, onChangeTodo, onDeleteTodo}) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>
                <input
                    value={todo.title}
                    onChange={e => {
                        onChangeTodo({
                            ...todo,
                            title: e.target.value
                        })
                    }}/>
                &nbsp;
                <button onClick={() => setIsEditing(false)}>
                    保存
                </button>
            </>
        );
    } else {
        todoContent = (
            <>
                {todo.title}
                &nbsp;
                <button onClick={() => setIsEditing(true)}>
                    编辑
                </button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                   checked={todo.done}
                   onChange={e => {
                       onChangeTodo({
                           ...todo,
                           done: e.target.checked
                       })
                   }}
            />
            {todoContent}
            &nbsp;
            <button onClick={() => onDeleteTodo(todo.id)}>
                删除
            </button>
        </label>
    );
}