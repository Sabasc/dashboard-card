Home.jsx
import React from 'react';
import { Card } from 'antd';

const MyCards = () => {
  const cardData = [
    { id: 1, title: 'Card 1', description: 'This is card 1' },
    { id: 2, title: 'Card 2', description: 'This is card 2' },
    { id: 3, title: 'Card 3', description: 'This is card 3' },
  ];

  return (
    <div>
      {cardData.map((card) => (
        <Card
          key={card.id}
          hoverable
          style={{ width: 300, marginBottom: 20 }}
          cover={
            <img
              alt="example"
              src={`https://example.com/image-${card.id}.jpg`} // Replace with your image URLs
            />
          }
        >
          <Card.Meta title={card.title} description={card.description} />
        </Card>
      ))}
    </div>
  );
};

export default MyCards;
