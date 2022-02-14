import React from 'react'
import Footer from './Footer'
import comp from '../images/comp.jpeg'
import love from '../images/love.jpg'
import hello from '../images/hello.gif'
import {Link} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

export default function Home() {
    return (
        <>
        <div className="home-container mb-5">
            <div className="home">
                <Row >
                    <Col className="intro-col">
                        <Row>
                            <div className="pt-2 pb-4 text-center pl-3 pr-3">
                                    Welcome to my Portfolio! <br/>
                                    I am glad you visited. My name is Bijayata (Bjta) and I am a Computer Science Senior at San José State University. 
                                    Here, you can find my projects, get to connect with me and also learn a bit about me. To see my projects, go to <Link to="/projects" className="gitClick">Projects</Link> or, <a className="gitClick" target='_blank' rel='noopener noreferrer' href="https://github.com/gurungbjta">click here</a> to go to my github.   
                            </div>
                        </Row>
                        <Row>
                            <Col className='comp1'>
                                <img src={comp} alt="comp" style={{height: '100px', width: '100px'}}/>
                            </Col>
                            <Col className='love1'>
                                <img src={love} alt="love" style={{height: '100px', width: '100px'}}/>
                            </Col>
                            <Col className='comp2'>
                                <img src={comp} alt="comp" style={{height: '100px', width: '100px'}}/>
                            </Col>
                            <Col className='love2'>
                                <img src={love} alt="love" style={{height: '100px', width: '100px'}}/>
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col className='d-none d-md-inline hello-col'>
                        <div className='dream'>
                            <img className='dream-img p-2' src={hello} alt="dream" style={{ borderRadius: '15px'}}></img>
                            <div style={{fontSize:'6px'}}>gif by giphy.com via <a href="https://www.pinterest.com/pin/493284965435222860/" style={{color: 'black', textDecoration: 'none'}}>Pinterest</a> </div>
                        </div>
                    </Col>
                </Row>
            </div> 
        </div>
        <Footer />
        </>
    )
}
