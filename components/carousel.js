import { useState } from "react"

export const  Carousel = ({imgs}) => {
  const [img, setImg] = useState(1)

    return(
        <div>
          <img className="d-block w-100 rounded-top pb-2" src={imgs[img-1]} alt=""/>
          <div className="d-flex justify-content-center p-4 border-bottom">
            <div style={{height: '3rem'}} className="d-flex align-items-center bg-dark rounded shadow-sm">
              <h4 className="m-0 p-2 text-danger font-weight-bold" style={{cursor: 'pointer'}} onClick={() => setImg(img-1 < 1 ? 1 : img-1)}>{'<'}</h4>
              <h6 style={{height: 'inherit', alignItems: 'center'}} className="d-flex m-0 p-2 text-warning">{img+'/'+imgs.length}</h6>
              <h4 className="m-0 p-2 text-danger font-weight-bold" style={{cursor: 'pointer'}} onClick={() => setImg(img+1 > imgs.length ? 1 : img+1)}>{'>'}</h4>
            </div>
          </div>
        </div>
    )
} 