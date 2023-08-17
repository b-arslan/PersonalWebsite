import Link from 'next/link';
import './about.css'

function About() {
    return (  
        <div className="About">

            <div className='about-header'>
                <h2>About Me</h2>
            </div>

            <div className="about-text">

                <p>Hello there! I'm Buğra, a student of Computer Engineering at Namik Kemal University. I've been drawn to the world of Frontend Development by my curiosity and love for technology. I've gained valuable experience during my internships with two well-known companies, <span className="company">Softtech</span> and <span className="company">Intertech</span>.</p>

                <p>At Softtech, I used low-code platform which allowed me to see different ways of approaching technology. This expreience showed me how simplifying thing can create value quickly.</p>

                <p>During my time at Intertech, I got to explore Frontend Development further. Using tools like <span className='company'>TypeScript</span> and <span className='company'>React.js</span>, I learned to build user-friendly interfaces and improve my coding skills. This experience helped me get a deeper understanding of the software development process.</p>

                <p>Besides Frontend Development, I'm also very interested in iOS Development. I've been working on personal projects and exploring the iOS platform to expand my skills in this area.</p>

            </div>

            <div>

                <Link href="/" id='go-back'>Back to Home</Link>

            </div>
        </div>
    );
}

export default About;