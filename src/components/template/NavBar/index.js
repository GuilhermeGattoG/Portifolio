import React from "react"
import "./style.module.scss"
import LinkNavigation from "../../atoms/LinkNavigation"
import Image from "../../atoms/Image"

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
                <Image src="author.jpg" alt="author" width="40px" circle={true} />
            </div>
            <div className={`nav-right`} >
                <LinkNavigation link="index" text="Home" />
                <LinkNavigation link="index" text="About" />
                <LinkNavigation link="index" text="Qualification" />
            </div>
        </nav>
    )
}

export default NavBar