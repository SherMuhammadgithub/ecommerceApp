import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {AiFillEye , AiFillEyeInvisible} from 'react-icons/ai';

const Login = () => {

  const router = useRouter()
  const [link , setLink] = useState(false)
const [eye , setEye] = useState('password')
  const [email, setEmail] = useState()
  const [password, setpassword] = useState()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/')
    }
  })
  const handleChange = (e) => {

    if (e.target.name == 'email') {
      setEmail(e.target.value)
    }

    else if (e.target.name == 'password') {
      setpassword(e.target.value)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { email, password }
    let res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)


    })
    console.log(data);
    let response = await res.json()
    console.log(response);
    if (response.success) {
      localStorage.setItem('token', response.token)
      toast.success('Your are successfuly logged in!', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push('/')

      }, 1000);


    }
    else {
      toast.error(response.error, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }


    setEmail('')
    setpassword('')

  }
  const change = ()=>{
   if(eye === 'password'){
    setEye('text')
    setLink(true)
   }
   else{
    setEye('password')
    setLink(false)
   }
  }
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="flex min-h-full flex-col justify-center px-6 py-12 md:py-24 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src="/favicon.ico" alt="" className='w-10 h-10 text-white p-2 bg-purple-700 rounded-full m-auto' />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" method="POST">
            <div>
              <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input onChange={handleChange} value={email} id="email" name="email" type="email" autocomplete="email" required className="block w-full  border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <Link href={'/forgotpass'} >  <div className="text-sm">
                  <div href="#" className="font-semibold text-purple-700 hover:text-purple-500">Forgot password?</div>
                </div> </Link>
              </div>
              <div className="mt-2 border-2 border-gray-300  flex items-center justify-center">
                <input onChange={handleChange} value={password} id="password" name="password" type={eye} autocomplete="current-password" required className="block w-full border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"  />
               {link === true && <div onClick={change} className='cursor-pointer px-4'><AiFillEye className='text-lg'/></div>}
               {link === false && <div onClick={change} className='cursor-pointer px-4'><AiFillEyeInvisible className='text-lg'/></div>}
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-purple-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Sign in</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link href={'/signup'}> <a href="#" className="font-semibold leading-6 text-purple-700 hover:text-purple-500 mx-2">Sign Up</a></Link>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Login
