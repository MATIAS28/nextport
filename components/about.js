import {SocialNetworks} from "../components/socialNetworks"


export const About = () => {
    return(
        <div style={{backgroundColor: '#00001a'}} className="d-flex py-4 border-bottom row w-100 m-0">
        <div className="fdp col">
        <img className="img-fluid rounded-circle" src="/img/fdp-r-hq.png" alt=""/>
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h1 className=" text-light">Matias Muñoz</h1>
                <h5 className="display-5 text-danger">Desarrollador FullStack</h5>
                <p className="text-light font-weight-bold">
                    ¡Hola! Soy desarrollador web <span className="text-warning">FullStack, </span>
                    llevo casi 4 años desarrollando aplicaciones. Destaco por ser apasionado y creativo, así como por mi capacidad para enfrentar grandes retos
                    . He trabajado con diversas tecnologías, frameworks y servicios en la nube. Mi experiencia incluye el desarrollo de una red social con el 
                    <span className="text-warning"> MEAN </span>
                    stack y un e-commerce completo utilizando el stack <span className="text-warning">MERN</span>
                    . Mi enfoque se basa en la comunicación abierta, la adaptabilidad y el trabajo en equipo. Estoy listo para aportar soluciones innovadoras 
                    y contribuir al éxito de cualquier  proyecto.

                </p>

                <SocialNetworks/>

            </div>
        </div>
    </div>
    )
}