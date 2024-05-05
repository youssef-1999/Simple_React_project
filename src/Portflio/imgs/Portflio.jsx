import React from 'react'
import './Portflio.css'
import home from './poert1.png'
import cake from './port2.png'
import circus from './port3.png'
import Icon from '../../Icon/Icon'

function Portflio() {
  return (
    <div className='portflio p-4' id="portflio">
      <div className="container">
        <h1 className='text-center fw-bold '>PORTFOLIO COMPONENT</h1>
        <Icon  />
        <div className="row">
            <div className="col-md-4  gy-5 ">
                <div className="test">
                    <img src={home} className='w-100 rounded rounded-3' alt="" />
                <div className="layer">
                <i class="fa-solid fa-plus"></i>
                </div>
                </div>
            </div>
            <div className="col-md-4  gy-5 " >
                <div className="test">
                    <img src={cake} className='w-100 rounded rounded-3' alt="" />
                <div className="layer">
                <i class="fa-solid fa-plus"></i>
                </div>

                </div>
            </div>
            <div className="col-md-4  gy-5 ">
               <div className="test">
                 <img src={circus} className='w-100 rounded rounded-3' alt="" />
                <div className="layer">
                <i class="fa-solid fa-plus"></i>
                </div>

               </div>
            </div>
            <div className="col-md-4  gy-5 ">
                <div className="test">
                    <img src={home} className='w-100 rounded rounded-3' alt="" />
                <div className="layer">
                <i class="fa-solid fa-plus"></i>
                </div>

                </div>
            </div>
            <div className="col-md-4  gy-5 " >
                <div className="test">
                    <img src={cake} className='w-100 rounded rounded-3' alt="" />
                <div className="layer">
                <i class="fa-solid fa-plus"></i>
                </div>

                </div>
            </div>
            <div className="col-md-4  gy-5 ">
               <div className="test">
                 <img src={circus} className='w-100 rounded rounded-3' alt="" />
                <div className="layer">
                <i class="fa-solid fa-plus"></i>
                </div>

               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portflio
