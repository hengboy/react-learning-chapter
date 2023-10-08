import {useState} from "react";
import AddTask from "./part1/AddTask";
import TaskList from "./part1/TaskList";
import {useReducer} from 'react';
import './style.css';
import {initialTasks} from "./part1/data";
import TasksReducer from "./part1/TasksReducer";
import TasksImmerReducer from "./part1/TasksImmerReducer";
import {useImmerReducer} from "use-immer";

let nextId = 3;
export default function Part1() {
    // tasks：state定义
    // dispatchAction：派发用户的动作
    // tasksReducer：自定义的用来操作tasks state的函数
    // initialTasks：tasks初始化的值

    //const [tasks, dispatchAction] = useReducer(TasksReducer, initialTasks);

    // use immer简化
    const [tasks, dispatchAction] = useImmerReducer(TasksImmerReducer, initialTasks);

    function handleAddTask(text) {
        dispatchAction({
            type: 'added',
            id: nextId++,
            text: text,
            done: false,
        });
    }

    function handleChangeTask(task) {
        dispatchAction({
            type: 'changed',
            task: task
        });
    }

    function handleDeleteTask(taskId) {
        dispatchAction({
            type: 'deleted',
            id: taskId
        });
    }

    return (<>
        <AddTask onAddTask={handleAddTask}/>
        <TaskList
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
        />
    </>);
}




