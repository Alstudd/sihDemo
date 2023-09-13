import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center w-full'>
      <img className='pl-5' src='/logo.svg' alt="logo" />
      <div className='pl-40 flex gap-[4.75rem] text-[#6F6F6F] text-base font-normal items-center'>
        <a href='/'>Home</a>
        <a href='/about'>About us</a>
        <a href='/solutions'>Solutions</a>
      </div>
      <div className='pr-5 flex gap-5 items-center'>
        <a href="/"><button className='px-6 py-1.5 rounded-3xl bg-black text-white'>Register</button></a>
        <a href="/login"><button className='px-6 py-1.5 rounded-3xl border-2 border-solid border-black'>Login</button></a>
      </div>
    </div>
  )
}
