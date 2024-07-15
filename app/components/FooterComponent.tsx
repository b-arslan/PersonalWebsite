'use client'
import styles from '../styles/page.module.scss';
import { Layout, Row, Col, Button } from 'antd';
import { getCode } from '../services/routes';

const { Footer } = Layout;

export default function FooterComponent() {
    return (

        <Footer className={styles.footer}>
                <Row>
                    <Col span={24} style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Button className={styles.btnFooter} type="text" onClick={getCode}>Get the code</Button>
                    </Col>
                </Row>
        </Footer>

    );
}