import React from "react"
import styles from "./styles.module.scss"
import Link from "../../atoms/Link"

const ProfessionalCards = ({ org, image, text }) => {
    const expandDiv = (e) => {
        const divToBeExpanded = e.currentTarget.parentElement.parentElement.parentElement.parentElement.children[1]

        // if(!divToBeExpanded.classList.contains(styles.expandAnimation)) {
            divToBeExpanded.classList.toggle(styles.avoidAnimation)
            // divToBeExpanded.children[1].style.display = "flex"
        // }
        // else {
        //     divToBeExpanded.children[1].style.display = "none"
        //     divToBeExpanded.classList.toggle(styles.expandAnimation)
        // }

        console.log(divToBeExpanded)
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
                    <h1>Conteúdo expandido</h1>
                </div>
            </div>
    )
}

export default ProfessionalCards