import React from 'react';

export default function ProjectCard({ project }) {
  const { title, description, techStack = [], githubUrl, liveUrl, image } = project

  return (
    <div className="project-card">
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>

        <div className="tech-stack">
          {techStack.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>

        <div className="card-links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
              GitHub
            </a>
          )}
         {project.liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              padding: '8px 15px', 
              background: '#007bff', 
              color: '#fff', 
              textDecoration: 'none', 
              borderRadius: '5px',
              fontSize: '14px'
            }}
          >
            Live Demo
          </a>
        )}
        </div>
      </div>
    </div>
  )
}
