import React from 'react'
import './Page3.css'
import img3 from '../../../Images/3.jpeg'
function Page3() {
  return (
    <div className='page3'>
      <div className='imggrp1'>
        <div className='imgtxt1'> 
        Model Name1
        <img src={img3} className="rounded float-start img1" alt="..." />
        </div>

        <div className='imgtxt2'>
        Model Name2
        <img src={img3} className="rounded float-end img2" alt="..." />
        </div>
      </div>


      <div className='imggrp2'>
        <div className='imgtxt3'> 
        Model Name3
        <img src={img3} className="rounded float-start img3" alt="..." />
        </div>

        <div className='imgtxt4'>
        Model Name4
        <img src={img3} className="rounded float-end img4" alt="..." />
        </div>
      </div>
        
    </div>
  )
}


export default Page3