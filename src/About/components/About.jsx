import { useState } from 'react';
import '../styles/About.css'
import { CertificatesModal } from './CertificatesModal';
import aboutImg from "../../assets/about.png";

export function About({ isDarkMode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <section id='about' className={`about ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="about-container">
                    <h2 className="about-title">
                        <span className="gradient-text">Sobre mí</span>
                    </h2>

                    <div className="about-content">
                        <div className="about-image">
                            <div className="image-frame">
                                <img
                                    src={aboutImg}
                                    alt="Antonio Benavente"
                                    className="profile-image"
                                />
                            </div>
                            <div className="image-glow"></div>
                        </div>

                        <div className="about-text">
                            <p className="about-description">
                                Hola, soy <strong>Antonio Benavente</strong>, desarrollador fullstack con sólidos conocimientos en <strong>HTML, CSS, JavaScript, React, Node.js y TypeScript</strong>. Me apasiona crear interfaces intuitivas, limpias y responsivas, enfocadas en brindar la mejor experiencia de usuario.
                            </p>
                            
                            <p className="about-description">
                                He desarrollado diversos proyectos personales que demuestran mi capacidad para construir
                                aplicaciones web funcionales y modernas. Mi objetivo es siempre aprender nuevas tecnologías
                                y mejorar mis habilidades para crear soluciones innovadoras.
                            </p>

                            <p className="about-description">
                                Egresado de <strong>Desarrollo de Sistemas de Información</strong> en el Instituto SISE,
                                donde adquirí una base sólida en el desarrollo de software y buenas prácticas.
                            </p>    

                            <button className="about-btn" onClick={() => setIsModalOpen(true)}>
                                Ver certificados
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-certificate"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" /><path d="M6 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

            </section>

            {isModalOpen && (
                <CertificatesModal
                    onClose={() => setIsModalOpen(false)}
                    isDarkMode={isDarkMode}
                />
            )}
        </>
    )
}