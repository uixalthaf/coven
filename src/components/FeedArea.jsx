import React from 'react'
import PostInput from '../components/PostInput'
import PostCard from '../components/PostCard'

function FeedArea() {
  return (
    <div className='post-container mr-4'>
    <PostInput/>
    <div className="flex flex-col gap-2 mt-6">
    <PostCard 
    post_writer="Hayley"
    message="It was really a bad day guys.Something terrible happened.My Bird passed away i was so attached to it.
        RIP"
    time_posted="Today"
    post_image="https://i.pinimg.com/736x/bb/7b/a8/bb7ba8089578229cefe5893a9eaa870b.jpg"/>
    <PostCard 
    post_writer="Stephan"
    message="What a wonderful day! I finally got the job I’ve been dreaming about. All the hard work paid off, and I’m so grateful. Here’s to new beginnings and endless possibilities!"
    time_posted="Yesterday"
    post_image="https://i.pinimg.com/736x/11/13/02/11130200d254af8c23446762368d3614.jpg"/>
    <PostCard 
    post_writer="Rina"
    message="Today was heartbreaking. I lost my childhood friend, my dog. I can’t believe they’re gone. It feels like a part of me is missing. Rest in peace, my loyal companion."
    time_posted="Yesterday"
    post_image="https://i.pinimg.com/736x/6b/92/45/6b9245f2ec4c80da9fb6fd3346f683d0.jpg"/>
         <PostCard 
    post_writer="Rina"
    message="Today was heartbreaking. I lost my childhood friend, my dog. I can’t believe they’re gone. It feels like a part of me is missing. Rest in peace, my loyal companion."
    time_posted="Yesterday"
    post_image="https://i.pinimg.com/736x/4e/2f/d8/4e2fd82bd149b180fe80fdf196660694.jpg"/>
              <PostCard 
    post_writer="Rina"
    message="Today was heartbreaking. I lost my childhood friend, my dog. I can’t believe they’re gone. It feels like a part of me is missing. Rest in peace, my loyal companion."
    time_posted="Yesterday"
    post_image="https://i.pinimg.com/736x/4e/2f/d8/4e2fd82bd149b180fe80fdf196660694.jpg"/>
              <PostCard 
    post_writer="Rina"
    message="Today was heartbreaking. I lost my childhood friend, my dog. I can’t believe they’re gone. It feels like a part of me is missing. Rest in peace, my loyal companion."
    time_posted="Yesterday"
    post_image="https://i.pinimg.com/736x/4e/2f/d8/4e2fd82bd149b180fe80fdf196660694.jpg"/>
              <PostCard 
    post_writer="Rina"
    message="Today was heartbreaking. I lost my childhood friend, my dog. I can’t believe they’re gone. It feels like a part of me is missing. Rest in peace, my loyal companion."
    time_posted="Yesterday"
    post_image="https://i.pinimg.com/736x/4e/2f/d8/4e2fd82bd149b180fe80fdf196660694.jpg"/>
              <PostCard 
    post_writer="Rina"
    message="Today was heartbreaking. I lost my childhood friend, my dog. I can’t believe they’re gone. It feels like a part of me is missing. Rest in peace, my loyal companion."
    time_posted="Yesterday"
    post_image="https://i.pinimg.com/736x/4e/2f/d8/4e2fd82bd149b180fe80fdf196660694.jpg"/>
              <PostCard 
    post_writer="Rina"
    message="Today was heartbreaking. I lost my childhood friend, my dog. I can’t believe they’re gone. It feels like a part of me is missing. Rest in peace, my loyal companion."
    time_posted="Yesterday"
    post_image="https://i.pinimg.com/736x/4e/2f/d8/4e2fd82bd149b180fe80fdf196660694.jpg"/>
    </div>
</div>
  )
}

export default FeedArea