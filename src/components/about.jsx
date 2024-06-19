'use client'

import { UserIcon } from "@heroicons/react/24/solid"
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
    <div id="about" className="h-full">

        <div className="flex items-center mb-4">
            <UserIcon className="w-7 h-7 fill-yellow-300 mr-2"/>
            <h2 className="text-2xl md:text-3xl text-white font-semibold">Sobre Mí</h2>
        </div>

        <div className="lg:flex items-center">
            <div className="my-7">
                <p className="text-gray-200 font-light text-xs md:text-base mt-3 w-full lg:w-3/4 duration-150">
                ¡Hola! Soy Matías, Desarrollador web FullStack con sólidos conocimientos en JavaScript. 👨‍💻 Llevo 5 años desarrollando páginas web. 
                Comencé mis primeros proyectos con el stack MEAN, y en estos últimos 2 años me he dedicado a crear mis proyectos más completos con React, 
                además de reforzar mis conocimientos con las otras tecnologías del stack. En estos últimos años, me enfoqué en crear proyectos en los que 
                pongo a prueba mis habilidades diseñando bases de datos mejor pensadas y escalables. En el frontend, me dediqué a crear diseños más 
                estéticos e intuitivos. 
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