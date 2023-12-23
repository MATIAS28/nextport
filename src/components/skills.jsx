


export const SkillsComponent = () => {
    return(
        <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center p-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-3 space-x-4 space-y-4 w-full">

                    <div className="flex justify-center items-center">
                        <img src="/skills/mongo.png" className="w-9 md:w-20" alt="" />
                    </div>
                    
                    <div className="flex justify-center items-center">
                        <img src="/skills/exjs.png" className="w-9 md:w-20" alt="" />
                    </div>

                    <div className="flex justify-center items-center">
                        <img src="/skills/react.png" className="w-9 md:w-20" alt="" />
                    </div>

                    <div className="flex justify-center items-center">
                        <img src="/skills/node.png" className="w-9 md:w-16" alt="" />
                    </div>

                    <div className="flex justify-center items-center">
                        <img src="/skills/next.png" className="w-9 md:w-20" alt="" />
                    </div>

                    <div className="flex justify-center items-center">
                        <img src="/skills/tcss.png" className="w-9 md:w-20" alt="" />
                    </div>

                    <div className="flex justify-center items-center">
                        <img src="/skills/html.png" className="w-9 md:w-20" alt="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/skills/css.png" className="w-9 md:w-20" alt="" />
                    </div>
                </div>
            </div>

            <div className="mb-4 w-3/5">
                <h2 className="sm:text-lg md:text-3xl text-white font-semibold text-end">Habilidades</h2>
                
                <div className="flex justify-end items-center">
                <div className="secondaryBack w-12 md:w-28 h-1 rounded-3xl"></div>
                <div className="secondaryBack w-3 md:w-9 h-1 rounded-3xl mx-2"></div>
                </div>

                <div className="flex justify-end">
                    <p className="text-end text-gray-200 font-base text-xs md:text-xl mt-3 w-full leading-relaxed">
                    He adquirido habilidades en estas tecnologías de forma autodidacta, 
                    como mencioné en la sección 'Sobre mí', a través de prácticas con ideas propias, cursos en Udemy y tutoriales en YouTube. 
                    Poseo conocimientos sólidos en JavaScript y en todo el stack MERN. 
                    La práctica constante con estas tecnologías a lo largo de los últimos 4 años me ha capacitado 
                    para emprender cualquier proyecto que imagine de manera independiente.
                    </p>
                </div>
            </div>
        </div>
    )
}
