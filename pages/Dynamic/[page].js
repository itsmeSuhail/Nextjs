import React from 'react'
import {useRouter} from "next/router"
import Home from '../Home';
const page = () => {
    const route=useRouter();
    const params=route.query.page;
  return <>
  <Home/>
  <h1>
      my blog content here 
  </h1>
  <h1>its a Dynamic Routing {params}</h1>
  </>
}

export default page