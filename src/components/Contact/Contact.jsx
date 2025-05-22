import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    event.preventDefault()
    
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      // Here you would normally handle the form submission
      alert('Thank you for your message! I will get back to you soon.')
      form.reset()
      setValidated(false)
      return
    }
    
    setValidated(true)
  }

  return (
    <section id="contact" className="section contact">
      <Container>
        <div className="section-title">
          <h2>Contact</h2>
          <p>Get in touch with me</p>
        </div>

        <Row>
          <Col lg={5} md={12} className="info" data-aos="fade-right">
            <div className="contact-info">
              <div className="contact-card">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="details">
                  <h4>Location:</h4>
                  <p>8/1092, Muthuramalingam Nagar, Virudhunagar,TamilNadu -626001</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="details">
                  <h4>Email:</h4>
                  <p>vigneshkalirajan7@example.com</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="details">
                  <h4>Call:</h4>
                  <p>+91 951-486-958-6</p>
                </div>
              </div>

              {/* <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6432952845705!2d-122.08356222392956!3d37.42200413975723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x29cdf01a44fc687f!2sGoogle%20Building%2040%2C%20Mountain%20View%2C%20CA%2094043%2C%20USA!5e0!3m2!1sen!2s!4v1688410957529!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                />
              </div> */}
            </div>
          </Col>

          <Col lg={7} md={12} className="form" data-aos="fade-left" data-aos-delay="100">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="form-group">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Col>
                <Col md={6} className="form-group">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <Form.Group className="form-group">
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a subject.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a message.
                </Form.Control.Feedback>
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="submit-btn">Send Message</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact