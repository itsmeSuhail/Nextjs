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

/*
3. link
   import Link from "next/link"
    ab link ko use kr lo
*/

/*
4. custom error page banane ke liye
      hame 404 file ka name dena hoga
       404.js
*/
/*
5.Onclick Events with nextjs
       useRouter.push("/")
       ham isko navigation or history ki tarah use kr sakte hai
 */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
