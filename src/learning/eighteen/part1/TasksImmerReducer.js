/**
 * 使用immer简化reducer
 * @constructor
 */
export default function TasksImmerReducer(draft, action) {
    switch (action.type) {
        // 新增
        case 'added': {
            draft.push({
                id: action.id,
                text: action.text,
                done: false
            })
            break;
        }
        // 编辑
        case 'changed': {
            const index = draft.findIndex((task) => task.id === action.task.id);
            draft[index] = action.task;
            break;
        }
        // 删除
        case 'deleted': {
            return draft.filter((task) => task.id !== action.id);
        }
        // 未知
        default: {
            throw Error('未知 action：[' + action.type + ']');
        }
    }
}