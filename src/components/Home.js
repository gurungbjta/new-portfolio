import React from 'react'
import Footer from './Footer'
import comp from '../images/comp.jpeg'
import love from '../images/love.jpg'
import hello from '../images/hello.gif'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <>
        <div className="container">
            <div className="home">
                <div className="whiteBox ml-0 ml-sm-2 ml-md-3 ml-lg-4 ml-xl-5 pl-2 pr-2">
                    <div className="intro pl-4 pt-4 pr-4">
                        <div>Welcome to my Portfolio!</div>
                        <div>
                        I am glad you visited. My name is Bijayata (Bjta) and I am a Computer Science Junior at San Jose State University.
                        Here, you can find my projects, get to connect with me and also learn a bit about me. 
                        To see my projects, go to <Link to="/projects" className="gitClick">Projects</Link> or, <a className="gitClick" href="https://github.com/gurungbjta">click here</a> to go to my github.
                        </div>
                    </div>
                </div>
                <div className="dream d-none d-md-inline">
                    <img src={hello} alt="dream" style={{height: '360px', width: '490px'}}></img>
                    <div style={{fontSize:'6px'}}>gif by giphy.com via <a href="https://www.pinterest.com/pin/493284965435222860/" style={{color: 'black', textDecoration: 'none'}}>Pinterest</a> </div>
                </div>
                <div className="stickers1 d-inline  ml-0 ml-sm-2 ml-md-3 ml-lg-4 ml-xl-5 pl-2 pr-2 mt-0">
                    <img src={comp} alt="comp" style={{height: '100px', width: '100px'}}/>
                    <img src={love} alt="love" style={{height: '100px', width: '100px'}}/>
                    <img src={comp} alt="comp" style={{height: '100px', width: '100px'}}/>
                    <img src={love} alt="love" style={{height: '100px', width: '100px'}}/>
                </div>
                <div className="stickers d-flex d-inline ml-0 ml-sm-2 ml-md-3 ml-lg-4 ml-xl-5 pl-2 pr-2 mt-0">
                    <div>
                        <img src={comp} alt="comp" style={{height: '100px', width: '100px'}}/>
                        <div style={{fontSize:'6px'}}>image via <a href="https://www.pinterest.com/pin/693061830136444695/" style={{color: 'black', textDecoration: 'none'}}>Pinterest</a> </div>
                    </div>
                    <div>
                        <img src={love} alt="love" style={{height: '100px', width: '100px'}}/>
                    </div>
                    <div>
                        <img src={comp} alt="comp" style={{height: '100px', width: '100px'}}/>
                    </div>
                    <div>
                        <img src={love} alt="love" style={{height: '100px', width: '100px'}}/>
                        <div style={{fontSize:'6px'}}>image via <a href="https://www.pinterest.com/pin/395331673534293070/" style={{color: 'black', textDecoration: 'none'}}>Pinterest</a> </div>
                    </div>
                </div>
            </div> 
        </div>
        <Footer />
        </>
    )
}
