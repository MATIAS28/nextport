import Link from 'next/link'
import { Carousel } from './carousel'

export const AppsComponent = (props) => {
    return(
    <>
    <div id='project-card' className="p-2 d-inline-flex align-items-center row p-3">

     <div className='col-6'>
     <Carousel imgs={props?.imgs}/>
     </div>

    <div className="col-6">
        <h4 className="">{props.name}</h4>
        <p className=""> {props.d} </p>

        <div>
            <h5>Prácticas:</h5>
            <p>{props.p}</p>
        </div>
        <div>
            <h5>Tecnologías:</h5>
            <p>{props.t}</p>
        </div>
         

        <div className="d-flex align-items-center">
        <Link href={props.u}><a target='_blank' className="btn btn-outline-dark">Página</a></Link>
        {props.g !== '' && <Link href={props.g}><a target='_blank' className="mx-2"><img src="/img/git.png" alt=""/></a></Link>}
        </div>

        <div className='d-flex justify-content-end my-2'>
        <span className='bg-warning text-light px-2 py-1'>{props.s === 'No ha sido desplegada' ? 'No ha sido desplegada' : 'Desplegado en'+' '+props.s} </span>
        </div>
    </div>

   
    </div>

    <style jsx>
    {`
        #project-card{
            border-radius: 0.375rem;
            background-color: white;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
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
            border-radius: 0.75rem;
            font-size: 12px;
            font-weight: bold;
            text-align: center;
        }

        @media (max-width: 990px){
            .d-inline-flex{
                display: block !important;
            }
            
            .col-6{
                width: 100%;
            }
        }
    `}
    </style>

    </>
    )
}