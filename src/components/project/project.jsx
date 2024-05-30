import { CarouselComponent } from '@/components/project/carousel'
import { useState } from 'react'
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"


export const ProjectComponent = ({app}) => {
    const [ showTecs, setShowTecs ] = useState(false)
    const { name, practices, tec, server, url, git, desc, imgs } = app
    const isRender = server.toLowerCase().includes('render')

    return(
        <div className="block md:flex justify-between items-start md:space-x-5 h-full my-20">
                
            <div className='w-full md:w-2/4 2xl:w-1/3 h-full mb-4'>

                {isRender &&
                    <div className='flex justify-center items-center mb-4'>
                        <div className='flex items-center'>
                            <ExclamationCircleIcon className='w-5 mr-2 fill-gray-200'/>
                            <span className='text-xs md:text-sm text-gray-200 font-light w-full'>¡Advertencia! Render puede tardar en encender el servidor.</span>
                        </div>
                    </div>
                }

                <div className='w-full flex justify-center'>
                    {showTecs ? 
                        <div className='tecsAnimation w-full h-80 md:h-64 bg-gray-100 rounded'>
                            <div className='p-3'>
                                <h5 className='text-xl text-black font-semibold'>Tecnologías:</h5>
                                <p className='text-lg font-medium'>{tec}</p>
                            </div>
                        </div>  
                        :
                        <CarouselComponent Imgs={imgs} server={server}/>
                    }
                </div>

                <button onClick={() => setShowTecs(prev => !prev)}
                    className='relative block md:hidden px-5 md:px-9 py-2 bg-white text-sm rounded font-semibold w-full my-7'>
                        {showTecs ? 'Mostrar vistas previas'  : 'Mostrar Tecnologías'}
                </button>

            </div>

            <div className="w-full mm:w-2/4 h-full">

                <div>
                    <div className='flex justify-between items-center'>
                        <h3 className="text-xl mm:text-3xl secondary font-bold mb-3">{name}</h3>
                        <span className='text-xs md:font-semibold px-3 py-1 text-white tertiaryBack uppercase rounded-3xl'>
                            {server && server} 
                        </span>
                    </div>

                    <p className="text-gray-200 font-light text-sm w-full">
                        {desc}
                    </p>
                </div>

                <div className='my-4'>
                    <h4 className="text-xl font-semibold text-white">Practicas</h4>
                    <p className="text-gray-200 font-base text-sm w-full py-1">
                        {practices}
                    </p>
                </div>

                <div className="flex items-center my-4 md:space-x-3 duration-150">

                    <button onClick={() => setShowTecs(prev => !prev)}
                    className='hidden md:block px-5 md:px-9 py-2 bg-white text-sm rounded font-semibold'>
                        {showTecs ? 'Mostrar vistas previas'  : 'Mostrar Stack'}
                    </button>

                    {url.length > 0 &&
                        <a target='_blank' href={url} 
                        className="px-5 md:px-9 py-2 bg-white text-sm rounded font-semibold mr-2 md:mr-0">
                            Visitar
                        </a>
                    }

                    <a target='_blank' href={git}>
                        <img src="/github.png" className="w-7" />
                    </a>
                </div>
            </div>

        </div>
    )
}