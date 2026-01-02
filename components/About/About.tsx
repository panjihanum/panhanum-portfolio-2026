"use client";
import { motion } from "framer-motion";
import { Heading, Paragraph } from "../ui/Text";
import { FaCode, FaCogs, FaUsers, FaRocket } from "react-icons/fa";

export default function About() {
    return (
        <section
            id="about"
            className="w-full flex justify-center items-center py-20 px-4 bg-[#232532] border-t border-[#232532]/60"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 bg-[#232532] rounded-2xl shadow-xl p-8 md:p-14 border border-[#232532]/60"
            >
                {/* Left: About Text */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
                    <Heading className="text-white text-3xl md:text-4xl font-bold mb-2">
                        About Me
                    </Heading>
                    <Paragraph className="text-slate-300 text-base md:text-lg">
                        Hi! I’m Panji Hanum, a passionate Full-stack Developer with 5+ years of
                        experience. I love building scalable, high-performance web applications and
                        solving complex problems with clean code. My expertise covers Java Spring
                        Boot, React, Next.js, API integration, and modern web technologies. I enjoy
                        collaborating in teams, optimizing performance, and delivering impactful
                        digital solutions.
                    </Paragraph>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 w-full">
                        <div className="flex flex-col items-center gap-2 bg-sky-900/30 rounded-xl p-4">
                            <FaCode className="text-sky-400 text-2xl" />
                            <span className="text-sky-200 text-xs font-semibold">
                                Full-stack Dev
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-fuchsia-900/30 rounded-xl p-4">
                            <FaCogs className="text-fuchsia-300 text-2xl" />
                            <span className="text-fuchsia-100 text-xs font-semibold">
                                API Integration
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-emerald-900/30 rounded-xl p-4">
                            <FaRocket className="text-emerald-300 text-2xl" />
                            <span className="text-emerald-100 text-xs font-semibold">
                                Performance
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-yellow-900/30 rounded-xl p-4">
                            <FaUsers className="text-yellow-200 text-2xl" />
                            <span className="text-yellow-100 text-xs font-semibold">
                                Collaboration
                            </span>
                        </div>
                    </div>
                </div>
                {/* Right: Highlight Card */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-80 flex flex-col items-center gap-6 bg-[#232532] border border-sky-800/30 rounded-2xl shadow-lg p-6"
                >
                    <div className="text-4xl font-extrabold text-sky-400">5+</div>
                    <div className="text-slate-200 text-lg font-semibold text-center">
                        Years Experience
                    </div>
                    <div className="flex flex-col gap-2 text-xs text-slate-400">
                        <span>Java Spring Boot, React, Next.js</span>
                        <span>API, Microservices, Docker</span>
                        <span>Performance, Teamwork</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
