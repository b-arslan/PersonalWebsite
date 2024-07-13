'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Row, Col, Typography, Button, Spin, message } from 'antd';
import { ArrowLeftOutlined, LoadingOutlined } from '@ant-design/icons';
import styles from '../styles/projects.module.scss';

const { Content, Header } = Layout;
const { Title, Text } = Typography;

interface Project {
    link: string;
    name: string;
    image: string;
    description: string;
}

const STORAGE_KEY = 'projects';
const STORAGE_TIMESTAMP_KEY = 'projects_timestamp';
const MAX_STORAGE_AGE = 12 * 60 * 60 * 1000;

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('https://projects-api-zeta.vercel.app/api/data');
            setProjects(response.data);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(response.data));
            localStorage.setItem(STORAGE_TIMESTAMP_KEY, Date.now().toString());
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
            message.error('Failed to fetch data. Please try again later.');
        }
    };

    useEffect(() => {
        const storedProjects = localStorage.getItem(STORAGE_KEY);
        const storedTimestamp = localStorage.getItem(STORAGE_TIMESTAMP_KEY);

        if (storedProjects && storedTimestamp) {
            const age = Date.now() - parseInt(storedTimestamp, 10);

            if (age < MAX_STORAGE_AGE) {
                setProjects(JSON.parse(storedProjects));
                setLoading(false);
                return;
            }
        }

        fetchProjects();
    }, []);

    return (
        <Layout style={{ background: '#282828', minHeight: '100vh' }}>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', background: '#282828' }}>
                    <Spin indicator={<LoadingOutlined spin style={{ fontSize: '64px', color: '#fff' }} />} />
                </div>
            ) : (
                <>
                    <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', background: '#282828', paddingLeft: '24px' }}>
                        <Button className={styles.btn} type='primary' href='/'><ArrowLeftOutlined /> Go Back</Button>
                    </Header>

                    <Content style={{ padding: '64px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {projects.map((project, index) => (
                            <Row key={index} gutter={[16, 16]} align="middle" justify="center">
                                <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        src={`data:image/jpeg;base64,${project.image}`}
                                        alt={project.name}
                                        style={{ width: '100%', maxWidth: '700px', height: 'auto', objectFit: 'cover', borderRadius: '8px', border: '2px solid #BFAFF2' }}
                                    />
                                </Col>
                                <Col xs={24} md={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <Title style={{ color: '#fff', textAlign: 'center' }} level={3}>{project.name}</Title>
                                    <Text style={{ display: 'block', marginBottom: '16px', color: '#fff', textAlign: 'center' }}>{project.description}</Text>
                                    <Button className={styles.btn} type="primary" href={project.link} target="_blank">See Live</Button>
                                </Col>
                            </Row>
                        ))}
                    </Content>
                </>
            )}
        </Layout>
    );
}