import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { Link } from 'react-scroll'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} className="footer-info">
            <h3>Portfolio</h3>
            <p>
              A passionate web developer dedicated to creating beautiful and functional websites
              that deliver exceptional user experiences.
            </p>
            <div className="social-links">
              <a href="#hero" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#hero" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#hero" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/kvignesh7/"  className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/vignesh-vs23"   className="social-icon">
                <FaGithub />
              </a>
            </div>
          </Col>
          
          <Col lg={4} md={6} className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
              </li>
              <li>
                <Link to="experience" spy={true} smooth={true} offset={-70} duration={500}>Experience</Link>
              </li>
              <li>
                <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={4} md={12} className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to my newsletter for the latest updates on projects and blog posts.</p>
            <form>
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
          </Col>
        </Row>
        
        <div className="copyright">
          <p>&copy; {currentYear} Portfolio. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer