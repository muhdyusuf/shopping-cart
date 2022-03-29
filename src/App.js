import React, { useState,useRef,useEffect} from "react";
import Header from "./component/Header";
import Itemlist from "./component/Itemlist";
import Total from "./component/Total";
import { v4 as uuidv4 } from 'uuid';




function App() {
  const [itemList,updateItem]=useState([])
  const itemNameVal=useRef()
  const itemPriceVal=useRef()

  const LOCAL_STORAGE_KEY="APA.APA"

  useEffect(()=>{
    const storedList=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedList) updateItem(storedList)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(itemList))
  },[itemList])



  function updateQuantity(id,operation){
    let newItemList=[...itemList]
    newItemList.map(item=>{
      if(item.id==id){
        if(operation=="plus"){
          item.quantity+=1
        }
        else{
          item.quantity-=1
        }
      }

    })
    


    newItemList=newItemList.filter(item=> item.quantity >0)
    updateItem(newItemList)


  }

  function addList(e){
  
    const itemName=itemNameVal.current.value
    const itemPrice= parseFloat(itemPriceVal.current.value)
   

    if( !itemName || !itemPrice) return

    updateItem(prevItem=>{
      console.log(prevItem)
      return [...prevItem,
        {id:uuidv4(),name:itemName,price:itemPrice,quantity:1,isRemoved:false}]
    })
    
    itemNameVal.current.value=null
    itemPriceVal.current.value=null
  }
  
 



  return (

    <div className="app-body">

      <Header itemList={itemList} updateItem={updateItem}/>
      <div className="item-container">
       <div className="item-list-header">
         <p>Item</p>
         <p>Price</p>
         <p>Quantity</p>
       </div>
       <div className="item-list">
          <Itemlist itemList={itemList} updateQuantity={updateQuantity}/>
       </div>
     
      </div>
      <Total total={itemList} />
      <div className="input-cont">
        <input type="text" placeholder="Enter item Name"ref={itemNameVal}/>
        <input type="text" placeholder="Enter Price" ref={itemPriceVal}/>
        <button onClick={addList}>Add</button>
      </div>
     
      

    
    </div>
  );
}


export default App ;
