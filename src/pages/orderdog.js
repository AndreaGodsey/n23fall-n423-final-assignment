import React from 'react';
import Callout from '@/components/Callout';
import styles from '@/styles/Contact.module.css'
import Aboutadoption from '@/components/Aboutadoption';
import { useRouter } from 'next/router';
export default function Orderdog() {
    const [fullName, setFullName] = React.useState('Andrea Godsey');
const [email, setEmail] = React.useState('agodsey@iu.edu');
const [phone, setPhone] = React.useState('xxx-xxx-xxxx');
const [time, setTime] = React.useState('5:00');
const [date, setDate] = React.useState('December 20th');
const [location, setLocation] = React.useState('Bloomington, Indiana');
// let fullName = 'Andrea Godsey';
// let email = 'agodsey@iu.edu';


const router = useRouter();

    function contactFormSubmit(e){
        e.preventDefault();
        if(fullName !== '' && email !== '' && phone !== '' && time !== '' && date !== ''&& location !== ''){
            router.push('/adoption/adoptionsuccess')
        }
        console.log(fullName, email, phone, time, date,location);
    }

    function updateContactInfo(e){
        
        if(e.currentTarget.name === 'fullName') {
            //fullName = e.currentTarget.value;
            setFullName(e.currentTarget.value);
        }

        if(e.currentTarget.name === 'email') {
            // email = e.currentTarget.value;
            setEmail(e.currentTarget.value);
        }

        if(e.currentTarget.name === 'phone') {
            // email = e.currentTarget.value;
            setPhone(e.currentTarget.value);
        }

        if(e.currentTarget.name === 'time') {
            // email = e.currentTarget.value;
            setTime(e.currentTarget.value);
        }

        if(e.currentTarget.name === 'date') {
            // email = e.currentTarget.value;
            setDate(e.currentTarget.value);
        }
        
        if(e.currentTarget.name === 'location') {
            // email = e.currentTarget.value;
            setLocation(e.currentTarget.value);
        }
    }
    return(
        <>
        <Callout imageURL='/Dogperson.jpg'
        header='Schedule a Visit!'
   />
        <Aboutadoption descriptionone=' Welcome to the adoption center of the website! So you have found a furry friend that interest you! Would you like the chance to get to know that special dog your interested in? You can see them in person by scheduling a time and day to have a playdate with a possible forever friend! Just put your name, phone number, email, time of visit, date of visit, and list one of our charity locations!
           '
            />
        
        <form className={styles.form} onSubmit={contactFormSubmit}>

        <div className={styles.formField}>
            <label>Full Name:</label>
            <input name='fullName' type='text' placeholder='Andrea Godsey' onChange={updateContactInfo} value={fullName}></input>
        </div>

        <div className={styles.formField}>
            <label>Email:</label>
            <input name='email' type='email' placeholder='agodsey@iu.edu'onChange={updateContactInfo} value={email}></input>
        </div>

        <div className={styles.formField}>
            <label>Phone Number:</label>
            <input name='phone' type='phone' placeholder='xxx-xxx-xxxx'onChange={updateContactInfo} value={phone}></input>
        </div>

        <div className={styles.formField}>
            <label>Time of Visit:</label>
            <input name='time' type='time' placeholder='5:00'onChange={updateContactInfo} value={time}></input>
        </div>

        <div className={styles.formField}>
            <label>Date of Visit:</label>
            <input name='date' type='date' placeholder='December 20th'onChange={updateContactInfo} value={date}></input>
        </div>

        <div className={styles.formField}>
            <label>Location of Visit:</label>
            <input name='location' type='location' placeholder='Bloomington, Indiana'onChange={updateContactInfo} value={location}></input>
        </div>

        <div className={styles.formField}>
            <input type='submit' value='Schedule Play Time' ></input>
        </div>

        </form>
        </>
    );
}