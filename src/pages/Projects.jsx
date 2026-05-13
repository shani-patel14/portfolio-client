import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import API from '../api/axios'
import ProjectCard from '../components/ProjectCard' 

export default function Projects() {
  const [projects, setProjects]   = useState([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState(null)
  const [filter, setFilter]       = useState('All')

  useEffect(() => {
    API.get('/api/projects')
      .then((res) => setProjects(res.data))
      .catch(() => setError('Failed to load projects.'))
      .finally(() => setLoading(false))
  }, [])

  
  // Get unique tech tags from all projects
  const allTags = ['All', ...new Set(projects.flatMap((p) => p.techStack || []))]

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.techStack?.includes(filter))

  if (loading) return <div className="loading">Loading projects...</div>
  if (error)   return <div className="error">{error}</div>

  return (
    <section className="projects-page">
      <div className="page-header">
        <h2>My Projects</h2>
        <p>Things I've built with the MERN stack</p>
      </div>

      {/* Filter tabs */}
      <div className="filter-tabs">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`filter-btn ${filter === tag ? 'active' : ''}`}
          >
            {tag}
          </button>
        ))}
      </div>
      <Link to="/add-project"  style={{ padding: '10px 20px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
  + Add New Project
</Link>

      {filtered.length === 0 ? (
        <p className="no-results">"{filter}".</p>
      ) : (
        <div className="projects-grid">
          {filtered.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
