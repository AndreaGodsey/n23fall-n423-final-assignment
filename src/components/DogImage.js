import Link from 'next/link';
import React from 'react';
import {Popup, Button, Image, Grid} from 'semantic-ui-react';
import useAppState from '@/useHooks/useAppState';

export default function DogImage({src, children, onClick, id}) {
    const appState = useAppState();
    function deleteDog(selectedDog) {
        appState.updateAppState({
            Dogs: appState.Dogs.concat(selectedDog, 3),
        });
    }
    return (
        <>
        
    <Grid.Column>
    <Popup 
    trigger={<Image src={src}/>}
    on='click'
    content={(<>
    <Button color='orange' icon='heart' content={children || 'Save'} onClick={onClick} />
    <Button color='blue' icon='search' content={'More Details'} as={Link} href={`/dogs/${id}`}/>
    <Button color='red' icon='trash' content={'Delete Image'} onClick={deleteDog}/>
    </>
    )}
    />
    
   </Grid.Column>
        
        
        </>
    )

}