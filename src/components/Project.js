import React from 'react'
import { Row, Col } from 'react-bootstrap'
import work from '../images/work.gif'
import Footer from './Footer'

export default function Project() {
    return (
        <>
            <div className="project-container mb-3 ">
                <Row>
                    <Col className='projects p-5'>
                        <div className="text-center pt-3" style={{fontSize: '20px', fontWeight: 'bold'}}>
                            My Projects
                        </div>  
                        <div className="mt-3 projects-list">
                        <ul>
                            <div>
                                <a className="projLinks" href="https://github.com/gurungbjta/cs151Project18" target='_blank' rel='noopener noreferrer' ><li>Tic Tac Toe Board Game</li></a>
                                - Using OOP design patterns and Java, created a Tic-Tac-Toe game where two players can play at the same time
                            </div>
                        </ul>
                        <ul>
                            <div>
                                <a className="projLinks" href="https://github.com/gurungbjta/fb-copy" target='_blank' rel='noopener noreferrer' ><li>Facebook Clone</li></a>
                                - Made a front-end clone of Facebook page particularly the Sign in and Sign up page using React
                            </div>
                            
                        </ul>
                        <ul>
                            <div>
                                <a className="projLinks" href="https://ez-apply.vercel.app/" target='_blank' rel='noopener noreferrer' ><li>EZ Apply Job Application</li></a>
                                - Created a web application page called "EZ Apply" as a group project using MERN stack where job seekers can quickly apply for jobs with one simple click. 
                            </div>
                        </ul>
                        
                        <ul>
                            <div>
                                <a className="projLinks" href="https://beach-resorts-react.netlify.app/" target='_blank' rel='noopener noreferrer' ><li>Beach Resort Booking</li></a>
                                - Made and deployed a website for Beach Resort using React where users can choose different room type depending on price, number of guests, breakfast, pets and size 
                            </div>
                        </ul>
                        <ul>
                            <div>
                                <a className="projLinks" href="https://github.com/gurungbjta/expense-tracker" target='_blank' rel='noopener noreferrer' ><li>Expense Tracker</li></a>
                                - Made an expense tracker website using React that keeps track of your expenses and income and displays current balance
                            </div>
                        </ul>
                        <ul>
                            <div>
                                <a className="projLinks" href="https://react-phone-store-proj.netlify.app/" target='_blank' rel='noopener noreferrer' ><li>Phone Store</li></a>
                                - Made and deployed a website for phone store using React where users can add products to cart, remove from cart and check out through PayPal Sandbox
                            </div>
                        </ul>
                        
                        <div className="pl-4 mb-2 pt-3 pb-4 text-center" style={{wordSpacing: '5px'}}>For more projects, click <a className="projLinks" href="https://github.com/gurungbjta" target='_blank' rel='noopener noreferrer' >here</a> to go to my github.</div>
                    </div>      
                    </Col>
                        
                    <Col className='gif d-none d-sm-inline pl-5 pt-4'>
                        <div className="">
                            <img className='gif-image' src={work} alt="work" style={{borderRadius: '10px'}}/>
                            <div style={{fontSize:'7px'}} >gif by milktop via <a href="https://www.pinterest.com/pin/191051209171976843/" style={{color: 'black', textDecoration: 'none'}}>Pinterest</a></div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </>
    )
}
