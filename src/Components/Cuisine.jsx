import React from 'react'

const Cuisine = () => {
  return (
    <div className='flex justify-start items-center m-4 py-10 gap-5 overflow-auto scroll-m-4  '>
        <div className='flex justify-center items-center text-center bg-orange-100 border-1 hover:shadow-md hover:bg-orange-400 rounded-full mx-3 p-2'>
            <div className='mx-2 p-2 border rounded-full'>img</div>
            <div className='mx-2 '>name</div>
        </div>
        
    </div>
  )
}

export default Cuisine