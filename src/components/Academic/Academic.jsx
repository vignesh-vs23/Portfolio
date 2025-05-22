import { Container, Row, Col} from 'react-bootstrap'
import { FaUserGraduate } from 'react-icons/fa'
import './Academic.css'

function Academic() {
  const educations = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'V.H.N.S.N College of Arts and Science',
      period: '2015 - 2018',
      description: 'Studied core computer science principles with focus on web development and programming. Participated in various coding competitions and Events.',
      achievements: ['GPA: 7.6/10', 'Graduated with Honors',]
    },
    {
      degree: 'Higher Secondary Certificate (HSC or 12th Grade)',
      institution: 'H.P.S.M.Hr.Secondary School',
      period: '2013 - 2015',
      description: 'Completed higher secondary education with a focus on mathematics and science. Developed strong analytical and problem-solving skills during this period.',
      achievements: ['GPA: 8.5/10', 'Top 5% of Class'],
    },
    {
      degree: 'Certificate in Python Full Stack Development',
      institution: 'Getin Technologies',
      period: '2024 ',
      description: 'Completed a comprehensive course in Python full stack development. Gained hands-on experience in web development using Python, Django, and React.',
      achievements: ['Best Innovative Project Award', 'Perfect Attendance']
    }
  ]

  return (
    <section id="academic" className="section academic">
      <Container>
        <div className="section-title">
          <h2>Academic Career</h2>
          <p>My educational background</p>
        </div>

        <Row>
          {educations.map((edu, index) => (
            <Col lg={4} md={6} key={index}>
              <div 
                className="education-item" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="education-icon">
                  <FaUserGraduate />
                </div>
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <div className="education-period">{edu.period}</div>
                <p>{edu.description}</p>
                <div className="achievements">
                  <h5>Achievements:</h5>
                  <ul>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Academic