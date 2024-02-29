import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Proyects } from "./pages/Proyects";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import NavbarDos from "./components/NavbarDos";
import { useEffect, useState } from "react";
import "./assets/styles/prueba.css";

export const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <NavbarDos />
      <div className="bg-[#1A191D]">
        <section className="max-w-5xl w-11/12 mx-auto">
          {showScrollButton && (
            <button
              onClick={scrollToTop}
              // className="fixed bottom-10 right-10 cursor-pointer bg-[#0E1950] px-4 py-4 rounded-full text-white"
              className={`fixed bottom-10 right-10 cursor-pointer bg-[#FDCA65] px-4 py-4 rounded-full text-white ${
                showScrollButton ? "animate-fadeIn" : "animate-fadeOut"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          <Home />
          <Proyects />
          <Skills />
          <Contact />
        </section>
      </div>
      <Footer />
    </>
  );
};
