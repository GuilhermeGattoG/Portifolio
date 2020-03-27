import React from "react"
import styles from "./styles.module.scss"
import Image from "../../atoms/Image";

const listenerForPicture = () => {
    if(window.pageYOffset <= (document.getElementById("professional").offsetTop - document.getElementsByClassName(styles.picture)[0].children[0].clientHeight) && window.matchMedia("(min-width:480px)").matches){
        document.getElementsByClassName(styles.picture)[0].style.marginTop = `${(document.getElementsByClassName(styles.description)[0].clientHeight - (1.25 * document.getElementsByClassName(styles.picture)[0].children[0].clientHeight)) * (window.pageYOffset / document.getElementsByClassName(styles.description)[0].clientHeight)}px`
    }
}

window.addEventListener("scroll",listenerForPicture)


const Personal = () => {
    return (
        <div id={"personal"} className={styles.personalContainer}>
            <div className={styles.picture}>
                <Image width={"100%"} alt={"My Picuture"} src={"author.jpg"} circle={true} />
            </div>
            <div className={styles.description}>
                <h1>Sobre mim</h1>
                <p>
                    Nasci em Avaré e cresci em Itaí, interior de São Paulo, local onde ainda adolescente despertei minha curiosidade pela computação. Isto fez com que anos depois optasse por cursar Engenharia de Computação pela Universidade Tecnolóǵica Federal do Paraná.
                    <br/><br/>
                    No ambiente universitário pude trabalhar como Secretário de Finanças pelo Diretório Acadêmico de Computação (DACOMP). Nossa equipe era responsável pelo gerenciamento econômico, e controlava a movimentação do caixa do Diretório.
                    <br/><br/>
                    Em 2019 atuei como estagiário desenvolvendo aplicativos móveis pela empresa IE Tecnologia. Para tal, fiz uso do framework Ionic. Também atuei na manutenção do servidor da empresa, que contava principalmente com recursos na linguagem PHP.
                    <br/><br/>
                    Ao final deste mesmo ano já atuava como desenvolvedor Web Júnior na MedPass, onde utilizei React.js e Vue.js para implementar Single Page Applications (SPAs), bem como manutenção em em aplicações Mobile utilizando React Native.
                </p>
            </div>
        </div>
    )
}

export default Personal