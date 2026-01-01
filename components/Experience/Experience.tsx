"use client";
import { motion } from "framer-motion";
import { Heading } from "../ui/Text";
import { FaBriefcase, FaBuilding, FaLaptopCode } from "react-icons/fa";

const experiences = [
    {
        company: "TAAT",
        location: "Jakarta (Remote)",
        role: "Full-stack Developer (Freelance)",
        period: "Sep 2024 – Present",
        description: [
            "Implement code with Nest.js (Backend) & Next.js (Frontend) using Microservice concept.",
            "Create WA Service, scraping data with Python, and SEO optimization.",
            "Integrate Kommo & Brevo for communication systems.",
            "Implement Redis for caching, session, rate limiting, and queue system.",
            "Server config with Ubuntu & Docker.",
            "Improve performance by 50% with clean code & Redis.",
        ],
        skills: ["Next.js", "Nest.js", "Docker", "Redis", "SEO"],
    },
    {
        company: "PT. MSIG Life",
        location: "Jakarta (Remote)",
        role: "Full-stack Developer (Fulltime)",
        period: "May 2024 – May 2025",
        description: [
            "Develop scalable backend microservices with Java Spring Boot & Quarkus.",
            "Enhance frontend with Nuxt.js, optimize DB queries (Oracle).",
            "Integrate REST APIs, automate CI/CD with Jenkins.",
            "Collaborate with cross-functional teams.",
        ],
        skills: ["Spring Boot", "Quarkus", "Nuxt.js", "Oracle", "Jenkins"],
    },
    {
        company: "PT. Akal Karya Indonesia",
        location: "Jakarta (Remote)",
        role: "Full-stack Developer (Freelance)",
        period: "Dec 2022 – Aug 2025",
        description: [
            "Develop reusable code with Laravel/Nest.js (BE) & Next.js/React.js (FE).",
            "Collaborate with UI/UX designer.",
            "Deploy with Docker on Centos Server.",
        ],
        skills: ["Laravel", "Nest.js", "Next.js", "Docker"],
    },
    {
        company: "Gaji Cermat",
        location: "Jakarta (Remote)",
        role: "Front-end Developer (Freelance)",
        period: "Dec 2022 – Oct 2023",
        description: [
            "Develop reusable code with React Native (Mobile) & React (Web).",
            "Integrate REST APIs, collaborate with UI/UX & mobile teams.",
        ],
        skills: ["React.js", "React Native", "REST API"],
    },
    {
        company: "PT. BPRS Hijra",
        location: "Jakarta (Remote)",
        role: "Software Engineer (Fulltime)",
        period: "Jun 2019 – Sep 2023",
        description: [
            "Develop backend with Java Spring Boot & mobile with React Native.",
            "Implement microservices, ORM Hibernate, and Kafka for mail service.",
            "Deploy with Jenkins, collaborate with UI/UX & cross-functional teams.",
        ],
        skills: ["Spring Boot", "Quarkus", "React Native", "PostgreSQL", "Kafka"],
    },
    {
        company: "Arkademy",
        location: "Jakarta (Onsite)",
        role: "Software Engineer (Fulltime)",
        period: "Apr 2019 – Jun 2019",
        description: [
            "Develop mobile apps with React Native, Redux, Adonis JS.",
            "Build backend REST API with MySQL, deploy on Heroku.",
            "Implement authentication with JWT & OAuth.",
        ],
        skills: ["React Native", "Redux", "Adonis.js", "MySQL"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="w-full flex justify-center items-center py-20 px-4 bg-[#232532] border-t border-[#232532]/60">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.01 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-5xl flex flex-col items-center gap-10"
            >
                <Heading className="text-white text-3xl md:text-4xl font-bold mb-2">Experience</Heading>
                <div className="relative w-full flex flex-col items-center">
                    <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-700/40 to-fuchsia-700/20 rounded-full z-0" style={{ minHeight: '100%' }} />
                    <div className="flex flex-col gap-12 w-full z-10">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={exp.company + exp.period}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, delay: idx * 0.1 }}
                                className="relative flex flex-col md:flex-row gap-6 bg-gradient-to-br from-slate-800/60 to-slate-900/30 border border-slate-700/40 rounded-2xl p-6 shadow-lg group hover:shadow-sky-400/20 transition-shadow"
                                style={{ marginLeft: '2.5rem' }}
                            >
                                <div className="absolute -left-12 top-8 md:top-10 w-8 h-8 flex items-center justify-center">
                                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-sky-400 to-fuchsia-400 border-4 border-[#232532] shadow-lg block group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="flex flex-col items-start w-full md:w-1/4 gap-2">
                                    <div className="flex items-center gap-2 text-sky-400 font-bold text-lg">
                                        <FaBriefcase />
                                        {exp.company}
                                    </div>
                                    <div className="text-xs text-slate-400">{exp.location}</div>
                                    <div className="text-xs text-slate-400">{exp.period}</div>
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <div className="font-semibold text-slate-100 mb-1 text-lg">{exp.role}</div>
                                    <ul className="list-disc list-inside text-slate-300 text-sm mb-2 pl-2">
                                        {exp.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {exp.skills.map((skill) => (
                                            <span key={skill} className="bg-sky-700/20 text-sky-300 px-3 py-1 rounded-full text-xs font-medium">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
