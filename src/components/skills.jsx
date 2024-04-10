import { WrenchScrewdriver } from '@heroicons/react/solid'


export const SkillsComponent = () => {
    const frontEnd = ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React & Next JS']
    const backEnd = ['Node JS', 'Express', 'MongoDB', 'Tailwind', 'JavaScript']
    const tools = ['Git', 'VScode', 'Figma', 'Canva']


    return(
        <div id='skills' className="md:flex justify-center items-center w-full tertiaryBack h-full py-20">

                <div className="mt-20 mb-4 w-full md:w-3/5">
                <h2 className="sm:text-xl md:text-3xl text-white font-semibold text-center">Habilidades</h2>
                
                <div className="flex justify-center items-center">
                <div className="secondaryBack w-20 md:w-36 h-1 rounded-3xl"></div>
                </div>

                <div className="flex justify-center my-7">
                    <p className="text-gray-200 font-light text-xs md:text-xl mt-3 w-4/5 md:w-3/4 text-center">
                    He adquirido habilidades en estas tecnologías de forma autodidacta, 
                    como mencioné en la sección 'Sobre mí', a través de prácticas con ideas propias, cursos en Udemy y tutoriales en YouTube. 
                    Poseo conocimientos sólidos en JavaScript y en todo el stack MERN. 
                    La práctica constante con estas tecnologías a lo largo de los últimos 5 años me ha capacitado 
                    para emprender cualquier proyecto que imagine de manera independiente.
                    </p>
                </div>

                <div className='flex justify-center items-start divide-x my-12'>
                    
                    <div className='flex justify-center items-start p-5 md:p-7 h-64 md:h-80'>
                        <div className='grid grid-cols-1 justify-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 md:w-16 h-9 md:h-16">
                            <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
                            </svg>

                            <h5 className='text-sm md:text-xl font-semibold secondary mt-4 mb-2'>Front End</h5>

                            <ul className='text-center text-white font-light'>
                            {frontEnd.map((skill, i) => {
                                return( 
                                    <li className='text-sm md:text-lg' key={i}> {skill} </li> 
                                )
                            })}
                            </ul>
                        </div>
                    </div>

                    <div className='flex justify-center items-start p-5 md:p-7 h-64 md:h-80'>
                        <div className='grid grid-cols-1 justify-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 md:w-16 h-9 md:h-16">
                            <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                            </svg>



                            <h5 className='text-sm md:text-xl font-semibold secondary mt-4 mb-2'>Back End</h5>

                            <ul className='text-center text-white font-light'>
                            {backEnd.map((skill, i) => {
                                return( 
                                    <li className='text-sm md:text-lg' key={i}> {skill} </li> 
                                )
                            })}
                            </ul>
                        </div>
                    </div>

                    <div className='flex justify-center items-start p-5 md:p-7 h-64 md:h-80'>
                        <div className='grid grid-cols-1 justify-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 md:w-16 h-9 md:h-16">
                            <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                            <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                            <path fillRule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>

                            <h5 className='text-sm md:text-xl font-semibold secondary mt-4 mb-2'>Herramientas</h5>

                            <ul className='text-center text-white font-light'>
                            {tools.map((skill, i) => {
                                return( 
                                    <li className='text-sm md:text-lg' key={i}> {skill} </li> 
                                )
                            })}
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
