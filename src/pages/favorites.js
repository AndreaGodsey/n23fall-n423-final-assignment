import React from 'react';
import useAppState from '@/useHooks/useAppState';
import { Grid, Button, Header,Link } from 'semantic-ui-react';
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
        <Header style={{fontFamily: 'Trebuchet MS', color:'white', fontSize: '60px'}}  as='h1'>{appState.user}'s Favorites</Header>
        </Grid.Column>

        

        <Aboutfavorites descriptionone=' Welcome to your favorites page! Every dog image that you have favorited will show up here! You can get a closer look, and keep track of your possible new friend! How very convenient for you! Also, if you would like to change your username, click the "Change Username button. Enjoy your dogs! And if your interested, maybe schedule them for a playmate sometime! Their excited to get to know you!
           '
            />

        <Grid.Column>
            <Button content='Change Name' color='blue' icon='sync' onClick={changeName} />
        </Grid.Column>

        <Grid.Column>
        <Button color='red' icon='trash' content={'Delete Favorites'} as={Link} href={`/favorites`}/>
        </Grid.Column>
    
        
        <Grid.Row columns='5'>
        {appState.favoriteDogs.map((dog) => {
            return <DogImage key={dog.id} src={dog.url} />
        })}
        </Grid.Row>

        
        
        </Grid>
        
        
        </>
    )
}