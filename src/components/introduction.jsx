'use client'
import toast, {Toaster} from 'react-hot-toast'


export const IntroductionComponent = () => {

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
        <div className="flex items-center justify-between md:justify-center w-full mt-5 space-x-2 duration-100">

            <Toaster position="bottom-center"/>

            <div className="md:flex justify-center md:p-2 w-full mb-4 md:mb-0 md:mr-2">
                <img src="/fdp.png" className="w-full lg:w-4/5 rounded-full"
                alt="Matias Muñoz Desarrollador Cool"/>
            </div>

            <div className="md:p-1 w-full">
                <div className="">
                    <h1 className="text-white text-xl sm:text-3xl md:text-6xl lg:text-7xl font-semibold">Hola, soy</h1>
                    <h2 className="titleName secondary text-xl sm:text-3xl md:text-6xl lg:text-7xl font-semibold my-0 w-full">Matias Muñoz</h2>
                    <h3 className="text-white text-xl sm:text-3xl md:text-6xl lg:text-7xl font-semibold">Desarrollador Web</h3>
                </div>

                <div className="flex items-center space-x-4 md:space-x-7 mt-5">

                    <button className='duration-75 hover:-translate-y-2 button' onClick={() => copyHandler('Número de teléfono', '2645875117')}>
                    <img src="/phone.png" className="socialNetworks4 w-4 sm:w-6 mm:w-9 mr-2 duration-100 cursor-pointer"/>
                    </button>

                    <button className='duration-75 hover:-translate-y-2 button' onClick={() => copyHandler('Gmail', 'matiasmunoz.dev@gmail.com')}>
                    <img src="/gmail.png" className="socialNetworks3 w-4 sm:w-6 mm:w-9 mr-2 duration-100 cursor-pointer"/>
                    </button>

                    <a className='duration-75 hover:-translate-y-2 button' target="_blanck" href="https://www.linkedin.com/in/matias-mu%C3%B1oz-00a7581b6/" role="button" >
                        <img src="/linkedin.png" className="socialNetworks2 w-4 sm:w-6 mm:w-9 mr-2 duration-100 cursor-pointer"/>
                    </a>

                    <a className='duration-75 hover:-translate-y-2 button' target="_blanck" href="https://github.com/MATIAS28" role="button" >
                        <img src="/github.png" className="socialNetworks1 w-4 sm:w-6 mm:w-9 mr-2 cursor-pointer"/>
                    </a>

                </div>
            </div>

        </div>
    )
}
