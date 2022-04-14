import Link from 'next/link';
import React from 'react'
export const getStaticProps=async ()=>{
    const res=await fetch("https://fakestoreapi.com/products");
    const data=await res.json();
    return{
        props:{
            data
        }
    }
}
const index = ({data}) => {
  return<>
  <style jsx>
      {`
      h1{
          text-align:center;
      }
      p{
        padding:10px;
    }
      `}

  </style>
  <h1>We are fetching data from <kbd>getStaticProps</kbd></h1>
  {
      data?data.slice(0,5).map((item,index)=><Link href={`product/${item.id}`}>
      <p>{item.title}</p>
      </Link>):<h1>Loading...</h1>
  }
  </>
}

export default index