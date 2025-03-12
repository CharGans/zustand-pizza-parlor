import React from 'react'
import { useStore } from 'zustand'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  
  const nextPage = useNavigate()
  return (
    <div>Checkout</div>
  )
}

export default Checkout