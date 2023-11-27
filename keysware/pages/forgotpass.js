import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

const forgotpass = () => {

  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/')
    }
  })
  return (
    <div>

      <div className="flex min-h-full flex-col justify-center px-6 py-12 md:py-24 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src="/favicon.ico" alt="" className='w-10 h-10 text-white p-2 bg-purple-700 rounded-full m-auto' />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot Password </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" />
              </div>
            </div>


            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-purple-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">continue</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500 md:mb-20">
            Change your password

          </p>
        </div>
      </div>

    </div>
  )
}

export default forgotpass
