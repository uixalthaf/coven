import React from 'react'
import PostInput from '../components/PostInput'
import PostCard from '../components/PostCard'
import postCardData from './postCardData'
function FeedArea(props) {
  return (
    <div className='post-container mr-4'>
     
    <PostInput user_name={props.user_name}/>
    <div className="flex flex-col gap-2 mt-6">
       {postCardData.map((entry)=>(
        <PostCard
        post_writer={entry.post_writer}
        message={entry.message}
        time_posted={entry.time_posted}
        post_image={entry.post_image}
        user_name={props.user_name}
        />
      ))}
    </div>
</div>
  )
}

export default FeedArea