export default function Chat({contact, message, dispatch}) {
    return (
        <section className="chat">
      <textarea
          value={message}
          placeholder={'和 ' + contact.name + ' 聊天'}
          onChange={(e) => {
              dispatch({
                  type: 'edited_message',
                  message: e.target.value,
              });
          }}
      />
            <br/>
            <button
                // 没有聊天内容时禁用发送按钮
                disabled={message === ''}
                onClick={() => {
                    alert(`正在发送 "${message}" 到 ${contact.email}`);
                    dispatch({
                        type: 'edited_message',
                        message: ''
                    });
                }}>发送到 {contact.email}</button>
        </section>
    );
}
