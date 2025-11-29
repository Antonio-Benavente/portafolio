import { useState } from 'react';
import { CONTACT_CONFIG } from './contact';

export function useContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const showStatusMessage = (message, type) => {
        setStatus({ message, type });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validación básica
        if (!formData.name || !formData.email || !formData.message) {
            showStatusMessage('Por favor completa todos los campos', 'error');
            return;
        }

        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showStatusMessage('Por favor ingresa un email válido', 'error');
            return;
        }

        setIsLoading(true);
        
        try {
            const response = await fetch(CONTACT_CONFIG.web3forms.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: CONTACT_CONFIG.web3forms.access_key,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `Nuevo mensaje de ${formData.name} desde tu portfolio`,
                    from_name: CONTACT_CONFIG.email.from_name
                })
            });

            const data = await response.json();

            if (data.success) {
                showStatusMessage('¡Mensaje enviado correctamente! Te responderé pronto.', 'success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error('Error de Web3Forms:', data);
                showStatusMessage('Hubo un error al enviar el mensaje. Intenta de nuevo.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showStatusMessage('Error de conexión. Por favor intenta más tarde.', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        status,
        isLoading,
        showToast,
        handleChange,
        handleSubmit,
        setShowToast
    };
}