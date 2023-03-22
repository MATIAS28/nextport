import { useState } from "react"

export const  Carousel = ({display}) => {
  const [img, setImg] = useState(0)
  if (img > 8) {
    setImg(0)
  }

  if (img < 0) {
    setImg(8)
  }
  const imgs = ['/carousel/img1.png', '/carousel/img2.png', '/carousel/img3.png', '/carousel/img4.png', '/carousel/img5.png', '/carousel/img6.png', '/carousel/img7.png', '/carousel/img8.png', '/carousel/img9.png', ]
    return(
        <div style={{display: display}}>
          <img className="d-block w-100" src={imgs[img]} alt=""/>
          <div className="d-flex justify-content-between p-4">
          <button className="btn btn-outline-primary" onClick={() => setImg(prevImg => prevImg-1)}>Anterior</button>
          <button className="btn btn-outline-primary" onClick={() => setImg(prevImg => prevImg+1)}>Siguiente</button>
          </div>
        </div>
    )
} 