import React from 'react'
import PostInput from '../components/PostInput'
import PostCard from '../components/PostCard'
import FeedArea from '../components/FeedArea'
import SideBar from '../components/SideBar'
import RightBar from '../components/RightBar'
function HomePage(props) {
  return (
    <div className='app flex'>
      <SideBar user_name={props.user_name?.userName}/>
     <FeedArea user_name={props.user_name?.userName} />
      <RightBar/>
    </div>
  )
}

export default HomePage