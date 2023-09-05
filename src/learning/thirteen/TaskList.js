import Task from "./Task";

export default function TaskList({todos, onChangeTodo, onDeleteTodo}) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onChangeTodo={onChangeTodo}
                        onDeleteTodo={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}