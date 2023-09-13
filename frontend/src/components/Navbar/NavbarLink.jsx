import React from "react";


const NavbarLink = ({title, link}) => {
    return (
            <a className="text-nowrap nav-link" href={link}>{title}</a>
    )
}
export default NavbarLink;