import React ,{useState} from 'react'
import {FaPlus} from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid';
import { BsSun,BsMoon } from "react-icons/bs";





function Sidebar({setSitebar,itemList,updateItem,isDark,updateTheme}) {
    
    const [savedList,updateList]=useState([])


    function updateSidebar(){
        setSitebar(state=>{
            return !state
        })
    }
    function saveList(){
        if(itemList.length==0 || savedList.length==5)return
        updateList(prevlist=>{
            return[...prevlist,{id:uuidv4(),name:"list"+(savedList.length+1),data:itemList}]
        })
        
        updateItem([])
        

    }
    function changeTheme(){
        updateTheme(!isDark)
    }



  return (
    
    <div className='sidebar-cont'>
        <div className="sidebar-header" >
            <button className='theme-btn'onClick={changeTheme}>
                {isDark? <BsSun color="white" size="30px"/>:<BsMoon color="black" size="30px"/>}

            </button>
            <button className='sidebar-button' onClick={updateSidebar}>
                <FaPlus size="30px" color={isDark? "white":"black"}/>
            </button>
        </div>
        <div className='saved-list'>
            <div className='saved-list-header'>Saved List</div>
        {savedList.map(item=>{
            return (
                 <div className='saved-list-item' key={item.id}>
                     {item.name}

                </div>)
        })}
        </div>
        <button className='save-button' onClick={saveList}>Save Current List</button>
    </div>
    
  )
}

export default Sidebar