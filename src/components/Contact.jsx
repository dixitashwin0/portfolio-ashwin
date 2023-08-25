import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen p-4 text-white'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p  className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Contact</p>
                <p className='py-6 mt-4'>Get in touch using the form below</p>
            </div>
            <div className='flex flex-col align-items-center justify-center'>
          <form action="https://getform.io/f/e4148b0b-8f51-4187-8dec-8b69bf174a8d" className='flex flex-col gap-2' method="POST" >
            <input 
            type="text" 
            name="name"
            placeholder='Enter your Name' 
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none' />
            <input 
            type="text" 
            name="email" 
            placeholder='Enter your Email' 
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none' />
            <textarea 
            name="message" 
            rows="10" 
            placeholder='Enter some contact details and messages here'
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none'></textarea>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-300'>Let's Connect</button>
          </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
