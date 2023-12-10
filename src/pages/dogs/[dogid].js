import React from "react";
import { useRouter } from "next/router";
import Doginformation from "@/components/Doginformation";
import { Rating } from 'semantic-ui-react';

export default function DogInfo() {
  const Router = useRouter();
  const [DogInfo, setDogInfo] = React.useState({ loading: true, breeds: [] });
  React.useEffect(function () {
    if (DogInfo.id !== Router.query.dogid && Router.query.dogid) {
      console.log("Load in dog info", Router.query.dogid);
      fetch(`https://api.thedogapi.com/v1/images/${Router.query.dogid}`)
        .then((r) => r.json())
        .then(function (r) {
          setDogInfo(r);
        })
        .catch((e) =>
          setDogInfo({ loading: false, id: Router.query.dogid, breeds: [] })
        );
    }
  });
  console.log(DogInfo);
  return (
    <>
      <h1 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "blue", fontFamily:'Trebuchet MS', color:'orange', fontSize:"60px"}}>About Your Furry Friend</h1>

    <Doginformation  descriptionone='Welcome to the Dog Information page! In this section, we get into the niddy-gritty of the details about our furry little pals! In this section, we discuss, the name of the breed, the weight, the temperament, the lifespan, their breed group, and finally what they are bred for.  Feel free to learn more about these special little guys!
           '
            />

      
      {DogInfo.breeds.length ? (
        <>
          <h3 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "orange", fontFamily:'Trebuchet MS', color:'white', fontSize:"40px"}}>Name: {DogInfo.breeds[0].name}</h3>
          <h3 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "orange", fontFamily:'Trebuchet MS', color:'white', fontSize:"40px"}}>Weight: {DogInfo.breeds[0].weight.imperial}</h3>
          <h3 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "orange", fontFamily:'Trebuchet MS', color:'white', fontSize:"40px"}}>Temperament: {DogInfo.breeds[0].temperament}</h3>
          <h3 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "orange", fontFamily:'Trebuchet MS', color:'white', fontSize:"40px"}}>Lifespan: {DogInfo.breeds[0].life_span}</h3>
          <h3 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "orange", fontFamily:'Trebuchet MS', color:'white', fontSize:"40px"}}>Breed Group: {DogInfo.breeds[0].breed_group}</h3>
          <h3 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "orange", fontFamily:'Trebuchet MS', color:'white', fontSize:"40px"}}>Bred For: {DogInfo.breeds[0].bred_for}</h3>
          <h3 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "orange", fontFamily:'Trebuchet MS', color:'white', fontSize:"40px"}}>Affection Level: {DogInfo.breeds[0].affection_level} <Rating style={{paddingLeft: "20px" }}icon='heart' defaultRating={5} maxRating={5} />
          </h3>
          <h3 style={{display: "flex", alignItems: 'center', justifyContent: 'center', backgroundColor: "orange", fontFamily:'Trebuchet MS', 
          color:'white', fontSize:"40px"}}>Child Friendly: {DogInfo.breeds[0].child_friendly}<Rating style={{paddingLeft: "20px" }} icon='star' defaultRating={4} maxRating={4} /></h3>
          
         
          
        
        </>
      ) : (
        <>
          <h3>No Dog Info Found</h3>
        </>
      )}
    </>
  );
}
