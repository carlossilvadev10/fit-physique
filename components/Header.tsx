"use client";

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";

const Header = () => {
    const [headerActive, setHeaderActive] = useState(false);
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHeaderActive(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header className = {`fixed max-w-[1920px] w-full bg-primary-200 top-0 right-0 left-0 transition-all z-50 overflow-visible ${headerActive ? "h-[85px]" : "h-[110px]"}`}>
            <div className = "container mx-auto h-full flex items-center justify-between">
                {/* logo */}
                <Link href = "">
                    <Image src = "/assets/img/logo.png" width = {117} height = {55} alt = "logo" />
                </Link>
                {/* mobile nav */}
                <MobileNav containerStyles = {`flex xl:hidden flex-col text-center w-full left-0 text-base uppercase font-medium text-white gap-8 absolute inset-x-0 top-full bg-primary-200 transition-all ${openNav ? "max-h-max pt-8 pb-10 border-t border-white/10" : "max-h-0 pt-0 pb-0 overflow-hidden border-white/10"}`} closeMenu = {() => setOpenNav(false)} />
                {/* desktop nav */}
                <Nav containerStyles = "py-12 gap-4 text-white text-base uppercase font-medium transition-all hidden xl:flex" />
                {/* hide/open menu button */}
                <div className = "flex items-center gap-4">
                    {/* login & register buttons */}
                    <div className = "hidden md:flex items-center text-white gap-4">
                        <button className = "transition-all text-base uppercase font-medium bg-accent hover:bg-[#af0511] p-3 rounded-md">
                            Iniciar sesión
                        </button>
                        <button className = "transition-all text-base uppercase font-medium bg-primary-100 hover:bg-[#3c3b3b] p-3 rounded-md">
                            Registrarse
                        </button>
                    </div>
                    <button className = "text-white xl:hidden" onClick= {() => setOpenNav(!openNav)}>
                        <MdMenu className = "text-4xl" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;