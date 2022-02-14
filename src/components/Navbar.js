import React, { useState }  from 'react'

export default function NavBar () {
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
                            <a className="nav-link navb" href="/">HOME</a>
                            <a className="nav-link navb" href="/about">ABOUT ME</a>
                            <a className="nav-link navb" href="/projects">PROJECTS</a>
                            <a className="nav-link navb" href="/contact">CONTACT ME</a>
                        </div>
                    </nav>
                </div>
            </>
    )
  }

