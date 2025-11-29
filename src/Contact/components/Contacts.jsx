import { useContact } from '../hooks/useContact';
import { Toast } from './Toast.jsx';
import '../styles/Contact.css';

export function Contact({ isDarkMode }) {
    const {
        formData,
        status,
        isLoading,
        showToast,
        handleChange,
        handleSubmit,
        setShowToast
    } = useContact();

    return (
        <section id='contact' className={`contact ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="contact-container">
                <h2 className="contact-title">
                    <span className="gradient-text">Contacto</span>
                </h2>
                
                <div className="contact-content">
                    <ContactInfo />
                    <ContactForm 
                        formData={formData}
                        isLoading={isLoading}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>

            <Toast 
                message={status?.message || ''}
                type={status?.type || 'info'}
                show={showToast}
                onClose={() => setShowToast(false)}
            />
        </section>
    );
}

// Subcomponente para la información de contacto
function ContactInfo() {
    const contactLinks = [
        {
            href: "mailto:antoniogbf9@hotmail.com",
            onClick: (e) => {
                e.preventDefault();
                window.location.href = 'mailto:antoniogbf9@hotmail.com';
            },
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"/>
                    <path d="M3 7l9 6l9 -6"/>
                </svg>
            ),
            label: "Email",
            value: "antoniogbf9@hotmail.com"
        },
        {
            href: "https://www.linkedin.com/in/antonio-benavente",
            onClick: (e) => {
                e.preventDefault();
                window.open('https://www.linkedin.com/in/antonio-benavente', '_blank', 'noopener,noreferrer');
            },
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M8 11v5"/>
                    <path d="M8 8v.01"/>
                    <path d="M12 16v-5"/>
                    <path d="M16 16v-3a2 2 0 1 0 -4 0"/>
                    <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"/>
                </svg>
            ),
            label: "LinkedIn",
            value: "Antonio Benavente"
        }
    ];

    return (
        <div className="contact-info">
            <h3 className="contact-subtitle">¡Trabajemos juntos!</h3>
            <p className="contact-description">
                ¿Tienes una idea o proyecto en mente? No dudes en contactarme. 
                Estoy siempre abierto a nuevas oportunidades y colaboraciones.
            </p>
            
            <div className="contact-links">
                {contactLinks.map((link, index) => (
                    <a 
                        key={index}
                        href={link.href} 
                        className="contact-link"
                        onClick={link.onClick}
                    >
                        <div className="contact-icon">
                            {link.icon}
                        </div>
                        <div className="contact-text">
                            <p className="contact-label">{link.label}</p>
                            <p className="contact-value">{link.value}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

// Subcomponente para el formulario
function ContactForm({ formData, isLoading, handleChange, handleSubmit }) {
    const formFields = [
        {
            id: "name",
            name: "name",
            label: "Nombre y apellidos",
            type: "text",
            placeholder: "Tu nombre completo"
        },
        {
            id: "email",
            name: "email",
            label: "Correo electrónico",
            type: "email",
            placeholder: "tu@email.com"
        }
    ];

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            {formFields.map(field => (
                <div key={field.id} className="form-group">
                    <label htmlFor={field.id} className="form-label">{field.label}</label>
                    <input 
                        type={field.type}
                        id={field.id}
                        name={field.name}
                        className="form-input"
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                    />
                </div>
            ))}
            
            <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea 
                    id="message" 
                    name="message" 
                    className="form-textarea"
                    rows="5"
                    placeholder="Cuéntame sobre tu proyecto..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            
            <SubmitButton isLoading={isLoading} />
        </form>
    );
}

// Subcomponente para el botón de envío
function SubmitButton({ isLoading }) {
    return (
        <button type="submit" className="form-button" disabled={isLoading}>
            <span>{isLoading ? 'Enviando...' : 'Enviar mensaje'}</span>
            {!isLoading ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"/>
                </svg>
            ) : (
                <svg className="spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
            )}
        </button>
    );
}