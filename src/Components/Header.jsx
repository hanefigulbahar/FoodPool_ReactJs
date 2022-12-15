import React from 'react'
import { Link } from 'react-router-dom'
import {BsBasket} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react'


const Header = ({basketShow}) => {

    const [languange,setLanguange] =useState(false)
   
    const languangeHandler=()=>{
        setLanguange(!languange)
    }

  return (
    <>
    <div className='flex justify-evenly items-center align-center h-16 border shadow-md text-white bg-orange-300'>
        <div className='my-auto p-1 mx-6 w-12'>
            Logo
        </div>
        <div className='relative'>
            <input className='px-2 pr-14 w-96 h-8 text-semibold text-gray-800/40 border-none rounded-md outline-none' type="text"/>
            <Link to="/home" className='absolute outline-none text-gray-800 px-2 border h-8 border-l-orange-700 right-0 opacity-20'><AiOutlineSearch className=' text-xl w-8'/></Link>
        </div> 
        <div className='flex justify-center items-center align-center'>
            <div className='items-center border-r border-orange-400/75'>
                <Link to='/signUp' className='my-auto p-1 mx-6 w-6'>
                    LOGIN
                </Link>
            </div>
            <div className='border-r border-orange-400/75'>
                <button  onClick={languangeHandler} className='my-auto mx-6 w-6'>
                    {languange && "TR"}
                    {!languange && "EN"}
                </button>
            </div>
            <div>
                <button onClick={basketShow} className='my-auto p-1' >
                     <BsBasket className='mx-6 w-6'/>
                </button>
            </div>
        </div>   
    </div>
</>
  )
}

export default Header
