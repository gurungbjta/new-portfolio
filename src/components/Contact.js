import React from 'react'
import girl2 from '../images/girl2.jpg'
import comp from '../images/comp.jpeg'
import love from '../images/love.jpg'
import Footer from './Footer'
import { Row, Col } from 'react-bootstrap'

export default function Contact() {
    return (
        <>
            <div className="contact-container">
                    <div className="contact-text" style={{lineHeight: '33px'}}>
                        <div>
                            If you like my work, or for any queries, please contact me on my email: bijayata.gurung@sjsu.edu
                        </div>
                        <br/>
                        <div>
                            You can also connect with me on <a className="gitClick" href="https://www.linkedin.com/in/bijayatagurung/" target='_blank' rel='noopener noreferrer'>Linked In</a>. I am open to feedbacks. Thank you for visiting!
                        </div> 
                        <Row className='smallWindowIcons pt-4'>
                            <Col className='contact-comp1'>
                                <img src={comp} alt="comp" style={{borderRadius: "5px", height: '100px', width: '100px'}}/>
                            </Col>
                            <Col className='contact-love1'>
                                <img src={love} alt="love" style={{borderRadius: "5px", height: '100px', width: '100px'}}/>
                            </Col>
                            <Col className='contact-comp2'>
                                <img src={comp} alt="comp" style={{borderRadius: "5px", height: '100px', width: '100px'}}/>
                            </Col>
                            <Col className='contact-love2'>
                                <img src={love} alt="love" style={{borderRadius: "5px", height: '100px', width: '100px'}}/>
                            </Col>
                        </Row>
                    </div>
                    <div className='contact-girl-div'>
                        <div className="d-none d-md-inline">
                            <img className='contact-girl-img' src={girl2} alt="girl" ></img>
                            <div style={{fontSize:'6px'}}>image via <a href="https://www.pinterest.com/pin/162340761553110859/" style={{color: 'black', textDecoration: 'none'}}>Pinterest</a> </div>
                        </div>
                    </div>
            </div>
            <Footer />
        </>
    )
}