"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const classes = [
    {
        name: "culturismo",
        img: "/assets/img/classes/bodybuilding.jpg",
        imgAlt: "body-building-img",
        description: "Desarrolla tu fuerza y masa muscular con entrenamientos diseñados para esculpir tu cuerpo y alcanzar tu máximo potencial físico.",
    },
    {
        name: "cardio",
        img: "/assets/img/classes/cardio.jpg",
        imgAlt: "cardio-img",
        description: "Quema calorías, mejora tu resistencia y fortalece tu corazón con rutinas dinámicas y de alto impacto.",
    },
    {
        name: "crossfit",
        img: "/assets/img/classes/crossfit.jpg",
        imgAlt: "crossfit-img",
        description: "Entrenamientos intensos y variados que combinan fuerza, velocidad y resistencia para llevar tu cuerpo al límite.",
    },
    {
        name: "fitness",
        img: "/assets/img/classes/fitness.jpg",
        imgAlt: "fitness-img",
        description: "Ejercicios completos que equilibran fuerza, flexibilidad y resistencia, ideales para mantener un estilo de vida activo y saludable.",
    },
]

const Classes = () => {
    return (
        <section className = "" id = "class">
            <motion.div variants = {fadeIn("up", 0.6)} initial = "hidden" whileInView = "show" viewport = {{ once: false, amount: 0.2 }} className = "grid grid-cols-1 lg:grid-cols-2">
                {
                    classes.map((item, i) => (
                        <div key = {i} className = "flex flex-col items-center justify-center relative w-full h-[300px] lg:h-[485px]">
                            {/* overlay */}
                            <div className = "bg-black/20 absolute w-full h-full top-0 z-10" />
                            <Image src = {item.img} alt = {item.imgAlt} fill className = "object-cover" />
                            {/* text & btn */}
                            <div className = "flex flex-col items-center justify-center gap-4 max-w-[380px] text-center z-30">
                                <motion.h3 variants = {fadeIn("up", 0.4)} initial = "hidden" whileInView = "show" viewport = {{ once: false, amount: 0.2 }} className = "h3 text-accent">
                                    {item.name}
                                </motion.h3>
                                <motion.p variants = {fadeIn("up", 0.6)} initial = "hidden" whileInView = "show" viewport = {{ once: false, amount: 0.2 }} className = "text-white">
                                    {item.description}
                                </motion.p>
                                <motion.div variants = {fadeIn("up", 0.8)} initial = "hidden" whileInView = "show" viewport = {{ once: false, amount: 0.2 }} className = "">
                                    <CustomButton text = "Leer más" containerStyles = "w-[164px] h-[46px]" />
                                </motion.div>
                            </div>
                        </div>
                    ))
                }
            </motion.div>
        </section>
    )
}

export default Classes;