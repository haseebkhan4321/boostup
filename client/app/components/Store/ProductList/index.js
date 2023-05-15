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
      <div className='homepage'>
      <Row className='flex-row'>
      {products.map((product, index) => (
        <Col key={index} xs='4' lg='4' sm='4' md='4' className='mb-3 px-1 px-md-1 homepage-icons'>
           
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

              <div className='item-link '>
                <Link
                  to={`/product/${product.slug}`}
                  className=''
                >
                      <img className='item-image' src={`${ product.imageUrl ? product.imageUrl : '/images/placeholder-image.png' }`} />
                   
                  <p className='px-4 text-left font-size-14 pt-1'>{product.name}</p>
                </Link>
              </div>
            </div>
          </div>
          </Col>
           ))}
      </Row>
      </div>
    </div>
  );
};

export default ProductList;
