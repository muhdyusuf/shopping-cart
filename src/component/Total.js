import  { useState,useRef } from "react";


function Total({total}) { 
  const itemTotal= total.reduce((total,item)=>{
      
      return total+(item.price*item.quantity)

    },0)

   
    return(
        <div className="total-container">
             <p >{itemTotal===0? "No item ":"Total "}</p> 
             <p>{itemTotal===0? "":"  RM "+itemTotal}</p>
        </div>
    )


        
  
 


 
}

export default Total