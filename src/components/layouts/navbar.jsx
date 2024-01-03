'use client'

export const NavbarComponent = () => {

    const scrollHandler = (id) => {
        if (typeof window !== "undefined") {
        const section = document.getElementById(id)
        section.scrollIntoView(true)
        }
    }

    return(
        <div className="flex justify-between items-center p-3">
            <div className="flex items-center">
                <h1 className="text-xl md:text-5xl secondary font-semibold">M</h1>
                <h1 className="text-xl md:text-5xl text-white font-semibold">M</h1>
            </div>

            <div className="flex items-center mx-0 md:mx-2 space-x-3">
                <button onClick={() => scrollHandler('about')}  className="text-xs md:text-xl text-white font-medium">Sobre mi</button>
                <button onClick={() => scrollHandler('projects')}  className="text-xs md:text-xl text-white font-medium">Proyectos</button>

                <a href="/Matias Muñoz.pdf" download='/Matias Muñoz.pdf' 
                className="button btn-hover font-semibold text-xs mm:text-base">
                    Descargar CV
                </a>
            </div>

        </div>
    )
}