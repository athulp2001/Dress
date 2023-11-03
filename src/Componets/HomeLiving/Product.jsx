import React from 'react'

const Product = () => {

   const prod1=["Furnishings & Bed Linen","Bed Sheets","Bedding Sets & Bed Covers","Blankets, Quilts & Dohars","Pillows & Pillow Covers","Cushions & Cushion Covers","Curtains","Mats & Dhurries","Carpets","Bath & Bed Linen","Towels & Towel Sets","Bath Robes","Bathroom Accessories","Shower Curtains","Bath Rugs","Home Décor","Pooja Essentials","Laptop Table","Ottomans","Artificial Flowers & Plants","Candles & Candle Holders","Clocks","Planters & Garden Accessories","Home Fragrances","Mirrors","Wall Art","Wall Décor","Wall Shelves","Showpieces & Vases","Lamps & Lighting","Floor Lamps","Table Lamps","Wall Lamp & String Lights","Bathroom Lights & Outdoor Lamps","Ceiling Lamps","Kitchen & Table","Dinnerware","Cups & Mugs","Water Bottles","Bakeware","Trays & Serveware","Bar & Drinkware","Cookware & Kitchen Tools","Kitchen Storage","Table Covers & Furnishings","Storage & Organisers","Organisers","Hooks & Holders"
]

  return (
    <div>
    
        
        
        {
       prod1.map((items)=>(
        <div style={{textAlign:'left'}}>
        <p style={{fontSize:'13px',lineHeight:'6px', }}> <a style={{textDecoration:"none" ,color:'black'}}  href="">{items}</a></p>
        </div>
    
    ))} 
        
        
      
    </div>
  )
}

export default Product
