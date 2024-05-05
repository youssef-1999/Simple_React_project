import React from 'react'
import './Contact.css'
import Icon from '../Icon/Icon'

function Contact() {
  return (
    <div className='p-5' id="contact">
      <div className="container text-center ">
    <h1>CONATCT SECTION
</h1>
<Icon/>
<div className="form mx-auto w-75 mt-4 ">
    <div className="form-group">
        <input type="text" placeholder='userName' className='form-control mb-4' />
    </div>
    <div className="form-group">
        <input type="number" placeholder='userAge' className='form-control mb-4' />
    </div>
    <div className="form-group">
        <input type="email" placeholder='userEmail' className='form-control mb-4' />
    </div>
    <div className="form-group">
        <input type="password" placeholder='userPassword' className='form-control mb-4 ' />
    </div>

    <button className='btn mt-4 text-white'>send Message</button>
</div>
      </div>
    </div>
  )
}

export default Contact
