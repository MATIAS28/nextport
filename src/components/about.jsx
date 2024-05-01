'use client'

import { useEffect, useState } from "react"


export const AboutComponent = () => {
    const [letter, setLetter] = useState('R')
    const [animationKey, setAnimationKey] = useState(0)
    const courseLink = "https://www.udemy.com/course/desarrollar-una-red-social-con-javascript-angular-y-nodejs-mongodb/?couponCode=ST8MT40924"

    useEffect(() => {
        const interval = setInterval(() => {
            setLetter(prev => prev === 'R' ? 'A' : 'R')
            setAnimationKey(prev => prev+1)
        }, 3500)

        return () => clearInterval(interval);
    }, [])

    return(
    <div id="about" className="h-full md:p-4 mb-12">

        <div className="mb-4">
            <h2 className="sm:text-xl md:text-3xl text-white font-semibold">+ Sobre Mí</h2>
        </div>

        <div className="md:flex items-center">
            <div className="my-7">
                <p className="text-gray-200 font-light text-xs md:text-base mt-3 w-full md:w-3/4 duration-150">
                ¡Hola! mi nombre es Matias, soy desarrollador <b className="font-bold">FullStack</b>. Mi fascinación por 
                el mundo de la programación me ha impulsado a adquirir habilidades de manera autodidacta. 
                Mi viaje comenzó en 2018 con "Eloquent <b className="font-bold">JavaScript</b>", un libro que me proporcionó una sólida 
                introducción al lenguaje. Posteriormente, en 2019, me sumergí en el stack <b className="font-bold">MEAN</b> a través del 
                curso de Víctor Robles <a className="font-semibold hover:text-yellow-300 border-b" href={courseLink} target="_blank">"Desarrollar una red social con JavaScript, Angular y NodeJS"</a>. En 2022, 
                decidí explorar <b className="font-bold">React</b> por mi cuenta, lo que se ve reflejado en mis proyectos. La envergadura 
                de las aplicaciones que he desarrollado es testimonio de mi progreso y dedicación.
                </p>
            </div>


            <div className="flex justify-center items-center text-5xl md:text-7xl md:space-x-8 w-full text-white duration-150">
                <p>M</p>
                <p>E</p>
                <p key={animationKey} className="letterFlip secondary">{letter}</p>
                <p>N</p>
            </div>
        </div>

    </div>
    )
}