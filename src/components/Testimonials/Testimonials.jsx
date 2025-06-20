import { useRef } from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'
import './Testimonials.css'
import muthu from '../../assets/Images/muthu.jpeg'
import thangapandi from '../../assets/Images/thangapandi.jpg'
import venkat from '../../assets/Images/venkat.png'
import hari from '../../assets/Images/hari.jpg'
function Testimonials() {
  const sliderRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: 'Muthupandian',
      position: 'CEO, Alagu Tech Solutions',
      image: muthu,
      quote: 'I\'ve worked with many developers, but this team stands out for their professionalism and dedication. They took our vague ideas and turned them into a stunning website.'
    },
    {
      id: 2,
      name: 'Thangapandi',
      position: 'CEO,Zedlogic Solutions',
      image: thangapandi,
      quote: 'The portfolio website they created for our company perfectly captures our brand identity. Their technical expertise and design skills are truly impressive.'
    },
    
    {
      id: 3,
      name: 'Venkadesh',
      position: 'Wordpress Develper, Alagu Tech Solutions',
      image: venkat,
      quote: 'Working with this team was an absolute pleasure. They delivered our website on time and exceeded our expectations with their attention to detail and creative solutions.'
    },
    {
      id: 4,
      name: 'Hariharasudhan',
      position: 'React Js Developer, Cloudb software Solutions',
      image: hari,
      quote: 'The attention to detail and commitment to quality is apparent in every aspect of our project. I highly recommend their services to anyone looking for top-notch web development.'
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <section id="testimonials" className="section testimonials">
      <Container>
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>What my clients say about me</p>
        </div>

        <div className="testimonial-slider" data-aos="fade-up">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-item">
                <div className="testimonial-content">
                  <p className="quote">
                    <i className="quote-icon"></i>
                    {testimonial.quote}
                  </p>
                  <div className="testimonial-author">
                    <div className="author-img">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials