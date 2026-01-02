import Hero from "@/components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Portfolio />
        </main>
    );
}
