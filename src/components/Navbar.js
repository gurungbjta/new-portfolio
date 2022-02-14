import React, { useState }  from 'react'
import {Link} from 'react-router-dom'

export default function Navbar () {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
            <>
                <div className="nav-container pt-3">
                    <div className="text-center" id="name">BIJAYATA GURUNG</div>
                    <nav class="navbar navbar-expand-md navbar-light">
                        <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#ham" aria-controls="ham" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-around`} id="ham">
                            <Link className="nav-link navb" to="/">HOME</Link>
                            <Link className="nav-link navb" to="/about">ABOUT ME</Link>
                            <Link className="nav-link navb" to="/projects">PROJECTS</Link>
                            <Link className="nav-link navb" to="/contact">CONTACT ME</Link>
                        </div>
                    </nav>
                </div>
            </>
    )
  }

