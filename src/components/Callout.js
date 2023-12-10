import React from 'react';
import styles from '@/styles/Callout.module.css';

export default function Callout(props) {
  
    return (
        <>
        
        <div className={styles.calloutImage} style={{
            backgroundImage: `url(${props.imageURL})`}}>
            <h4 className={styles.titleCallout}>{props.header}</h4>
        </div>
        
        </>
    )
}