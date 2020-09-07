import React from 'react'
import girl3 from '../images/girl3.jpg'
import pinkComp from '../images/pinkComp.jpg'

export default function About() {
    return (
        <>
            <section className="container-fluid px-5 pt-2">
                <div className="row ml-5 mt-3 ">
                    <div className="col-md-6 text-center order-2 order-md-1" style={{height: '300px', width:'400px', lineHeight: '28px'}}>
                        <p>
                            After moving to the SF Bay Area six years ago from Nepal, my fondness for tech grew even more profound. 
                            I feel beyond blessed to be surrounded by the Silicon Valley, and moreover, it inspires me every second of my day to give valuable contribution to the tech industry as a Software Engineer. 
                            I love what I do and nothing gives me immense joy than to solve world problems via code.
                        </p>
                    </div>

                    <div className="col-md-6 order-1 order-md-2">
                        <img src={girl3} alt="girl3" style={{height: '250px', width: '270px', borderRadius: '3px'}} />
                        <div style={{fontSize:'7px'}}>image by fresh_bobatae via <a href="https://www.pinterest.com/pin/616500636470436273/" style={{color: 'black', textDecoration: 'none'}}>Pinterest</a></div>
                    </div>
                </div>

                <div className="row ml-0 mr-5 pr-5 mt-3">
                    <div className="col-md-6 text-center">
                        <img src={pinkComp} alt="pinkComputer" style={{height: '250px', width: '280px', borderRadius: '3px'}} />
                        <div style={{fontSize:'7px'}}>image via <a href="https://in.pinterest.com/pin/138485757355497141/" style={{color: 'black', textDecoration: 'none'}}>Pinterest</a> </div>
                    </div>

                    <div className="col-md-6" style={{height: '300px', width:'400px', lineHeight: '28px'}}>
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
            </section>
        </>
    )
}