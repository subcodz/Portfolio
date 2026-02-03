import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Slide() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.to(textRef.current, {
      xPercent: -100,          // slide text left
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",         // controls scroll length
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        // markers: true,      // 👈 enable ONLY for debugging
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <h1
        ref={textRef}
        className="text-[8vw] font-wide whitespace-nowrap text-white pl-[100vw]"
      >
        JUST A BIT ABOUT ME
      </h1>
    </section>
  );
}
