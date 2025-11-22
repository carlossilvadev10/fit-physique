"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonialData = [
    {
        img: "/assets/img/testimonial/lucy.jpg",
        imgAlt: "testimonial-1",
        message: "El mejor gimnasio, siempre motivada gracias a las rutinas y entrenadores.",
        name: "Lucy Cooper",
    },
    {
        img: "/assets/img/testimonial/michael.jpg",
        imgAlt: "testimonial-2",
        message: "Entrenadores excelentes y un ambiente positivo que me impulsa cada día.",
        name: "Michael Smith",
    },
    {
        img: "/assets/img/testimonial/maria.jpg",
        imgAlt: "testimonial-3",
        message: "Instalaciones modernas y cómodas, cada visita es una gran experiencia.",
        name: "María García",
    },
    {
        img: "/assets/img/testimonial/patrick.jpg",
        imgAlt: "testimonial-4",
        message: "Me encanta la energía del lugar, siempre salgo con más fuerza y motivación.",
        name: "Patrick Johnson",
    },
    {
        img: "/assets/img/testimonial/victoria.jpg",
        imgAlt: "testimonial-5",
        message: "Ambiente acogedor y entrenamientos desafiantes que me ayudan a crecer.",
        name: "Victoria Lee",
    },
    {
        img: "/assets/img/testimonial/louis.jpg",
        imgAlt: "testimonial-6",
        message: "Gran variedad de equipos y clases, nunca me aburro de entrenar aquí.",
        name: "Louis Martin",
    }
]

const Testimonial = () => {
    return (
        <section className = "py-12 xl:py-24" id = "testimonial">
            <div className = "container mx-auto">
                <motion.h2 variants = {fadeIn("up", 0.4)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "h2 text-center">
                    Testimonios de nuestros clientes
                </motion.h2>
                <motion.div variants = {fadeIn("up", 0.6)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "">
                    <Swiper slidesPerView = {1} spaceBetween = {30} modules = {[Pagination]} pagination = {{ clickable: true }} breakpoints = {{ 768: { slidesPerView: 2, spaceBetween: 30 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }} className = "h-80">
                        {
                            testimonialData.map((person, i) => (
                                <SwiperSlide key = {i} className = "h-full">
                                    <div className = "flex flex-col items-center justify-center h-full gap-6 text-center">
                                        <Image src = {person.img} alt = {person.imgAlt} width = {90} height = {90} className = "rounded-full border-2 border-accent" />
                                        <div className = "flex flex-col items-center justify-center">
                                            <FaQuoteLeft className = "text-2xl text-gray-300" />
                                            <p className = "max-w-[380px] mb-4">
                                                {person.message}
                                            </p>
                                            <span className = "text-2xl text-accent">
                                                {person.name}
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonial;