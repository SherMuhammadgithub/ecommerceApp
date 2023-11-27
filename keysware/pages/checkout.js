import React from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiFillCheckSquare } from 'react-icons/ai';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

const Checkout = ({ cart, addtoCart, removeFromCart, clearCart, subTotal }) => {
  return (
    <div>
    <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/></Head>
    <Script type="application/javascript" src={`${process.env.PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.PAYTM_MID}.js`} onload="onScriptLoad();" crossorigin="anonymous"/>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-10 md:py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-purple-700">Checkout</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We are providing here delivery details!</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                  <input type="number" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="city" className="leading-7 text-sm text-gray-600">City</label>
                  <input type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="state" className="leading-7 text-sm text-gray-600">State</label>
                  <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                  <input type="number" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="address" className="leading-7 text-sm text-gray-600">Address</label>
                  <textarea id="text" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-12 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full font-semibold text-xl ">
                {/* <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button> */}
                Your Cart status
              </div>


              {/* Here is the masala */}
              <div className="cartbar    p-2 w-full m-2">

                <ol className='list-decimal mx-2'>
                  {Object.keys(cart).length == 0 && <div className='my-2  font-semibold'>No items in the cart</div>}
                  {Object.keys(cart).map((k) => {
                    return <li key={k}>
                      {/* <div className='item flex my-2 '>
                        <div className=' font-semibold  text-center  '>{cart[k].name}({cart[k].size})/({cart[k].variant})</div> */}
                        
                       
                        {/* </div> */}

                        <div className='  item flex my-5'>
            <div className=' w-40 font-semibold '>{cart[k].name} ({cart[k].size})/({cart[k].variant}) </div>
            <div className='flex font-semibold items-center justify-center w-1/3 text-lg '> <AiFillMinusCircle className='cursor-pointer text-purple-700' onClick={()=>{removeFromCart(k , 1 , cart[k].price , cart[k].name , cart[k].size , cart[k].variant )}}/>   <span className='mx-2 text-sm'>{cart[k].qty} { cart[k].qty   === 1 && <span>item</span>} { cart[k].qty != 1 && <span>items</span>} </span>
                       <AiFillPlusCircle className='cursor-pointer text-purple-700' onClick={()=>{addtoCart(k , 1 , cart[k].price , cart[k].name , cart[k].size , cart[k].variant )}}/></div>
            </div>
                    
                    </li>
                  })}
                  <span className='font-semibold mb-2 '>Subtotal : {subTotal}روپے</span>




                </ol>
                <div className="flex m-2">
                  {/* <Link href={'/checkout'}><button className="flex  mr-2 text-white bg-purple-700 border-0 py-2 px-2   text-center focus:outline-none hover:bg-purple-600 rounded text-sm"> Checkout</button></Link>  
<button onClick={clearCart} className="flex  mr-2 text-white bg-purple-700 border-0 py-2 px-2 text-center focus:outline-none hover:bg-purple-600 rounded text-sm"> Clear carts</button> */}
                  <div className=" mt-2">
                    <Link href={'/oredrs'}>
                      <button className="flex   text-white bg-purple-700 border-0 py-2 px-6   text-center focus:outline-none hover:bg-purple-600 rounded text-sm">Pay Now</button>
                    </Link>
                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Checkout
