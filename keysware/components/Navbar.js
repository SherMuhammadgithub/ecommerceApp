import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiFillCheckSquare } from 'react-icons/ai';
// import Sidebar from './Sidebar';
// import Sidebar from './Sidebar';
import { MdAccountCircle } from 'react-icons/md';
import { useDarkMode } from '@/pages/Darkmode';
const Navbar = ({ logout, user, cart, addtoCart, removeFromCart, clearCart, subTotal }) => {
  const [dropdown, setDropdown] = useState(false)
  
  const { darkMode, toggleDarkMode } = useDarkMode();



  const togglecart = () => {


    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')


    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')


    }
  }

  const ref = useRef()
  return (
    <div className={`flex flex-col md:flex-row p-8 md:justify-start justify-center items-center bg- ${darkMode ? 'bg-gray-800 , text-white' : 'bg-white , text-purple-600'}  shadow-lg sticky top-0 z-10`}>
      <div className="logo mr-auto  md:mx-5 mb-2 md:mb-0">

        <Link href={'/'}>  <span className=" text-xl font-extrabold">KEYSWARE</span> </Link>
      </div>
      <div className="nav">
        <ul className={`flex items-center justify-center space-x-6 font-bold ${darkMode ? 'text-white ': 'text-black'}`} >
          <Link href={'/tshirts'}> <div className='hover:text-purple-700'>Tshirts</div></Link>
          <Link href={'/hoodies'}> <div className='hover:text-purple-700'>Hoodies</div></Link>
          <Link href={'/mugs'}> <div className='hover:text-purple-700'>Mugs</div></Link>
          <Link href={'/stickers'}> <div className='hover:text-purple-700'>Stickers</div></Link>


        </ul>
      </div>
      {user.value && <div className={`cart  absolute right-3  top-8 md:top-9 space-x-5 mx-5 flex items-center  ${darkMode ? 'text-white ': 'text-purple-700'}`} >
        {/* harry a usre.value ha  */}
        <button
        className={`px-3 py-1 rounded ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
        
        <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} >
          {dropdown && <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className=' absolute top-6 right-12 bg-white shadow-2xl font-bold rounded-md px-5 w-36 py-4'>
            <ul>
              <Link href={'/myaccount'}> <div > <li className='py-1 text-black hover:text-purple-700 text-sm cursor-pointer'>My Account</li></div> </Link>
              <Link href={'/order'}> <div > <li className='py-1 text-black hover:text-purple-700 text-sm cursor-pointer'>Orders</li></div> </Link>
              <li onClick={logout} className='py-1 text-black hover:text-purple-700 text-sm cursor-pointer'>Logout</li>
            </ul>
          </div>}
          <MdAccountCircle className='italic  font-bold text-xl   md:text-2xl  mx-1 ' />
        </div>
        <button onClick={togglecart} className='italic font-bold text-xl md:text-2xl  '><AiOutlineShoppingCart />  </button>
      </div>}

      {!user.value && <div className= {`cart  absolute right-3  top-9 space-x-5 mx-5 flex items-center  ${darkMode ? 'text-white ': 'text-purple-700'}`} >
  
        <button
        className={`px-3 py-1 rounded ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
        <Link href={'/login'}>
          <button className="inline-flex text-white bg-purple-700 border-0 p-2
 px-4   focus:outline-none hover:bg-purple-600 rounded-md text-sm md:text-base">Login</button>

        </Link>
        <button onClick={togglecart} className='italic  font-bold text-xl md:text-2xl  '><AiOutlineShoppingCart />  </button>
      </div>}



      <div ref={ref} className={`cartbar overflow-hidden overflow-y-scroll z-10 w-72 h-screen fixed top-0 right-0 bg-purple-300 p-10 transform transition-transform  ${Object.keys(cart).length !== 0 ? ' translate-x-0' : ' translate-x-full'}     `}>

        <h2 className='font-bold text-xl text-center'>Shopping cart</h2>

        <span onClick={togglecart} className="absolute top-5 right-2 cursor-pointer text-2xl text-purple-700"> <AiFillCloseCircle /> </span>
        <ol className='list-decimal'>

          {Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>No items in the cart</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className='item flex my-5'>
                <div className='w-2/3 font-semibold '>{cart[k].name} ({cart[k].size})/({cart[k].variant})</div>
                <div className='flex font-semibold items-center justify-center w-1/3 text-lg '> <AiFillMinusCircle className='cursor-pointer text-purple-700' onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} /> <span className='mx-2 text-sm'>{cart[k].qty}</span> <AiFillPlusCircle className='cursor-pointer text-purple-700' onClick={() => { addtoCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} /></div>
              </div>


            </li>
          })}




        </ol>
        <div className='font-semibold mb-6  '>Subtotal : {subTotal}</div>
        <div className="flex m-2">
          <Link href={'/checkout'}><button className="flex  mr-2 text-white bg-purple-700 border-0 py-2 px-2   text-center focus:outline-none hover:bg-purple-600 rounded text-sm"> Checkout</button></Link>
          <button onClick={clearCart} className="flex  mr-2 text-white bg-purple-700 border-0 py-2 px-2 text-center focus:outline-none hover:bg-purple-600 rounded text-sm"> Clear carts</button>
        </div>

      </div>


    </div>



  )
}

export default Navbar
