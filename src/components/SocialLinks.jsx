import React from 'react';
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
const SocialLinks = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
    <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 rounded-tr-md bg-gray-400 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
           <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ashwin-dixit-2805b1245" className='flex flex-row justify-between items-center w-full text-white '>
           <>  LinkedIn <FaLinkedin size={30} /> </>  </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 px-4  bg-gray-400 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
           <a target="_blank" rel="noreferrer" href="https://github.com/dixitashwin0" className='flex flex-row justify-between items-center w-full text-white '>
           <>  GitHub <FaGithub size={30} /> </>  </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 px-4  bg-gray-400 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
           <a  target="_blank" rel="noreferrer" href="mailto:dixitashwin0@gmail.com" className='flex flex-row justify-between items-center w-full text-white '>
           <>  Gmail <HiOutlineMail size={30} /> </>  </a>
        </li>
        <li className='flex justify-between items-center w-40 h-14 px-4 rounded-br-md bg-gray-400 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
           <a target="_blank" rel="noreferrer" href="/resume.pdf" download={true} className='flex flex-row justify-between items-center w-full text-white '>
           <>  Resume <BsFillPersonLinesFill size={30} /> </>  </a>
        </li>
    </ul>
       
    </div>
  )
}

export default SocialLinks;