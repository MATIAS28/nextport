import Link from 'next/link'
import { Carousel } from './carousel'
export const AppsComponent = (props) => {
    return(
    <>
    <div className="card">
        <Carousel imgs={props?.imgs}/>
    <div className="card-body">
        
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text text-secondary"> {props.d} </p>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Prácticas: {props.p} </li>
        <li className="list-group-item">Tecnologías: {props.t} </li>
    </ul>
    <div className="card-body">
        <Link href={props.u}><a target='_blank' className="btn btn-outline-dark">Página</a></Link>
        {props.g !== '' && <Link href={props.g}><a target='_blank' className=""><img src="/img/git.png" alt=""/></a></Link>}
        
    </div>
    <span className='bg-primary text-light'>{props.s === 'No ha sido desplegada' ? 'No ha sido desplegada' : 'Desplegado en'+' '+props.s} </span>
    </div>

    <style jsx>
    {`
        .card{
            margin-right: 1rem;
            margin-bottom: 1rem;
        }
        
        a{
            margin-right: 0.1rem 
        }

        img{
            width: 25px;
            padding: 0px;
            margin-left: 1rem;
            transition: all 0.3s ease-in-out;
        }

        img:hover{
              transform: scale(1.2);
        }

        span{
            display: flex;
            justify-content: center;
            font-size: x-small;
            font-weight: 500;
        }

        @media (max-width: 990px){
            .card{
                width: 100%;
            }
        }
    `}
    </style>

    </>
    )
}