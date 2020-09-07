import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export default function Footer() {
    return (
        <div>
            <div className="container-fluid footer">
                <div className="center">
                    <a className="gitIcon" href="https://github.com/gurungbjta"><VscGithub/></a>
                    <a className="icon ml-4 mr-4 pl-4 pr-4" href="https://www.facebook.com/bijayata.gurung.792"><TiSocialFacebookCircular/></a>
                    <a className="icon" href="https://www.linkedin.com/in/bijayatagurung/"><TiSocialLinkedinCircular/></a>
                </div>
            </div>
        </div>
        
    )
}
