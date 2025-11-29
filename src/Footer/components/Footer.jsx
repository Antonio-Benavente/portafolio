import '../styles/Footer.css'

export function Footer({ isDarkMode }) {
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className={`footer ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="footer-content">
                <span>© {currentYear} - Hecho con</span>
                <span className="footer-heart">❤</span>
                <span>por</span>
                <span className="footer-author">Antonio Benavente</span>
            </div>
        </footer>
    )
}