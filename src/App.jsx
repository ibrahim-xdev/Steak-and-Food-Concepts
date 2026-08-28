import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-char-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
