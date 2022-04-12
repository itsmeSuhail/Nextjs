import React from 'react'
import Game from './Game'
/*
1.we are using index.module.css
  as external css
  external css
    <name>.module.css


*/

/*
2. inline Css Styling
    
 */
const index = () => {
  return<>
  <h1 style={{textAlign:"center"}}>We are going to use Global Css</h1>
  <Game/>
  </>
}

export default index