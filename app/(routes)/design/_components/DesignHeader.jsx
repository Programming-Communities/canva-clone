import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'

function DesignHeader({ GetDesignInfo }) {
  return (
    <div className='p-3 flex justify-between
    bg-gradient-to-r from-sky-500 via-blue-400 to-purple-600
    '>
      {/* <Image src={'/logo.svg'} alt='logo' width={50} height={40} /> */}
      <Image src="/logo.svg" alt="logo" width={50} height={40} priority />


      <input
        placeholder="Design Name"
        className="text-white border-none outline-none"
        value={GetDesignInfo?.name}
      />

      <UserButton />

    </div>
  )
}

export default DesignHeader
