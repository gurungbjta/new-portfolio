import React from 'react'
import girl2 from '../images/girl2.jpg'
import comp from '../images/comp.jpeg'
import love from '../images/love.jpg'
import Footer from './Footer'

export default function Contact() {
    return (
        <>
        <div className="container">
            <div className="home ml-xs-0 ml-md-2 ml-lg-5 pl-4 mr-xs-0 mr-md-2 mr-lg-5">
                <div className="whiteBox ml-0 ml-sm-2 ml-md-3 ml-lg-4 ml-xl-5 pl-4 pr-4 mt-3 pt-0" style={{height: '280px', zIndex: '1'}}>
                    <div className="intro pl-4 pt-4 pr-4" style={{lineHeight: '33px'}}>
                        <div>
                            If you like my work, or for any queries, please contact me on my email: bijayata.gurung@sjsu.edu
                        </div>
                        <br/>
                        <div>
                            You can also connect with me on <a className="gitClick" href="https://www.linkedin.com/in/bijayatagurung/" id="">Linked In</a>. I am open to feedbacks. Thank you for visiting!
                        </div>
                    </div>
                </div>
                
                <div className="dream d-none d-md-inline">
                    <img src={girl2} alt="girl" style={{height: '320px', width: '380px', zIndex: '2', borderRadius: '15px'}} ></img>
                    <div style={{fontSize:'6px'}}>image via <a href="https://www.pinterest.com/pin/162340761553110859/" style={{color: 'black', textDecoration: 'none'}}>Pinterest</a> </div>
                </div>
                
                
                <div className="stickers1 d-inline d-md-none ml-0 ml-sm-2 ml-md-3 ml-lg-4 ml-xl-5 pl-2 pr-2 mt-0 pb-5">
                    <img src={comp} alt="comp" style={{height: '100px', width: '100px'}}/>
                    <img src={love} alt="love" style={{height: '100px', width: '100px'}}/>
                    <img src={comp} alt="comp" style={{height: '100px', width: '100px'}}/>
                    <img src={love} alt="love" style={{height: '100px', width: '100px'}}/>
                </div>
            </div>
        </div>
        
        <Footer />
        
        </>
        
    )
}