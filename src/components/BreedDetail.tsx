import { useEffect, useState } from "react";
import { Breed } from "../types";
import { useParams } from "react-router";
import axios from "axios";
import { Card } from "react-bootstrap";


  
  const BreedDetail: React.FC = () =>  {
    let { breedName } = useParams<{ breedName: string }>();  // Specify the expected type
    const [breed, setBreed] = useState<Breed | null>(null);

    useEffect(() => {
      if (breedName) {
        axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`)
          .then(response => {
            setBreed({
              name: breedName,
              image: response.data.message,
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'  // Assume description
            });
          })
          .catch(error => console.error('Fetching breed data failed', error));
      }
    }, [breedName]);  

    return (
    <Card style={{ width: '30rem' }} >
      <Card.Img src={breed?.image} alt={breed?.name} width="100%"/>
      <Card.Title>{breed?.name}</Card.Title>
      <Card.Text>{breed?.description}</Card.Text>
    </Card>
  );
}
  
  export default BreedDetail;