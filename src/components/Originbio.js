import React from 'react';
import styles from '@/styles/Origin.bio.module.css';

export default function Calloutoriginbio(props) {
  
    return (
        <>
        
        <div className={styles.calloutImage} style={{
            backgroundImage: `url(${props.imageURL})`}}>
        </div>
        
        </>
    )
}