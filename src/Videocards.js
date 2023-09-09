import { Avatar } from '@mui/material';
import React from 'react';
import './Videocards.css';

function Videocards({image, title, channel, views, timestamp, channelimage}) {
  return (
    <div className='videocard'>
        <img className='videothumbnail' src={image} alt="" />
        <div className="videocard-info">
            <Avatar className='videocard-avatar' alt={channel} src={channelimage}/>
            <div className="video-text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views}.{timestamp}</p>
            </div>
        </div>


    </div>
  )
}

export default Videocards
