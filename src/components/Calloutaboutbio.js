import React from 'react';
import styles from '@/styles/Callout.about.bio.module.css';

export default function Calloutaboutbio(props) {
  
    return (
        <>
        
        <div className={styles.calloutImage} style={{
            backgroundImage: `url(${props.imageURL})`}}>
        </div>
        
        </>
    )
}