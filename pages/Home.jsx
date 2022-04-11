import React from 'react'
import Link from "next/link"
const Home = () => {
  return <>
  <nav>
     <ul style={{display:"flex"}}>
        <li>
           <Link href="/Router/A">A</Link>
        </li>
        <li>
           <Link href="/Router/B">B</Link>
        </li>
        <li>
           <Link href="/Router/C">C</Link>
        </li>
        <li>
           <Link href="/Dynamic/45">DynLinkmic</Link>
        </li>
        <li>
           <Link href="/Dynamic/Route/45">DynLinkmic Route</Link>
        </li>
        <li>
           <Link href="/Onclick">Onclick Method</Link>
        </li>
        <li>
           <Link href="/Hooks" >Redirect</Link>
        </li>
     </ul>
  </nav>
 </>
}

export default Home