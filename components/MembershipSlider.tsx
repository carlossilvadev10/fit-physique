"use client";

import React from "react";
import CustomButton from "./CustomButton";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const membershipData = [
    {
        title: "Estándar",
        price: "50",
        description: "Ideal para iniciarte en el gimnasio con lo esencial.",
        benefits: [
            {
                icon: FaCheck,
                text: "Incluye membresía",
            },
            {
                icon: FaCheck,
                text: "Acceso a todas las instalaciones",
            },
            {
                icon: MdClose,
                text: "Asesoría nutricional",
            },
            {
                icon: FaCheck,
                text: "Consejos de salud y fitness",
            },
            {
                icon: MdClose,
                text: "Acceso diario al gimnasio",
            },
            {
                icon: FaCheck,
                text: "Acceso completo a todo",
            },
            {
                icon: MdClose,
                text: "Sin servicios adicionales",
            },
        ]
    },
    {
        title: "Ultimate",
        price: "65",
        description: "Plan completo con dieta personalizada y mayor flexibilidad.",
        benefits: [
            {
                icon: FaCheck,
                text: "Incluye membresía",
            },
            {
                icon: FaCheck,
                text: "Acceso a todas las instalaciones",
            },
            {
                icon: FaCheck,
                text: "Asesoría nutricional",
            },
            {
                icon: FaCheck,
                text: "Consejos de salud y fitness",
            },
            {
                icon: FaCheck,
                text: "Acceso diario al gimnasio",
            },
            {
                icon: FaCheck,
                text: "Acceso completo a todo",
            },
            {
                icon: MdClose,
                text: "Sin servicios adicionales",
            },
        ]
    },
    {
        title: "Profesional",
        price: "80",
        description: "Para atletas y usuarios avanzados con servicios premium.",
        benefits: [
            {
                icon: FaCheck,
                text: "Incluye membresía",
            },
            {
                icon: FaCheck,
                text: "Acceso a todas las instalaciones",
            },
            {
                icon: FaCheck,
                text: "Asesoría nutricional",
            },
            {
                icon: FaCheck,
                text: "Consejos de salud y fitness",
            },
            {
                icon: FaCheck,
                text: "Acceso diario al gimnasio",
            },
            {
                icon: FaCheck,
                text: "Acceso completo a todo",
            },
            {
                icon: FaCheck,
                text: "Con servicios adicionales",
            },
        ]
    },
]

const MembershipSlider = () => {
    return (
        <Swiper slidesPerView = {1} modules = {[Pagination]} pagination = {{ clickable: true }} breakpoints = {{ 768: { slidesPerView: 2, spaceBetween: 30 }, 1024: { slidesPerView: 3, spaceBetween: 30 } }} className = "min-h-[680px]">
            {
                membershipData.map((item, i) => (
                    <SwiperSlide key = {i}>
                        <div className = "border border-accent hover:bg-primary-300/80 w-full transition-all duration-300 max-w-sm xl:max-w-none mx-auto">
                            <div className = "px-[60px] border-b border-accent py-5">
                                <h4 className = "h4">
                                    {item.title}
                                </h4>
                            </div>
                            <p className = "text-justify m-4">
                                {item.description}
                            </p>
                            <div className = "px-[50px] py-[20px]">
                                <ul className = "flex flex-col gap-5 mb-7">
                                    {
                                        item.benefits.map((benefit, j) => (
                                            <li key = {j} className = "flex items-center gap-2">
                                                <benefit.icon className = "text-accent text-lg" />
                                                {benefit.text}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <p className = "flex items-center justify-center text-accent gap-1 mb-8">
                                    <sup className = "text-4xl">S/.</sup>
                                    <strong className = "text-6xl">
                                        {item.price}
                                    </strong>
                                    <em className = "self-end">/mes</em>
                                </p>
                                <div className = "flex items-center justify-center">
                                    <CustomButton text = "Suscribirse ahora" containerStyles = "w-[196px] h-[62px]" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MembershipSlider;