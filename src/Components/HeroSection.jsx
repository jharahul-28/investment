import React from 'react'
import styles from './HeroSection.module.css';
import img from '../assets/hero-section.svg';
import Button from './Store/Button';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <img src={img} alt="wrong path" />
      <div className={styles.company}>
        <h1>ALPHA ASSET MANAGEMENT</h1>
        <p>Empowering Your Financial Future with Smart Investments.</p>
        <Button desc='Invest Now'></Button>
      </div>
    </div>
  )
}

export default HeroSection;