import { Container, Row, Col } from 'react-bootstrap'
import { FaAward, FaUsers, FaFolderOpen } from 'react-icons/fa'
import './About.css'
import profile2 from '../../assets/Images/profile2.png'
function About() {
  return (
    <section id="about" className="section about">
      <Container>
        <div className="section-title">
          <h2>About Me</h2>
          <p>Learn more about who I am and what I do</p>
        </div>

        <Row>
          <Col lg={4} data-aos="fade-right">
            <div className="about-img">
              <img 
                src={profile2}
                alt="About" 
                className="img-fluid"
              />
            </div>
          </Col>
          
          <Col lg={8} data-aos="fade-left" data-aos-delay="100">
            <div className="about-content">
              <h3>Web Developer & FullStack Developer</h3>
              
              <p>
                I'm a passionate web developer with over 5 months of experience creating beautiful, 
                functional websites and applications. My journey in web development started with a 
                curiosity about how websites work, and it has since grown into a career I truly love.
              </p>
              
              <Row className="about-stats">
                <Col md={4} className="stat-item">
                  <div className="stat-icon">
                    <FaAward />
                  </div>
                  <h4>Experience</h4>
                  <p>5+ Months</p>
                </Col>
                
                <Col md={4} className="stat-item">
                  <div className="stat-icon">
                    <FaUsers />
                  </div>
                  <h4>Clients</h4>
                  <p>10+ Worldwide</p>
                </Col>
                
                <Col md={4} className="stat-item">
                  <div className="stat-icon">
                    <FaFolderOpen />
                  </div>
                  <h4>Projects</h4>
                  <p>3+ Completed</p>
                </Col>
              </Row>
              
              <p>
                My approach to web development combines technical expertise with creative
                problem-solving. I specialize in creating responsive, user-friendly websites that
                not only look great but also perform exceptionally well. I'm proficient in various
                programming languages and frameworks, and I'm always eager to learn new technologies
                to stay at the forefront of the industry.
              </p>
              
              <div className="about-btn">
                <a href="/Vignesh.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-custom btn-primary">Download CV</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About