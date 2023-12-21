import { CarouselComponent } from '@/components/project/carousel'
import { useState } from 'react'


export const ProjectComponent = ({app}) => {
    const [ showTecs, setShowTecs ] = useState(false)
    const { name, practices, tec, server, url, git, desc, imgs } = app

    return(
        <div className="block mm:flex justify-between items-center mm:space-x-5 h-full mm:h-80 ">

                <div className='w-full mm:w-2/4 mm:flex justify-center h-72'>
                    {showTecs ? 
                        <div className='w-full mm:w-[30rem] h-full mm:h-64 bg-gray-100 drop-shadow-lg p-3 rounded-lg tecsAnimation'>
                            <div className=''>
                                <h5 className='text-xl text-black font-semibold'>Stack:</h5>
                                <p className='text-lg font-medium'>{tec}</p>
                            </div>
                        </div>  
                        :
                        <CarouselComponent Imgs={imgs} server={server}/>
                    }
                </div>

            <div className="w-full mm:w-2/4 h-full mm:h-72 my-12">

                <div>
                    <div className='flex justify-between items-center'>
                        <h3 className="text-2xl mm:text-3xl secondary font-semibold mb-3">{name}</h3>
                        <span className='text-xs font-semibold px-3 py-1 text-white tertiaryBack uppercase rounded-3xl'>
                            {server && server} 
                        </span>
                    </div>

                    <p className="text-gray-200 font-base text-sm md:text-base w-full leading-relaxed">
                        {desc}
                    </p>
                </div>

                <div className='my-4'>
                    <h4 className="text-xl font-semibold text-white">Practicas</h4>
                    <p className="text-gray-200 font-base text-sm md:text-base w-full leading-loose py-1">
                        {practices}
                    </p>
                </div>

                <div className="flex items-center my-4 space-x-3 duration-150">

                    <button onClick={() => setShowTecs(prev => !prev)}
                    className='px-5 md:px-9 py-2 bg-black text-white text-sm md:text-lg rounded font-semibold btn-1 duration-100 button btn-1'>
                        {showTecs ? 'Mostrar vistas previas'  : 'Mostrar Stack'}
                    </button>

                    <a target='_blank' href={url} 
                    className="px-5 md:px-9 py-2 bg-black text-white text-sm md:text-lg rounded font-semibold btn-1 duration-100 button btn-1">
                        Visitar
                    </a>

                    <a target='_blank' href={git}>
                        <img src="/github.png" className="w-9" />
                    </a>
                </div>
            </div>

        </div>
    )
}