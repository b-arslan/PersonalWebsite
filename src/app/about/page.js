import styles from './about.module.css'

function About() {
    return (  
        <div className={styles.About}>

            <div>
                <h2 className={styles.aboutHeader}>About Me</h2>
            </div>

            <div className={styles.aboutText}>

                <p>Hello there! I'm Buğra, a student of Computer Engineering at Namik Kemal University. I've been drawn to the world of Frontend Development by my curiosity and love for technology. I've gained valuable experience during my internships with two well-known companies, <span className={styles.company}>Softtech</span> and <span className={styles.company}>Intertech</span>.</p>

                <p>At Softtech, I used low-code platform which allowed me to see different ways of approaching technology. This experience showed me how simplifying thing can create value quickly.</p>

                <p>During my time at Intertech, I got to explore Frontend Development further. Using tools like <span className={styles.company}>TypeScript</span> and <span className={styles.company}>React.js</span>, I learned to build user-friendly interfaces and improve my coding skills. This experience helped me get a deeper understanding of the software development process.</p>

                <p>Besides Frontend Development, I'm also very interested in iOS Development. I've been working on personal projects and exploring the iOS platform to expand my skills in this area.</p>

            </div>

            <div>

                <a className={styles.btn} href="/">Back to Home</a>

            </div>
        </div>
    );
}

export default About;