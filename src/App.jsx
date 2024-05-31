// src/App.js

import React from 'react';
import Card from './Card';

const cardData = [
  {
    title: 'Card 1',
    description: 'This is the description for card 1.',
    imageUrl: './card1.webp'
  },
  {
    title: 'Card 2',
    description: 'This is the description for card 2.',
    imageUrl: './card02.webp'
  },
  {
    title: 'Card 3',
    description: 'This is the description for card 3.',
    imageUrl: './card3.webp'
  },
  {
    title: 'Card 4',
    description: 'This is the description for card 4.',
    imageUrl: './card4.webp'
  },
  {
    title: 'Card 1',
    description: 'This is the description for card 1.',
    imageUrl: './card1.webp'
  },
  {
    title: 'Card 2',
    description: 'This is the description for card 2.',
    imageUrl: './card02.webp'
  },
  {
    title: 'Card 3',
    description: 'This is the description for card 3.',
    imageUrl: './card3.webp'
  },
  {
    title: 'Card 4',
    description: 'This is the description for card 4.',
    imageUrl: './card4.webp'
  },
  {
    title: 'Card 5',
    description: 'This is the description for card 5.',
    imageUrl: './card5.webp'
  },
  {
    title: 'Card 6',
    description: 'This is the description for card 6.',
    imageUrl: './card6.webp'
  },
  {
    title: 'Card 7',
    description: 'This is the description for card 7.',
    imageUrl: './card7.webp'
  },
  {
    title: 'Card 8',
    description: 'This is the description for card 8.',
    imageUrl: './card8.webp'
  },
  {
    title: 'Card 9',
    description: 'This is the description for card 9.',
    imageUrl: './card9.webp'
  },
  {
    title: 'Card 11',
    description: 'This is the description for card 11.',
    imageUrl: './card1.webp'
  },
  {
    title: 'Card 12',
    description: 'This is the description for card 12.',
    imageUrl: './card12.webp'
  },
  {
    title: 'Card 13',
    description: 'This is the description for card 13.',
    imageUrl: './card13.webp'
  },
  {
    title: 'Card 14',
    description: 'This is the description for card 14.',
    imageUrl: './card14.webp'
  },
  {
    title: 'Card 15',
    description: 'This is the description for card 15.',
    imageUrl: './card15.webp'
  },
];

const App = () => {
  return (
    <>
    <h2>All the card are here.</h2>
   
   
   <div className="app">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
    </>
  );
};

export default App;
