import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Footer from './Footer'
import girl3 from '../images/girl3.jpg'
import pinkComp from '../images/pinkComp.jpg'

export default function About() {
    return (
        <>
            <div className="about-container m-3 pt-5 pl-5 pr-5">
                <div>
                    <div className="about-texts" style={{lineHeight: '28px'}}>
                        <p>
                            After moving to the SF Bay Area seven years ago from Nepal, my fondness for tech grew even more profound. 
                            I feel beyond blessed to be surrounded by the Silicon Valley, and moreover, it inspires me every second of my day to give valuable contribution to the tech industry as a Software Engineer. 
                            I love what I do and nothing gives me immense joy than to solve world problems via code.
                        </p>
                    </div>
                    < br/>
                    <Row className=' '>
                        <Col className='girl-col'>
                            <div className='d-flex justify-content-end'>
                                <img className='girl-img' src={girl3} alt="girl3" />
                                {/* <div style={{fontSize:'7px'}}>image by fresh_bobatae via <a href="https://www.pinterest.com/pin/616500636470436273/" style={{color: 'black', textDecoration: 'none'}}>Pinterest</a></div> */}
                            </div>
                        </Col>
                        <Col className='comp-col'>
                            <div className="">
                                <img className='pinkComp-img' src={pinkComp} alt="pinkComputer" />
                                {/* <div style={{fontSize:'7px'}}>image via <a href="https://in.pinterest.com/pin/138485757355497141/" style={{color: 'black', textDecoration: 'none'}}>Pinterest</a> </div> */}
                            </div>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center pb-4'>
                        <div style={{fontSize:'7px'}}>images via Pinterest </div>
                    </Row>
                    <div className="about-texts" style={{lineHeight: '28px'}}>
                        <p>
                            I am passionate about learning and giving back to the community. 
                            I enjoy problem solving and building exciting web applications. 
                            I have knowledge on Java, Python, C, HTML, CSS, ReactJS, JavaScript, Bootstrap, etc. 
                            In fact, I designed this portfolio using React itself.
                        </p>
                        <p>
                            <span style={{fontWeight: 'bold'}}>BONUS:</span> In my free time, I like to watch movies and animes and I am a great fan of anything aesthetic.
                            My portfolio, therefore, is highly inspired by aesthetic animes.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
