import BackgroundPattern from "./components/BackgroundPattern";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ComicSection from "./components/ComicSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <BackgroundPattern />
      <Header />
      <main>
        <Hero />
        <ComicSection />
      </main>
      <Footer />
    </div>
  );
}