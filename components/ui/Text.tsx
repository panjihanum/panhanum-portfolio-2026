import { cn } from "./utils";
import { ReactNode } from "react";

export function Heading({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <h1
            className={cn(
                "text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg",
                className
            )}
        >
            {children}
        </h1>
    );
}

export function Subheading({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <h2 className={cn("text-xl md:text-2xl font-semibold text-sky-400 mb-2", className)}>
            {children}
        </h2>
    );
}

export function Paragraph({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <p className={cn("text-base md:text-lg text-slate-200 max-w-xl mx-auto mb-6", className)}>
            {children}
        </p>
    );
}
