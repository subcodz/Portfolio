import About from "./pages/about";
import Navbar from "./components/navbar";
import Hero from "./pages/hero";
import Footer from "./components/footer";
import Projects from "./pages/projects";
import Contact from "./components/contactbar";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-50"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative overflow-x-hidden z-10">
        <Navbar />

        <main className="main-content">
          <section id="home" className="min-h-screen ">
            <Hero />
          </section>

          <section
            id="about"
            className="w-full bg-blue-900/30 backdrop-blur-[40px] panel min-h-screen flex items-center justify-center px-5 relative"
          >
            <About />
          </section>

          <section
            id="projects"
            className="min-h-screen panel bg-violet-500/10 backdrop-blur-[40px] panel-projects items-center flex justify-center p-14 sm:p-14"
          >
            <Projects />
          </section>
        </main>
        <Footer />
      </div>
      <Contact />
    </div>
  );
}

export default App;
