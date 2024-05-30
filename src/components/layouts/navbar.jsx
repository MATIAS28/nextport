'use client'

export const NavbarComponent = () => {

    const scrollHandler = (id) => {
        if (typeof window !== "undefined") {
        const section = document.getElementById(id)
        section.scrollIntoView(true)
        }
    }

    return(
        <div className="w-[85%] md:w-4/5 mx-auto flex items-center h-28 py-4">
            <div className="flex justify-between items-center w-full h-full">
            <div className="">
                <img src="/logo.png" className="w-16 md:w-24" alt="" />
            </div>

            <div className="flex justify-around items-center w-3/4 md:w-1/3">
                <button onClick={() => scrollHandler('about')}  className="text-xs md:text-sm text-white font-light hover:font-semibold duration-150 w-fit">Sobre mi</button>
                <button onClick={() => scrollHandler('skills')}  className="text-xs md:text-sm text-white font-light hover:font-semibold duration-150 w-fit">Habilidades</button>
                <button onClick={() => scrollHandler('projects')}  className="text-xs md:text-sm text-white font-light hover:font-semibold duration-150 w-fit">Proyectos</button>
            </div>

            <a href="/Matias Muñoz.pdf" download='/Matias Muñoz.pdf' 
            className="hidden md:flex hover:bg-white hover:text-black text-white border text-xs/[2px] p-3 rounded-xl">
                    Descargar CV
            </a>
            </div>

        </div>
    )
}