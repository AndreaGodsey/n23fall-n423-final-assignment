import React from 'react';
import styles from '@/styles/Message.module.css'
export default function AdoptionSuccess(){
    return (
        <>


        <h1 className={styles.messageSent}>Your Visit Has Been Scheduled!</h1>
        <h1 className={styles.messageSent}>Time of Visit: 5:00 P.M</h1>
        <h1 className={styles.messageSent}>Date of Visit: December 20th</h1>
        <h1 className={styles.messageSent}>Location of Visit: Bloomington, Indiana</h1>
      
        </>
    );
}