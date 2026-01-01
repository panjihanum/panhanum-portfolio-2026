"use client";
import { motion } from "framer-motion";
import { Heading } from "../ui/Text";
import { FaJava, FaNodeJs, FaReact, FaDocker, FaDatabase, FaServer, FaVuejs, FaPython } from "react-icons/fa";
import { SiNestjs, SiSpringboot, SiNextdotjs, SiQuarkus, SiPostgresql, SiMysql, SiJenkins, SiRedis, SiLaravel, SiNuxtdotjs, SiOracle, SiApachekafka } from "react-icons/si";


const skillGroups = [
  {
    group: "Backend",
    color: "from-green-500/30 to-green-900/10",
    skills: [
      { name: "Java Spring Boot", icon: SiSpringboot, color: "text-green-400" },
      { name: "Quarkus", icon: SiQuarkus, color: "text-blue-400" },
      { name: "Nest.js", icon: SiNestjs, color: "text-red-400" },
      { name: "Laravel", icon: SiLaravel, color: "text-pink-400" },
      { name: "Express.js", icon: FaNodeJs, color: "text-green-300" },
      { name: "Python", icon: FaPython, color: "text-yellow-300" },
      { name: "Microservices", icon: FaServer, color: "text-fuchsia-400" },
    ],
  },
  {
    group: "Frontend",
    color: "from-sky-500/30 to-sky-900/10",
    skills: [
      { name: "React.js", icon: FaReact, color: "text-sky-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
      { name: "Nuxt.js", icon: SiNuxtdotjs, color: "text-green-300" },
      { name: "Vue.js", icon: FaVuejs, color: "text-green-400" },
      { name: "React Native", icon: FaReact, color: "text-sky-300" },
    ],
  },
  {
    group: "DevOps",
    color: "from-cyan-500/30 to-cyan-900/10",
    skills: [
      { name: "Docker", icon: FaDocker, color: "text-sky-300" },
      { name: "Jenkins", icon: SiJenkins, color: "text-red-300" },
    ],
  },
  {
    group: "Database",
    color: "from-emerald-500/30 to-emerald-900/10",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
      { name: "MySQL", icon: SiMysql, color: "text-yellow-400" },
      { name: "Oracle", icon: SiOracle, color: "text-orange-400" },
      { name: "Redis", icon: SiRedis, color: "text-red-400" },
      { name: "Kafka", icon: SiApachekafka, color: "text-purple-400" },
      { name: "Database", icon: FaDatabase, color: "text-emerald-400" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full flex justify-center items-center py-20 px-4 bg-[#232532] border-t border-[#232532]/60">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl flex flex-col items-center gap-10"
      >
        <Heading className="text-white text-3xl md:text-4xl font-bold mb-2">Skills</Heading>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${group.color} border border-slate-700/40 shadow-lg flex flex-col gap-4`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-slate-100">{group.group}</span>
                <span className="bg-slate-700/40 text-xs text-slate-300 px-2 py-0.5 rounded-full font-semibold">{group.skills.length} skills</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.12, rotate: -2 }}
                    className="flex flex-col items-center gap-2 bg-[#232532] border border-slate-700/40 rounded-xl p-4 shadow-md transition-all duration-200 hover:shadow-sky-400/20"
                  >
                    <span className={`text-3xl md:text-4xl ${skill.color}`}>{<skill.icon />}</span>
                    <span className="text-slate-200 text-xs font-semibold text-center mt-2">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
