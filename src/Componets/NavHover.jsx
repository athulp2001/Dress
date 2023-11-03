import React, { useState } from 'react'
import './NavHover.css'
import { hover } from '@testing-library/user-event/dist/hover'


const NavHover = (props) => {
    const itemName1=["T-Shirts","Casual Shirts","Formal Shirts","Sweatshirts","Sweaters","Jackets","Blazers & Coats","Suits","Rain Jackets"]
    const itemName2=["Kurtas & Kurta Sets","Sherwanis","Nehru Jackets","Dhotis"]
  
    const itemName3=["Jeans","Casual Trousers","Formal Trousers","Shorts","Track Pants & Joggers"]
    const itemName4=["Briefs&Trunks","Boxers","Vests","Sleepwear&Loungewea","Thermals"]
  
    const itemName5=["Casual Shoes","Sports Shoes","Formal Shoes","Sneakers","Sandals&Floaters","Flip Flops","Socks"]
  






  return (
    <div  >
 {/* ----------------------1Div--------------------------------------------- */}
    <div className='MainListDiv' style={{marginLeft:props.margi}}  >


<div style={{display:'flex', backgroundColor:'red'}}>
    
<div className='DivOdd' style={{display:'block'}}>
        <h6 className='itemHeading' style={{color:props.color}} >Topwear</h6>
        {
      itemName1.map((Name)=>{
               return <p key={Name} className='itemP'>{Name}</p>
            })  
        }
         <h6 className='itemHeading' style={{color:props.color}} >Indian&Festive Wear</h6>
        {
           itemName2.map((Name)=>{
               return <p key={Name} className='itemP'>{Name}</p>
            })  
        }
        
    </div>
    {/* ----------------------222222222222Div--------------------------------------------- */}
    <div className='DivEven'>
    <h6 className='itemHeading' style={{color:props.color}}>Bottomwear</h6>
        {
       itemName3.map((Name)=>{
               return <p key={Name} className='itemP'>{Name}</p>
            })  
        }
        
         <h6 className='itemHeading' style={{color:props.color}} >Innerwear&Sleepwear</h6>
        {
          itemName4.map((Name)=>{
               return <p key={Name} className='itemP'>{Name}</p>
            })  
        }
        <h6 className='itemHeading' style={{color:props.color}} >Plus Size</h6>
        
     
    </div>
    {/* ----------------------333333Div--------------------------------------------- */}
    <div className='DivOdd'>
    <h6 className='itemHeading' style={{color:props.color}} >Footwear</h6>
        {
         itemName5.map((Name)=>{
               return <p key={Name} className='itemP'>{Name}</p>
            })  
        }
         <h6 className='itemHeading' style={{color:props.color}}>Personal Care & Grooming</h6>
        <h6 className='itemHeading' style={{color:props.color}}>Sunglasses&Frames</h6>
        <h6 className='itemHeading' style={{color:props.color}}>Watches</h6>
    </div>
   
    {/* ----------------------444444Div--------------------------------------------- */}
    <div className='DivEven'>
    <h6 className='itemHeading'style={{color:props.color}} >Topwear</h6>
        {
          itemName1.map((Name)=>{
               return <p key={Name} className='itemP'>{Name}</p>
            })  
        }
         <h6 className='itemHeading'style={{color:props.color}} >Indian&Festive Wear</h6>
        {
         itemName2.map((Name)=>{
               return <p key={Name} className='itemP'>{Name}</p>
            })  
        }
        
    </div>
    {/* ----------------------5555555555Div--------------------------------------------- */}
    <div className='DivOdd'>
    <h6 className='itemHeading'style={{color:props.color}} >Bottomwear</h6>
    {
          itemName3.map((Name)=>{
               return <p key={Name} className='itemP'>{Name}</p>
            })  
        }
         <h6 className='itemHeading' style={{color:props.color}}>Innerwear&Sleepwear</h6>
        {
         itemName4.map((Name)=>{
               return <p key={Name} className='itemP'>{Name}</p>
            })  
        }
        <h6 className='itemHeading' style={{color:props.color}}>Plus Size</h6>
    </div>

</div>
    

       



   
    </div>

    
    </div>
  )
}

export default NavHover;
