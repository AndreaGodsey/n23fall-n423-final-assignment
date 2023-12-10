import React from 'react';
import styles from '@/styles/Dog.information.module.css'

export default function Doginformation(props) {
  
    return (
        <>
        <div className={styles.Doginformation}>{props.descriptionone}</div>
        
        </>
    )
}