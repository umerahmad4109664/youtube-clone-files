import React from 'react'
import './Channelrow.css'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';

function Channelrow({image,Channel,subs,noOfVideos,description,verified}) {
  return (
    <div className='channelrow'>
      <Avatar className='channelrow-logo' alt={Channel} src={image} />
      <div className="channelrow-text">
        <h4>{Channel}{verified && <VerifiedIcon/>}</h4>
        <p>{subs} subscribers . {noOfVideos} videos</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Channelrow
