import React from "react"
import styles from "./styles.module.scss"
import Image from "../../atoms/Image";

const ProfessionalCards = ({ image, text }) => {
    console.log("image --- text")
    console.log(image)
    console.log(text)



    return (
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    <Image width={"100%"} src={"utfpr-logo.svg"} alt={"UTFPR"} />
                </div>
                <div className={styles.cardTitle}>
                    {text}
                </div>
            </div>
    )
}

export default ProfessionalCards