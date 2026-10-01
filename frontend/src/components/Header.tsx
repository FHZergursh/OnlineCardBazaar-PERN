import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='bg-gray-600 flex h-[6vh] justify-between items-center'>
        <div className='pl-5'>
          <h1 className='text-2xl'>Online Card Bazaar</h1>
        </div>
        <div className='mr-[10%] flex gap-2'>
          <div>Search</div>
          <div>Marketplace</div>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='border-white border-2 p-1'>Icon</div>
          <div className='text-sm'>Username...</div>
        </div>
      </div>

      

    </div>
  )
}

export default Header