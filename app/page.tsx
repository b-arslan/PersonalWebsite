'use client'
import styles from "./styles/page.module.scss";
import { Layout, Row, Col, Button } from "antd";
import { resumeNavigate, getCode, getGithub, getLinkedin } from "./services/routes";
import Image from "next/image";
import ProfileImg from '../public/profile.jpg';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

const { Header, Content, Footer } = Layout;

export default function Home() {
  
    return (
        <Layout className={styles.layout}>

            <HeaderComponent />

            <Content className={styles.content}>
                <Row className={styles.rowContent}>
                    <Col span={12}>
                        <Image className={styles.profile} src={ProfileImg} alt="Profile Image"/>
                    </Col>

                    <Col span={12} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: '2rem'
                    }}>
                        <Col>
                            <h1 className={styles.title}>Hey, I'm Buğra<br /><br />I'm a Senior Computer Engineering Student at Namik Kemal University</h1>
                        </Col>

                        <Col style={{display: 'flex', gap: '2rem'}}>
                            <LinkedinOutlined className={styles.img} alt="linkedin-icon" onClick={getLinkedin} />
                            <GithubOutlined className={styles.img}  alt="github-icon" onClick={getGithub} />
                        </Col>
                    </Col>
                </Row>
            </Content>

            <FooterComponent />

        </Layout>
    );

}
