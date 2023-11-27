import Link from 'next/link'
import React from 'react'
import Product from "@/models/Product"
import mongoose from "mongoose";


const Stickers = ({ products }) => {
  // console.log(products[item].size);
  // this is next js ok

  return (

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-center flex-wrap -m-4">
          {Object.keys(products).length === 0 && <p>Sorry all the stickers are currently out of stock! New Stock is comming soon Sray tuned!</p> }
          {Object.keys(products).map((item) => {

            return <div key={products[item].title} className="lg:w-1/4 md:w-1/2 p-4  w-full m-2  cursor-pointer shadow-lg">
              <div className="block relative rounded overflow-hidden">
                <Link href={`/product/${products[item].slug}`}>   <img alt="ecommerce" className="h-[34vh] md:h-[36vh] mx-auto block" src={products[item].img} /> </Link>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                <div className="mt-1">{products[item].price}روپے</div>
                <div className='mt-1 mx-2 '>
                  {products[item].size.includes("S") && <span className='border mx-1 border-gray-300 px-1'>S</span>}
                  {products[item].size.includes("M") && <span className='border mx-1 border-gray-300 px-1'>M</span>}
                  {products[item].size.includes("XL") && <span className='border mx-1 border-gray-300 px-1'>XL</span>}
                  {products[item].size.includes("XXL") && <span className='border mx-1 border-gray-300 px-1'>XXL</span>}
                  {products[item].size.includes("XXAL") && <span className='border mx-1 border-gray-300 px-1'>XXAL</span>}
                  {/* {products[item].size} */}
                </div>

                <div className='mt-1 '>
                  {products[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes('green') && <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes('pink') && <button className="border-2 border-gray-300 ml-1 bg-pink-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes('orange') && <button className="border-2 border-gray-300 ml-1 bg-orange-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes('yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes('purple') && <button className="border-2 border-gray-300 ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>





  )
}

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect('mongodb://localhost:27017')

  }
  let products = await Product.find({ category: 'sticker' })
  let sticker = {}
  for (let item of products) {
    if (item.title in sticker) {
      if (!sticker[item.title].color.includes(item.color) && item.availbleQty > 0) {
        sticker[item.title].color.push(item.color)
      }
      if (!sticker[item.title].size.includes(item.size) && item.availbleQty > 0) {
        sticker[item.title].size.push(item.size)
      }

    }
    else {
      sticker[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availbleQty > 0) {
        sticker[item.title].color = [item.color]
        sticker[item.title].size = [item.size]
      }

    }
  }


  return {
    props: { products: JSON.parse(JSON.stringify(sticker)) },
  }
}

export default Stickers
