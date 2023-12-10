import React from 'react';
import styles from '@/styles/About.bio.module.css';

export default function Aboutbio(props) {
  
    return (
        <>
        
        <div className={styles.Aboutinfo}>{props.description}</div>
        
        </>
    )
}