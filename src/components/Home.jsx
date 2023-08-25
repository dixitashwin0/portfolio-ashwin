import React from 'react'
import MYimage2 from '../assets/MYimage2.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-600'>
     <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-3xl sm:text-5xl font-bold text-white'>
                I'm a Mechanical Engineer coding all of it around.
            </h2>
            <p className='text-gray-500 py-4'>
           Me being 20 year old engineer with hands-on experience in MERN STACK Development   and technologies like TailwindCSS.I also have working level knowledge about SQL and MongoDb.
           I have working level knowledge in Java.
           I possess knowledge about  designing and designing softwares such as SolidWorks.
            </p>
            <div>
                <Link to="Portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                    Portfolio
                   <span className='pl-2 group-hover:rotate-90 duration-300'>
                   <AiOutlineArrowRight size={20}/>
                   </span> 
                </Link>
            </div>
        </div>
        <div>
          <img src={MYimage2} className='rounded-3xl mx-auto w-2/3 md:w-full' alt="my profile" />  
       </div>
     </div>
    </div>
  )
}

export default Home