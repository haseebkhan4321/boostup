/**
 *
 * Shop
 *
 */

import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
class OurServices extends React.PureComponent {
  render() {
    return (
      <div className='shop buyCoin mb-10'>
         <Row className='mb-10'>
         <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0 recharge-balance'>
        <h1 className='text-center mt-2 gold-color'>Our Services</h1>
          </Col>
          <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0'>
        <div>
                <p className='px-4'>The income per movie ticket purchase depends on the level: minimum 5.5% to maximum 10%</p>
                <h1 className='px-4'>La quattordicesima domenica del tempo ordinario </h1>
                <div className='Coin-lists'>
                <ul className='pl-5 pr-2 mb-6'>
                  <li>The income per movie ti</li>
                  <li>The income </li>
                  <li>The income per movie ti</li>
                </ul>
          </div>
          </div>
          </Col>
            <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0 recharge-balance width-80'>
              <div className='m-auto mx-2 p-2 w-50 personal-account width-60'>
              <p className='px-4 text-left font-size-10'>You can Buy Coins for Profit</p>
              </div>
              <div className='m-auto p-2 mx-2 w-50 personal-account width-40'>
              <div className='px-0 buycoin-btn py-2'>
                <h1 className='py-2 px-4 bg-gold ok-to-recharge font-size-10'>Service</h1>  
                </div>
              </div>
            </Col>
            <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0 recharge-balance width-80'>
              <div className='m-auto mx-2 p-2 w-50 personal-account width-60'>
              <p className='px-4 text-left font-size-10'>You can Buy Coins for Profit</p>
              </div>
              <div className='m-auto p-2 mx-2 w-50 personal-account width-40'>
              <div className='px-0 buycoin-btn py-2'>
                <h1 className='py-2 px-4 bg-gold ok-to-recharge font-size-10'>Service</h1>  
                </div>
              </div>
            </Col>
            <Col xs='12' lg='12' sm='12' md='12' className='mb-3 px-0 recharge-balance width-80'>
              <div className='m-auto mx-2 p-2 w-50 personal-account width-60'>
              <p className='px-4 text-left font-size-10'>You can Buy Coins for Profit</p>
              </div>
              <div className='m-auto p-2 mx-2 w-50 personal-account width-40'>
              <div className='px-0 buycoin-btn py-2'>
                <h1 className='py-2 px-4 bg-gold ok-to-recharge font-size-10'>Service</h1>  
                </div>
              </div>
            </Col>
          </Row>
      
      </div>
    );
  }
}

export default OurServices;
