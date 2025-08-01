import { Navbar } from "../Components/Navbar";
import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground} from "@/Components/StarBackground";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillsSection, } from "../Components/SkillsSection";
import { ContactSection } from "../Components/ContactSection";
import { ProjectsSection } from "../Components/ProjectsSections";
import { Footer } from "../Components/Footer";

export const Home = () => {
    return (
         <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
{  /* Theme Toggle */   }
{/* <ThemeToggle className ="hidden lg:block"/> */}
{  /*  Background Effect */   }
<StarBackground/>
 {  /*  Navbar*/   }
<Navbar/>
 {  /*  Main content*/   }
<main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
</main>
{  /*  Footer*/   }
<Footer />

    </div> 
    );
};
 