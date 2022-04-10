import React from 'react'
import Link from "next/link"
const CustomErrorPage = () => {
  return <>
  
 <div className='ErrorParent'>
 <h1 >Seems you forgot </h1>
  <li className="Error" >
  <Link href="/">
      Go Back
  </Link>
  </li>

 </div>
  </>
}

export default CustomErrorPage