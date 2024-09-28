import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Shop = () => {
  const dispatch = useDispatch()
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)
  const balance = useSelector(state => state.amount)
  return (
    <div className='container mx-auto'>
      <h2 className='mb-2 text-xl'>Deposit/ withdraw money</h2>
      {/* <div className='flex gap-4 items-center'>
        <button onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }} className='w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center text-white'>-</button>
        <p> Your balance</p>
        <button onClick={() => { dispatch(actionCreators.depositMoney(100)) }} className='w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center text-white'>+</button>
      </div> */}
      <div className='flex gap-4 items-center'>
        <button onClick={() => { withdrawMoney(100) }} className='w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center text-white'>-</button>
        <p> Your balance [{balance}]</p>
        <button onClick={() => { depositMoney(100) }} className='w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center text-white'>+</button>
      </div>
    </div>
  )
}

export default Shop