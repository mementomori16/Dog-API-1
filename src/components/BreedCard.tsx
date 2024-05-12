import React from 'react';
import { Breed } from '../types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface BreedCardProps {
  breed: Breed;
}

const BreedCard: React.FC<BreedCardProps> = ({ breed}) => (
  <Link to={`/breed/${breed.name}`} style={{ width: '18rem', textDecoration: 'none' }}>
  <Card style={{ width: '18rem' }} >
    <Card.Img src={breed.image} className='card-img-top' alt={breed.name} width="200px"/>
    <Card.Title>{breed.name}</Card.Title>
    <Card.Text>Lorem ipsum</Card.Text>
  </Card>
  </Link>
);

export default BreedCard;
