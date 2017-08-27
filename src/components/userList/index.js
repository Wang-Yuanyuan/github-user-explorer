import React from 'react'
import './style.css'

import Button from '../button'


const UserList = props => (
  <li className="userListElement">
    <img className="userAvatar" src={props.avatar} />
    <div className="userInfo">
      <h3 className="userName">{props.name}</h3>
      <h4>{props.score}</h4>
    </div>
    <Button onClick={props.onClick}>Details</Button>
  </li>
)


export default UserList
