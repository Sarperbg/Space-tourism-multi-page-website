import React from 'react'
import DestinationMars from '../assets/destination/image-mars.png'
import { Link } from 'react-router-dom'
const DestinationComp = () => {
  return (
    <div className='flex w-full m-2 p-2 mt-24 gap-4  border-2'>

    <div className='flex justify-center items-center flex-col w-1/2 border-2'>
        <h3 className='text-3xl text-white font-serif tracking-wide'>01 PICK YOUR DESTINATION</h3>
        <img src={DestinationMars} className='w-[440px] mt-16' alt='' />
    </div>

    <div className='flex w-1/2 border-2'>
    <div className='flex justify-start m-8 gap-8 w-full h-fit text-white border-2'>
        <Link href to="/MOON" className="hover:bg-gray-700 hover:text-white px-3 py-2 text-xl font-serif">MOON</Link>
        <Link href to="/MARS" className="hover:bg-gray-700 hover:text-white px-3 py-2 text-xl font-serif">MARS</Link>
        <Link href to="/EUROPA" className=" hover:bg-gray-700 hover:text-white  px-3 py-2 text-xl font-serif">EUROPA</Link>
        <Link href to="/TITAN" className=" hover:bg-gray-700 hover:text-white px-3 py-2 text-xl font-serif">TITAN</Link>
      </div>
    </div>

    </div>
  )
}

export default DestinationComp