import React from 'react';
import Calloutadoption from '@/components/Calloutadoption';
import styles from '@/styles/Divider.module.css';
export default function AdoptionSuccess(){
    return (
        <>

        <div className={styles.divider}></div>
      
        <Calloutadoption imageURL='/Dogperson.jpg'
        header='You have been scheduled!'
   />
        <div className={styles.divider}></div>

        <Calloutadoption imageURL='/Clocks.jpg'
        header='Time of Visit: 5:00 PM'
   />
        <div className={styles.divider}></div>

<Calloutadoption imageURL='/Calendar.jpg'
        header='Date of Visit: December 20th'
   />

        <div className={styles.divider}></div>

        <Calloutadoption imageURL='/Map.jpg'
        header='Location of Visit: Bloomington, Indiana'
   />
        
        <div className={styles.divider}></div>
        </>
    );
}