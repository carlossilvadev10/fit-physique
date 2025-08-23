"use client";

import React from "react";
import MembershipSlider from "./MembershipSlider";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const Membership = () => {
    return (
        <motion.section variants = {fadeIn("up", 0.2)} initial = "hidden" whileInView = "show" viewport = {{ once: false, amount: 0.2 }} className = "py-8 xl:py-0 xl:h-[130vh] bg-membership bg-cover bg-center relative before:w-full before:h-full before:bg-black/50 before:absolute before:top-0 before:z-10" id = "prices">
            <div className = "flex flex-col xl:pt-24 relative h-full container mx-auto px-0 text-white z-20">
                <motion.h2 variants = {fadeIn("up", 0.4)} initial = "hidden" whileInView = "show" className = "h2 text-white text-center mb-8">
                    Membresías
                </motion.h2>
                <motion.div variants = {fadeIn("up", 0.6)} initial = "hidden" whileInView = "show" viewport = {{ once: false, amount: 0.2 }} className = "">
                    <MembershipSlider />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Membership;