import React from 'react'
import "./header.css"
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'

function header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large"/>
      </IconButton>
      
      <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder-logo" />
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large"/>
      </IconButton>
      
    </div>
    
  )
}

export default header