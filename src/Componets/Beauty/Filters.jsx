import React from 'react'
import './Filters.css'
const Filters = () => {
  return (
    <div style={{textAlign:'left'}}>
        <h6>FILTERS</h6>
        <hr />
        <form>
            <input className='inpRadio' name='Filter' type="radio" /><label className='labelMen'>Men</label>
            <br />
            <input className='inpRadio' name='Filter' type="radio" /><label className='labelMen'>Women</label>
            <br />
            <input className='inpRadio' name='Filter' type="radio" /><label className='labelMen'>Boys</label>
            <br />
            <input className='inpRadio' name='Filter' type="radio" /><label className='labelMen'>Girls</label>
        </form>
        <hr />
      
    </div>
  )
}

export default Filters
