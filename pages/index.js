import { Skills } from "../profile"
import Link from "next/dist/client/link"
import dbConnect from "../lib/connDB"
import App from "../models/app"
import { AppsComponent } from "../components/app"
const index = (props) => {
    const Apps = props.Apps
    return(
    <>
        <header className="">
        <div className="col-12">
            <div className="">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img className="img-fluid rounded-start fdp" src="/img/fdp.png" alt=""/>
                        </div>
                        <div className="col-md-8 bg-dark">
                            <div className="card-body">
                                <h3 className="text-white">Matias Muñoz</h3>
                                <h5 className="text-danger">Desarrollador FullStack</h5>
                                <p className="text-white">
                                    ¡Hola! Soy un desarrollador web <span className="text-warning">FullStack</span>
                                    con más de 3 años de experiencia. Destaco por mi enfoque apasionado y creativo, así como por mi capacidad para enfrentar grandes retos
                                    . He trabajado con diversas tecnologías, frameworks y servicios en la nube. Mi experiencia incluye el desarrollo de una red social con el 
                                    <span className="text-warning">MEAN </span>
                                    stack y un e-commerce completo utilizando el stack <span className="text-warning">MERN</span>
                                    . Mi enfoque se basa en la comunicación abierta, la adaptabilidad y el trabajo en equipo. Estoy listo para aportar soluciones innovadoras 
                                    y contribuir al éxito de cualquier  proyecto

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>

        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-dark">
                    <div className="card-body">
                        <h3 className="text-danger">Skills</h3>
                        {
                            Skills.map((skill, i) => (
                                <div className="py-3" key={i}>
                                <h5 className="text-white ">{skill.s}</h5>
                                <div className="progress" >
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: skill.p }}>
                                    </div>
                                </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="col-md-8">
                <section className="container">
                <h2 className="text-center text-danger">Portafolio</h2>
                <div className="con-card">
                {Apps.map((a, i) => {
                return(
                <div className="my-4" key={i}>
                <AppsComponent name={a.name} p={a.practices} t={a.tec} u={a.url} g={a.git} d={a.desc} s={a.server} imgs={a.imgs}/>
                </div>                  
                )
                })}
                </div>
                </section>
            </div>

        </div>
    <style jsx>
    {`

    h2{
        margin-bottom: 2rem;
    }

    .perfil-container{
        display: flex;
        align-items: center;
    }

    .fdp{
        height: 100%;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }

    section{
        padding: 1rem;
    }

    .con-card{
        width: 100%;
        display: grid;
    }

    @media(max-width: 768px){
        .perfil-container{
        display: flex;
        flex-direction: column;
    }
    }
    `}
    </style>
    </>    
    )
}

export async function getServerSideProps(){
    await dbConnect()
    const res = await App.find({})
    const apps = await res.map((doc) => {
        const app = doc.toObject();
        app._id = `${app._id}`;
        return app;
      });
    return {props:{Apps: apps}}
}

export default index

