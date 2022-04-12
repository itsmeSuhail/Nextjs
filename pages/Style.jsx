import React from 'react'

const Style = () => {
  return <>
  <style jsx>
      {`
      h1{
          text-align:center;
          font-size:25px;
      }
      p{
          padding:18px;
      }
      button{
          padding:10px 20px;
          border:none;
          outline:none;
          background:blue;
          color:white;
      }
      
      `}

  </style>
  <h1>all things are desinged with style jsx</h1>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptatum reiciendis at dolorem natus, omnis voluptatem pariatur eum consectetur quos sapiente? Reiciendis fugit et laborum.</p>
  <button>Click me</button>
  </>
}

export default Style