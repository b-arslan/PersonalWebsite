'use client'

import styles from './styles/page.module.css'
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

export default function Home() {

  
    return (
        <div className={styles.Home}>

            <Header />
            <Content />
            <Footer />        
    
        </div>
    );

}
