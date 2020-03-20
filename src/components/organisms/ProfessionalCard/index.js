import React from "react"
import styles from "./styles.module.scss"
import Image from "../../atoms/Image";
import Button from "../../atoms/Button"

const ProfessionalCards = ({ org, image, text }) => {
    const onclick = () => {
        console.log("On click")
    }

    return (
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    {/*<Image width={"100%"} src={"utfpr-logo.svg"} alt={"UTFPR"} />*/}
                    <h1>{org}</h1>
                </div>
                <div className={styles.cardTitle}>
                    <Button onClick={() => onclick()} text={text} color={"primary"} border={"3px"} width={"90%"} height={"50px"} fontSize={"1.5rem"} />
                </div>
            </div>
    )
}

export default ProfessionalCards