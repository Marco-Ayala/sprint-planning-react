import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Rompecabezas 1000 piezas', price: 15, image: 'puzzle1.jpg' },
  { id: 2, name: 'Modelo a Escala Ferrari', price: 50, image: 'ferrari.jpg' },
];

const Gallery = () => {
  const dispatch = useDispatch();

  return (
    <div className="gallery">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} loading="lazy" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>
            Agregar al Carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
