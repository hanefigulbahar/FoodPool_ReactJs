import React from 'react'

const Total = ({basket}) => {

    const productAmount=basket.map((item)=>(item.amount))
    const amountTotal=productAmount.reduce((acc,item)=>acc+item,0)
    const totalCost=basket.reduce((acc,item)=>(acc +(item.cost)*item.amount),0)

  return (
    <div className='flex flex-col sticky bottom-0 justify-between bg-white p-4'>
        {amountTotal===0 ? 
        <div className='text-center text-gray-600/30'>Sepette ürün yok</div> 
        :
        <div className='flex justify-between my-2 shadow-sm text-gray-500'>
            <div>Total Piece</div>
            <div>{amountTotal}</div>
        </div>}
        {totalCost>0 && 
        <div>
            <div className='flex justify-between my-2 '>
            <div>Total</div>
            <div>{totalCost}</div>
        </div>
        <div className='flex items-center my-6 justify-center'>
          <button className='border border-orange-700/75 w-full rounded-md '>Sipariş ekle</button>
        </div>
        </div>
      } 
        

    </div>
  )
}

export default Total