import React from 'react';
import useAppState from '@/useHooks/useAppState';
import { Grid, Button, Header, } from 'semantic-ui-react';
import DogImage from '@/components/DogImage';
import Aboutfavorites from '@/components/Aboutfavorites';
import Callout from '@/components/Callout';

export default function Favorites() {
    const appState = useAppState();


    function changeName() {
        const titles = ['Loving', 'Friendly', 'Fantastic'];
        const randomTitleIndex = Math.floor(Math.random() * titles.length);

        appState.updateAppState({user: `Andrea the ${titles[randomTitleIndex]} Dog Lover`})
    }

    
    return(
       <>

<Callout imageURL='/Dogperson.jpg'
        header='Your Favorites'
   />
        
        <Grid columns={1}>
        
        <Grid.Column style={{display: "flex", alignItems: 'center', justifyContent: 'center'}} color='orange'>
        <Header style={{fontFamily: 'Georgia', color:'white', fontSize: '60px'}}  as='h1'>{appState.user}'s Favorites</Header>
        </Grid.Column>

        <Grid.Column>
            <Button content='Change Name' color='blue' icon='sync' onClick={changeName} />
        </Grid.Column>

        <Aboutfavorites descriptionone=' Welcome to your favorites page! Every dog image that you have favorited will show up here! Also, if you would like to change your username, click the "Change Username button. Enjoy your dogs!
           '
            />
    
        
        <Grid.Row columns='5'>
        {appState.favoriteDogs.map((dog) => {
            return <DogImage key={dog.id} src={dog.url} />
        })}
        </Grid.Row>
        
        </Grid>
        
        
        </>
    )
}