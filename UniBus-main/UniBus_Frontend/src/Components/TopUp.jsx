import React from 'react'
import "../CSS/TopUp.css"
const TopUp = () => {
  return (
    <div className='conainer-lg' id="frth">
        <div className="page4">
          <div className="inputField">
            <input type="text"  className='Info' placeholder='System id' />
            <input className='Info' type="number" min={100} placeholder='Amount ' />
            </div>
            <button type="button" class="btn btn-danger">Continue</button>
        </div>
    </div>
  )
}

export default TopUp
