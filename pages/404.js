import { useRouter } from 'next/router';
import { useEffect } from 'react';
const err404 = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    })
    return(
        <>
            <div className="text-center">
                <h1>404</h1>
                <p>Pagina no encontrada será redirigido a <span className="text-success">Home</span></p>
            </div>
        </>
    )
}

export default err404;