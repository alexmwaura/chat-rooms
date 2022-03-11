function MainBody({ children }) {
  return (
    <div className='container'>
      <div className='row clearfix'>
        <div className='col-lg-12'>
          <div className='card chat-app'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
