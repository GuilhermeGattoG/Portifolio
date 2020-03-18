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

    return (
        <nav>
            <div className={`nav-left`} >
            </div>
            <div className={`nav-right`} >
                <LinkNavigation link="index" text="Home" />
                <LinkNavigation link="index" text="About" />
                <LinkNavigation link="index" text="Qualification" />
                <LinkNavigation link={"index"} text={"Braziel"} />
            </div>
        </nav>
    )
}

export default NavBar