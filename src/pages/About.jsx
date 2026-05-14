import myProfile from '../image/profile.jpeg'

const skills = {
  Frontend:  ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
  Backend:   ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
  Database:  ['MongoDB', 'Mongoose'],
  Tools:     ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
}
  const imageStyle = {
  width: '100px',      
  height: '100px',     
  borderRadius: '50%', 
  objectFit: 'cover',   
  border: '2px solid #333' 
};


export default function About() {
  return (
    <section className="about-page">
      <div className="page-header">
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        {/* Bio */}
        <div className="about-bio">
          <div className="avatar-placeholder large"><img
           src={myProfile} 
                  alt="Shani's Profile" 
                  style={imageStyle}  />
          
          </div>
          <p>
            I'm a passionate Full Stack Developer with expertise in the MERN stack.
            I love turning ideas into real products that are fast, accessible, and beautiful.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open-source, or learning UI/UX design.
          </p>
          <a href="/Users/shani/Downloads/Shani_Patel_Resume-1.pdf" className="btn btn-primary" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>

        {/* Skills */}
        <div className="about-skills">
          <h3>Skills</h3>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-group">
              <h4>{category}</h4>
              <div className="skills-row">
                {items.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
