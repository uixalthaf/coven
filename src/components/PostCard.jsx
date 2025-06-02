import { comment } from 'postcss';
import React, { useState,useRef } from 'react'

function PostCard(props) {
    const [commentBox,showCommentBox]=useState(false);
    const [cmtBxClr,setCmtBxClr]=useState("none")
    const [likeClr,setlikeClr]=useState("none")
    const [likeBrdClr,setlikeBrdClr]=useState("currentColor")
    const [comments,setComments]=useState([])
    const editorRef = useRef(null);
    const handleClick=()=>{
        showCommentBox((prev)=> !prev)
    }
    const likePost=()=>{
        setlikeClr("#F44336");
        setlikeBrdClr("#F44336")
    }
    const handleCmtBxKeyDown=(e)=>{
        if(e.key=="Enter"){
            e.preventDefault();
            const newComment=editorRef.current.innerText.trim();
            if(newComment!==''){
                setComments((prev)=>[...prev,newComment]);
                editorRef.current.innerText='';
            }

        }
    }
  return (
    <div className='bg-gray-100 rounded-md p-4'>
        <div className="card-header flex justify-between">
            <div className="flex">
                <div className="flex gap-1 items-center">
                <span className="text-blue-400">@ {props.post_writer}
                </span> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</div>

            </div>
            {props.time_posted}
        </div>
        <div className="card-body mt-2">
        <p>
            {props.message}
            <img className='h-64 w-54 rounded-md my-4' 
            src={props.post_image} alt="" />
        </p>
        </div>
        <div className="card-footer">
            <div className='flex gap-1 mt-4'>
            <svg
            onClick={likePost} 
            xmlns="http://www.w3.org/2000/svg" fill={likeClr} viewBox="0 0 24 24" stroke-width="1.5" stroke={likeBrdClr} class="size-5 svg-button">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill={cmtBxClr} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 svg-button"
onClick={handleClick}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 svg-button">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            </div>
            <div className='comments-box my-3 flex flex-col'>
   
            {
                comments.map((msg,index)=>(
                    <div key={index} className='py-1'>
                                 <span className="text-blue-400">@ Sebastian </span>{msg}

                    </div>
                ))
            }
            </div>
            <div className={`comment-input flex justify-between items-center h-14 bg-white rounded-md p-2 mt-2 ${commentBox? "": "hidden"}`} contentEditable="true"
            onKeyDown={handleCmtBxKeyDown}
            ref={editorRef}>
                <p className='text-sm text-gray-400'>Wish to write?</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 svg-button">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>

            </div>
        </div>
    </div>
  )
}

export default PostCard