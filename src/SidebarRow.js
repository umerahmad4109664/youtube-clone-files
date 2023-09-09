import React from 'react'
import './SidebarRow.css'

function SidebarRow({selected,Icon,title}) {
  return (
    <div className={`sidebar-row ${selected && 'selected'}`}>
        <Icon className="sbr-icon  "/>
        <h2 className='sbr-title'>{title}</h2>
    </div>
  )
}

export default SidebarRow
