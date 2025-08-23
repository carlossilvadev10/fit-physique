"use client";

import React from "react";
import { FaDumbbell, FaUsers } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Achievements from "./Achievements";

const featured = [
    {
        icon: <FaUsers />,
        title: "Entrenadores certificados",
        subtitle: "Reconocidos por su excelencia a nivel internacional.",
    },
    {
        icon: <IoIosPricetags />,
        title: "Excelentes precios",
        subtitle: "Comprometidos con tu progreso y bienestar.",
    },
    {
        icon: <FaDumbbell />,
        title: "Equipos modernos",
        subtitle: "Tecnología de última generación para tus entrenamientos.",
    },
]

const About = () => {
    return (
        <section className = "py-14 lg:py-16" id = "about">
            <div className = "container mx-auto">
                <div className = "flex flex-col items-center text-center gap-2 mb-8">
                    <motion.h2 variants = { fadeIn("up", 0.4) } initial = "hidden" whileInView = "show" viewport = {{ once: false, amount: 0.2 }} className = "h2">
                        Sobre nosotros
                    </motion.h2>
                    <motion.p variants = { fadeIn("up", 0.6) } initial = "hidden" whileInView = "show" viewport = {{ once: false, amount: 0.2 }} className = "max-w-[600px] mx-auto">
                        En nuestro gimnasio creemos que cada persona tiene el potencial de transformar su vida a través del entrenamiento.
                        Contamos con entrenadores especializados, equipos modernos y un ambiente motivador diseñado para ayudarte a alcanzar
                        tus objetivos, ya sea ganar fuerza, mejorar tu salud o descubrir una mejor versión de ti mismo. Aquí no solo entrenas,
                        también te conviertes en parte de una comunidad que te impulsa a dar lo mejor cada día.
                    </motion.p>
                </div>
                <motion.div variants = { fadeIn("up", 0.8) } initial = "hidden" whileInView = "show" viewport = {{ once: false, amount: 0.2 }} className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                    {
                        featured.map((feature, i) => (
                            <div key = {i} className = "flex flex-col items-center justify-center gap-4 border p-10">
                                <div className = "flex items-center justify-center text-4xl bg-primary-300 text-white w-20 h-20 rounded-full">
                                    {feature.icon}
                                </div>
                                <div className = "flex flex-col items-center gap-2 text-center">
                                    <h4 className = "h4 text-accent">
                                        {feature.title}
                                    </h4>
                                    <p>
                                        {feature.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </motion.div>
                <motion.div variants = { fadeIn("up", 1) } initial = "hidden" whileInView = "show" viewport = {{ once: false, amount: 0.2 }} className = "">
                    <Achievements />
                </motion.div>
            </div>
        </section>
    )
}

export default About;