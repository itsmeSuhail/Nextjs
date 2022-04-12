import React from 'react'
import Useimg from './Useimg'
import Header from "./Header"
/*
1.using head
    <Head>
      <title>home Page</title>
  </Head>


*/
const index = () => {
  return<>
  <h1 style={{textAlign:"center"}}>We are going to use Global Css</h1>
  <Useimg/>
  <Header/>
  
  </>
}

export default index