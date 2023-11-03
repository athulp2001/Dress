import React from 'react'
import Personal1 from './Personal1'
import Filters from './Filters';
import Categories from './Categories';
import Discount from './Discount';
import PLTop from './PLTop';

import Fotter from '../Men/Fotter'

const Beauty = () => {

    const lip=[{li:"Lipstick",nu:("10652")},{li:"Nail Polish",nu:"(9052)"},{li:"Perfume",nu:"(4869)"},{li:"Massage Oils",nu:"(3209)"},{li:"Skin Care Combo",nu:"(24298)"},{li:"Face Wash and Cleanser",nu:"(2319)"},{li:"Serum and Gel",nu:("1223")},{li:"Bindi",nu:("6753")}]
    const price=[{li:"Rs. 19 to Rs. 12490",nu:"(190710)"},{li:"Rs. 12490 to Rs. 24961",nu:"(95)"},{li:"Rs. 24961 to Rs. 37432" ,nu:"(10)"},{li:"Rs. 37432 to Rs. 49903" ,nu:"(9)"}]
    const color=[{li:"White",nu:"(10652)"},{li:"Pink",nu:"(6752)"},{li:"black",nu:"(7938)"},{li:"Multi",nu:"(7209)"},{li:"Brown",nu:"(2998)"},{li:"Red",nu:"(2319)"},{li:"Blue",nu:"(1223)"}]
  return (
    <div>
         <div style={{paddingTop:'100px'}}></div>
         <Personal1></Personal1>
{/* ------------------------------------------------------------- */}
         <div style={{display:'flex', width:'96%', marginLeft:'2%'}}>

         <div style={{width:"20%", border:'solid', borderLeft:'none', borderTop:'none', borderBottom:'none', borderWidth:"2px", borderColor:"rgb(237, 237, 237)"}}>
         <Filters></Filters>
         <Categories lip={lip} catH6={"CATEGORIES"}  more={"+ 173 more"} mLC={'-91px'}></Categories>
         <Categories lip={lip} catH6={"BRAND"}  more={"+ 1504 more" } mLC={'-53px'}></Categories>
         <Categories lip={price} catH6={"PRICE"}  mLC={'-41px'}></Categories>
         <Categories lip={color} catH6={"COLOR"}  more={"+ 39 more" } mLC={'-51px'}></Categories>
        <Discount></Discount>
         </div>
{/* ----------------------------------------------------------------------------------- */}

         <div style={{width:"80%"}}>
         <PLTop></PLTop>

         </div>
        
{/* ---------------------------------------------------------------- */}
        
         </div>
<br />
<Fotter></Fotter>
    </div>
  )
}

export default Beauty;
