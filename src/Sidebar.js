import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
function Sidebar() {

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1683009427619-a1a11b799e05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <Avatar className="sidebar__avatar"/>
        <h2>User display name</h2>
        <h4>user email</h4>

      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
            
        </div>
    </div>
  )
}

export default Sidebar
