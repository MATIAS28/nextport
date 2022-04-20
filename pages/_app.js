import Layout from "../components/layout"
import 'bootswatch/dist/lux/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import Foot from "../components/foot"
import { useEffect } from "react"
import { useRouter } from "next/router"
import NProgress from "nprogress"
import 'nprogress/nprogress.css'

function MyApp({ Component, pageProps }) {

    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = url => {
            console.log(url)
            NProgress.start()
        }

        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', () => NProgress.done())

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    })

    return (
        <>
        <Layout/>
        <main className="container c-cont py-4 ">
        <Component className="body" {...pageProps} />
        </main>
        <Foot/>


        <style jsx>
        {`
        
        .body{
            background: url("/img/B.jpg") repeat;
        }

        .container{
            min-height: 50em;
        }

        #nprogress .bar {
            background: background: #fff !important;
        }
        }
        `}
        </style>
        </>
    )
  }
  
  
  export default MyApp