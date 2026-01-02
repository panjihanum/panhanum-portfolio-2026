"use client";
import { motion } from "framer-motion";
import { Heading, Subheading, Paragraph } from "../ui/Text";
import { SocialLinks } from "../ui/SocialLinks";
import { Button } from "../ui/button";
import ScrollDownButton from "../ui/ScrollDownButton";

import { FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-[#232532] px-4 py-12 overflow-hidden">
            {/* Background Accent */}
            {/* Parallax background */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="absolute left-[-80px] top-[-80px] w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse"
                    animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    style={{ willChange: "transform" }}
                />
                <motion.div
                    className="absolute right-[-60px] bottom-[-60px] w-60 h-60 bg-fuchsia-500/20 rounded-full blur-2xl animate-pulse"
                    animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                    style={{ willChange: "transform" }}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="z-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-[#232532] rounded-2xl shadow-2xl p-8 md:p-14 border border-[#232532]/60"
            >
                {/* Left: Avatar + Social */}
                <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/3">
                    <div className="relative w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-sky-500/30 to-fuchsia-500/20 flex items-center justify-center border-2 border-sky-700 shadow-xl">
                        <Image
                            src="/avatar-placeholder.png"
                            alt="Avatar"
                            width={160}
                            height={160}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                    <div className="w-full flex justify-center md:justify-start">
                        <SocialLinks />
                    </div>
                </div>

                {/* Right: Info */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
                    <Heading className="mb-1 tracking-tight text-white text-5xl md:text-6xl font-bold">
                        PANJI HANUM
                    </Heading>
                    <Subheading className="mb-2 text-sky-300 text-2xl md:text-3xl">
                        Full-stack Developer
                    </Subheading>
                    <Paragraph className="text-slate-300 text-base md:text-lg max-w-xl">
                        I’m a Software Engineer with 5+ years experience in full-stack development,
                        specializing in Java Spring Boot, React, and modern web technologies.
                        Passionate about scalable systems, API integration, and performance
                        optimization.
                    </Paragraph>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center mt-2">
                        <Button
                            asChild
                            variant="outline"
                            className="border-sky-400 text-sky-400 hover:bg-sky-400/10 flex items-center gap-2 shadow-lg"
                        >
                            <a href="mailto:panhanum.dev@gmail.com">
                                <FaEnvelope className="text-lg" /> panhanum.dev@gmail.com
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="border-sky-400 text-sky-400 hover:bg-sky-400/10 flex items-center gap-2 shadow-lg"
                        >
                            <a href="tel:+6282113589617">
                                <FaPhone className="text-lg" /> +62 821-1358-9617
                            </a>
                        </Button>
                    </div>
                    <div className="text-slate-400 text-sm mt-2">
                        Jakarta Timur, DKI Jakarta, 13930
                    </div>
                </div>
            </motion.div>
            <ScrollDownButton />
        </section>
    );
}
