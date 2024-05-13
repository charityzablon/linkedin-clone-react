import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@material-ui/core';

function Sidebar() {
  // const recentItem = (topic) => (
  //   <div className='sidebar__recentItem'>
  //     <span className='sidebar__hash'># </span>
  //     <p> (topic)</p>

  //   </div>
  // );
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#
        </span>
    <p>
      {topic}
    </p>
    </div>

  );
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src='https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''></img>
         <Avatar className='sidebar__avatar'/>
        <h2>Charity Zablon</h2>
        <h4>charityzablon@gmail.com</h4>
     </div>
   
        <div className="sidebar__stats">
          <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className='sidebar__statNumber'> 2,453</p>

          </div>
        <div className="sidebar__stat">
        <p>Views on Posts</p>
        <p className='sidebar__statNumber'> 9,343</p>
          
        </div>

        </div>
        <div className="sidebar__bottom">

          <p>Recent</p>
          {recentItem('reactjs')}
          {recentItem('programming')}
          {recentItem('software engineering')}
          {recentItem('softare design')}
          {recentItem('developer')}

        </div>
     
      
    
     

    </div>

  )
}

export default Sidebar;