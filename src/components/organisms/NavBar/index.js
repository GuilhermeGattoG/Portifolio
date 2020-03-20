import React from "react"
import "./styles.module.scss"
import LinkNavigation from "../../atoms/LinkNavigation"

const NavBar = () => {

    let prevScrollpos = window.pageYOffset

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset

        if (prevScrollpos > currentScrollPos) {
            document.getElementsByTagName("nav")[0].style.top = "0"
        } else {
            document.getElementsByTagName("nav")[0].style.top = "-60px"
        }

        prevScrollpos = currentScrollPos
    }

    const scrollToDiv = (classId) => {
        window.scrollTo({top: (document.getElementById(classId).offsetTop), left: 0, behavior: "smooth"})
    }

    return (
        <nav>
            <div className={`nav-left`} >
            </div>
            <div className={`nav-right`} >
                <LinkNavigation onClick={() => scrollToDiv("personal")} text="Pessoal" />
                <LinkNavigation onClick={()  => scrollToDiv("professional")} text="Profissional" />
                <LinkNavigation onClick={() => scrollToDiv("about")} text="Este Site" />
                <LinkNavigation onClick={() => scrollToDiv("tecnologies")} text={"Tecnologias"} />
                <LinkNavigation onClick={() => scrollToDiv("contato")} text={"Contato"} />
            </div>
        </nav>
    )
}

export default NavBar