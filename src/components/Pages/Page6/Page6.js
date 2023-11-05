import React from 'react'
import './Page6.css'
import { MdMail, MdPinDrop, MdReviews } from 'react-icons/md'
function Page6() {
  return (
    <div className='page6'>
    <div className='page6img'>
        <div className='page6tran'>
            <div className='page6box'>
                <div className='page6icons'>
                <div className='icon-container'>
              <MdPinDrop />
              <span className='icon-name'>Location </span>
            </div>
            <div className='icon-container'>
              <MdMail />
              <span className='icon-name'>Contact us</span>
            </div>
            <div className='icon-container'>
              <MdReviews />
              <span className='icon-name'>Reviews</span>
            </div>
                </div> 
                

            </div>
        </div>
    </div>
    </div>
  )
}

export default Page6