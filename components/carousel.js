import { useState } from "react"

export const  Carousel = ({imgs}) => {
  const [img, setImg] = useState(0)
  
  const nextImg = () => {
    const newIndex = (img + 1) % imgs.length;
    setImg(newIndex)
  }

  const prevImg = () => {
    const newIndex = (img - 1 + imgs.length) % imgs.length;
    setImg(newIndex);
  }

    return(
        <div className="d-block">
          <div>
          <img className="w-100 rounded my-2" src={imgs[img]} alt=""/>
          </div>
          <div className="d-flex justify-content-center my-2">
            <div style={{borderRadius: '9999px', border: 'none'}} className="d-flex justify-content-around align-items-center">
              <button id="button" className="btn bg-primary w-100 text-light font-weight-bold" onClick={prevImg}>{'<'}</button>
              <h6 className="d-flex mx-2 w-100 text-muted">{(img+1)+'/'+imgs.length}</h6>
              <button id="button" className="btn bg-primary w-100 text-light font-weight-bold" onClick={nextImg}>{'>'}</button>
            </div>
          </div>

          <style jsx>
          {`
            @keyframes bounce {
              0% {
              transform: scale(1);
              }
              50% {
              transform: scale(1.2);
              }
              100% {
              transform: scale(1);
              }
            }

            #button{
              transition-property: all;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 150ms;
            }

            #button:active {
            animation: bounce 0.3s;
            }
          `}
          </style>
        </div>
    )
} 