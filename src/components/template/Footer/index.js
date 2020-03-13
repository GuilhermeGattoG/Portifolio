import React from "react"
import style from "./style.module.scss"

import Image from "../../atoms/Image"

const Footer = () => {
    const goToPage = (socialMediaLink) => {
        window.location.replace(socialMediaLink)
    }

    return (
        <div className={style.footer} >
            <p>Take a look to my social medias</p>
            <div className={style.facebook} onClick={() => goToPage("https://www.facebook.com/guilherme.gattogomes")} >
                <Image src="facebook-logo.svg" alt="facebook" width="30px" />
            </div>
            <div className={style.linkedin} onClick={() => goToPage("https://www.linkedin.com/in/guilherme-gatto-5a346215b")} >
                <Image src="linkedin-logo.svg" alt="LinkedIn" width="30px" />
            </div>
            <div className={style.github} onClick={() => goToPage("https://github.com/GuilhermeGattoG")} >
                <Image src="github-logo.svg" alt="github" width="30px" />
            </div>
        </div>
    )
}

export default Footer