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
        <div className='previewAnimation w-full h-full'>
            <div className="flex justify-center items-center md:space-x-3 duration-150">
                
                <button onClick={() => setImgSelector(prev => (prev-1+imgs.length) % imgs.length)} 
                className='w-32 hidden xl:block button'>
                    <ChevronLeftIcon className='tertiary w-full'/>
                </button>

                <img src={img} className="w-full mm:w-[30rem] h-64 mm:h-72 rounded" alt=""/>
                
                <button onClick={() => setImgSelector(prev => (prev + 1) % imgs.length)} 
                className='w-32 hidden xl:block button'>
                    <ChevronRightIcon className='tertiary w-full'/>
                </button>

            </div>

            <div className='h-full'>
                <div className='hidden xl:flex justify-center items-center w-full h-5 my-3'>
                    {imgs && imgs.map((img, i) => {
                        return(
                            <div onClick={() => setImgSelector(i)} key={i} 
                            className={i === imgSelector ? 
                            'duration-150 ease-linear w-7 md:w-9 h-2 tertiaryBack rounded-2xl cursor-pointer hover:scale-105 m-2' : 
                            'duration-150 ease-linear w-5 md:w-7 h-1 bg-white rounded-2xl cursor-pointer hover:scale-105 m-2'}>
                            </div>
                        )
                    })}
                </div>

                <div className='flex justify-center w-full h-5 block xl:hidden my-5'>
                    <div className='flex justify-center items-center w-full md:w-full mm:w-3/5 space-x-3'>
                        
                        <button onClick={() => setImgSelector(prev => (prev-1+imgs.length) % imgs.length)} 
                        className='flex justify-center items-center w-1/4 md:w-28 bg-black rounded-lg py-2'>
                            <ChevronLeftIcon className='w-full h-4'/>
                        </button>

                        <span className='text-lg font-semibold text-white w-32 text-center'>
                            {(imgSelector+1)+'/'+imgs.length}
                        </span>

                        <button onClick={() => setImgSelector(prev => (prev + 1) % imgs.length)} 
                        className='flex justify-center items-center w-1/4 md:w-28 bg-black rounded-lg py-2 button'>
                            <ChevronRightIcon className='w-full h-4'/>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}