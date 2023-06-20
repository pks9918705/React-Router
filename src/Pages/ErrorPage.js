import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {

    const navigate=useNavigate()
    useEffect(() => {

        setTimeout(() =>  navigate('/'),3000)
    },[])
  return (
    <div>
      <h1>OOPs!! Error ini Page</h1>
      <p>Going back in few seconds.......</p>
    </div>
  )
}
