import React from 'react'
import { useForm } from 'react-hook-form'

function Form({formhandlesubmitdata}) {
   const {register,handleSubmit,reset}=useForm();
  const handleformSubmit=(data)=>{
    formhandlesubmitdata(data);
    reset();
  }

   
  return (
    <div className=' flex justify-center mt-52 bg-purple-500 px-3 mr-20 ml-20 rounded-md py-10'>
<form onSubmit={handleSubmit(handleformSubmit)}  className='flex gap-6'>
    <input  {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold ' type="text " placeholder='Name' />
    <input   {...register('email')} className='rounded-md px-2 py-1 text-base font-semibold' type="text"  placeholder='Email '/>
    <input  {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold' type="text" placeholder='Image URL'/>
    <input   {...register('description')} type="text"className='rounded-md px-2 py-1 text-base font-semibold' placeholder='description' />
    <input type="submit"  className=' px-5 py-1 rounded-md text-white bg-blue-700 font-semibold'/>
</form>
    </div>
  )
}

export default Form