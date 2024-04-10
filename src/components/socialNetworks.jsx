import toast, {Toaster} from 'react-hot-toast'

export const SocialNetworks = () => {

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
        <div className="flex items-center space-x-4 md:space-x-7 md:mt-5">
            <button className='duration-75 hover:-translate-y-2 button' onClick={() => copyHandler('Número de teléfono', '2645875117')}>
            <img src="/phone.png" className="socialNetworks4 w-4 md:w-6 mr-2 duration-100 cursor-pointer"/>
            </button>

            <button className='duration-75 hover:-translate-y-2 button' onClick={() => copyHandler('Gmail', 'matiasmunoz.dev@gmail.com')}>
            <img src="/gmail.png" className="socialNetworks3 w-4 md:w-6 mr-2 duration-100 cursor-pointer"/>
            </button>

            <a className='duration-75 hover:-translate-y-2 button' target="_blanck" href="https://www.linkedin.com/in/matias-mu%C3%B1oz-00a7581b6/" role="button" >
                <img src="/linkedin.png" className="socialNetworks2 w-4 md:w-6 mr-2 duration-100 cursor-pointer"/>
            </a>

            <a className='duration-75 hover:-translate-y-2 button' target="_blanck" href="https://github.com/MATIAS28" role="button" >
                <img src="/github.png" className="socialNetworks1 w-4 md:w-6 mr-2 cursor-pointer"/>
            </a>
        </div>
    )
}