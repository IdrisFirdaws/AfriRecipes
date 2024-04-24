import HeroSection from "../components/home/HeroSection";
import SkillSection from "../components/home/SkillSection";
import ExtraSection from "../components/home/ExtraSection";
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component mounts or updates
    }, []); // Empty dependency array ensures it only runs once on mount

    return (
        <div>
            <HeroSection />
            <SkillSection />
            <ExtraSection />
        </div>
    )
}