import React from "react"
import styles from "./styles.module.scss"

import Image from "../../atoms/Image"

const Footer = () => {
    const goToPage = (socialMediaLink) => {
        window.location.replace(socialMediaLink)
    }

    return (
        <div id={"contato"} className={styles.footer} >
            <h1>Para entrar em contato comigo</h1>
            <p>Dê uma olhada no meu e-mail e redes sociais</p>
            <div className={styles.facebook} onClick={() => goToPage("https://www.facebook.com/guilherme.gattogomes")} >
                <Image src="facebook-logo.svg" alt="facebook" width="30px" />
            </div>
            <div className={styles.linkedin} onClick={() => goToPage("https://www.linkedin.com/in/guilherme-gatto-5a346215b")} >
                <Image src="linkedin-logo.svg" alt="LinkedIn" width="30px" />
            </div>
            <div className={styles.github} onClick={() => goToPage("https://github.com/GuilhermeGattoG")} >
                <Image src="github-logo.svg" alt="github" width="30px" />
            </div>
            <div className={styles.gmail} onClick={() => goToPage("mailto:guilherme.gatto.g@gmail.com")} >
                <Image src="gmail-logo.svg" alt="github" width="30px" />
            </div>
            <br/><br/><br/>
            <p>Made with &#128147; by &#128008;</p>
        </div>
    )
}

export default Footer