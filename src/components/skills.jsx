import { CodeBracketIcon } from '@heroicons/react/24/solid'
import { WrenchScrewdriver } from '@heroicons/react/solid'
import { Technologies } from './technologies'


export const SkillsComponent = () => {
    const frontEnd = ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React & Next JS']
    const backEnd = ['Node JS', 'Express', 'MongoDB', 'Tailwind']
    const tools = ['Git', 'VScode', 'Figma', 'Canva']


    return(
        <div id='skills' className="w-full h-full md:mb-12">

                <div className="flex justify-center items-center mb-4">
                    <CodeBracketIcon className="w-7 h-7 fill-yellow-300 mr-2"/>
                    <h2 className="text-2xl md:text-3xl text-white font-semibold">Habilidades</h2>
                </div>

                <div>
                <div className="my-7">
                    <p className="text-center text-gray-200 font-light text-sm md:text-lg mt-3 w-full">
                    Como desarrollador web fullstack especializado en el stack MERN, me he enfocado 
                    en poner a prueba mis habilidades en cada proyecto para fortalecerlas y mejorarlas 🚀. 
                    Actualmente, estoy explorando TypeScript y React Native 📚 para agregar nuevas habilidades 
                    a mi arsenal y ampliar mis capacidades. ¡Próximamente las incluiré aquí para compartir mi 
                    experiencia en estas tecnologías! 💡
                    </p>
                </div>

                <Technologies/>

                </div>

        </div>
    )
}
