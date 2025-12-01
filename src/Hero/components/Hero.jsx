import { useState, useEffect } from 'react'
import '../styles/Hero.css'
import pdf from "../../assets/AntonioBenaventeCV.pdf";


export function Hero({ isDarkMode }) {
    const roles = ['Fullstack Developer', 'UI/UX Enthusiast', 'Code Designer', 'Problem Solver']
    const [currentRole, setCurrentRole] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id='hero' className={`hero ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Antonio Benavente
                    </h1>

                    <div className="hero-subtitle">
                        <span className="role-text">{roles[currentRole]}</span>
                    </div>

                    <p className="hero-description">
                        Apasionado por crear experiencias web increíbles y funcionales.
                        Transformo ideas en interfaces digitales modernas y accesibles.
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">
                            Contáctame
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#projects" className="btn btn-secondary">
                            Ver proyectos
                        </a>
                    </div>

                    <div className="hero-social">
                        <a href='https://github.com/Antonio-Benavente' target='_blank' rel="noopener noreferrer" className="social-link github">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                            <span className="social-text">GitHub</span>
                        </a>

                        <a href='https://linkedin.com/in/antonio-benavente' target='_blank' rel="noopener noreferrer" className="social-link linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 11v5" />
                                <path d="M8 8v.01" />
                                <path d="M12 16v-5" />
                                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                            </svg>
                            <span className="social-text">LinkedIn</span>
                        </a>

                        <a href={pdf} download="AntonioBenaventeCV.pdf" target='_blank' rel="noopener noreferrer" className="social-link cv">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-cv"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M13 11l1.5 6l1.5 -6" /></svg>
                            <span className="social-text">Descargar CV</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Blobs de fondo */}
            <div className="gradient-blob blob-1"></div>
            <div className="gradient-blob blob-2"></div>
        </section>
    )
}