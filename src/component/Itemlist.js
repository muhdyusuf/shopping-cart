
import { FaMinus} from 'react-icons/fa'
import { FaPlus} from 'react-icons/fa'
import React from 'react'





function Itemlist({itemList,updateQuantity}) {



   function updateItemQuantity(id,operation){
   updateQuantity(id,operation)
  }

 

  return itemList.map(item=>{
    return (
      <div key={item.id} className="item">
      <p className='item-name'>{item.name}</p>
      <div className='item-price'>
        <p>{item.price}</p>
      </div>  
      <div className='quantity-cont'>
          <button onClick={()=>updateItemQuantity(item.id,"minus")}className="btn-plus"><FaMinus color='white' size="10px"/></button> 
         <div className='item-quantity'>
             <span>{item.quantity}</span>
         </div>
         
          <button onClick={()=>updateItemQuantity(item.id,"plus")} className="btn-minus"><FaPlus color='white' size="10px"/></button> 

        </div>
      </div>
       
    )
   
  })

}



export default Itemlist