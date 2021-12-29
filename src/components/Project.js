import React from 'react'
import work from '../images/work.gif'

export default function Project() {
    return (
        <div className="container">
            <div className="frame mt-2 ml-xs-0 mr-xs-0 ml-sm-2 mr-sm-2 ml-md-4 mr-sm-4 ml-lg-5 mr-lg-5">
                <div className="texts pr-2" >
                    <div className="text-center" style={{fontSize: '20px', fontWeight: 'bold'}}>
                        My Projects
                    </div>
                    <div className="mt-1 projects">
                        <ul>
                            <div>
                                <a className="projLinks" href="https://github.com/gurungbjta/cs151Project18"><li>Tic Tac Toe Board Game</li></a>
                                - Using OOP design patterns and Java, created a Tic-Tac-Toe game where two players can play at the same time
                            </div>
                        </ul>
                        <ul>
                            <div>
                                <a className="projLinks" href="https://github.com/gurungbjta/fb-copy"><li>Facebook Clone</li></a>
                                - Made a front-end clone of Facebook page particularly the Sign in and Sign up page using React
                            </div>
                            
                        </ul>
                        <ul>
                            <div>
                                <a className="projLinks" href="https://ez-apply.vercel.app/"><li>EZ Apply Job Application</li></a>
                                - Created a web application page called "EZ Apply" as a group project using MERN stack where job seekers can quickly apply for jobs with one simple click. 
                            </div>
                        </ul>
                        
                        <ul>
                            <div>
                                <a className="projLinks" href="https://beach-resorts-react.netlify.app/"><li>Beach Resort Booking</li></a>
                                - Made and deployed a website for Beach Resort using React where users can choose different room type depending on price, number of guests, breakfast, pets and size 
                            </div>
                        </ul>
                        <ul>
                            <div>
                                <a className="projLinks" href="https://github.com/gurungbjta/expense-tracker"><li>Expense Tracker</li></a>
                                - Made an expense tracker website using React that keeps track of your expenses and income and displays current balance
                            </div>
                        </ul>
                        <ul>
                            <div>
                                <a className="projLinks" href="https://react-phone-store-proj.netlify.app/"><li>Phone Store</li></a>
                                - Made and deployed a website for phone store using React where users can add products to cart, remove from cart and check out through PayPal Sandbox
                            </div>
                        </ul>
                        
                        <div className="pl-4" style={{wordSpacing: '5px'}}>For more projects, click <a className="projLinks" href="https://github.com/gurungbjta">here</a> to go to my github.</div>
                    </div>
                </div>
            </div>

            <div className="d-none d-md-inline gif">
                <img src={work} alt="work" style={{borderRadius: '10px'}}/>
                <div style={{fontSize:'7px'}} >gif by milktop via <a href="https://www.pinterest.com/pin/191051209171976843/" style={{color: 'black', textDecoration: 'none'}}>Pinterest</a></div>
            </div>

            <br />
            <br />
        </div>

    )
}