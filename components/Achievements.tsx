"use client";

import React from "react";
import { useRef } from "react";
import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { motion, useInView } from "framer-motion";

const stats = [
    {
        number: 10,
        icon: FaBriefcase,
        text: "cursos de formación",
    },
    {
        number: 880,
        icon: FaClock,
        text: "horas de trabajo",
    },
    {
        number: 2350,
        icon: ImUsers,
        text: "clientes satisfechos",
    },
    {
        number: 8,
        icon: FaTrophy,
        text: "premios internacionales",
    }
]

const statsContainerVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            duration: 0.5,
            ease: "linear" as const,
        }
    }
}

const statsItem = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.6, 0.3, 0.8] as [number, number, number, number],
        }
    }
}

const Achievements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section>
            <div className = "container mx-auto">
                <motion.div variants = {statsContainerVariant} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.3 }} className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
                    {
                        stats.map((item, i) => (
                            <motion.div variants = {statsItem} key = {i} className = "flex flex-col items-center justify-center">
                                <div className = "border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                                    <div ref = {ref} className = "flex items-center justify-center w-full h-full border border-accent/30 text-5xl rounded-full">
                                    {/* render the CountUp animation only the component is in view (isInView is true) */}
                                    {
                                        isInView && (<CountUp start = {0} end = {item.number} duration = {5} />)
                                    }
                                    </div>
                                </div>
                                {/* text */}
                                <div className = "flex flex-col items-center justify-center text-center">
                                    <item.icon className = "text-3xl mb-2" />
                                    <h4 className = "h4">
                                        {item.text}
                                    </h4>
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default Achievements;