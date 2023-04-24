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
                                <h5 className="text-danger">Desarrollador FullStack Junior</h5>
                                <p className="text-white">
                                    Soy desarrollador web con más de 2 años de experiencia y sólidos conocimientos en <span className="text-warning"> Javascript</span>. Aprendí desarrollo web mediante cursos y de forma autodidacta, explorando varias tecnologías tanto en el <span className="text-warning"> Frontend</span> como en el Backend
                                    . Me he enfocado un poco mas en el <span className="text-warning"> Backend</span>, 
                                    utilizando tecnologías como las que se detallan en mis habilidades (Skills), así como otras más.
                                    He subido varios proyectos a <span className="text-warning">GitHub </span> y algunos de ellos han sido desplegados en servicios de la nube como AWS, Heroku y Vercel
                                    . Me apasiona el desarrollo web y estoy comprometido con seguir aprendiendo y mejorando constantemente en mi carrera como desarrollador.
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

