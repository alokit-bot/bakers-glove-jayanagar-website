import { useEffect } from "react";
import "@/App.css";
import BakersGlove from "@/pages/BakersGlove";

function App() {
  useEffect(() => {
    // Reveal-on-scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <BakersGlove />
    </div>
  );
}

export default App;
