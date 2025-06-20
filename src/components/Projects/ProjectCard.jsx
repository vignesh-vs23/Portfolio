import { useState } from 'react'
import { Card, Badge, Button, Modal } from 'react-bootstrap'
import './ProjectCard.css'

function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  return (
    <>
      <Card className="project-card">
        <div className="project-img">
          <Card.Img variant="top" src={project.image} alt={project.title} />
        </div>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description.substring(0, 60)}...</Card.Text>
          <div className="project-techs">
            {project.technologies.slice(0, 2).map((tech, index) => (
              <Badge key={index} bg="primary" className="tech-badge">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 2 && (
              <Badge bg="secondary" className="tech-badge">
                +{project.technologies.length - 2}
              </Badge>
            )}
          </div>
          <Button variant="primary" onClick={handleShow} className="view-btn">
            View Details
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="modal-content">
            <h5>Description</h5>
            <p>{project.description}</p>
            
            <h5>Technologies Used</h5>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <Badge key={index} bg="primary" className="tech-badge">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" href={project.link} target="_blank">
            Visit Website
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProjectCard