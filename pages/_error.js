import { useRouter } from 'next/router';
import { useEffect } from 'react';

 const Err = ({sr, su}) =>{

    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    })

    var status = 0;
    
    if (sr > 200) {
        status = sr;
    }else if (su > 200) {
        status = su;
    }

    return(
        <>
        <h1 className="text-center">Error {status} </h1>
        <p className='text-info'>Error en la petición será redirigido a <span className="text-success">Home</span></p>
        </>
    )
}

export default Err