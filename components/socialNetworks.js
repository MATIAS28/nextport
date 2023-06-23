import Link from "next/link"
import toast, {Toaster} from 'react-hot-toast'

export const SocialNetworks = () => {

    const  copyEmail = () => {
        navigator.clipboard.writeText('matiasmunoz.dev@gmail.com')
        
        toast.success('email copiado', {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff'
            }
          })
    }

    return(
        <div id="sn" className="p-1 rounded bg-warning">
        <Toaster/>
        <a className="btn" target="_blanck" href="https://github.com/MATIAS28" role="button"><img src="/img/git.png" alt="" /></a>
        <a className="btn" target="_blanck" href="https://www.linkedin.com/in/matias-mu%C3%B1oz-00a7581b6/" role="button"><img src="/img/linkedin.png" alt="" /></a>
        <button className="btn" onClick={copyEmail}><img className="" src="/img/gmail.png" alt=""/> </button>
        <style jsx>
        {`
            #sn{
                width: fit-content;
                margin-top: 2rem;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            }

            img{
                width: 2rem;
                transition: all 0.2s ease-in-out;
            }

            img:hover{
              transform: scale(1.2);
            }

            btn{
                padding: 0
            }
        `}
        </style>
        </div>
    )
}

 