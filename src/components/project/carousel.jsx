'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export const CarouselComponent = ({Imgs}) => {
    const [ imgs, setImgs ] = useState(Imgs)
    const [ img, setImg ] = useState(null)
    const [ imgSelector, setImgSelector ] = useState(0)

    useEffect(() => {
        if(Imgs){
            const imgSelected = imgs[imgSelector]
            setImg(imgSelected)
        }
    }, [imgSelector])

    return(
        <div className='previewAnimation w-full h-80 md:h-64'>
            <div className="flex items-center md:space-x-3 duration-150">

                <img src={img} className="w-full h-64 mm:h-72 rounded border" alt=""/>

            </div>

            <div className='h-full'>
                <div className='flex justify-around w-full my-7'>
                    <div className='flex justify-around items-center w-full md:w-full mm:w-3/5 space-x-3'>
                        
                        <button onClick={() => setImgSelector(prev => (prev-1+imgs.length) % imgs.length)} 
                        className='flex justify-center items-center bg-white md:w-28 rounded-full'>
                            <ChevronLeftIcon className='w-9 h-9 fill-black p-2'/>
                        </button>

                        <span className='text-lg font-semibold text-white w-32 text-center'>
                            {(imgSelector+1)+'/'+imgs.length}
                        </span>

                        <button onClick={() => setImgSelector(prev => (prev + 1) % imgs.length)} 
                        className='flex justify-center items-center bg-white md:w-28 rounded-full'>
                            <ChevronRightIcon className='w-9 h-9 fill-black p-2'/>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}