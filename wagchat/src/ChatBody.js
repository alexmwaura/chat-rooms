import ChatFormInput from './ChatFormInput';
import ChatHeader from './Chatheader';
import ChatMessage from './ChatMessage';

function ChatBody() {
  return (
    <div className='chat'>
      <ChatHeader />
      <ChatMessage />
      <ChatFormInput />
    </div>
  );
}

export default ChatBody;
