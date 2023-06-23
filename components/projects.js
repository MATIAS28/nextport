import { AppsComponent } from "../components/app"

const Projects = ({Apps}) => {
    return(
        <div className="p-4">
            <section className="">
            <h2 className="text-primary">Proyectos</h2>
            <div className="con-card">
                {Apps && Apps.map((a, i) => {
                return(
                <div className="my-4" key={i}>
                <AppsComponent name={a.name} p={a.practices} t={a.tec} u={a.url} g={a.git} d={a.desc} s={a.server} imgs={a.imgs}/>
                </div>                  
                )
                })}
            </div>
            </section>
        </div>
    )
}



export default Projects