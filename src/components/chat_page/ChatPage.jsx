import React, { useState } from 'react';
import ChatItem from '../chat_list_item/ChatItem';
import Messages from '../messages_page/Messages';
import './ChatPage.css';

export default function ChatPage({ darkMode }) {

  const [chatHead, setChatHead] = useState('chats');
  const [messagesDisplay, setMessagesDisplay] = useState(false);

  return (
    <div id="chat-page">

      <div className="chats">
        <div id="chat-heading">
          <p onClick={() => setChatHead('chats')} style={{
            color: chatHead === 'chats' ? '#ffc900' : '#ffffff'
          }}>Chats</p>
          <p onClick={() => setChatHead('random')} style={{
            color: chatHead === 'random' ? '#ffc900' : '#ffffff'
          }}>Random</p>
        </div>
        <div id="chats-list" className={messagesDisplay ? " chatListHide" : " chatListDisplay"}>
          <ChatItem darkMode={darkMode} />
          <ChatItem darkMode={darkMode} />
          <ChatItem darkMode={darkMode} />
          <ChatItem darkMode={darkMode} />
          <ChatItem darkMode={darkMode} />
          <ChatItem darkMode={darkMode} />
          <ChatItem darkMode={darkMode} />
          <ChatItem darkMode={darkMode} />
        </div>
      </div>

      <div className={"messages" + (messagesDisplay ? " messagesDisplay" : " messagesHide")}>
        <Messages darkMode={darkMode} />
      </div>
    </div>
  )
}
