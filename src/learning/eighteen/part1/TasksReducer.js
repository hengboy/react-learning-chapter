/**
 * 处理不同动作的task业务操作
 * @param tasks state
 * @param action 用户动作
 * @returns {[...*,{id, text, done: boolean}]|*}
 */
export default function TasksReducer(tasks, action) {
    switch (action.type) {
        // 新增
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false
                }
            ];
        }
        // 编辑
        case 'changed': {
            return tasks.map((task) => {
                if (task.id === action.task.id) {
                    return action.task;
                } else {
                    return task;
                }
            });
        }
        // 删除
        case 'deleted': {
            return tasks.filter((task) => task.id !== action.id);
        }
        // 未知
        default: {
            throw Error('未知 action：[' + action.type + ']');
        }
    }
}