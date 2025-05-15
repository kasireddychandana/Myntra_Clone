import React from 'react';
import { useParams } from 'react-router-dom'; 
import { FashionCategory, FashionSale } from '../data'; 
const getItemById = (id: string) => {
  const allItems = [
    { ...FashionCategory, category: 'Gents Fashion' },
    { ...FashionSale, category: 'Ladies Fashion' }
  ];

  for (const category of allItems) {
    const itemKey = `id${id.toUpperCase()}` as keyof typeof category; 
    const itemId=category[itemKey];
    if (itemId) {return category;
  }
  }
  return null; 
};

const ItemDetails: React.FC = () => {
  const { id } = useParams(); 
  const item = getItemById(id || ''); 

  if (!item) {
    return <div>Item not found</div>; 
  }
   const imageIndex = Number(id); 
  const itemImage = item[`img${imageIndex}` as keyof typeof item]; 
  const itemPrice = item[`price${imageIndex}` as keyof typeof item]; 
  const itemDescription = item[`description${imageIndex}` as keyof typeof item];  


  return (
    <div style={{ padding: '2rem', width: '1000px', margin: '0 auto' }}>
      <h1>{item.title}</h1> 
      <img
        src={itemImage} 
        alt={'item-${id}'} 
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      />
      <div style={{ marginTop: '1.5rem' }}>
        <h3>Price: {itemPrice}</h3>
        <p>{itemDescription || 'No description available'}</p> {/* You can add more description field in the data */}
        <button
          style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
