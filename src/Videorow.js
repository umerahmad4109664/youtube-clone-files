import React from 'react'
import './Videorow.css'

function Videorow({views,subs,description,timestamp,channel,title,image,}) {
  return (
    <div className='videorow'>
        <img src={image} alt="" />
        <div className="videorow-text">
            <h3>{title}</h3>
            <p className='headline'>
                {channel} . <span className='subs'>{subs}</span> Subscribers {views} Views . {timestamp}
            </p>
            <p className='description'>
                {description}
            </p>
        </div>
      
    </div>
  )
}

export default Videorow
