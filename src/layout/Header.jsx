import { Link } from "react-router-dom";

import headerlogo from '../assets/shared/logo.svg'
const Header = () => {
  return (
    <div className="flex mt-8 pt-8 text-white ">

      <div className='flex w-2/5 items-center ml-12' >
        <img src={headerlogo} alt='' />
        <hr className='w-[90%] ml-12 opacity-20' />


      </div>
      <div className='h-24 w-3/5 gap-12 flex items-center justify-center text-white opacity-50 bg-gray-700'>
        <Link href to="/home" className="hover:bg-gray-700 hover:text-white px-3 py-2 text-lg font-serif">00 HOME</Link>
        <Link href to="/destination" className="hover:bg-gray-700 hover:text-white px-3 py-2 text-lg font-serif">01 DESTINATION</Link>
        <Link href to="/crew" className=" hover:bg-gray-700 hover:text-white  px-3 py-2 text-lg font-serif">02 CREW</Link>
        <Link href to="/technology" className=" hover:bg-gray-700 hover:text-white px-3 py-2 text-lg font-serif">03 TECHNOLOGY</Link>
      </div>

    </div>


  )
}

export default Header