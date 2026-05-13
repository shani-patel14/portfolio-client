import React, { useState } from 'react';
import API from '../api/axios'; // आपका axios वाला सेटअप

const AddProject = () => {
  // फॉर्म के डेटा को स्टोर करने के लिए State
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '', // हम इसे कॉमा (,) से अलग करके लिखेंगे
    githubUrl: '',
    liveUrl: ''
  });

  const [message, setMessage] = useState('');

  // जब भी इनपुट में कुछ टाइप होगा, यह फंक्शन चलेगा
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // जब फॉर्म सबमिट (Save) होगा
  const handleSubmit = async (e) => {
    e.preventDefault(); // पेज को रिफ्रेश होने से रोकना
    
    try {
      // techStack को String से Array में बदलना (जैसे: "React, Node" -> ["React", "Node"])
      const techArray = formData.techStack.split(',').map(tech => tech.trim());
      
      const newProject = {
        ...formData,
        techStack: techArray
      };

      // बैकेंड को डेटा भेजना (POST request)
      console.log(newProject)
      const res = await API.post('/api/projects', newProject);
      
      if(res.status === 201) {
        setMessage('✅ Project added successfully!');
        // फॉर्म को वापस खाली करना
        setFormData({ title: '', description: '', techStack: '', githubUrl: '', liveUrl: '' });
      }
    } catch (error) {
      console.error(error);
      setMessage('❌ Failed to add project. Check console.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h2>Add a New Project</h2>
      
      {message && <p style={{ color: message.includes('✅') ? 'green' : 'red' }}>{message}</p>}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" name="title" placeholder="Project Title" 
          value={formData.title} onChange={handleChange} required 
        />
        
        <textarea 
          name="description" placeholder="Project Description" 
          value={formData.description} onChange={handleChange} required 
        />
        
        <input 
          type="text" name="techStack" placeholder="Tech Stack (e.g. React, Node.js, MongoDB)" 
          value={formData.techStack} onChange={handleChange} required 
        />
        
        <input 
          type="url" name="githubUrl" placeholder="GitHub URL" 
          value={formData.githubUrl} onChange={handleChange} 
        />
        
        <input 
          type="url" name="liveUrl" placeholder="Live Demo URL (Optional)" 
          value={formData.liveUrl} onChange={handleChange} 
        />
        
        <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Save Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;