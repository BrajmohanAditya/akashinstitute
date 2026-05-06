import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const Navbar = () => {
  return (
    <div className='h-[12vh] w-full flex items-center justify-between px-9 shadow'>
        <h1>AAKASH ACADEMY</h1>
        <div>
            <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </div>
  )
}

export default Navbar