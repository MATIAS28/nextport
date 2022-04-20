import { Skills } from "../profile";

const index = () => {
    return(
    <>
        <header className="row">
        <div className="col-12">
            <div className="card card-body bg-dark text-light">
                <div className="row">
                    <div className="col-6 col-md-4">
                        <img className="img-fluid" src="" alt="Matias Muñoz" />
                    </div>
                    <div class="col-12 col-sm-6 col-md-8">
                        <h1 className="text-light">Matias Muñoz</h1>
                        <h5 className="text-danger">Desarrollador FullStack Junior</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quo quis quisquam 
                            facilis incidunt possimus aut iusto sed voluptatibus perferendis expedita sit. 
                            Odio dolore nulla quo delectus vel voluptate quisquam.
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
                <section className="card bg-light">
                    <div className="card-body">
                        <h1>Portafolio</h1>
                    </div>
                </section>
            </div>

        </div>

    </>    
    )
}


export default index;