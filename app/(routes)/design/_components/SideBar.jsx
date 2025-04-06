import { sideBarMenu } from '@/services/Options'
import React from 'react'

function SideBar() {
  return (
    <div  className='p-2 w-[120px] border-r h-screen pt-2'>
      {sideBarMenu.map((menu,index)=>(
    <div key={index} className='p-2 mb-2 flex flex-col 
    items-center hover:bg-secondary cursoer-pointer    '>
            <menu.icon />
            <h2 className='mt-1'>{menu.name}</h2>
          
    </div>
        
    ))}
    </div>
  )
}

export default SideBar
