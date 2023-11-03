import React, { useState } from 'react'
import './Categories.css'
const Categories = (props) => {

   

    const[dis,setDis]=useState('')

    const Btnclick=()=>{
        setDis('block')
        setDle('block')
        setSrdle('none')
    }
    const[dle,setDle]=useState('');
    const Btndelete=()=>{
        setDis('none')
        setDle('none')
        setSrdle('block')

    }

    const[srdle,setSrdle]=useState('')


  return (
    <div style={{textAlign:'left'}}>
        <div style={{display:'flex'}}>
        <h6 className='catH6' >{props.catH6}</h6>
        <input className='catInput' placeholder='Sreach' style={{display:dis,marginLeft:props.mLC }} type="text" /> <button onClick={Btndelete} style={{display:dle}}  className='btnCateDelete'>X</button> 

        <button  className='btnCate' style={{display:srdle , }} onClick={Btnclick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
       </svg>
       </button>

    
        </div>

      

      {
        props.lip.map((item,index)=>(
            <div key={index} >
            <form action="">
                
           <input className='inpChek' type='checkbox' /><label className='labelLipstic'>{item.li} <span className='spanNumber'>{(item.nu)}</span></label>
           </form>
            </div>
        ))
      }
      <p style={{marginLeft:'20%', marginTop:'10px',color:'red'}}>{props.more}</p>
      <hr />
      
    </div>
  )
}

export default Categories
