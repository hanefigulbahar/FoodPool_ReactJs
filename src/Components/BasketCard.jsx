import React from 'react'
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'

const BasketCard = ({basket,removeProduct,setCount}) => {
  return (
    <>
    {basket.map(products =>(
        <div key={products.id} className='pt-1 pb-4 px-4 shadow-sm rounded-md'>
            <div className='flex justify-between my-4 mx-1'>
                <div>{products.name}</div>
                <div>{products.cost * products.amount}</div>
            </div>
            <div className='flex gap-2 justify-end items-center align-center h-8'>
                {products.amount === 1
                    ? <button onClick={()=>{removeProduct(products.id)}}><BsTrash/></button>
                    : <button onClick={()=>{setCount(products.amount--)}} ><AiOutlineMinusCircle/></button>
                }
                <div className='w-6 text-center'>{products.amount}</div>
                <button onClick={()=>{setCount((products.amount++))}}><AiOutlinePlusCircle/></button>
            </div>
        </div>
    ))}
    </>
  )
}

export default BasketCard