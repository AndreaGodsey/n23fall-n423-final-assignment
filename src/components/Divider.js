import React from 'react';
import styles from '@/styles/Divider.module.css';

export default function Divider(props) {
  
    return (
        <>
        
        <div className={styles.divider}>{props.titleItems}</div>
        
        </>
    )
}