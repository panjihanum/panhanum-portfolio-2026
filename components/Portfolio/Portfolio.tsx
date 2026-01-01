"use client";
import { motion } from "framer-motion";
import { Heading } from "../ui/Text";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "TAAT - Web Platform",
        period: "Sep 2024 - Sekarang",
        description:
            "TAAT is a platform developed to enhance automation, communication, and SEO optimization for business operations.",
        highlights: [
            "Developed from scratch using Nest.js (Backend) & Next.js (Frontend) with best practices.",
            "Implemented WhatsApp messaging, data scraping with Python, and SEO automation.",
            "Integrated Kommo & Brevo for sales communication.",
        ],
        skills: ["Nest.js", "Next.js", "Python", "SEO", "Kommo", "Brevo"],
        image: "/portfolio/taat.png",
        link: "https://taat.id",
        github: null,
    },
    {
        title: "Nebula Underwriting - MSIG Life",
        period: "Mei 2024 - Sekarang",
        description:
            "Nebula is a product for MSIG Life, focusing on underwriting automation and product management.",
        highlights: [
            "Managed code with Java Spring (Backend) & Vue.js (Frontend).",
            "Developed RESTful APIs, automated CI/CD, and optimized Oracle DB.",
            "Collaborated with cross-functional teams for high-quality delivery.",
        ],
        skills: ["Spring Boot", "Java", "Vue.js", "Oracle", "Jenkins"],
        image: "/portfolio/msig.png",
        link: null,
        github: null,
    },
    {
        title: "IDN Financial Trending Saham",
        period: "Feb 2025 - Mar 2025",
        description:
            "Automated app to collect and send top 50 trending stocks based on Google data.",
        highlights: [
            "Scraped trending stock data with Python.",
            "Analyzed news, sent real-time reports to Telegram.",
        ],
        skills: ["Python", "Flask", "Telegram API"],
        image: "/portfolio/idn.png",
        link: null,
        github: null,
    },
    {
        title: "Web Yoshinoya Configurator",
        period: "Agu 2022 - Agu 2024",
        description:
            "Web-based platform for interactive product configuration for Yoshinoya customers.",
        highlights: [
            "Developed with Laravel (Backend) & Next.js (Frontend).",
            "Collaborated with UI/UX, deployed with Docker/PM2 on CentOS.",
        ],
        skills: ["Laravel", "Next.js", "Docker", "CentOS"],
        image: "/portfolio/yoshinoya.png",
        link: null,
        github: null,
    },
    {
        title: "Techtalent - AKASIA.ID",
        period: "Jan 2024 - Feb 2024",
        description:
            "Web platform for customizing CVs and streamlining job recruitment.",
        highlights: [
            "Built admin panel, backend with Laravel & MySQL, frontend with React.js.",
            "Deployed on CentOS, enhanced interactivity with React.js.",
        ],
        skills: ["Laravel", "React.js", "MySQL", "CentOS"],
        image: "/portfolio/akasia.png",
        link: null,
        github: null,
    },
    {
        title: "ALAMI Sharia P2P - Mobile APP",
        period: "Des 2019 - Sep 2023",
        description:
            "Mobile app for Sharia-compliant peer-to-peer financing (Hijra).",
        highlights: [
            "Built with React Native, Redux.js, backend with Hibernate & PostgreSQL.",
        ],
        skills: ["React Native", "Redux.js", "Hibernate", "PostgreSQL"],
        image: "/portfolio/alami.png",
        link: null,
        github: null,
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="w-full flex justify-center items-center py-20 px-4 bg-[#232532] border-t border-[#232532]/60">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.01 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-5xl flex flex-col items-center gap-10"
            >
                <Heading className="text-white text-3xl md:text-4xl font-bold mb-2">Portfolio</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={proj.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                            className="relative flex flex-col bg-gradient-to-br from-slate-800/60 to-slate-900/30 border border-slate-700/40 rounded-2xl shadow-lg overflow-hidden group hover:shadow-sky-400/20 transition-shadow"
                        >
                            <div className="w-full h-48 bg-slate-700/30 flex items-center justify-center overflow-hidden">
                                {/* Gambar/preview project */}
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex flex-col gap-2 p-6">
                                <div className="flex items-center gap-2 text-sky-400 font-bold text-lg">
                                    {proj.title}
                                    {proj.link && (
                                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="ml-1 text-sky-400 hover:text-sky-300">
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                    {proj.github && (
                                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="ml-1 text-slate-400 hover:text-slate-200">
                                            <FaGithub />
                                        </a>
                                    )}
                                </div>
                                <div className="text-xs text-slate-400 mb-1">{proj.period}</div>
                                <div className="text-slate-200 text-sm mb-2">{proj.description}</div>
                                <ul className="list-disc list-inside text-slate-300 text-xs mb-2 pl-2">
                                    {proj.highlights.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {proj.skills.map((skill) => (
                                        <span key={skill} className="bg-sky-700/20 text-sky-300 px-3 py-1 rounded-full text-xs font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
