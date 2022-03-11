function MainBody({ children }) {
  return (
    <div className='container mt-5 p-5'>
      <div className='row clearfix'>
        <div className='col-lg-12'>
          <div className='card chat-app'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
