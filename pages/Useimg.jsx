import React from 'react'
import Image from "next/image"
const Useimg = () => {
  return <>
  <h1 style={{
      textAlign:"center"
  }}>we Are using img from public folder</h1>
  <Image width={300} height={200}  src={"/one.png"} />
  <h1 style={{
      textAlign:"center"
  }}>we Are using img from Internet</h1>
  <Image width={300} height={200}  src={"https://cdn.pixabay.com/photo/2022/02/20/09/46/lama-7024125_960_720.jpg"} />


  
  
  </>
}

export default Useimg