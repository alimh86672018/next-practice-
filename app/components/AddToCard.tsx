'use client'

import React from 'react'

const AddToCard = () => {
  return (
    <div onClick={() => console.log('clicked')}><button className='btn btn-primary'>Add to Card</button></div>
  )
}

export default AddToCard