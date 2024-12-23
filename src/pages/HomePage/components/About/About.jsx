import { useEffect, useRef, useState } from "react";
import "./about.scss";
import aboutImage from "/about.png";

const About = () => {
 const aboutRef = useRef(null);
 const [isVisible, setIsVisible] = useState(false);
 const [hasBeenSeen, setHasBeenSeen] = useState(false);

 useEffect(() => {
  const observer = new IntersectionObserver(
   ([entry]) => {
    if (entry.isIntersecting && !hasBeenSeen) {
     setIsVisible(true);
     setHasBeenSeen(true);
    }
   },
   { threshold: 0.2 }
  );

  if (aboutRef.current) {
   observer.observe(aboutRef.current);
  }

  return () => observer.disconnect();
 }, [hasBeenSeen]);

 return (
  <div className='about-container' ref={aboutRef}>
   <div className={`about-image ${isVisible ? "fade-in delay-1" : "fade-out"}`}>
    <img src={aboutImage} alt='Neira Seguridad' />
   </div>
   <div className='about-content'>
    <h2 className={isVisible ? "fade-in delay-2" : "fade-out"}>La empresa</h2>
    <p className={isVisible ? "fade-in delay-3" : "fade-out"}>
     Neira Seguridad es una empresa líder en el sector de higiene y seguridad, dedicada a ofrecer soluciones integrales para la protección y el bienestar de las personas. Contamos con un equipo
     altamente capacitado y con tecnología de punta para garantizar un ambiente seguro y saludable en todo tipo de instalaciones. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </p>
   </div>
  </div>
 );
};

export default About;
