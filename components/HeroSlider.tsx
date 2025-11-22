"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const HeroSlider = () => {
    return (
        <Swiper className = "h-full">
            <SwiperSlide>
                <div className = "h-full flex justify-end pt-48">
                    <div className = "flex flex-col items-center lg:items-start lg:max-w-[700px]">
                        <motion.h1 variants = {fadeIn("up", 0.4)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "h1 text-center lg:text-left mb-2">
                            <span className = "text-accent">Trabajo duro, </span> éxito seguro
                        </motion.h1>
                        <motion.p variants = {fadeIn("up", 0.6)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "text-white italic text-center lg:text-left mb-4">
                            En Fit Physique, creemos en la disciplina, la pasión y la constancia como el camino para alcanzar grandes resultados.
                        </motion.p>
                        <motion.div variants = {fadeIn("up", 0.8)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "">
                            <CustomButton text = "Empieza hoy" containerStyles = "w-[196px] h-[62px]" />
                        </motion.div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className = "h-full flex justify-end pt-48">
                    <div className = "flex flex-col items-center lg:items-start lg:max-w-[700px]">
                        <motion.h1 variants = {fadeIn("up", 0.4)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "h1 text-center lg:text-left mb-2">
                            <span className = "text-accent">Tu cuerpo, </span> tu mejor inversión
                        </motion.h1>
                        <motion.p variants = {fadeIn("up", 0.6)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "text-white italic text-center lg:text-left mb-4">
                            Cada entrenamiento en Fit Physique es un paso hacia una versión más fuerte, sana y llena de energía de ti mismo.
                        </motion.p>
                        <motion.div variants = {fadeIn("up", 0.8)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "">
                            <CustomButton text = "Empieza hoy" containerStyles = "w-[196px] h-[62px]" />
                        </motion.div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className = "h-full flex justify-end pt-48">
                    <div className = "flex flex-col items-center lg:items-start lg:max-w-[700px]">
                        <motion.h1 variants = {fadeIn("up", 0.4)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "h1 text-center lg:text-left mb-2">
                            <span className = "text-accent">Juntos, </span> hacia tus metas
                        </motion.h1>
                        <motion.p variants = {fadeIn("up", 0.6)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "text-white italic text-center lg:text-left mb-4">
                            En Fit Physique no entrenas solo, entrenas con una comunidad que te impulsa, te motiva y celebra cada uno de tus logros.
                        </motion.p>
                        <motion.div variants = {fadeIn("up", 0.8)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "">
                            <CustomButton text = "Empieza hoy" containerStyles = "w-[196px] h-[62px]" />
                        </motion.div>
                    </div>
                </div>
            </SwiperSlide>
            {/* swiper nav buttons */}
            <SwiperNavButtons containerStyles = "flex justify-center lg:justify-start gap-1 absolute bottom-4 mb-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 w-auto lg:w-[700px] h-auto lg:h-[130px] z-50 " btnStyles = " flex items-center justify-center w-[44px] h-[44px] lg:w-[56px] lg:h-[56px] border border-accent text-white hover:bg-accent transition-all duration-300 " iconStyles = "text-xl lg:text-2xl" />
        </Swiper>
    )
}

export default HeroSlider;