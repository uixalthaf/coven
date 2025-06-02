import React from 'react'

function PostInput() {
  return (
    <div className='bg-blue-100 rounded-md p-4 banner-block'>
        <div className="flex gap-2 mb-1">
        <h4 className='text-xl'>Hey</h4><span className='text-xl'>Stephan ! </span>
        </div>
        <p className='mb-4 mt-4'>Do you wish to write something today?</p>
        <div className='h-40 bg-white rounded-md p-2'
        contentEditable="true">
            <p className='text-sm text-gray-500'>Write Your Thoughts Away :)</p>
            <svg xmlns="http://www.w3.org/2000/svg" 
            style={{top:"176px",
                left:"330px"}}
            className='absolute w-64' viewBox="0 0 1440 320"><path fill="#dbe9fe" fill-opacity="1" d="M0,0L60,48C120,96,240,192,360,234.7C480,277,600,267,720,224C840,181,960,107,1080,90.7C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className='p-2 relative flex gap-1 items-center top-20'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 svg-button">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 svg-button">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
</svg>


            </div>
        </div>

    </div>
  )
}

export default PostInput