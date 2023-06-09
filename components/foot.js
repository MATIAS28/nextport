const Foot = () => {
    return(
        <>
 <footer className="bg-dark text-center text-light">  
  <div className="container p-4 pb-0">
    
    <section>
      
      <a className="btn btn-floating m-2" target="_blanck" href="https://github.com/MATIAS28" role="button"><img src="/img/github.png" alt="" /></a>

      <a className="btn btn-floating m-1" target="_blanck" href="https://www.linkedin.com/in/matias-mu%C3%B1oz-00a7581b6/" role="button"><img src="/img/linkedin.png" alt="" /></a>
    </section>
    
  </div>
  
      <p className="text-light">matiasmunoz.dev@gmail.com</p>
  
  <div className="text-center c">
    © 2022 Copyright: Matias Muñoz
  </div>
  
</footer>

        <style jsx> 
        {`
            footer{
              padding: 1.5rem;
            }

            img{
                width: 25px;
                transition: all 0.2s ease-in-out;
            }

            img:hover{
              transform: scale(1.5);
            }

            p{
              margin: 0px;
            }

            .c{
              color: gray;
            }
        `} 
        </style>


        </>
    )
}

export default Foot
