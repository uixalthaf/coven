import React from 'react'
import PostInput from '../components/PostInput'
import PostCard from '../components/PostCard'
import FeedArea from '../components/FeedArea'
import SideBar from '../components/SideBar'
import RightBar from '../components/RightBar'
function HomePage() {
  return (
    <div className='flex'>
      <SideBar/>
      <FeedArea/>
      <RightBar/>
    </div>
  )
}

export default HomePage