import './App.css';
import ChatBody from './ChatBody';
import ChatSideBar from './ChatSidebar';
import MainBody from './MainBody';

function App() {
  return (
    <div className='container'>
      <MainBody>
        <ChatSideBar />
        <ChatBody />
      </MainBody>
    </div>
  );
}

export default App;
