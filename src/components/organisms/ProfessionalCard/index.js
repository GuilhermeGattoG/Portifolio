import React from "react"
import styles from "./styles.module.scss"
import Image from "../../atoms/Image";

const ProfessionalCards = ({ image, text }) => {
    const onclick = () => {
        console.log("On click")
    }

    return (
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    <Image width={"100%"} src={"utfpr-logo.svg"} alt={"UTFPR"} />
                </div>
                <div className={styles.cardTitle}>
                    {text}
                    <Button onClick={() => onclick()} text={text} color={"primary"} border={"1px"} />
                </div>
            </div>
    )
}

export default ProfessionalCards