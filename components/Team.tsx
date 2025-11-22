"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const trainerData = [
    {
        img: "/assets/img/trainers/david.jpg",
        imgAlt: "trainer-1",
        name: "David Williams",
        role: "Preparador físico de musculación",
        description:
        "David es especialista en culturismo con más de 10 años de experiencia en competiciones y programas de fuerza. Su enfoque combina disciplina, nutrición y rutinas avanzadas de musculación.",
        socials: [
            { icon: FaFacebook, href: "/" },
            { icon: FaTwitter, href: "/" },
            { icon: FaYoutube, href: "/" },
        ],
    },
    {
        img: "/assets/img/trainers/rosy.jpg",
        imgAlt: "trainer-2",
        name: "Rosy Rivera",
        role: "Instructora de entrenamiento cardiovascular",
        description:
        "Rosy es apasionada del cardio y la resistencia. Ha preparado a numerosos alumnos para mejorar su salud cardiovascular, perder peso y ganar energía con entrenamientos dinámicos y divertidos.",
        socials: [
            { icon: FaFacebook, href: "/" },
            { icon: FaTwitter, href: "/" },
            { icon: FaYoutube, href: "/" },
        ],
    },
    {
        img: "/assets/img/trainers/matt.jpg",
        imgAlt: "trainer-3",
        name: "Matt Stone",
        role: "Instructor certificado en CrossFit",
        description:
        "Matt domina el crossfit y los entrenamientos funcionales de alta intensidad. Su objetivo es llevar a cada alumno a superar sus límites mediante técnicas seguras y motivación constante.",
        socials: [
            { icon: FaFacebook, href: "/" },
            { icon: FaTwitter, href: "/" },
            { icon: FaYoutube, href: "/" },
        ],
    },
    {
        img: "/assets/img/trainers/sofia.jpg",
        imgAlt: "trainer-4",
        name: "Sofia Lauren",
        role: "Preparadora física de fitness",
        description:
        "Sofía es entrenadora de fitness enfocada en el bienestar integral. Combina rutinas de tonificación, movilidad y equilibrio para lograr un cuerpo saludable y una mente fuerte.",
        socials: [
            { icon: FaFacebook, href: "/" },
            { icon: FaTwitter, href: "/" },
            { icon: FaYoutube, href: "/" },
        ],
    },
]

const Team = () => {
    return (
        <section className = "py-12 xl:h-[130vh]" id = "team">
            <div className = "flex flex-col items-center justify-center container mx-auto h-full">
                <motion.h2 variants = {fadeIn("up", 0.4)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "h2 text-center mb-6">
                    Nuestros entrenadores
                </motion.h2>
                <motion.div variants = {fadeIn("up", 0.6)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {
                        trainerData.map((trainer, i) => (
                            <div key = {i} className = "flex flex-col items-center">
                                <div className = "relative w-80 h-[360px] mx-auto mb-4">
                                    <Image src = {trainer.img} alt = {trainer.imgAlt} fill />
                                </div>
                                <h4 className = "h4 mb-2 text-center">
                                    {trainer.name}
                                </h4>
                                <p className = "uppercase text-xs tracking-[3px] mb-2 text-center">
                                    {trainer.role}
                                </p>
                                <p className = "mb-6 max-w-80 mx-auto text-justify">
                                    {trainer.description}
                                </p>
                                <div className = "flex gap-12 justify-center">
                                    {
                                        trainer.socials.map((social, j) => (
                                            <div key = {j} className = "">
                                                <Link href = {social.href} className = "hover:text-accent transition-all">
                                                    <social.icon className = "text-lg" />
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </motion.div>
                <motion.div variants = {fadeIn("up", 0.6)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "">
                    <CustomButton text = "Ver todos los entrenadores" containerStyles = "w-[196px] h-[62px]" />
                </motion.div>
            </div>
        </section>
    )
}

export default Team;