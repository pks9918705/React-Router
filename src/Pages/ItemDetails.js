import React from 'react'
import { useParams } from 'react-router-dom'

export default function ItemDetails() {

    const params=useParams()
    console.log('--->',params);
    
  return (
    <div>
        <h1>Item </h1>
        <h2>{params.itemId}</h2>
      
    </div>
  )
}
