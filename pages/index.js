import React from 'react'
import Game from './Game'
import Style from './Style'
/*
1.we are using index.module.css
  as external css
  external css
    <name>.module.css


*/

/*
2. inline Css Styling
    
 */
/*
3 style jsx
  style data inside your component
  <style jsx>
  {
    `
    h1{
      color:green;
    }
    `
  }
  </style>
*/
const index = () => {
  return<>
  <h1 style={{textAlign:"center"}}>We are going to use Global Css</h1>
  <Game/>
  <Style/>
  </>
}

export default index