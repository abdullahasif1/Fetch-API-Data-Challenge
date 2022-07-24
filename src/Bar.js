import React from 'react'

const Bar = ({ reqCat, setReqCat }) => {
  return (
        <>
        <nav className="navbar fixed-top bg-dark"  >
            <div className='container'>
                <button   type="button" className="w-25 btn btn-primary btn-lg mx-5" onClick={() => setReqCat('users')} >Users API Request</button>
            
                <button   type="button" className="w-25 btn btn-primary btn-lg mx-5" onClick={() => setReqCat('posts') }>Posts API Request</button>
                           
                <button   type="button" className="w-25 btn btn-primary btn-lg mx-5" onClick={() => setReqCat('comments')}>Comments API Request</button>
            </div>
        </nav>
        </>
  )
}

export default Bar