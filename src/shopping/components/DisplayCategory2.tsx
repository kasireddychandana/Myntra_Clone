import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FashionSaleType } from '../data';

const DisplayCategory2: React.FC<{ item: FashionSaleType }> = ({ item }) => {
   const navigate = useNavigate();
  const items = [
    {
      img: item.img5,
      price: item.price5,
      id: item.id5,
      description: item.description5,
    },
    {
      img: item.img6,
      price: item.price6,
      id: item.id6,
      description: item.description6,
    },
    {
      img: item.img7,
      price: item.price7,
      id: item.id7,
      description: item.description7,
    },
    {
      img: item.img8,
      price: item.price8,
      id: item.id8,
      description: item.description8,
    },
  ];
  const handleShopNowClick = (itemId: string) => {
    navigate(`/item/${itemId}`);
  };
  return (
    <section style={{ margin: '2rem 0' }}>
  <h2 style={{ textAlign: 'center',marginLeft:'590px', marginBottom: '1.5rem' }}>{item.title}</h2>
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', // Fixed to 4 columns
      gap: '1.5rem',
    }}
  >
        {items.map((item, index) => (
          <div key={index} style={{
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
             display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%', 
    minHeight: '450px',
          }}>
            <img
              src={item.img}
              alt={`sale-item-${index + 1}`}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                 borderRadius:'6px',
              }}
            />
            <div style={{ padding: '1rem', textAlign: 'center',display: 'flex',flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem', }}>
              <p style={{ fontWeight: 'bold', color: '#e63946', margin: 0  }}>
                {item.price}
              </p>
              <button   onClick={() => handleShopNowClick(item.id)} style={{
                marginTop: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#333',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                 width: 'fit-content',
                 minWidth: '120px', 
                  margin: '0.5rem 0', 
                  transition: 'background-color 0.3s',
              }}
               onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
                >
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DisplayCategory2;