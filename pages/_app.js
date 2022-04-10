import '../styles/globals.css'
/*
  1.  by default router
    Our Router
      localhost/Router/A
      localhost/Router/B
      localhost/Router/c
  */

/*
   2.Dynamic Routing
    folder|
          ^
          ^
        Dynamic
          [<anyname>].js
        
            ab isko acces karo
            Dynamic/1
            Dynamic/2
            Dynamic/3
*/
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
