import React from 'react';
import { Grid, Button, } from 'semantic-ui-react';
import DogImage from '@/components/DogImage';
import useAppState from '@/useHooks/useAppState';
import Aboutbio from '@/components/Aboutbio';
import Callout from '@/components/Callout';

export default function Home() {

    const appState = useAppState();

    console.log(appState)

    function getDogImages() {
        fetch(`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg,png&format=json&has_breeds=true&order=RANDOM&page=0&limit=10`)
        .then(r=> r.json())
        .then (r=> {
            appState.updateAppState({ dogImages: r });
        })
        .catch((e) => {
            console.warn(e);
        });
    }

    function saveDogImage(selectedDog) {
        appState.updateAppState({ favoriteDogs: appState.favoriteDogs.concat(selectedDog)})
      }



    return (
  <>
     <Callout imageURL='/Dogperson.jpg'
        header='Welcome to The Dog Gallery'
   />

<Aboutbio description=' Welcome to the home page of the official website known as The Dog Gallery! On this website, you are able to look at your favorite dog breeds, and schedule times to visit your possible forever friend! Go on ahead and start your journey by clicking the "Reload Dogs" button! A list of cuddly friends will appear, giving you the option to favorite or learn more about them! If you get bored with the list, just click "Reload Dogs" again, and the page will give you more options! If you would like to learn more about us, take a look at our about page to learn about the owner, as well as our beginnings! Have any favorited animals? You can see your favorites listed in the favorites page, as well as the option to edit your username! How convenient! Is there a special dog you wish to meet? Click the Adopt Dog section to set up a playdate! Finally, you can create an account with us, so you can start using these amazing features!
           '
            />

  
  <Grid columns='1'>
        
        <Grid.Column></Grid.Column>

        <Grid.Column>
            <Button content='Reload Dogs' icon='sync' color='orange'onClick={getDogImages} />
        </Grid.Column>

        
        
        <Grid.Row columns='5'>
        {appState.dogImages.map((dogImage) => {
      return <DogImage  key={dogImage.id} src={dogImage.url}  onClick={() => saveDogImage(dogImage)} id={dogImage.id}></DogImage>;
    })}
            
        </Grid.Row>
  </Grid>
  
  
  </>
  
    );
  
  }