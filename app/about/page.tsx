'use client'
import styles from '../styles/about.module.scss';
import { Layout, Row, Col, Button, Typography } from 'antd';

const { Content } = Layout;
const { Text } = Typography;

function About() {
    return (  
        <Layout className={styles.About}>
            <Content className={styles.content}>

                <Row className={styles.rowHeader}>
                    <Col>
                        <Text className={styles.aboutHeader}>About Me</Text>
                    </Col>
                </Row>

                <Row className={styles.aboutText}>

                    <Col>
                    
                        <Text style={{color: '#fff', fontSize: '18px'}}>Hello there! I'm Buğra, a student of Computer Engineering at Namik Kemal University. I've been drawn to the world of Frontend Development by my curiosity and love for technology. I've gained valuable experience during my internships with two well-known companies, <span className={styles.company}>Softtech</span> and <span className={styles.company}>Intertech</span>.</Text>

                        <Text style={{color: '#fff', fontSize: '18px'}}> At Softtech, I used low-code platform which allowed me to see different ways of approaching technology. This experience showed me how simplifying thing can create value quickly.</Text>

                        <Text style={{color: '#fff', fontSize: '18px'}}> During my time at Intertech, I got to explore Frontend Development further. Using tools like <span className={styles.company}>TypeScript</span> and <span className={styles.company}>React.js</span>, I learned to build user-friendly interfaces and improve my coding skills. This experience helped me get a deeper understanding of the software development process.</Text>

                        <Text style={{color: '#fff', fontSize: '18px'}}> Besides Frontend Development, I'm also very interested in iOS Development. I've been working on personal projects and exploring the iOS platform to expand my skills in this area.</Text>
                    </Col>


                </Row>

                <Row className={styles.rowFooter}>
                    <Col>
                        <Button className={styles.btn} href="/">Back to Home</Button>
                    </Col>

                </Row>
            </Content>
        </Layout>
    );
}

export default About;