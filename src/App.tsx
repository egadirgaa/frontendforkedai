import BackgroundPattern from "./components/BackgroundPattern";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ComicSection from "./components/ComicSection";
import Footer from "./components/Footer";
import Topgap from "./components/Topgap";

export default function App() {
  return (
    <div className="dark min-h-screen relative text-foreground">
      <BackgroundPattern />
      <Topgap />
      <Header />
      <main>
        <Hero />
        <section className="px-[10vw]">
        <ComicSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}