

export const NavbarComponent = () => {
    return(
        <div className="flex justify-between items-center p-3">
            <div className="flex items-center">
                <h1 className="text-xl md:text-5xl secondary font-semibold">M</h1>
                <h1 className="text-xl md:text-5xl text-white font-semibold">M</h1>
            </div>

            <div className="flex items-center mx-2">
                <a href="#" className="text-sm md:text-xl text-white font-medium">Sobre mi</a>
                <a href="#" className="text-sm md:text-xl text-white mx-3 font-medium">Proyectos</a>

                <a href="/Matias Muñoz.pdf" download='/Matias Muñoz.pdf' 
                className="button btn-hover font-semibold">
                    Descargar CV
                </a>
            </div>

        </div>
    )
}