import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import Sidebar from './Sidebar'

function Header({itemList,updateItem}) {
  const [sideBar,setSitebar]=useState(true)

  function showSidebar(){
    setSitebar(!sideBar)
  }
  
  

  

  

  return (
    <section className='header'>
      <div className='container'>
          <h1 className='header-title'>Counter App</h1>
        
        <div className='nav'>
          <button onClick={showSidebar} className="nav-button">
            <FaBars size="30px" color='white'/>
          </button>
          <div className={sideBar? "sidebar active":"sidebar"} >
            <Sidebar setSitebar={setSitebar} itemList={itemList} updateItem={
            updateItem}/>
          </div>
          </div>
      </div>

  
      
    </section>
    
  )
}

export default Header