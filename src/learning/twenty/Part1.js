import AddTask from "./part1/AddTask";
import TaskList from "./part1/TaskList";
import {TasksProvider} from "./part1/TasksContext";
import './part1/style.css';

export default function Part1() {
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask/>
            <TaskList/>
        </TasksProvider>
    )
}