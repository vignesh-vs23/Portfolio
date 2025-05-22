import { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', link: 'hero' },
    { name: 'About', link: 'about' },
    { name: 'Experience', link: 'experience' },
    { name: 'Education', link: 'academic' },
    { name: 'Projects', link: 'projects' },
    { name: 'Skills', link: 'skills' },
    { name: 'Testimonials', link: 'testimonials' },
    { name: 'Contact', link: 'contact' }
  ]

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#" className="logo">
          <span>Portfolio</span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item, index) => (
              <Nav.Item key={index}>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setExpanded(false)}
                >
                  {item.name}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header