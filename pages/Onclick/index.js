import React from 'react'
import Home from '../Home'
import { useRouter } from 'next/router'
const index = () => {
    const Router=useRouter();
    const click=()=>alert("hello nextjs")
  return <>
  <Home/>
  <h1>
this is onclick Events

  </h1>
  <button onClick={()=>Router.push("/")}>Back to home Page</button>
  <button onClick={click}>Click me</button>
  
  </>
}

export default index