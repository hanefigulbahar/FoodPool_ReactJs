import React from 'react'

const Product = ({product,basket,setBasket}) => {

    const addBasket=()=>{
        const checkBasket = basket.find(item=> item.id === product.id)
        if (checkBasket){
            checkBasket.amount+=1
            setBasket([...basket])
        }else{
            setBasket([...basket,{
                id: product.id,
                name: product.name,
                cost: product.cost,
                amount:1
            }])
        }
    }
  return (
            <li key={product.id} className="align-center m-auto p-6 w-56 bg-transparent justify-center items-center transition-all border border-white hover:shadow-md rounded-md ">
                <img className='w-full h-max m-auto' alt='' src={product.img}/>
                <div className='flex justify-between'>
                    <div>{product.name}</div>
                    <div>{product.cost}tl</div>
                </div>
                <button className='border rounded-md hover:bg-orange-400/75 hover:text-white w-full'  onClick={(addBasket)}>ekle</button>
            </li>
  )
}

export default Product