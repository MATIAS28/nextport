


export const IntroductionComponent = () => {
    return(
        <div className="flex items-center justify-between md:justify-center w-full mt-5">
            <div className="md:flex justify-center md:p-2 w-full mb-4 md:mb-0 md:mr-2">
                <img src="/fdp.png" className="w-full md:w-4/5 md:h-1/3 rounded-full"
                alt="Matias Muñoz Desarrollador Cool"/>
            </div>

            <div className="md:p-1 w-full">
                <div className="">
                    <h1 className="text-white text-2xl md:text-7xl font-semibold">Hola, soy</h1>
                    <h2 className="titleName secondary text-xl md:text-7xl font-semibold my-0">Matias Muñoz</h2>
                    <h3 className="text-white text-lg md:text-5xl font-semibold">Desarrollador Web</h3>
                </div>

                <div className="flex items-center space-x-4 md:space-x-7 mt-5">

                    <button>
                    <img src="/phone.png" className="socialNetworks4 duration-50 w-6 md:w-9 mr-2 duration-100 cursor-pointer hover:scale-105"/>
                    </button>

                    <button>
                    <img src="/gmail.png" className="socialNetworks3 duration-150 w-6 md:w-9 mr-2 duration-100 cursor-pointer hover:scale-105"/>
                    </button>

                    <a target="_blanck" href="https://www.linkedin.com/in/matias-mu%C3%B1oz-00a7581b6/" role="button" >
                        <img src="/linkedin.png" className="socialNetworks2 duration-200 w-6 md:w-9 mr-2 duration-100 cursor-pointer hover:scale-105"/>
                    </a>

                    <a target="_blanck" href="https://github.com/MATIAS28" role="button" >
                        <img src="/github.png" className="socialNetworks1 w-6 md:w-9 mr-2 duration-100 cursor-pointer hover:scale-105"/>
                    </a>

                </div>
            </div>

        </div>
    )
}
