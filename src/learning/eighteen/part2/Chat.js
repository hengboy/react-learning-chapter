import {useState} from 'react';

export default function Chat({contact, message, dispatch}) {
    return (
        <section className="chat">
      <textarea
          value={message}
          placeholder={'和 ' + contact.name + ' 聊天'}
          onChange={(e) => {
              dispatch({
                  type: 'edited_message',
                  message: e.target.value
              });
          }}
      />
            <br/>
            <button>发送到 {contact.email}</button>
        </section>
    );
}
