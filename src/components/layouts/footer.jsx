'use client'
import toast, {Toaster} from 'react-hot-toast'

export const FooterComponent = () => {

    const copyHandler = async (name, text) => {
        try {
            await navigator.clipboard.writeText(text);
            toast(name+' copiado', {
                icon: '✎', 
                style: {
                borderRadius: '0.3rem',
                background: '#FFD700',
                color: '#000',
              }
            })
        } catch (e) {
            toast.error("Error al copiar el "+name)
        }
    }

    return(
        <footer className="bg-black relative mt-16">
            
         <div className="flex justify-between items-start p-3 mm:p-6">
            <div className="w-2/4">
                <h1 className="secondary text-xl mm:text-4xl font-semibold">Matias Muñoz</h1>
                <p className="sm:text-sm mm:text-lg text-white my-4">Programador Autodidacta: Transformando Ideas en Código, un Proyecto a la Vez</p>
            </div>

            <div>
                <h4 className="secondary font-base text-lg mm:text-3xl">Mis Redes</h4>
                <div className="flex items-center space-x-4 my-4">

                    <button className='duration-75 hover:scale-105 button' onClick={() => copyHandler('Número de teléfono', '2645875117')}>
                    <img src="/phone.png" className="socialNetworks4 w-4 sm:w-6 mm:w-9 mr-2 duration-100 cursor-pointer"/>
                    </button>

                    <button className='duration-75 hover:scale-105 button' onClick={() => copyHandler('Gmail', 'matiasmunoz.dev@gmail.com')}>
                    <img src="/gmail.png" className="socialNetworks3 w-4 sm:w-6 mm:w-9 mr-2 duration-100 cursor-pointer"/>
                    </button>

                    <a className='duration-75 hover:scale-105 button' target="_blanck" href="https://www.linkedin.com/in/matias-mu%C3%B1oz-00a7581b6/" role="button" >
                        <img src="/linkedin.png" className="socialNetworks2 w-4 sm:w-6 mm:w-9 mr-2 duration-100 cursor-pointer"/>
                    </a>

                    <a className='duration-75 hover:scale-105 button' target="_blanck" href="https://github.com/MATIAS28" role="button" >
                        <img src="/github.png" className="socialNetworks1 w-4 sm:w-6 mm:w-9 mr-2 cursor-pointer"/>
                    </a>


                    </div>
                </div>
            </div>
                
            <p className="relative text-center bottom-0 w-full tertiaryBack text-sm font-semibold">
                © 2023 Copyright: Matias Muñoz
            </p>
        </footer>
    )
}