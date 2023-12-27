'use client'

import { useEffect, useState } from "react"


export const AboutComponent = () => {
    const [letter, setLetter] = useState('R')
    const [animationKey, setAnimationKey] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setLetter(prev => prev === 'R' ? 'A' : 'R')
            setAnimationKey(prev => prev+1)
        }, 3500)

        return () => clearInterval(interval);
    }, [])

    return(
        <div id="about" className="md:flex items-center justify-between">
            <div className="w-full md:w-3/5">
                <div className="w-full">

                    <div>
                        <h2 className="sm:text-lg md:text-3xl text-white font-semibold">Sobre Mí</h2>
                        <div className="flex items-center">
                        <div className="secondaryBack w-12 md:w-20 h-1 rounded-3xl"></div>
                        <div className="secondaryBack w-3 md:w-6 h-1 rounded-3xl mx-2"></div>
                        </div>
                    </div>

                    <p className="text-gray-200 font-base text-sm md:text-xl mt-3 w-full leading-relaxed">
                        ¡Hola! Soy Matias, un autodidacta desarrollador Full Stack. 
                        Cada proyecto en mi portafolio refleja mi dedicación personal y mi evolución constante. 
                        Inicié mi travesía hace 4 años con el stack MEAN, pero mi verdadero salto en conocimiento 
                        se produjo al sumergirme por completo en el stack MERN. 
                    </p>

                </div>
            </div>


            <div className="flex justify-center items-center text-5xl md:text-7xl md:space-x-8 w-full md:w-2/4 text-white duration-150 h-32">
                <p>M</p>
                <p>E</p>
                <p key={animationKey} className="letterFlip secondary">{letter}</p>
                <p>N</p>
            </div>

        </div>
    )
}