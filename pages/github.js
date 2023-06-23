import { Err } from "./_error";

const GitHub = ({user, repos, status_repo, status_user}) => {

    if (status_repo > 200 || status_user > 200) {
        return <Err sr={status_repo} su={status_user} />
    }

    return(
        <>
        <div className="row bg-light p-4">
            <section className="col-md-4">
                <article className="card border-0 rounded shadow bg-dark">
                    <img src={user.avatar_url} alt="" />
                    <h1 className="text-center text-light"> {user.login} </h1>
                </article>
            </section>

            <section className="col">
                {
                    repos.map((repo, i) => {
                        return(
                        <div className="card w-75 bg-dark my-2" key={i}>
                            <article className="card-body">
                            <h5 className="card-title text-white">{repo.name}</h5>
                            <p className="card-text text-warning">la mayoría son repositorios viejos!</p>
                            <a href={repo.html_url} target="_blank" className="btn btn-light">ver repositorio</a>
                            </article>
                        </div>
                        )
                    })
                }
            </section>
        </div>

        <style jsx>
        {`
        @media(max-width: 990px){
            .row{
                margin: 0px;
                margin-top: 1rem;
            }
            
            .w-75{
                width: 100% !important;
            }
        }
        `}
        </style>
        </>
    )
};

export async function getServerSideProps() {
    const req_user = await fetch('https://api.github.com/users/MATIAS28')
    const req_repos = await fetch('https://api.github.com/users/MATIAS28/repos')
    const data = await req_user.json()
    const repos = await req_repos.json()

    var repos_status = req_repos.status;
    var user_status = req_user.status;

    return{
        props: {
            user: data,
            repos: repos,
            status_repo: repos_status,
            status_user: user_status
        }
    }
}

export default GitHub;