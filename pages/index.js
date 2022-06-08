import { Skills } from "../profile"
import Link from "next/dist/client/link"
import dbConnect from "../lib/connDB"
import App from "../models/app"
import { AppsComponent } from "../components/app"
const index = (props) => {
    const Apps = props.Apps
    return(
    <>
        <header className="row">
        <div className="col-12">
            <div className="">
                <div className="row">
                    <div className="">
                        <h1 className="text-dark">Matias Muñoz</h1>
                        <h5 className="text-danger">Desarrollador FullStack Junior</h5>
                        <p>
                            Soy desarrollador web hace mas de 1 año, he aprendido desarrollo web con cursos, y de forma
                            autodidacta varias tecnologìas tanto de <span className="text-warning"> Backend</span> como de
                            <span className="text-warning"> Frontend</span>. Me he dedicado mucho mas al Backend utilizando
                            tecnologìas como las que salen en skills y muchas otras mas, tambien tengo conocimientos solidos en 
                            <span className="text-warning"> Javascript</span>. He subido varios proyectos a <span className="text-warning">GitHub </span>
                             y algunos han sido desplegados en 
                            servicios como AWS, Heroku y Vercel.
                        
                        </p>
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
                <div key={i}>
                <AppsComponent name={a.name} p={a.practices} t={a.tec} u={a.url} g={a.git} d={a.desc} s={a.server} />
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

    section{
        padding: 1rem;
    }

    .con-card{
        width: 100%;
        display: grid;
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

