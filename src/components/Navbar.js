import React from 'react'
 

export default function Navbar({setPage}) {

 
  return (
    < >
    <h5 onClick={()=>setPage("home")}>Home</h5>
    <h5 onClick={()=>setPage("about")}>About</h5>
    <h5 onClick={()=>setPage("contact")}>Contact Us</h5>
     
    </>
  )
}
