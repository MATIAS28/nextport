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
        

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
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
            background: #fff !important;
        }
        }
        `}
        </style>
        </>
    )
  }
  
  
  export default MyApp