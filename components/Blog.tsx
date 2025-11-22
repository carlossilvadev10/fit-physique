"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogData";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const Blog = () => {
    return (
        <section className = "bg-primary-300 text-white py-24" id = "blog">
            <div className = "container mx-auto">
                <motion.h2 variants = {fadeIn("up", 0.4)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "h2 text-center mb-8">
                    Blogs
                </motion.h2>
                <motion.div variants = {fadeIn("up", 0.6)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "">
                    <Swiper slidesPerView = {1} spaceBetween = {30} breakpoints = {{ 768: { slidesPerView: 2, spaceBetween: 15 }, 1024: { slidesPerView: 3 }, 1400: { slidesPerView: 4 } }} className = "h-[420px] md:max-w-[660px] lg:max-w-none mb-8">
                        {
                            blogData.map((blog, i) => (
                                <SwiperSlide key = {i}>
                                    <div className = "flex flex-col items-center justify-start h-full mx-auto max-w-80">
                                        <Image src = {blog.img} alt = {blog.imgAlt} width = {320} height = {266} className = "mb-4" />
                                        <div className = "flex flex-col items-start">
                                            <p className = "max-w-[380px] text-[12px] uppercase tracking-[3px] mb-1">
                                                {blog.date}
                                            </p>
                                            <Link href = {blog.href} className = "hover:text-accent transition-all duration-300">
                                                <h5 className = "h5">
                                                    {blog.title}
                                                </h5>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        <SwiperNavButtons containerStyles = "flex justify-between gap-1 absolute w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] right-0 bottom-[16rem] left-0 mx-auto z-50" btnStyles = "flex items-center justify-center text-white w-14 h-14 bg-accent transition-all dutaion-300" iconStyles = "text-2xl" />
                    </Swiper>
                </motion.div>
                <motion.div variants = {fadeIn("up", 0.8)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "">
                    <CustomButton text = "Ver todos" containerStyles = "block w-[196px] h-[62px] mx-auto" />
                </motion.div>
            </div>
        </section>
    )
}

export default Blog;