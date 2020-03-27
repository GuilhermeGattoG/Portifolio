import React from "react"
import styles from "./styles.module.scss"
import ProfessionalCard from "../../organisms/ProfessionalCard";

const Professional = () => {
    return (
        <div id={"professional"} className={styles.professionalContainer} >
            <div className={styles.containerTitle}>
                <h1>Minha formação profissional</h1>
            </div>
            <div className={styles.cardsContainer}>
                    <ProfessionalCard org={"UTFPR"} image={"utfpr-logo.svg"} text={"Graduação"} />
                    <ProfessionalCard org={"IE"} image={"ie-logo.svg"} text={"Estágio"} />
                    <ProfessionalCard org={"MedPass"} image={"medpass-logo.svg"} text={"Developer"}/>
            </div>
        </div>
    )
}

export default Professional