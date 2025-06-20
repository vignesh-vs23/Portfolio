import { Container} from 'react-bootstrap'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      position: 'Junior Web Developer',
      company: 'Alagu Tech Solutions',
      period: ' Jan 2025 - Present',
      description: 'Designed and developed responsive websites for various clients. Collaborated with UX designers to implement pixel-perfect designs and interactive elements.',
      skills: ['React', 'Python', 'Django','MySQL']
    },
    {
      position: 'Web Developer Intern',
      company: 'Infonel Techologies',
      period: 'Oct 2024 - Dec 2024',
      description: 'Assisted in developing website features and fixing bugs. Learned about agile development methodologies and improved coding skills.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      position: 'System Adminstrator',
      company: 'XpressBees Logistics Pvt Ltd',
      period: 'Mar 2024 - Oct 2023',
      description: 'Managed and maintained company Logiticts and transportation systems. Provided technical support to employees and ensured smooth operation of Company.',
      skills: ['Customer Support', 'Team Handling', 'Maintained Logistics']
    },
    {
      position: 'Field Investigator',
      company: 'National Statistics Office',
      period: ' Aug 2019 - Jan 2020',
      description: 'Conducted field surveys and collected data for various projects. Analyzed data and prepared reports for government.',
      skills: ['Data Collection', 'Survey Design', 'Statistical Analysis']
    },
    {
      position: 'Hardware Technician',
      company: 'VASP Infotech',
      period: ' AUg 2018 -Jan 2019',
      description: 'Assisted in repairing and maintaining computer hardware. Provided technical support to customers and resolved hardware issues.',
      skills: ['Computer Hardware', 'Troubleshooting', 'Customer Support']
    },

  ]

  return (
    <section id="experience" className="section experience">
      <Container>
        <div className="section-title">
          <h2>Experience</h2>
          <p>My professional journey</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 100}
            >
              <div className="timeline-content">
                <div className="date">{exp.period}</div>
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                <div className="skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience