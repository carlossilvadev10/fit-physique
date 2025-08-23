"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogData";
import CustomButton from "./CustomButton";
import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const footerContainerVariant: Variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.6,
            duration: 0.5,
            ease: "linear",
        }
    },
}

const footerItem: Variants = {
    hidden: {
        y: 20,
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.6, 0.3, 0.8],
        }
    },
}

const Footer = () => {
    const latestPosts = blogData.slice(-3);

    return (
        <footer className = "bg-primary-300 pt-24">
            <div className = "container mx-auto pb-2">
                <motion.div variants = {footerContainerVariant} initial = "hidden" whileInView = "show" viewport = {{ once: false, amount: 0.3 }} className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-white">
                    <motion.div variants = {footerItem} className = "flex flex-col gap-4">
                        <Link href = "#">
                            <Image src = "/assets/img/logo.png" alt = "logo" width = {117} height = {55} />
                        </Link>
                        <p className = "max-w-sm text-justify">
                            Fit Physique · Tu mejor versión, más fuerte y saludable cada día.
                        </p>
                        <ul className = "flex flex-col gap-4">
                            <li className = "flex items-center gap-4">
                                <FaMapMarkerAlt className = "text-xl text-accent" />
                                <span>Huacho, Perú</span>
                            </li>
                            <li className = "flex items-center gap-4">
                                <FaPhoneAlt className = "text-xl text-accent" />
                                <span>+51 987 654 321</span>
                            </li>
                            <li className = "">
                                <Link className = "flex items-center gap-4" href = "#">
                                    <FaEnvelope className = "text-xl text-accent" />
                                    <span>tucorreo@gmail.com</span>
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div variants = {footerItem} className = "">
                        <h4 className = "h4 text-accent mb-4">
                            Últimas publicaciones
                        </h4>
                        <div className="flex flex-col divide-y divide-dotted divide-gray-400">
                            {
                                latestPosts.map((post, i) => (
                                    <Link key = {i} href = {post.href} className = "flex items-center gap-4 hover:text-accent transition-all duration-300 py-4">
                                        <Image src = {post.img} alt = {post.imgAlt} width = {64} height = {64} className = "rounded-md object-cover" />
                                        <div className = "flex flex-col">
                                            <p className = "text-xs uppercase tracking-[3px]">
                                                {post.date}
                                            </p>
                                            <h5 className = "h5 leading-snug">
                                                {post.title}
                                            </h5>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </motion.div>
                    <motion.div variants = {footerItem} className = "">
                        <h4 className = "h4 text-accent mb-4">
                            Galería
                        </h4>
                        <div className = "flex flex-wrap gap-2">
                            <Link href = "#">
                                <Image src = "/assets/img/trainers/david.jpg" alt = "trainer-1" width = {100} height = {100} />
                            </Link>
                            <Link href = "#">
                                <Image src = "/assets/img/trainers/matt.jpg" alt = "trainer-2" width = {100} height = {100} />
                            </Link>
                            <Link href = "#">
                                <Image src = "/assets/img/trainers/rosy.jpg" alt = "trainer-3" width = {100} height = {100} />
                            </Link>
                            <Link href = "#">
                                <Image src = "/assets/img/trainers/sofia.jpg" alt = "trainer-4" width = {100} height = {100} />
                            </Link>
                            <Link href = "#">
                                <Image src = "/assets/img/testimonial/louis.jpg" alt = "testimonial-1" width = {100} height = {100} />
                            </Link>
                            <Link href = "#">
                                <Image src = "/assets/img/testimonial/lucy.jpg" alt = "testimonial-2" width = {100} height = {100} />
                            </Link>
                            <Link href = "#">
                                <Image src = "/assets/img/testimonial/maria.jpg" alt = "testimonial-3" width = {100} height = {100} />
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div variants = {footerItem} className = "">
                        <h4 className = "h4 text-accent mb-4">
                            Suscríbete
                        </h4>
                        <div className = "flex flex-col gap-4">
                            <p>
                                Recibe novedades, consejos y promociones exclusivas directo en tu correo.
                            </p>
                            <form action = "#" className = "flex items-center">
                                <input type = "email" name = "email" id = "email" placeholder = "Correo elctrónico" className = "h-[50px] outline-none px-4 text-primary-300" />
                                <CustomButton text = "Enviar" containerStyles = "h-[50px] px-8" />
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <div className = "text-white border-t border-white/20 py-12">
                <div className = "container mx-auto h-full">
                    <div className = "flex items-center justify-between h-full">
                        <span className = "">Copyright &copy; {new Date().getFullYear()} Fyt Physique. Todos los derechos reservados. <a href = "https://github.com/carlossilvadev10" target = "_blank" rel = "noopener noreferrer" className = "font-semibold">carlossilvadev10</a>.</span>
                        <ul className = "flex gap-4 text-xl">
                            <li>
                                <Link href = "#" className = "text-white hover:text-accent transition-all">
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link href = "#" className = "text-white hover:text-accent transition-all">
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link href = "#" className = "text-white hover:text-accent transition-all">
                                    <FaYoutube />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;