import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import './Projects.css'
import cricket from '../../assets/Images/cricket.jpg'
import rechargeapp from '../../assets/Images/rechargeapp.png'
import winpromotors from '../../assets/Images/winpromotors.png'
import zedlogic from '../../assets/Images/zedlogic.png'
function Projects() {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: 'WinPromotors Real Estate Website',
      category: 'frontend',
      image: winpromotors,
      description: 'Win Promotors is a real estate website showcasing residential projects and property listings with user-friendly navigation.',
      technologies: ['React', 'Bootstrap'],
      link: 'https://www.winpromotors.in/'
    },
    {
      id: 2,
      title: 'ZedlogicSoliutions Portfolio Website',
      category: 'frontend',
      image: zedlogic,
      description: 'A creative portfolio website with smooth animations and responsive design for a photographer.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      link: 'https://www.zedlogicsolutions.com/'
    },
    {
      id: 3,
      title: ' Cricket Club E-Commerce Website',
      category: 'fullstack',
      image: cricket,
      description: 'A fully responsive e-commerce platform for Cricket Club with product catalog, shopping cart, and secure checkout.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Django','MySQL'],
      link: 'https://github.com/vignesh-vs23/Phoenix-Cricket-Club'
    },
    {
      id: 4,
      title: 'Mobile and DTH Recharge App',
      category: 'frontend',
      image: rechargeapp,
      description: 'A mobile and DTH recharge application with user-friendly interface and secure payment options.',
      technologies: ['React', 'Bootstrap'],
      link: 'https://github.com/vignesh-vs23/Finnpays-Recharge-App'
    },
    
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="section projects">
      <Container>
        <div className="section-title">
          <h2>Projects</h2>
          <p>Check out some of my recent work</p>
        </div>

        <div className="filter-buttons" data-aos="fade-up">
          <Button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Front End Development
          </Button>
          <Button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            FullStack Development
          </Button>
          <Button 
            className={`filter-btn ${filter === 'design' ? 'active' : ''}`}
            onClick={() => setFilter('design')}
          >
            UI/UX Design
          </Button>
        </div>

        <Row>
          {filteredProjects.map(project => (
            <Col lg={4} md={6} key={project.id} data-aos="fade-up" data-aos-delay={project.id * 100}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects