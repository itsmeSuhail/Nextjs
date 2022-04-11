import React from 'react'
import { useRouter } from 'next/router'

import Home from '../Home'
import { useEffect } from 'react'
const index = () => {
    const Router =useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            Router.push("/Router/A")
        },8000)
    },[])
    return <>
    <Home/>
  <h1>You will redirect wait for 8 secs</h1>
  <button onClick={()=>Router.push("/")}>Back</button>
    </>
}

export default index