import { useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-scroll'
import Typed from 'typed.js'
import './Hero.css'
import profile1 from '../../assets/Images/profile1.png'
function Hero() {
  const typedTextRef = useRef(null)
  
  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ['Web Developer', 'FullStack Developer','FreeLancer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-bg"></div>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content">
            <h1 data-aos="fade-up">Hello, I'm Vignesh</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              I'm a <span className="typed" ref={typedTextRef}></span>
            </p>
            <div data-aos="fade-up" data-aos-delay="300" className="hero-btns">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-custom btn-primary me-3"
              >
                Learn More
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-custom btn-primary"
              >
                Get In Touch
              </Link>
            </div>
          </Col>
          <Col lg={3} className="hero-img" data-aos="zoom-in" data-aos-delay="400">
            <img 
              src={profile1} 
              alt="Professional portrait" 
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero