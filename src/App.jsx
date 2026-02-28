import About from "./pages/about";
import Navbar from "./components/navbar";
import Hero from "./pages/hero";
import Footer from "./components/footer";
import Projects from "./pages/projects";
import Contact from "./components/contactbar";
import Timeline from "./components/timeline";
import Learn from "./pages/learn";

function App() {
  return (
    <div>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-60"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative overflow-x-hidden z-10">
        <Navbar />

        <main className="main-content">
          <section id="home" className="pt-20">
            <Hero />
          </section>

          <section
            id="about"
            className="w-full  panel  flex items-center pt-10  justify-center "
          >
            <About />
          </section>
          <div className="flex items-center justify-center">
            <div className="h-[1px] w-[1500px] my-15 bg-gradient-to-r from-transparent via-gray-700 via-50% to-transparent" />
          </div>
          <section
            id="projects"
            className="panel panel-projects items-center flex justify-center "
          >
            <Projects />
          </section>
          <div className="flex items-center justify-center">
            <div className="h-[1px] w-[1500px] bg-gradient-to-r my-15 from-transparent via-gray-700 via-50% to-transparent" />
          </div>
          <section id="learn">
            <Learn />
          </section>
        </main>
        <Footer />
      </div>
      <Contact />
    </div>
  );
}

export default App;
