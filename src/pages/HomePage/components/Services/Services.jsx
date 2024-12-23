import { useEffect, useRef, useState } from 'react';
import './services.scss';
import Card from '../../../../components/Card/Card';
import servicios1 from '/assets/servicios/servicios1.jpg';
import servicios2 from '/assets/servicios/servicios2.jpeg';
import servicios3 from '/assets/servicios/servicios3.jpg';

const Services = () => {
  const servicesRef = useRef([]);
  const titleRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [hasTitleBeenSeen, setHasTitleBeenSeen] = useState(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === titleRef.current) {
          
            if (entry.isIntersecting && !hasTitleBeenSeen) {
              setIsTitleVisible(true);
              setHasTitleBeenSeen(true);  
            }
          } else {
            const index = servicesRef.current.indexOf(entry.target);
            if (index !== -1 && entry.isIntersecting) {
              // Solo agregar la clase de fade-in una vez
              if (!entry.target.classList.contains('fade-in')) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
              }
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    servicesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hasTitleBeenSeen]);  

  const cards = [
    {
      title: "Consultoría para Comercios",
      description:
        "Ofrecemos asesoramiento integral para comercios en áreas clave como normativas, estrategias de crecimiento y gestión de riesgos, asegurando operaciones eficientes y exitosas.",
      image: servicios3,
    },
    {
      title: "Seguridad Industrial",
      description:
        "Implementamos medidas de seguridad para proteger a los trabajadores y las instalaciones, desde la señalización hasta el uso de equipos de protección personal (EPP), asegurando un ambiente laboral seguro.",
      image: servicios2,
    },
    {
      title: "Habilitación de Locales Comerciales",
      description:
        "Gestionamos todo el proceso de habilitación de locales comerciales según las normativas locales, garantizando que los negocios operen de manera legal y segura, cumpliendo con las regulaciones requeridas.",
      image: servicios1,
    },
  ];

  return (
    <div className="servicios-container">
      <h2 ref={titleRef} className={isTitleVisible ? 'fade-in' : 'fade-out'}>
        Servicios
      </h2>
      <div className="servicios-list">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (servicesRef.current[index] = el)}
            className="servicio fade-out"  
          >
            <Card title={card.title} description={card.description} image={card.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
