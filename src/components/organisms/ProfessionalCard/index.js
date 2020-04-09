import React from "react"
import styles from "./styles.module.scss"
import Link from "../../atoms/Link"
import Image from "../../atoms/Image";

const ProfessionalCards = ({ org, image, text, explanation }) => {
    const expandDiv = (e) => {
        const divToBeExpanded = e.currentTarget.parentElement.parentElement.parentElement.parentElement.children[1]

        if(divToBeExpanded.classList.contains(styles.avoidAnimation)) {
            divToBeExpanded.classList.remove(styles.avoidAnimation)
        }
    }

    const reduceDiv = (e) => {
        const divToBeReduced = e.currentTarget.parentElement.parentElement.parentElement.children[1]

        if(!divToBeReduced.classList.contains(styles.reduceAnimation)) {
            divToBeReduced.classList.add(styles.reduceAnimation)
        }

        divToBeReduced.addEventListener("animationend", () => {
            divToBeReduced.classList.add(styles.avoidAnimation)
            divToBeReduced.classList.remove(styles.reduceAnimation)
        }, {once: true})
    }

    return (
            <div className={styles.card}>
                <div className={styles.reducedContent}>
                    <div className={styles.cardImage}>
                        <h1>{org}</h1>
                    </div>
                    <div className={styles.cardTitle}>
                        <Link onClick={(e) => expandDiv(e)} text={text} color={"primary"} />
                    </div>
                </div>
                <div className={`${styles.expandedContent} ${styles.avoidAnimation}`}>
                    <Image src={image} alt={image} width={"80%"} />
                    <p>{explanation}</p>
                    <Link onClick={(e) => reduceDiv(e)} text={"Diminuir"} color={"primary"}/>
                </div>
            </div>
    )
}

export default ProfessionalCards