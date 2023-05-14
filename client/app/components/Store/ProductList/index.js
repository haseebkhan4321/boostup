/**
 *
 * ProductList
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col,Container } from 'reactstrap';
import AddToWishList from '../AddToWishList';

const ProductList = props => {
  const { products, updateWishlist, authenticated } = props;

  return (
    <div className='product-list'>
      {products.map((product, index) => (
        
        <div key={index} className='mb-3 mb-md-0'>
          <div className='product-container'>
            <div className='item-box'>
              <div className='add-wishlist-box'>
                <AddToWishList
                  id={product._id}
                  liked={product?.isLiked ?? false}
                  enabled={authenticated}
                  updateWishlist={updateWishlist}
                  authenticated={authenticated}
                />
              </div>

              <div className='item-link homepage-icons'>
              {/* <div className=''>
              <Link to="">
              <img 
                    src={'./images/Coins/Image (1).png'} 
                    alt="Coin" 
                />
               <p className='px-4 text-left font-size-14 pt-1'>{product.name}</p>
              </Link>
            </div> */}
                <Link
                  to={`/product/${product.slug}`}
                  className='d-flex flex-column h-100'
                >
                  
                      <img
                        className='item-image'
                        src={`${
                          product.imageUrl
                            ? product.imageUrl
                            : '/images/placeholder-image.png'
                        }`}
                      />
                   
                  <p className='px-4 text-left font-size-14 pt-1'>{product.name}</p>
                  {/* <div className='item-body'>
                    <div className='item-details p-3'>
                      <h1 className='item-name'>{product.name}</h1>
                    </div>
                  </div> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
