'use client'
import styles from '../styles/page.module.scss';
import { Layout, Row, Col, Button } from 'antd';
import { resumeNavigate } from '../services/routes';

const { Header } = Layout;

export default function HeaderComponent() {
    return (

        <Header className={styles.header}>
                <Row className={styles.rowHeader}>
                    <Col span={24} className={styles.colHeader}>

                        <Button className={styles.btn} type='primary' href="/">Home</Button>
                        <Button className={styles.btn} type='primary' href="/about">About Me</Button>
                        <Button className={styles.btn} type='primary' href="/projects">Projects</Button>
                        <Button className={styles.btn} type='primary' onClick={resumeNavigate}>Resume</Button>
                        
                    </Col>
                </Row>
            </Header>

    );
}