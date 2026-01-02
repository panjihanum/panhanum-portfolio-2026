import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { cn } from "./cn";

const socials = [
    {
        href: "https://www.linkedin.com/in/panji-hanum/",
        label: "LinkedIn",
        icon: FaLinkedin,
    },
    {
        href: "https://github.com/panjihanum",
        label: "GitHub",
        icon: FaGithub,
    },
    {
        href: "https://www.instagram.com/panhanum/",
        label: "Instagram",
        icon: FaInstagram,
    },
    {
        href: "mailto:panhanum.dev@gmail.com",
        label: "Email",
        icon: FaEnvelope,
    },
    {
        href: "tel:+6282113589617",
        label: "Phone",
        icon: FaPhone,
    },
];

export function SocialLinks({ className }: { className?: string }) {
    return (
        <div className={cn("flex flex-wrap gap-4 justify-center items-center", className)}>
            {socials.map(({ href, label, icon: Icon }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-slate-100 hover:text-sky-400 transition-colors text-2xl"
                >
                    <Icon />
                </a>
            ))}
        </div>
    );
}
