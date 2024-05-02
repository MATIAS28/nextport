'use client'
import { SocialNetworks } from '@/components/socialNetworks'
import toast, {Toaster} from 'react-hot-toast'


export const IntroductionComponent = () => {

    return(
        <div className="flex items-center justify-around w-full h-72 md:h-[30rem]">

            <Toaster position="bottom-center"/>

            <div className="md:p-1">

                <div className="mb-2 md:mb-4">
                    <h1 className="text-sm md:text-3xl text-white font-semibold my-0 w-full">Hola, soy</h1>
                    <h2 className="text-base md:text-6xl secondary font-semibold my-0 w-full">Matias Muñoz</h2>
                    <h3 className="text-base md:text-6xl text-white font-semibold">Desarrollador Web</h3>
                </div>

                <SocialNetworks/>

                <a href="/Matias Muñoz.pdf" download='/Matias Muñoz.pdf' 
                className="flex md:hidden bg-white text-black text-xs px-2 py-1 mt-4 w-fit rounded">
                        Descargar CV
                </a>

            </div>

            <div className="flex justify-center">
                <img id='logo' src="/fdp.png" className="w-40 md:w-[24rem]"
                alt="Matias Muñoz Desarrollador Cool"/>
            </div>

        </div>
    )
}
