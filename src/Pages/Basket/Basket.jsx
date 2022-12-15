import React from 'react'
import {MdOutlineDeliveryDining} from 'react-icons/md'
import BasketCard from '../../Components/BasketCard'
import Total from '../../Components/Total'

const Basket = ({basket,setBasket,basketIsShow,count,setCount}) => {
  
    function removeProduct(id){
        const value = basket.findIndex((item)=>(item.id===id))
        basket.splice(value,1)
        setBasket([...basket])
    }

  return (
    <>
    {basketIsShow &&
        <div className='flex-1 justify-center mx-2 pt-2 float-right sticky top-0 bg-black/10 rounded-xl shadow-lg w-96 h-screen overflow-scroll'>
                <div className='flex-1 h-1/5 text-center align-center'>
                    <div className='flex justify-center m-3'><MdOutlineDeliveryDining className='text-4xl'/></div>
                    <div>Your order from</div>
                </div>
                <div>
                <BasketCard removeProduct={removeProduct} basket={basket} count={count} setCount={setCount} />
                <Total basket={basket} />
                </div>  
        </div>
       }
    </>
  )
}

export default Basket