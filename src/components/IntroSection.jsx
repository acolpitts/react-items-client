import React from 'react';
import styles from './IntroSection.module.scss';

const IntroSection = (props) => {
  return (
    <section className={styles.IntroSection}>
      <h1>Marvelous!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus nec massa in mattis. Praesent ac sollicitudin augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </section>
  )
}

export default IntroSection