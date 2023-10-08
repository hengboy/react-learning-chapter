export const initialState = {
    selectedId: 0,
    message: '你好',
};

export function messengerReducer(state, action) {
    switch (action.type) {
        // 变更聊天人
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
                message: '',
            };
        }
        // 编辑聊天内容
        case 'edited_message': {
            return {
                ...state,
                message: action.message,
            };
        }
        default: {
            throw Error('未知 action：' + action.type);
        }
    }
}
