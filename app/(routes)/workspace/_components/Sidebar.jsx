"use client"
import { WorkspacemMenu } from '@/services/Options'
import { CirclePlus } from 'lucide-react'
import { usePathname } from 'next/navigation';
import React from 'react'

function Sidebar() {



  const path = usePathname();
  console.log(path)

  return (
    <div className='h-screen  shadow-sm p-2 bg-pink-50'>


      <div className=' p-2 flex items-center flex-col hover:cursor-pointer mb-5'>
        <CirclePlus className='bg-purple-600 text-white rounded-full h-8 w-8' />
        <h2 className='text-sm text-purple-600 '> Create</h2> 
      </div>



      {WorkspacemMenu.map((menu,index)=>(
        <div key={index} className={`p-2 flex items-center flex-col mb-4
       group hover:bg-pink-100 rounded-xl cursor-pointer
       ${menu.path == path &&  'bg-pink-100'}
       `}>
          <menu.icon className= {`group-hover:text-purple-800 ${menu.path == path &&  'bg-pink-100'} `}/>
          <h2 className={`text-sm group-hover:text-purple-800 ${menu.path == path &&  'bg-pink-100'} `} >{menu.name}</h2>
          </div>
      ))}
    </div>
  )
}

export default Sidebar
