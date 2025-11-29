import '../styles/Skills.css'
import { techIcons } from './techIcons';

export function Skills({ isDarkMode }) {
  const renderSkillItem = (skillName) => (
    <div className="skill-item" key={skillName}>
      {techIcons[skillName]}
      <span>{skillName}</span>
    </div>
  );

  return (
    <section id='skills' className={`skills ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="skills-container">
        <h2 className="skills-title">
          <span className="gradient-text">Habilidades</span>
        </h2>
        <div className="skills-grid">
          
          {/* FrontEnd */}
          <div className="skill-category">
            <h3 className="category-title">FrontEnd</h3>
            <div className="skills-list">
              {['Tailwind', 'JavaScript', 'React', 'TypeScript', 'HTML5', 'CSS3', 'Vite'].map(renderSkillItem)}
            </div>
          </div>

          {/* BackEnd */}
          <div className="skill-category">
            <h3 className="category-title">BackEnd</h3>
            <div className="skills-list">
              {['Node.js', 'Java', 'C#'].map(renderSkillItem)}
            </div>
          </div>

          {/* Bases de datos */}
          <div className="skill-category">
            <h3 className="category-title">Bases de datos</h3>
            <div className="skills-list">
              {['MySQL', 'PostgreSQL', 'SQL'].map(renderSkillItem)}
            </div>
          </div>

          {/* Control de versiones */}
          <div className="skill-category">
            <h3 className="category-title">Control de versiones</h3>
            <div className="skills-list">
              {['Git', 'GitHub'].map(renderSkillItem)}
            </div>
          </div>

          {/* Otros */}
          <div className="skill-category">
            <h3 className="category-title">Otros</h3>
            <div className="skills-list">
              {['Swagger', 'Notion', 'Excalidraw'].map(renderSkillItem)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}