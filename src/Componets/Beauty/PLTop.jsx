import React, { useState } from 'react'
import './PLTop.css'
import PList from './PList'

const PLTop = () => {
  const a=[ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
  </svg> ]

  const b=[<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg> ]

var FirstArr=[   "XS", "S", "S/M", "M/L", "XL", "XXL", "16-21lbs",
"0-3M", "0-6M", "0-12M", "3-6M", "6-9M", "6-12M", "9-12M", "12-18M", "1-27", "2Y", "2-3Y", "3Y", "3-4Y", "4-5Y", "5Y",
"25 ML", "30 ML", "50 ML", "75 ML", "0-100 ML"]



  const[downArrow,setDownarrow]=useState(false)

  const Downclick=()=>{
    setDownarrow(!downArrow)
    setviewDiv(!viewDiv)
    
    setViewDiv('none')
    
    
  }

  const[CouArrow,setCouArrow]=useState(false)

  const Couclick=()=>{
    setCouArrow(!CouArrow)
    setviewDiv(!viewDiv)
  }

  const[sizeArrow,setSizeArrow]=useState(false)

  const Sizeclick=()=>{
    setSizeArrow(!sizeArrow)
  }

  const[viewDiv,setviewDiv]=useState('')

  const[btnclose,setbtnclose]=useState(false)

const btnClose=()=>{
  setbtnclose(!btnclose)
  setCheked(!cheked)
  
 
  
}


const[cheked,setCheked]=useState(false)

  const Chekedclick=()=>{
    setCheked(!cheked) 
    if (cheked === true) {
      // Show the btnClose element
      btnClose('none');
    } else {
      // Hide the btnClose element
      btnClose('block');
    }
    
  }

  // --------------------------------------------------
  const[singleclose,setsingleclose]=useState(false)

const singleClose=()=>{
  setsingleclose(!singleclose)
  setChekSingle(!chekSingle)
}

const[chekSingle,setChekSingle]=useState(false)

  const ChekedSigleclick=()=>{
    setChekSingle(!chekSingle) 
    if (chekSingle === true) {
      // Show the btnClose element
      singleClose('none');
    } else {
      // Hide the btnClose element
      singleClose('block');
    }
   
  }

  // --------------ALL COUNTRIES--------------------------------------------
  
  const[viewDiv1,setViewDiv]=useState(false)

  const viewDivShow =()=>{
    setViewDiv(!viewDiv1)
    setAllclose(!allclose)
    setDownarrow('none')

  }


  const[allclose,setAllclose]=useState(false)
  const all=()=>{
    setAllclose(!allclose)
  }

  const[chekall,setChekAll]=useState(false)

  const ChekedAllclick=()=>{
    setChekAll(!chekall) 
    if (chekall === true) {
      // Show the btnClose element
      all('none');
    } else {
      // Hide the btnClose element
      all('block');
    }
   
  }


  const[indiaclose,setIndia]=useState(false)

  const indiaClose=()=>{
    setIndia(!indiaclose)
    setChekindia(!chekindia)
    
  }
  
  const[chekindia,setChekindia]=useState(false)
  
    const ChekedIndiaclick=()=>{
      setChekindia(!chekindia) 
      if (chekindia === true) {
        // Show the btnClose element
        indiaClose('none');
      } else {
        // Hide the btnClose element
        indiaClose('block');
      }
     
    }


    const [size1,setSize1]=useState(false)

    const changeSize=()=>{
    
    setSize1(!size1)
    }
 

  

  
  
   


  return (
    <div>
        <div  style={{}}>
          <button className='Bundle' onClick={Downclick}  >Bundles {downArrow ? a : b}
         
         </button>
          <button className='Country' onClick={viewDivShow} >Country Of Origin {CouArrow ? a : b}
          </button>
          <button className='Size' onClick={changeSize} >Size {sizeArrow ? a : b}
          </button>
        </div>
        <div >
          <div className='BundleCheckDiv' style={{display: viewDiv ? 'none':'block'}}>
          <input className='inpBundle1' type='checkbox' onClick={Chekedclick} checked={cheked ?true :false} /><label className='inpLable'>Bundle</label>
         <input className='inpBundle' type='checkbox' onClick={ChekedSigleclick} checked={chekSingle ?true :false} /><label className='inpLable'>Single Style</label>
          </div>
          <div className='BundleCheckDiv1' style={{display: viewDiv1 ? 'block':'none'}}>
          <input className='inpBundle1' type='checkbox' onClick={ChekedAllclick} checked={chekall ?true :false} /><label className='inpLable'>All Countries</label>
         <input className='inpBundle' type='checkbox' onClick={ChekedIndiaclick} checked={chekindia ?true :false} /><label className='inpLable'>India</label>
        
          
          
          
 </div>
 <div>
 <div >

  
<button className='bundClose' style={{float:'left', display:btnclose?'block':'none'}}>Bundle <span onClick={btnClose} ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></span></button>

<button className='bundClose' style={{ float:'left',  display:singleclose?'block':'none'}}>Single Style <span onClick={singleClose} ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></span></button>
<button className='bundClose' style={{ float:'left',  display:chekall?'block':'none'}}>All Countries <span onClick={ChekedAllclick} ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></span></button>

<button className='bundClose' style={{ float:'left',  display:indiaclose?'block':'none'}}>India <span onClick={indiaClose} ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></span></button>

</div>
 </div>

      <br />
          <br />
         
        
        
          <div  style={{   display:size1 ?'block':'none'}}>
         <div style={{width:'14.28%', float:'left'}} >

          {
            FirstArr.map((item)=>(
           <div style={{display:'flex', marginTop:'-22px'}}>
          <input style={{marginLeft:'10%'}} className='inpBundle' type='checkbox'/><p className='SizeLable'>{item}</p>
          </div>
            ))
          }
          </div>
          <div style={{width:'14.28%',float:'left'}} >

          {
            FirstArr.map((item)=>(
           <div style={{display:'flex', marginTop:'-22px'}}>
          <input style={{marginLeft:'10%'}} className='inpBundle' type='checkbox'/><p className='SizeLable'>{item}</p>
          </div>
            ))
          }
          </div>
          <div style={{width:'14.28%',float:'left'}} >

          {
            FirstArr.map((item)=>(
           <div style={{display:'flex', marginTop:'-22px'}}>
          <input style={{marginLeft:'10%'}} className='inpBundle' type='checkbox'/><p className='SizeLable'>{item}</p>
          </div>
            ))
          }
          </div>
          <div style={{width:'14.28%',float:'left'}} >

          {
            FirstArr.map((item)=>(
           <div style={{display:'flex', marginTop:'-22px'}}>
          <input style={{marginLeft:'10%'}} className='inpBundle' type='checkbox'/><p className='SizeLable'>{item}</p>
          </div>
            ))
          }
          </div>
          <div style={{width:'14.28%',float:'left'}} >

          {
            FirstArr.map((item)=>(
           <div style={{display:'flex', marginTop:'-22px'}}>
          <input style={{marginLeft:'10%'}} className='inpBundle' type='checkbox'/><p className='SizeLable'>{item}</p>
          </div>
            ))
          }
          </div>
          <div style={{width:'14.28%',float:'left'}} >

          {
            FirstArr.map((item)=>(
           <div style={{display:'flex', marginTop:'-22px'}}>
          <input style={{marginLeft:'10%'}} className='inpBundle' type='checkbox'/><p className='SizeLable'>{item}</p>
          </div>
            ))
          }
          </div>
          <div style={{width:'14.28%',float:'left'}} >

          {
            FirstArr.map((item)=>(
           <div style={{display:'flex', marginTop:'-22px'}}>
          <input style={{marginLeft:'10%'}} className='inpBundle' type='checkbox'/><p className='SizeLable'>{item}</p>
          </div>
            ))
          }
          </div>


        
          </div>

          
        
        </div>
{/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* MAIN----------------------MAIN----------------------MAIN----------------------MAIN----------------------MAIN------------- */}

<div>
<PList></PList>

</div>


      
    </div>
  )
}

export default PLTop
