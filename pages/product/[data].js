import { useRouter } from 'next/router'
import React from 'react'
import Link from "next/link"
export const getStaticPaths=async()=>{
    const res=await fetch("https://fakestoreapi.com/products");
    const datas=await res.json();
    const paths=datas.map((item)=>{return{params:{
        data:item.id.toString()
    }}})
    return{
    paths,
    fallback:false
    }

}
export const getStaticProps=async(context)=>{
    const id=context.params.data;
    const res=await fetch(`https://fakestoreapi.com/products/${id}`);
    const datas=await res.json();
    return{
        props:{
            datas
        }
    }
}
const data = ({datas}) => {
    const Router=useRouter();
    const params=Router.query.data;
  return <>
  <style jsx>
      {`
      h1{
          text-align:center
      }
      p{
          padding:10px;
      }
      button{
          border:none;
          outline:none;
          padding:10px;
          background:black;
          color:white;
          cursor:pointer;
      }
      
      `}
  </style>
      <Link href="/">
  <button >
  Back
  </button>
     </Link>
  <h1>{datas.title}</h1>
  <p>{datas.description}</p>
  <p>{datas.price}</p>
  
  </>
}

export default data