import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Sidebar = () => {
  return (
    <div className='border-2 border-white rounded absolute  w-60 bg-gray-700  left-10 top-10 bottom-10'>
      <div className='flex mx-5 my-5' >
      <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
         <AvatarFallback>CN</AvatarFallback>
     </Avatar>
     <h4 className='text-white my-auto mx-5 text-2xl'>Ahmad Raza</h4>


      </div>
     
    </div>
  )
}

export default Sidebar
