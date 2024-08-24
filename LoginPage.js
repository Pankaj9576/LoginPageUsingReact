import React from 'react';
import { FaFacebook, FaLinkedinIn, FaGoogle, FaRegEnvelope} from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
        <div className='w-3/5 p-5'>
          <div className='text-left font-bold'>
            <span className='m-0 text-green-500'>Company</span>Name
          </div>
          <div className='py-10'>
            <p className='text-3xl text-green-500 font-bold mb-2'>Sign in to Account</p>
            <div className='border-2 w-10 border-green-500 inline-block mb-2 rounded-full'></div>
            <div className='justify-center flex my-2'>
              <a href='#/' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-500'>
                <FaFacebook className='text-sm' />
              </a>
              <a href='#/' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-500'>
                <FaLinkedinIn className='text-sm' />
              </a>
              <a href='#/' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-500'>
                <FaGoogle className='text-sm' />
              </a>
            </div>
            <p className='text-gray-400'>or use your email account</p>
            <div className='flex flex-col items-center mt-3 '>
              <div className='bg-gray-100 w-64 p-2 flex items-center rounded-5'>
                <FaRegEnvelope className='text-gray-400 mr-2' />
                <input className=' w-64 bg-gray-100 outline-none' type='email' name='email' placeholder='Email' />
              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center rounded-5 mt-3'>
                <MdLockOutline className='text-gray-400 mr-2' />
                <input className=' w-64 bg-gray-100 outline-none' type='password' name='password' placeholder='Password' />
              </div>
              <div className='flex mb-5 w-64 text-gray-700 font-bold mt-3'>
                <lable className='flex item-center text-xs'><input type='checkbox' name='remember' className='ml-2' />Remember me</lable>
                <a href='#/' className='ml-10 text-xs'>Forget Password</a>
              </div>
              <div className='border-2 text-white border-green bg-green-500 rounded-full  hover:bg-white hover:text-green-500'>
              <a href='#/' className='border-white border-2 px-12 py-2 font-semibold rounded-full inline-block hover:bg-white hover:text-green-500'>Sign in</a>
              </div>
              
            </div>

          </div>
        </div>
        <div className='w-2/5 p-5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
          <h1 className='text-2xl font-bold mb-2'>Hello, Friends!</h1>
          <div className='border-2 w-10 border-white inline-block mb-2 rounded-full'></div>
          <p className='mb-10'>Fill up personal information and start your journey with us.</p>
          <a href='#/' className='border-white border-2 px-12 py-2 font-semibold rounded-full inline-block hover:bg-white hover:text-green-500'>Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
