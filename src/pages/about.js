import React from 'react';
import Callout from '@/components/Callout';
import Calloutaboutbio from '@/components/Calloutaboutbio';
import Aboutbio from '@/components/Aboutbio';
import Calloutoriginbio from '@/components/Originbio';
import styles from '@/styles/Divider.module.css';

export default function About(){
    return (
        <>
        
        <Callout imageURL='/Dogperson.jpg'
   header='About The Dog Gallery'
   />

<div className={styles.divider}></div>

<Calloutaboutbio imageURL='/Dogowner.jpg'/>

<div className={styles.divider}>Our Founder:Clarissa Fortunado</div>


<Aboutbio description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Commodo ullamcorper a lacus vestibulum sed arcu non. Facilisis mauris sit amet massa vitae tortor. Dignissim sodales ut eu sem. Vivamus at augue eget arcu dictum varius. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. At in tellus integer feugiat scelerisque varius morbi enim nunc. Aliquet nibh praesent tristique magna sit. Dignissim sodales ut eu sem integer vitae justo. Amet aliquam id diam maecenas ultricies mi eget. Nunc non blandit massa enim nec. Et ultrices neque ornare aenean euismod elementum nisi. Velit dignissim sodales ut eu sem integer vitae. Netus et malesuada fames ac turpis egestas. Non pulvinar neque laoreet suspendisse interdum consectetur. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh.

Egestas pretium aenean pharetra magna. Orci a scelerisque purus semper eget duis at tellus at. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Dolor morbi non arcu risus quis varius quam quisque id. Facilisi cras fermentum odio eu feugiat pretium. Leo duis ut diam quam nulla porttitor. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Nunc sed id semper risus. Ut sem nulla pharetra diam. Sit amet purus gravida quis blandit turpis cursus in. Ac auctor augue mauris augue neque gravida in fermentum et.'/>

<div className={styles.divider}>Our Humble Beginnings</div>

<Calloutoriginbio imageURL='/Humbledog.jpg'/>

<Aboutbio description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Commodo ullamcorper a lacus vestibulum sed arcu non. Facilisis mauris sit amet massa vitae tortor. Dignissim sodales ut eu sem. Vivamus at augue eget arcu dictum varius. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. At in tellus integer feugiat scelerisque varius morbi enim nunc. Aliquet nibh praesent tristique magna sit. Dignissim sodales ut eu sem integer vitae justo. Amet aliquam id diam maecenas ultricies mi eget. Nunc non blandit massa enim nec. Et ultrices neque ornare aenean euismod elementum nisi. Velit dignissim sodales ut eu sem integer vitae. Netus et malesuada fames ac turpis egestas. Non pulvinar neque laoreet suspendisse interdum consectetur. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Duis at tellus at urna condimentum. Malesuada bibendum arcu vitae elementum curabitur vitae. Cursus euismod quis viverra nibh.

Egestas pretium aenean pharetra magna. Orci a scelerisque purus semper eget duis at tellus at. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Dolor morbi non arcu risus quis varius quam quisque id. Facilisi cras fermentum odio eu feugiat pretium. Leo duis ut diam quam nulla porttitor. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Nunc sed id semper risus. Ut sem nulla pharetra diam. Sit amet purus gravida quis blandit turpis cursus in. Ac auctor augue mauris augue neque gravida in fermentum et.'/>

        </>
    )
}