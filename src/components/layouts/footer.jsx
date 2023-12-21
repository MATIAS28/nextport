


export const FooterComponent = () => {
    return(
        <footer className="bg-black relative mt-16">
            
         <div className="flex justify-between items-start p-3 mm:p-6">
            <div className="w-2/4">
                <h1 className="secondary text-xl mm:text-4xl font-semibold">Matias Muñoz</h1>
                <p className="sm:text-sm mm:text-lg text-white my-4">Programador Autodidacta: Transformando Ideas en Código, un Proyecto a la Vez</p>
            </div>

            <div>
                <h4 className="secondary font-base text-lg mm:text-3xl">Mis Redes</h4>
                <div className="flex items-center space-x-4 my-4">

                    <button>
                    <img src="/phone.png" className="w-4 md:w-6 mr-2 duration-100 cursor-pointer hover:scale-105"/>
                    </button>

                    <button>
                    <img src="/gmail.png" className="w-4 md:w-6 mr-2 duration-100 cursor-pointer hover:scale-105"/>
                    </button>

                    <a target="_blanck" href="https://www.linkedin.com/in/matias-mu%C3%B1oz-00a7581b6/" role="button" >
                        <img src="/linkedin.png" className="w-4 md:w-6 mr-2 duration-100 cursor-pointer hover:scale-105"/>
                    </a>

                    <a target="_blanck" href="https://github.com/MATIAS28" role="button" >
                        <img src="/github.png" className="w-6 md:w-6 mr-2 cursor-pointer hover:scale-105 hover:scale-105"/>
                    </a>

                    </div>
                </div>
            </div>
                
            <p className="relative text-center bottom-0 w-full tertiaryBack text-sm font-semibold">
                © 2023 Copyright: Matias Muñoz
            </p>
        </footer>
    )
}