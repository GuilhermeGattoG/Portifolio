import React from "react"
import styles from "./styles.module.scss"
import ProfessionalCard from "../../organisms/ProfessionalCard";

const Professional = ({ }) => {
    return (
        <div className={styles.professionalContainer} >
            <div className={styles.containerTitle}>
                <h1>Minha formação profissional</h1>
            </div>
            <div className={styles.cardsContainer}>
                    <ProfessionalCard image={"utfpr-logo.svg"} text={"Graduação"} />
                    <ProfessionalCard image={"ie-logo.svg"} text={"Estágio"} />
                    <ProfessionalCard image={"medpass-logo.svg"} text={"Developer"}/>
            </div>
        </div>
    )
}

export default Professional