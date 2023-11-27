import Product from '@/models/Product'
import React from 'react'


const Oredrs = ({ cart, addtoCart, removeFromCart, clearCart, subTotal }) => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden ">
        <div className="container px-5 py-16 mx-auto ">
          <div className="lg:w-[80%] mx-auto  flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">KEYSWARE.COM</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 py-4">HAPPY SHOPING</h1>
              <p className="leading-relaxed mb-4">Your item details visit and buy </p>
              <div className="flex mb-4 text-center ">
                <div className="flex-grow text-purple-700  border-purple-700 py-2 text-lg px-1">item-Description</div>
                {/* <a className="flex-grow  border-gray-300 py-2 text-lg px-1 ">color</a> */}
                {/* <a className="flex-grow  border-gray-300 py-2 text-lg px-1 ">quantiy</a> */}
              </div>
              {/* {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className='item flex my-5'>
                <div className='w-2/3 font-semibold '>{cart[k].name} ({cart[k].size})/({cart[k].variant}) </div>
                <div className='flex font-semibold items-center justify-center w-1/3 text-lg '> <AiFillMinusCircle className='cursor-pointer text-purple-700' onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} /> <span className='mx-2 text-sm'>{cart[k].qty}</span> <AiFillPlusCircle className='cursor-pointer text-purple-700' onClick={() => { addtoCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} /></div>
              </div>


            </li>
          })} */}
          {Object.keys(cart).length == 0 && <div className='my-4 font-semibold text-center'>You have no items to buy</div>}

             {Object.keys(cart).map((k) =>{
              return  <div key= {k}>
               <div className="flex border-b  border-gray-200 py-2">
              <span className="text-gray-500 ">{cart[k].name}</span>
              <span className="ml-auto text-gray-900">{cart[k].size} </span>
              <span className="ml-auto text-gray-900">{cart[k].variant}</span>
            </div> 
            </div>
            })}
             
            
              <div className="flex py-4">
                <span className="title-font font-medium text-2xl text-gray-900"> Subtotal:{subTotal}روپے</span>
                <button className="flex ml-auto text-white bg-purple-700 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-purple-600 rounded">Track Order</button>

              </div>
            </div>
            <img alt="ecommerce" className="lg:w-[33%] w-full lg:h-auto h-60 ml-44 object-cover object-center rounded" src="https://m.media-amazon.com/images/I/61oq5wSXfWL._AC_UL400_.jpg" />
          </div>
        </div>
      </section>
    </div>
  )
}


export default Oredrs
