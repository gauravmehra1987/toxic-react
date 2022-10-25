import React from 'react'
import "../styles/imageSlider.css"

import { images } from "../utils/images";

const ImageSlider = () => {
    return (
        <div className="container">
            {images.map(({ img }) => {
                return <img src={img} className="image" width={"100%"}></img>
            })
            }
        </div>
    )
}

export default ImageSlider