import { useState } from 'react'
import Basket from '../Pages/Basket/Basket'
import Banner from './Banner'
import Product from './Product'
import products from '../product.json'

const Context = ({basketIsShow}) => {
    const [basket,setBasket]= useState([])
    const [count,setCount]= useState(0)

  return (
    <>
    <Basket basket={basket} setBasket={setBasket} basketIsShow={basketIsShow} count={count} setCount={setCount}/>
    <div className='h-max flex flex-col justify-center align-center'>
      <Banner/>
      <ul className='grid grid-cols-3 gap-5 w-4/5 m-auto'>
        {products.map(product=>(
          <Product key={product.id} product={product} basket={basket} setBasket={setBasket}/>))}
      </ul>
    </div>
    <Banner/>
    </>
  )
}

export default Context