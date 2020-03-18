import React from "react"
import styles from "./styles.module.scss"
import Tecnology from "../../molecules/Tecnology";

const Tecnologies = () => {
    return (
        <div className={styles.tecnologiesContainer}>
            <h1>Tecnologias utilizadas:</h1>
            <Tecnology image={"react.svg"} title={"React.js"} text={"Utilizei esse framework pois facilita a componentização e consequentemente facilita uma desejada ampliação de conteúdo nesta SPA"} />
        </div>
    )
}

export default Tecnologies