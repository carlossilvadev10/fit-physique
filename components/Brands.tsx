"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const brandImages = [
    {
        src: "/assets/img/brands/brand-1.png",
        alt: "brand-1",
        href: "/",
    },
    {
        src: "/assets/img/brands/brand-2.png",
        alt: "brand-2",
        href: "/",
    },
    {
        src: "/assets/img/brands/brand-3.png",
        alt: "brand-33",
        href: "/",
    },
    {
        src: "/assets/img/brands/brand-4.png",
        alt: "brand-4",
        href: "/",
    },
    {
        src: "/assets/img/brands/brand-5.png",
        alt: "brand-5",
        href: "/",
    },
]

const brandContainerVariant: Variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            duration: 0.5,
            ease: "linear",
        }
    },
}

const brandItem: Variants = {
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

const Brands = () => {
    return (
        <section className = "py-8" id = "contact">
            <div className = "container mx-auto">
                <motion.div variants = {brandContainerVariant} initial = "hidden" whileInView = "show" viewport = {{ once: false, amount: 0.3 }} className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-8">
                    {
                        brandImages.map((img, i) => (
                            <motion.div variants = {brandItem} key = {i} className = "">
                                <Link href = {img.href} className = "group">
                                    <Image src = {img.src} alt = {img.alt} width = {204} height = {106} className = "opacity-50 group-hover:opacity-100 transition-all mx-auto" />
                                </Link>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default Brands;