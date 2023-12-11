import React from 'react';
import styles from '@/styles/Callout.adoption.module.css';

export default function Calloutadoption(props) {
  
    return (
        <>
        
        <div className={styles.calloutImageAdoption} style={{
            backgroundImage: `url(${props.imageURL})`}}>
            <h4 className={styles.titleCalloutAdoption}>{props.header}</h4>
        </div>
        
        </>
    )
}