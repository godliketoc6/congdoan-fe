import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import logo from '../lib/image/login.jpg'

export default function Login(){

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <section className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-slate-100 flex rounded-2xl shadow-lg max-w-3xl p-5'>
        <div className='px-16 '>
          <h2 className='font-bold text-2xl'>Login</h2>
          <p className='text-sm'>Welcome to CongDoan</p>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <input {...register('email', { required: "Email is required"})} className='p-2 mt-8 rounded-xl border' type='text' name='email' placeholder='Email'></input>
            {errors.email && (
              <p className="text-red-500">{`${errors.email.message}`}</p>
            )}
            <input {...register('password', { required: "Password is required", minLength: {
              value: 10,
              message: "Password must be at least 10 characters"
            }})} className='p-2 rounded-xl border' type='password' name='password' placeholder='Password'></input>
            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}
            <button disabled={isSubmitting} className='bg-[#92968A] rounded-xl text-white py-2 hover:scale-105 duration-300'>Log In </button>
          </form>

          {/* <button className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300'> 
          <svg className='mr-3' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="25px" viewBox="0 0 48 48">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          Login with Google</button> */}

          {/* <p className='mt-5 text-xs border-b py-6'>Forgot password</p> */}

          {/* <div className='mt-3 text-xs flex justify-between items-center'>
            <p>If you don't have an account...</p>
            <button className='py-2 px-5 bg-white border rounded-xl'> Register </button>
          </div> */}

        </div>
      </div>
    </section>
  )
}
