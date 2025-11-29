import { useState, useEffect } from 'react';
import '../styles/CertificatesModal.css';

import java from "../../assets/certificates/java-todocode.png"; 
import javascript from "../../assets/certificates/javascript-cisco.png"; 
import phyton from "../../assets/certificates/phyton-cisco.png"; 
import programacion from "../../assets/certificates/programacion-platzi.png"; 
import bigschool from "../../assets/certificates/ia-bigschool.png"; 
import cybersecurity from "../../assets/certificates/cybersecurity-cisco.png"; 
import networking from "../../assets/certificates/networking-cisco.png"; 

export function CertificatesModal({ onClose, isDarkMode }) {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);
    
    const certificates = [
        {
            id: 1,
            title: "Java para principiantes",
            image: java,
            date: "2025",
            institution: "TodoCode",
            category: "Backend"
        },
        {
            id: 2,
            title: "JavaScript Essentials",
            image: javascript,
            date: "2024",
            institution: "Cisco",
            category: "Frontend"
        },
        {
            id: 3,
            title: "Python Essentials",
            image: phyton,
            date: "2022",
            institution: "Cisco",
            category: "Backend"
        },
        {
            id: 4,
            title: "Programación Básica",
            image: programacion,
            date: "2023",
            institution: "Platzi",
            category: "Fundamentos" 
        },
        {
            id: 5,
            title: "Desarrollo con IA",
            image: bigschool,
            date: "2025", 
            institution: "Big school",
            category: "Inteligencia Artificial"
        },
        {
            id: 6,
            title: "Cybersecurity Essentials",
            image: cybersecurity,
            date: "2023", 
            institution: "Cisco",
            category: "Ciberseguridad"
        },
        {
            id: 7,
            title: "Networking Essentials",
            image: networking,
            date: "2022", 
            institution: "Cisco",
            category: "Redes & Infraestructura"
        }
    ];

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.keyCode === 27) onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, []);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    const openZoom = (cert) => {
        setSelectedCertificate(cert);
        setIsZoomed(true);
    };

    const closeZoom = () => {
        setIsZoomed(false);
        setTimeout(() => setSelectedCertificate(null), 300);
    };

    return (
        <>
            <div
                className={`modal-overlay ${isDarkMode ? 'dark' : 'light'}`}
                onClick={handleOverlayClick}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">
                            <h2>Mis Certificados</h2>
                            <p>Formación y cursos completados</p>
                        </div>
                        <button onClick={onClose} className="close-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="certificates-grid">
                        {certificates.map(cert => (
                            <div
                                key={cert.id}
                                className="certificate-card"
                                onClick={() => openZoom(cert)}
                            >
                                <div className="certificate-image">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        loading="lazy"
                                    />
                                    <div className="certificate-overlay">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="white" strokeWidth="2" />
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" stroke="white" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="certificate-info">
                                    <span className="certificate-category">{cert.category}</span>
                                    <h3>{cert.title}</h3>
                                    <div className="certificate-meta">
                                        <span className="institution">{cert.institution}</span>
                                        <span className="date">{cert.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="modal-footer">
                        <a
                            href="https://drive.google.com/drive/folders/1_rxgk09M2IneqsNfGlD9yB7m9-D-Cyur"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="drive-link"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2" />
                                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            Ver carpeta completa en Google Drive
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal de zoom para imagen */}
            {selectedCertificate && (
                <div className={`zoom-overlay ${isZoomed ? 'active' : ''}`} onClick={closeZoom}>
                    <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
                        <button className="zoom-close" onClick={closeZoom}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                        <img
                            src={selectedCertificate.image}
                            alt={selectedCertificate.title}
                            className="zoomed-image"
                        />
                        <div className="zoom-info">
                            <h3>{selectedCertificate.title}</h3>
                            <p>{selectedCertificate.institution} • {selectedCertificate.date}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}