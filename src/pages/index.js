import React from 'react';
import { Grid, Button,} from 'semantic-ui-react';
import DogImage from '@/components/DogImage';
import useAppState from '@/useHooks/useAppState';
import Abouthome from '@/components/Abouthome';
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

<Abouthome descriptionone=' Welcome to the home page of the official website known as The Dog Gallery! On this website, you are able to look at your favorite dog breeds, and schedule times to visit your possible forever friend! Feel free to have a look around, your new furry friend is waiting for you!
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