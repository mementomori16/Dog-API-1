import React from 'react';
import { Breed } from '../types';
import { Card } from 'react-bootstrap';

interface BreedCardProps {
  breed: Breed;
}

const BreedCard: React.FC<BreedCardProps> = ({ breed }) => (
  <Card style={{ width: '18rem' }} >
    <Card.Img src={breed.image} className='card-img-top' alt={breed.name} width="200px"/>
    <Card.Title>{breed.name}</Card.Title>
    <Card.Text>Lorem ipsum</Card.Text>
  </Card>
);

export default BreedCard;
