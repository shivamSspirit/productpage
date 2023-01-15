import React from 'react'
import FilterSider from '../filtersider/filtersider'
import Imgsider from '../Imgsider/Imgsider'

import './sidebar.css'


function Sidebar() {
  return (
    <div className='sidebar-container'>
      <Imgsider/>
      <FilterSider/>
    </div>
  )
}

export default Sidebar
