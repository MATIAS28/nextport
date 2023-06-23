import { Skills } from "../profile"


export const SkillsComponent = () => {
    return(
        <div className="p-3 my-3">
            <h1 className="text-primary">Tecnologías</h1>
            <div className="w-100 row row-cols-auto justify-content-center">
                {Skills.map((skill, i) => {
                    return(
                    <div className="col m-2 d-flex" key={i}>
                        <img className="w-100" src={skill.img} alt={skill.s}/>
                    </div>
                    )
                })}
            </div>


        <style jsx>
        {`
            img{
                width: 10rem;
                height: 10rem;
            }

            h1{
                text-align: center;
                font-weiht: bold;
            }
        `}
        </style>

        </div>
    )
}