'use client'

export const NavbarComponent = () => {

    const scrollHandler = (id) => {
        if (typeof window !== "undefined") {
        const section = document.getElementById(id)
        section.scrollIntoView(true)
        }
    }

    return(
        <div className="flex justify-around items-center p-0 py-8 md:py-6">
            <div className="">
                <img src="/logo.png" className="w-12 md:w-24" alt="" />
            </div>

            <div className="flex items-center space-x-3">
                <button onClick={() => scrollHandler('about')}  className="text-xs/[4px] md:text-lg text-white font-light">Sobre mi</button>
                <button onClick={() => scrollHandler('skills')}  className="text-xs/[4px] md:text-lg text-white font-light">Habilidades</button>
                <button onClick={() => scrollHandler('projects')}  className="text-xs/[4px] md:text-lg text-white font-light">Proyectos</button>
            </div>

            <a href="/Matias Muñoz.pdf" download='/Matias Muñoz.pdf' 
            className="hidden md:flex hover:bg-white hover:text-black text-white border border-white text-xs/[2px] md:text-sm p-2 md:p-0 md:px-3 md:py-2 rounded-3xl">
                    Descargar CV
            </a>

        </div>
    )
}