import Link from 'next/link';
import React from 'react';
import {Popup, Button, Image, Grid} from 'semantic-ui-react';


export default function DogImage({src, children, onClick, id}) {
    return (
        <>
        
    <Grid.Column>
    <Popup 
    trigger={<Image src={src}/>}
    on='click'
    content={(<>
    <Button color='orange' icon='heart' content={children || 'Save'} onClick={onClick} />
    <Button color='blue' icon='search' content={'More Details'} as={Link} href={`/dogs/${id}`}/>
    </>
    )}
    />
    
   </Grid.Column>
        
        
        </>
    )

}