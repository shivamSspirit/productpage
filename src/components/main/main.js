import React from 'react'
import Cards from '../cards/cards'
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import './main.css'

function Main() {
  return (
    <div className='main-container'>
        <Header/>
        <div className='asides'>
        <Sidebar/>
        <Cards/>  
        </div> 
    </div>
  )
}

export default Main
