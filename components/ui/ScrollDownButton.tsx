"use client";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

interface ScrollDownButtonProps {
    sections?: string[];
}

const DEFAULT_SECTIONS = ["#about", "#skills", "#experience", "#portfolio", "#contact"];

export default function ScrollDownButton({ sections = DEFAULT_SECTIONS }: ScrollDownButtonProps) {
    const handleClick = () => {
        const sectionEls = sections
            .map((id) => document.querySelector(id))
            .filter(Boolean) as HTMLElement[];
        if (sectionEls.length === 0) return;
        const scrollY = window.scrollY;
        let minDist = Infinity;
        let nextSection: HTMLElement | null = null;
        for (const el of sectionEls) {
            const rect = el.getBoundingClientRect();
            const elTop = rect.top + scrollY;
            if (elTop > scrollY + 10) {
                const dist = elTop - scrollY;
                if (dist < minDist) {
                    minDist = dist;
                    nextSection = el;
                }
            }
        }
        if (!nextSection) {
            nextSection = sectionEls[0];
        }
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const [show, setShow] = React.useState(true);
    React.useEffect(() => {
        const onScroll = () => {
            const sectionEls = sections
                .map((id) => document.querySelector(id))
                .filter(Boolean) as HTMLElement[];
            if (sectionEls.length === 0) return setShow(false);
            const lastSection = sectionEls[sectionEls.length - 1];
            if (!lastSection) return setShow(false);
            const rect = lastSection.getBoundingClientRect();
            const windowH = window.innerHeight;
            if (rect.bottom - windowH < 80) {
                setShow(false);
            } else {
                setShow(true);
            }
        };
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [sections]);
    if (!show) return null;
    return (
        <motion.button
            onClick={handleClick}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="fixed bottom-8 right-8 z-50 bg-sky-500 hover:bg-sky-600 text-white rounded-full p-4 shadow-lg animate-bounce focus:outline-none"
            aria-label="Scroll to next section"
        >
            <FaChevronDown className="text-2xl" />
        </motion.button>
    );
}
