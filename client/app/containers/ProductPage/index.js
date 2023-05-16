/**
 *
 * ProductPage
 *
 */

import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { BarsIcon } from '../../components/Common/Icon';
import actions from "../../actions";
import CartIcon from '../../components/Common/CartIcon';
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";
import LoadingIndicator from "../../components/Common/LoadingIndicator";
import NotFound from "../../components/Common/NotFound";
import { BagIcon } from "../../components/Common/Icon";
import ProductReviews from "../../components/Store/ProductReviews";
import SocialShare from "../../components/Store/SocialShare";
import Cart from '../Cart';
class ProductPage extends React.PureComponent {
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.fetchStoreProduct(slug);
    this.props.fetchProductReviews(slug);
    document.body.classList.add("product-page");
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      const slug = this.props.match.params.slug;
      this.props.fetchStoreProduct(slug);
    }
  }

  componentWillUnmount() {
    document.body.classList.remove("product-page");
  }

  render() {
    const {
      isLoading,
      product,
      productShopData,
      shopFormErrors,
      itemInCart,
      productShopChange,
      isCartOpen,
      handleAddToCart,
      toggleCart,
      handleRemoveFromCart,
      addProductReview,
      reviewsSummary,
      reviews,
      reviewFormData,
      reviewChange,
      reviewFormErrors,
    } = this.props;

    return (
      <div>
        <div className="product-shop shop buyCoin bg-theme">
        {isLoading ? (
          <LoadingIndicator />
        ) : Object.keys(product).length > 0 ? (
          <>
            <Row className="flex-row bg-">
            <Col xs='12' lg='12' sm='12' md='12' className='mb-2 px-0'>
        <div>
                 <img 
                    src={`${product.imageUrl ? product.imageUrl : "/images/placeholder-image.png"}`} 
                    alt="BuyCoin image" 
                />
                <h1 className='py-2 px-4'>{product.name}</h1>
                </div>
                </Col>
                <Col xs='6' lg='6' sm='6' md='6' className='px-2'>
              <div className='coin-btns'>
                <p className='text-center'>Price：${product.price}/Ticket</p>
              </div>
            </Col>
            <Col xs='6' lg='6' sm='6' md='6' className='px-2'>
              <div className='coin-btns'>
                <p className=' text-center'>Voucher: 1 Sheet/Ticket</p>
              </div>
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
                <div className='px-0 buycoin-btn'>
                <Button
                  borderless
                  variant='empty'
                  ariaLabel='But it Now'
                  icon={<BarsIcon />}
                  onClick={() => this.toggleMenu()}
                />
                <h1 className='py-2 px-4'></h1>
              
                </div>
          </div>
          </div>
          
          </Col>
              {/* <Col xs="12" md="7" lg="7" className="mb-3 px-3 px-md-2">
                <div className="product-container">
                  <div className="item-box">
                    <div className="item-customize">
                      <Input
                        type={"number"}
                        error={shopFormErrors["quantity"]}
                        label={"Quantity"}
                        name={"quantity"}
                        decimals={false}
                        min={1}
                        max={product.inventory}
                        placeholder={"Product Quantity"}
                        disabled={product.inventory <= 0 && !shopFormErrors["quantity"]}
                        value={productShopData.quantity}
                        onInputChange={(name, value) => {
                          productShopChange(name, value);
                        }}
                      />
                    </div>
                    <div className="item-actions">
                      {itemInCart ? (
                        <Button
                          variant="primary"
                          disabled={product.inventory <= 0 && !shopFormErrors["quantity"]}
                          text="Remove From Bag"
                          className="bag-btn"
                          icon={<BagIcon />}
                          onClick={() => handleRemoveFromCart(product)}
                        />
                      ) : (
                        <Button
                          variant="primary"
                          disabled={product.quantity <= 0 && !shopFormErrors["quantity"]}
                          text="Add To Bag"
                          className="bag-btn"
                          icon={<BagIcon />}
                          onClick={() => handleAddToCart(product)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </Col> */}
            </Row>
          </>
        ) : (
          <NotFound message="No product found." />
        )}
      </div>
      <Row className='mb-5 bg-light'>
                <Col xs='6' lg='6' sm='6' md='6' className='px-2'>
              <div className='coin-btns'>
                <p className='text-center color-dark'>Price：$8.00/Ticket</p>
              </div>
            </Col>
            <Col xs='6' lg='6' sm='6' md='6' className='px-2'>
              <div className='coin-btns'>
                <p className=' text-center text-dark'>Voucher: 1 Sheet/Ticket</p>
              </div>
            </Col>
            <Col xs='12' lg='12' sm='12' md='12' className='px-3 voucher-detail py-3 m-auto'>
              <div className='v-detail width-50'>
                <h1>Voucher</h1>
              </div>
              <div className='v-detail width-50'>
              <h1 className='text-right'>1 Sheets</h1>
              </div>
              <div className='v-detail width-50'>
                <h1>Service Charge</h1>
              </div>
              <div className='v-detail width-50'>
              <h1 className='text-right'>1 %</h1>
              </div>
            </Col>
            <Col xs='12' lg='12' sm='12' md='12' className='px-3 voucher-detail py-3 m-auto'>
              <div className='v-detail width-50'>
                <h1>Purchase Quantity</h1>
              </div>
              <div className='v-detail width-50'>
              <h1 className='text-center'>Quantity Count</h1>
              </div>
            </Col>
            <Col xs='12' lg='12' sm='12' md='12' className='px-3 voucher-detail py-3'>
              <div className='v-detail width-30'>
                <p>Purchase Quantity</p>
              </div>
              <div className='v-detail width-35'>
              <p className='text-center'>Quantity Count</p>
              </div>
              <div className='v-detail width-35'>
              <p className='text-center'>Quantity Count</p>
              </div>
              <div className='v-detail mr-2 width-35 mt-1'>
                <h1 className='padding-for-popup-buy'>256.00</h1>
              </div>
              <div className='v-detail ml-1 mt-1' style={{width:"61%"}}>
              <h1 className='text-center'><span>x</span> 4.00% = 10.24</h1>
              </div>
            </Col>
            <Col xs='12' lg='12' sm='12' md='12' className='px-3 voucher-detail pb-2'>
              <div className='v-detail width-50'>
                <h1>Payment Type</h1>
              </div>
              <div className='v-detail width-50'>
              <h1 className='text-left'>Balance</h1>
              <h1 className='text-left'>Balance</h1>
              </div>
              <div className='px-0 buycoin-btn mt-1'>
                
                <h1 className='py-2 px-4'>Purchase</h1>
              
                </div>
            </Col>
          </Row>
      <div
          className={isCartOpen ? 'mini-cart-open' : 'hidden-mini-cart'}
          aria-hidden={`${isCartOpen ? false : true}`}
        >
          <div className='mini-cart'>
            <Cart />
          </div>
          <div
            className={
              isCartOpen ? 'drawer-backdrop dark-overflow' : 'drawer-backdrop'
            }
            onClick={toggleCart}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const itemInCart = state.cart.cartItems.find((item) => item._id === state.product.storeProduct._id) ? true : false;

  return {
    product: state.product.storeProduct,
    productShopData: state.product.productShopData,
    shopFormErrors: state.product.shopFormErrors,
    isBrandOpen: state.navigation.isBrandOpen,
    isLoading: state.product.isLoading,
    reviews: state.review.productReviews,
    reviewsSummary: state.review.reviewsSummary,
    reviewFormData: state.review.reviewFormData,
    reviewFormErrors: state.review.reviewFormErrors,
    itemInCart,
  };
};

export default connect(mapStateToProps, actions)(ProductPage);
