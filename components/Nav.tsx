"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";

const links = [
    {
        name: "Inicio",
        target: "home",
        offset: -100,
    },
    {
        name: "Sobre nosotros",
        target: "about",
        offset: -80,
    },
    {
        name: "Clases",
        target: "class",
        offset: -80,
    },
    {
        name: "Equipo",
        target: "team",
        offset: 0,
    },
    {
        name: "Precios",
        target: "prices",
        offset: -40,
    },
    {
        name: "Testimonios",
        target: "testimonial",
        offset: 0,
    },
    {
        name: "Blog",
        target: "blog",
        offset: 0,
    },
    {
        name: "Contacto",
        target: "contact",
        offset: 0,
    },
]

const Nav = ({ containerStyles } : { containerStyles: string }) => {
    return (
        <nav className = {`${containerStyles}`}>
            {
                links.map((link, i) => (
                    <ScrollLink key = {i} to = {link.target} offset = {link.offset} smooth spy activeClass = "active" className = "cursor-pointer hover:text-accent transition-all">
                        {link.name}
                    </ScrollLink>
                ))
            }
        </nav>
    )
}

export default Nav;