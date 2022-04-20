const Foot = () => {
    return(
        <>
            <footer className="bg-dark text-center text-light">
  
  <div className="container p-4 pb-0">
    
    <section className="mb-4">
      
      <a className="btn btn-floating m-2" target="_blank" href="https://github.com/MATIAS28" role="button"><img src="/img/github.png" alt="" /></a>

      <a className="btn btn-floating m-1" target="_blank" href="https://www.instagram.com/mati.kbn/?hl=es" role="button"><img src="/img/instagram.png" alt="" /></a>

      <a className="btn btn-floating m-1" target="_blank" href="https://www.linkedin.com/in/matias-mu%C3%B1oz-00a7581b6/" role="button"><img src="/img/linkedin.png" alt="" /></a>
    </section>
    
  </div>
  

  
  <div className="text-center p-3">
    © 2022 Copyright: Matias Muñoz
  </div>
  
</footer>

        <style jsx> 
        {`
            img{
                width: 25px;
                transition: all 0.2s ease-in-out;
            }

            img:hover{
              transform: scale(1.5);
            }
        `} 
        </style>


        </>
    )
}

export default Foot