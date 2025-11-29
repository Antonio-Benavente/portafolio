import { techIcons } from '../../Skills/components/techIcons';
import '../styles/Projects.css'
import { useState, useEffect } from 'react';
import conversor from "../../assets/proyectos/conversor.png"; 
import series from "../../assets/proyectos/series.png"; 
import ahorcado from "../../assets/proyectos/ahorcado.png"; 


export function Projects({ isDarkMode }) {
    const projects = [
        {
            id: 1,
            title: "Conversor Universal",
            description: "Conversor de unidades desarrollado con React y TypeScript. Permite la conversión de monedas, temperatura, longitud, peso y otras unidades. Cuenta con modo oscuro, sistema de favoritos e historial de conversiones.",
            image: conversor,
            technologies: ["React", "TypeScript", "CSS3", "Vite"],
            demoLink: "https://universal-conversor.netlify.app",
            codeLink: "https://github.com/Antonio-Benavente/conversor"
        },
        {
            id: 2,
            title: "Series Explorer",
            description: "Aplicación web para explorar series de televisión mediante consumo de APIs. Implementa un sistema de enrutamiento personalizado con path-to-regexp para navegación fluida entre vistas.",
            image: series,
            technologies: ["React", "JavaScript", "CSS3", "Vite"],
            demoLink: "https://series-finder.netlify.app/",
            codeLink: "https://github.com/Antonio-Benavente/series-finder"
        },
        {
            id: 3,
            title: "Juego del Ahorcado",
            description: "Juego interactivo del ahorcado desarrollado con JavaScript vanilla. Incluye interfaz intuitiva, diseño responsive y gestión de estados del juego con sistema de validación de entradas.",
            image: ahorcado,
            technologies: ["JavaScript", "CSS3", "HTML5"],
            demoLink: "https://antonio-benavente.github.io/juego-ahorcado/",
            codeLink: "https://github.com/Antonio-Benavente/juego-ahorcado"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Detectar tamaño de pantalla
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1200) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const extendedProjects = [...projects, ...projects, ...projects];

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    // Manejar el loop infinito
    useEffect(() => {
        if (currentIndex >= projects.length) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 500);
        } else if (currentIndex < 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(projects.length - 1);
            }, 500);
        } else {
            setTimeout(() => {
                setIsTransitioning(false);
            }, 500);
        }
    }, [currentIndex, projects.length]);

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [isTransitioning]);

    return (
        <section className={`projects ${isDarkMode ? 'dark' : 'light'}`} id="projects">
            <div className="projects-container">
                <h2 className="projects-title">
                    <span className="gradient-text">Proyectos</span>
                </h2>

                <div className="carousel-wrapper">
                    <button 
                        className="carousel-btn prev" 
                        onClick={prevSlide}
                        disabled={isTransitioning}
                        aria-label="Proyecto anterior"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>

                    <div className="carousel-container">
                        <div 
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
                                transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)' : 'none',
                                gridTemplateColumns: `repeat(${extendedProjects.length}, ${100 / itemsPerPage}%)`
                            }}
                        >
                            {extendedProjects.map((project, index) => (
                                <div key={`${project.id}-${index}`} className="carousel-slide">
                                    <article className="project-card">
                                        <div className="project-image">
                                            <img src={project.image} alt={project.title} />
                                        </div>

                                        <div className="project-content">
                                            <h3 className="project-name">{project.title}</h3>
                                            <p className="project-description">{project.description}</p>

                                            <div className="project-technologies">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span key={techIndex} className="tech-tag-icon" title={tech}>
                                                        {techIcons[tech] || tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="project-links">
                                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                        <polyline points="15 3 21 3 21 9" />
                                                        <line x1="10" y1="14" x2="21" y2="3" />
                                                    </svg>
                                                    Demo
                                                </a>
                                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link code">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="16 18 22 12 16 6" />
                                                        <polyline points="8 6 2 12 8 18" />
                                                    </svg>
                                                    Código
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button 
                        className="carousel-btn next" 
                        onClick={nextSlide}
                        disabled={isTransitioning}
                        aria-label="Siguiente proyecto"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Blobs de fondo */}
            <div className="gradient-blob blob-1"></div>
            <div className="gradient-blob blob-2"></div>
        </section>
    )
}