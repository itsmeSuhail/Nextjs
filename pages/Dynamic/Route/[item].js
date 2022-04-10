import React from 'react'
import { useRouter } from 'next/router'
import Home from '../../Home';
const item = () => {
    const params=useRouter();
    const route=params.query.item;
  return <>
  <Home/>
  <h1>item its me dymaic router page {route}</h1>

  
  </>
}

export default item