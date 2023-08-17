'use client'
import Image from 'next/image'
import profileImg from '../../public/profile.jpg'
import linkedinIcon from '../../public/linkedin-icon.svg'
import githubIcon from '../../public/github-icon.svg'
import { getGithub, getLinkedin, resumeNavigate, getCode } from './services/routes'

export default function Home() {

  
    return (
        <div className="Home">
            
            <div className="header">
                <div className="btn">
                    <ul>
                        <li><a href='/about'>About Me</a></li>
                        <li><a onClick={resumeNavigate}>Resume</a></li>
                    </ul>
                </div>
            </div>

            <div className="main-container">

                <div className="container">

                    <Image id="profile" src={profileImg} alt="profileImg"/>

                </div>

                <div className='container'>

                    <h1>Hi, I'm Buğra<br /><br />I'm a Senior Computer Engineering Student at Namik Kemal University</h1>

                    <div class="socials">

                        <Image className='img' src={linkedinIcon} alt="linkedin-icon" onClick={getLinkedin} />
                        <Image className='img' src={githubIcon} alt="github-icon" onClick={getGithub} />

                    </div>

                </div>

            </div>

            <div className="footer">
                <p className='footer-text' onClick={getCode}>Get the code</p>
            </div>


        </div>
    );

}
