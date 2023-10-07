import {useState} from "react";
import AddTask from "./part1/AddTask";
import TaskList from "./part1/TaskList";
import {initialTasks} from "./part1/data";
import './style.css';

let nextId = 3;
export default function Part1() {
    const [tasks, setTasks] = useState(initialTasks);

    function handleAddTask(text) {
        setTasks([...tasks, {
            id: nextId++, text: text, done: false,
        },]);
    }

    function handleChangeTask(task) {
        setTasks(tasks.map((t) => {
            if (t.id === task.id) {
                return task;
            } else {
                return t;
            }
        }));
    }

    function handleDeleteTask(taskId) {
        setTasks(tasks.filter((t) => t.id !== taskId));
    }

    return (<>
            <h1>布拉格的行程安排</h1>
            <AddTask onAddTask={handleAddTask}/>
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>);
}




