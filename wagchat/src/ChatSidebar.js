
function ChatSideBar() {
  return (
    <div id='plist' className='people-list'>
      <ul className='list-unstyled chat-list mt-2 mb-0'>
        <li className='clearfix active mb-2 mt-5'>
          <img
            src='https://bootdey.com/img/Content/avatar/avatar7.png'
            alt='avatar'
          />
          <div className='about'>
            <div className='name'>Christian Kelly</div>
            <div className='status'>
              <i className='fa fa-circle offline'></i> left 10 hours ago{' '}
            </div>
          </div>
        </li>
        
      </ul>
    </div>
  );
}

export default ChatSideBar;
