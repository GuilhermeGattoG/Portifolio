import React from "react"

const Image = ({src, width, alt, circle = false}) => {
    // const getSrc = () => {
    //     return require(src)  //require(`assets/images/${src}`)
    // }
    
    return (
        <img alt={alt} src={`assets/images/${src}`} style={{ width: `${width}`, borderRadius: circle ? "50%" : "0%" }} />
    )
}

export default Image