/**
 *
 * Homepage
 *
 */

import React from "react";

import { connect } from "react-redux";

import { Switch, Route } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import actions from "../../actions";
import banners from "./banners.json";
import CarouselSlider from "../../components/Common/CarouselSlider";
import { responsiveOneItemCarousel } from "../../components/Common/CarouselSlider/utils";
import ProductsShop from "../ProductsShop";
class Homepage extends React.PureComponent {
  render() {
    const { products, advancedFilters, filterProducts } = this.props;
    return (
      <div>
        <div className="homepage">
          <div className="header-info">
            <Container>
              <Row>
                <Col xs="12" className="text-center d-block px-0 py-2">
                  <img src={"./images/news-icon.png"} alt="logo" />
                  <span>A new dawn of energy distribution is coming soon.</span>
                </Col>
              </Row>
            </Container>
          </div>
          <Row className="flex-row">
            <Col xs="12" lg="12" className="order-lg-1 mb-3 px-3 px-md-2 mt-2">
              <div className="home-carousel">
                <CarouselSlider
                  swipeable={true}
                  showDots={false}
                  infinite={true}
                  autoPlay={true}
                  slides={banners}
                  responsive={responsiveOneItemCarousel}>
                  {banners.map((item, index) => (
                    <img key={index} src={item.imageUrl} />
                  ))}
                </CarouselSlider>
              </div>
            </Col>
          </Row>
        </div>
        <div className="homepage">
          <Row className="flex-row">
            <Col xs="3" lg="3" sm="3" md="3" className="mb-3 px-3 px-md-2 homepage-icons">
              <div className="d-table-caption">
                <Link to="/Recharge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                    <circle cx="26.6995" cy="26.6995" r="26.6995" fill="url(#paint0_linear_124_45)" />
                    <g clip-path="url(#clip0_124_45)">
                      <path
                        d="M26.5 43.6582C21.9494 43.6582 17.5851 41.8505 14.3673 38.6327C11.1495 35.4149 9.3418 31.0506 9.3418 26.5C9.34175 25.7088 9.39611 24.9185 9.50449 24.1348C9.50935 24.0795 9.52537 24.0259 9.55156 23.977C9.57776 23.9281 9.61359 23.885 9.6569 23.8504C9.70021 23.8158 9.75009 23.7903 9.80353 23.7755C9.85697 23.7607 9.91286 23.7568 9.96781 23.7642C10.0228 23.7716 10.0757 23.7901 10.1233 23.8185C10.1709 23.847 10.2123 23.8847 10.2449 23.9296C10.2775 23.9745 10.3006 24.0255 10.313 24.0795C10.3253 24.1336 10.3265 24.1896 10.3166 24.2441C10.2136 24.9917 10.1619 25.7454 10.1621 26.5C10.1621 35.5091 17.4909 42.8379 26.5 42.8379C35.5091 42.8379 42.8379 35.5091 42.8379 26.5C42.8379 17.4909 35.5084 10.1621 26.5 10.1621C23.1081 10.1634 19.8005 11.2193 17.0353 13.1837C14.2701 15.1482 12.1842 17.9238 11.0665 21.1263C11.0488 21.1772 11.0213 21.2241 10.9855 21.2644C10.9496 21.3046 10.9063 21.3374 10.8578 21.3609C10.8093 21.3844 10.7566 21.3981 10.7028 21.4012C10.649 21.4044 10.5951 21.3969 10.5442 21.3792C10.4933 21.3615 10.4464 21.334 10.4062 21.2982C10.3659 21.2624 10.3331 21.219 10.3096 21.1705C10.2861 21.122 10.2724 21.0693 10.2693 21.0155C10.2661 20.9617 10.2736 20.9078 10.2913 20.8569C11.3269 17.8832 13.1609 15.2519 15.5923 13.251C18.0238 11.2502 20.959 9.95699 24.0764 9.51312C27.1938 9.06926 30.3733 9.49183 33.2666 10.7345C36.1598 11.9773 38.6553 13.9922 40.4798 16.5587C42.3042 19.1252 43.3872 22.1442 43.6101 25.2852C43.8331 28.4262 43.1874 31.5679 41.7438 34.3664C40.3001 37.1648 38.1142 39.512 35.4255 41.1509C32.7368 42.7899 29.6489 43.6573 26.5 43.6582Z"
                        fill="black"
                      />
                      <path
                        d="M10.1409 23.309C10.1112 23.3092 10.0816 23.306 10.0527 23.2995C9.99982 23.288 9.94973 23.2661 9.90533 23.2352C9.86092 23.2043 9.82308 23.1649 9.79398 23.1192C9.76487 23.0736 9.74509 23.0227 9.73576 22.9694C9.72643 22.9161 9.72774 22.8614 9.73961 22.8087C9.78405 22.6036 9.83463 22.3917 9.89 22.1784C9.90347 22.1262 9.92708 22.0772 9.95948 22.0342C9.99188 21.9912 10.0324 21.9549 10.0788 21.9276C10.1252 21.9002 10.1766 21.8823 10.2299 21.8747C10.2833 21.8672 10.3376 21.8703 10.3897 21.8838C10.4419 21.8972 10.4909 21.9208 10.5339 21.9532C10.5769 21.9856 10.6132 22.0262 10.6405 22.0726C10.6679 22.119 10.6858 22.1703 10.6933 22.2237C10.7009 22.277 10.6978 22.3313 10.6843 22.3835C10.6317 22.5885 10.5832 22.7888 10.5408 22.9837C10.5214 23.0754 10.4711 23.1578 10.3983 23.217C10.3256 23.2762 10.2347 23.3087 10.1409 23.309Z"
                        fill="black"
                      />
                      <path
                        d="M26.5 40.2402C18.9237 40.2402 12.7598 34.0763 12.7598 26.5C12.7598 18.9237 18.9237 12.7598 26.5 12.7598C34.0763 12.7598 40.2402 18.9237 40.2402 26.5C40.2402 34.0763 34.0763 40.2402 26.5 40.2402ZM26.5 13.5801C19.3763 13.5801 13.5801 19.3763 13.5801 26.5C13.5801 33.6237 19.3763 39.4199 26.5 39.4199C33.6237 39.4199 39.4199 33.6237 39.4199 26.5C39.4199 19.3763 33.6237 13.5801 26.5 13.5801Z"
                        fill="black"
                      />
                      <path
                        d="M26.4999 29.4279C25.9151 29.4272 25.3544 29.1945 24.9409 28.781C24.5274 28.3674 24.2947 27.8068 24.294 27.2219V24.7972H21.8693C21.5796 24.7972 21.2927 24.7402 21.0251 24.6293C20.7575 24.5184 20.5143 24.3559 20.3094 24.1511C20.1046 23.9463 19.9421 23.7031 19.8312 23.4354C19.7204 23.1678 19.6633 22.881 19.6633 22.5913C19.6633 22.3016 19.7204 22.0147 19.8312 21.7471C19.9421 21.4794 20.1046 21.2363 20.3094 21.0314C20.5143 20.8266 20.7575 20.6641 21.0251 20.5532C21.2927 20.4424 21.5796 20.3853 21.8693 20.3853H24.294V17.9606C24.294 17.3755 24.5264 16.8144 24.9401 16.4007C25.3538 15.9871 25.9149 15.7546 26.4999 15.7546C27.085 15.7546 27.6461 15.9871 28.0598 16.4007C28.4735 16.8144 28.7059 17.3755 28.7059 17.9606V20.3853H31.1306C31.7157 20.3853 32.2768 20.6177 32.6905 21.0314C33.1042 21.4451 33.3366 22.0062 33.3366 22.5913C33.3366 23.1763 33.1042 23.7374 32.6905 24.1511C32.2768 24.5648 31.7157 24.7972 31.1306 24.7972H28.7059V27.2219C28.7052 27.8068 28.4725 28.3674 28.059 28.781C27.6455 29.1945 27.0848 29.4272 26.4999 29.4279ZM21.8693 21.2056C21.5018 21.2056 21.1493 21.3516 20.8895 21.6115C20.6296 21.8713 20.4836 22.2238 20.4836 22.5913C20.4836 22.9588 20.6296 23.3112 20.8895 23.5711C21.1493 23.8309 21.5018 23.9769 21.8693 23.9769H24.7041C24.8129 23.9769 24.9173 24.0201 24.9942 24.097C25.0711 24.174 25.1143 24.2783 25.1143 24.3871V27.2219C25.1143 27.4039 25.1501 27.5841 25.2198 27.7522C25.2894 27.9203 25.3915 28.0731 25.5202 28.2017C25.6488 28.3304 25.8016 28.4325 25.9697 28.5021C26.1378 28.5717 26.318 28.6076 26.4999 28.6076C26.6819 28.6076 26.8621 28.5717 27.0302 28.5021C27.1983 28.4325 27.3511 28.3304 27.4797 28.2017C27.6084 28.0731 27.7105 27.9203 27.7801 27.7522C27.8498 27.5841 27.8856 27.4039 27.8856 27.2219V24.3871C27.8856 24.2783 27.9288 24.174 28.0057 24.097C28.0826 24.0201 28.187 23.9769 28.2957 23.9769H31.1306C31.4981 23.9769 31.8506 23.8309 32.1104 23.5711C32.3703 23.3112 32.5163 22.9588 32.5163 22.5913C32.5163 22.2238 32.3703 21.8713 32.1104 21.6115C31.8506 21.3516 31.4981 21.2056 31.1306 21.2056H28.2957C28.187 21.2056 28.0826 21.1624 28.0057 21.0855C27.9288 21.0086 27.8856 20.9042 27.8856 20.7955V17.9606C27.8856 17.7786 27.8498 17.5984 27.7801 17.4303C27.7105 17.2622 27.6084 17.1095 27.4797 16.9808C27.3511 16.8521 27.1983 16.7501 27.0302 16.6804C26.8621 16.6108 26.6819 16.575 26.4999 16.575C26.318 16.575 26.1378 16.6108 25.9697 16.6804C25.8016 16.7501 25.6488 16.8521 25.5202 16.9808C25.3915 17.1095 25.2894 17.2622 25.2198 17.4303C25.1501 17.5984 25.1143 17.7786 25.1143 17.9606V20.7955C25.1143 20.9042 25.0711 21.0086 24.9942 21.0855C24.9173 21.1624 24.8129 21.2056 24.7041 21.2056H21.8693Z"
                        fill="black"
                      />
                      <path
                        d="M29.2686 32.5156H23.7314C23.6227 32.5156 23.5183 32.4724 23.4414 32.3955C23.3645 32.3186 23.3213 32.2142 23.3213 32.1055C23.3213 31.9967 23.3645 31.8924 23.4414 31.8154C23.5183 31.7385 23.6227 31.6953 23.7314 31.6953H29.2686C29.3773 31.6953 29.4817 31.7385 29.5586 31.8154C29.6355 31.8924 29.6787 31.9967 29.6787 32.1055C29.6787 32.2142 29.6355 32.3186 29.5586 32.3955C29.4817 32.4724 29.3773 32.5156 29.2686 32.5156Z"
                        fill="black"
                      />
                      <path
                        d="M34.187 35.25H18.813C18.7042 35.25 18.5999 35.2068 18.523 35.1299C18.446 35.0529 18.4028 34.9486 18.4028 34.8398C18.4028 34.7311 18.446 34.6267 18.523 34.5498C18.5999 34.4729 18.7042 34.4297 18.813 34.4297H34.187C34.2958 34.4297 34.4001 34.4729 34.477 34.5498C34.554 34.6267 34.5972 34.7311 34.5972 34.8398C34.5972 34.9486 34.554 35.0529 34.477 35.1299C34.4001 35.2068 34.2958 35.25 34.187 35.25Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_124_45"
                        x1="0"
                        y1="26.6995"
                        x2="53.399"
                        y2="26.6995"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.156186" stop-color="#C4A269" />
                        <stop offset="0.583333" stop-color="#F7E6C2" />
                        <stop offset="1" stop-color="#C4A269" stop-opacity="0.9" />
                      </linearGradient>
                      <clipPath id="clip0_124_45">
                        <rect width="35" height="35" fill="white" transform="translate(9 9)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Recharge Balance</span>
                </Link>
              </div>
            </Col>
            <Col xs="3" lg="3" sm="3" md="3" className="mb-3 px-3 px-md-2 homepage-icons">
              <div className="d-table-caption">
                <Link to="/WithdrawBalance">
                  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                    <circle cx="26.6995" cy="26.6995" r="26.6995" fill="url(#paint0_linear_124_44)" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M29.4455 39.4715C28.7823 39.4715 28.1184 39.3453 27.4921 39.0905L20.0898 36.0825C19.2074 35.7234 18.2506 35.6454 17.322 35.8564L15.7797 36.2067C15.5855 36.2511 15.393 36.1293 15.3493 35.9357C15.305 35.7421 15.4268 35.5492 15.6203 35.5055L17.1628 35.1551C18.2357 34.9109 19.3415 35.0015 20.3607 35.4162L27.7634 38.4242C28.933 38.8995 30.2553 38.857 31.3919 38.3068L40.8734 33.7226C41.1375 33.5952 41.3347 33.3723 41.429 33.0944C41.5239 32.8171 41.5039 32.5199 41.3728 32.2576C41.1867 31.8873 40.8139 31.6563 40.3998 31.6563C40.3032 31.6562 40.2044 31.67 40.107 31.6969L32.1483 33.9143C31.9572 33.9674 31.7585 33.8556 31.7054 33.6639C31.6523 33.4728 31.7641 33.2742 31.9552 33.2212L39.9149 31.0036C40.0753 30.9593 40.2381 30.9375 40.3999 30.9375C41.0881 30.9374 41.7069 31.3197 42.016 31.936C42.234 32.3719 42.267 32.8659 42.1103 33.3267C41.9531 33.7875 41.6251 34.1585 41.1867 34.3702L31.7054 38.955C30.9942 39.2985 30.2204 39.4715 29.4455 39.4715Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30.783 35.3543C30.622 35.3543 30.4576 35.3306 30.2952 35.2807L24.4041 33.4722C24.2144 33.4141 24.1074 33.2131 24.1654 33.0232C24.2236 32.8334 24.4252 32.7266 24.6151 32.7847L30.5071 34.5931C30.9817 34.7392 31.4817 34.4876 31.6472 34.0199C31.6828 33.9205 31.7009 33.8169 31.7009 33.7101C31.7011 33.6764 31.6984 33.6433 31.6946 33.6109C31.6623 33.323 31.4986 33.0676 31.2544 32.9208L24.0219 29.9777C22.4181 29.3251 20.6603 29.0685 18.9392 29.2358L15.729 29.5468C15.5317 29.5655 15.3555 29.4213 15.3361 29.2233C15.3167 29.026 15.4616 28.8499 15.6595 28.8312L18.8696 28.5195C20.7065 28.3415 22.5824 28.6151 24.2928 29.3114L31.5494 32.2645C31.5637 32.2701 31.5779 32.277 31.5916 32.2851C32.0451 32.5429 32.351 33.0076 32.4091 33.5278C32.4168 33.5852 32.4203 33.6477 32.4203 33.7101C32.4205 33.8999 32.3879 34.0848 32.3248 34.2615C32.0869 34.9328 31.4598 35.3544 30.783 35.3543Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.1108 37.3558H13.7833C13.5846 37.3558 13.4233 37.1947 13.4233 36.9961C13.4236 36.7976 13.5845 36.6364 13.783 36.6364L15.1108 36.6364C15.2375 36.6364 15.3398 36.534 15.3398 36.4073L15.3401 28.8461C15.3401 28.72 15.2375 28.617 15.1106 28.617L13.7833 28.617C13.5846 28.617 13.4233 28.4559 13.4233 28.2573C13.4236 28.0587 13.5845 27.8976 13.783 27.8976L15.1108 27.8976C15.634 27.8976 16.0592 28.3235 16.0592 28.8462L16.0594 36.4072C16.0594 36.9306 15.634 37.3558 15.1108 37.3558Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.5119 37.36H13.2148C13.3298 37.36 13.4234 37.2671 13.4234 37.1515L13.4236 28.1005C13.4236 27.985 13.3297 27.8919 13.2148 27.8919L11.5119 27.8919L11.5119 37.36ZM13.2148 38.0794H11.1522C10.9532 38.0794 10.7925 37.9184 10.7925 37.7198L10.7925 27.5322C10.7925 27.3336 10.953 27.1725 11.1522 27.1725L13.2148 27.1725C13.7271 27.1725 14.1428 27.5884 14.1428 28.1005L14.143 37.1515C14.143 37.6635 13.7268 38.0795 13.2148 38.0794Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.771 24.1888C28.3132 24.1888 27.9073 23.8572 27.7824 23.3814C27.7326 23.189 27.8473 22.9923 28.0396 22.9424C28.2315 22.8924 28.4287 23.0073 28.4786 23.1997C28.5206 23.3583 28.6404 23.4694 28.7709 23.4694C28.9028 23.4694 29.0232 23.3577 29.0638 23.1965C29.0745 23.1584 29.0788 23.1197 29.0788 23.0791C29.079 23.0386 29.0744 23.0005 29.065 22.9661C29.0233 22.8012 28.9027 22.6888 28.7709 22.6888C28.3121 22.6888 27.9054 22.356 27.7824 21.8802C27.7568 21.7846 27.7437 21.6822 27.7437 21.5786C27.7439 21.4749 27.7568 21.3725 27.783 21.275C27.9069 20.8011 28.3132 20.4695 28.7709 20.4695C29.2332 20.4695 29.6402 20.8048 29.7613 21.2857C29.8102 21.478 29.6932 21.6741 29.5009 21.7222C29.308 21.7708 29.1125 21.6541 29.0638 21.4618C29.0233 21.3013 28.9027 21.1889 28.7709 21.1889C28.6406 21.1889 28.5205 21.2994 28.4786 21.458C28.468 21.4974 28.463 21.5373 28.463 21.5786C28.4633 21.6197 28.468 21.6597 28.478 21.6972C28.52 21.8583 28.6398 21.9695 28.7709 21.9695C29.2332 21.9695 29.6402 22.3054 29.7613 22.7863C29.7857 22.8768 29.7981 22.9767 29.7981 23.0791C29.7984 23.1821 29.7857 23.2821 29.7607 23.3764C29.6404 23.8535 29.233 24.1888 28.771 24.1888Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.771 21.1883C28.5726 21.1883 28.4113 21.0272 28.4113 20.8286L28.4113 20.3297C28.4113 20.1311 28.5723 19.97 28.7709 19.97C28.9696 19.97 29.1306 20.1311 29.1306 20.3297L29.1307 20.8286C29.1307 21.0272 28.9695 21.1883 28.771 21.1883Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.771 24.6878C28.5726 24.6878 28.4113 24.5274 28.4113 24.3281L28.4113 23.8286C28.4113 23.6299 28.5723 23.4689 28.7709 23.4689C28.9696 23.4689 29.1306 23.63 29.1306 23.8286L29.1307 24.3281C29.1307 24.5274 28.9695 24.6879 28.771 24.6878Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.7711 19.5778C27.2541 19.5778 26.0195 20.8118 26.0195 22.3292C26.0197 23.846 27.2541 25.08 28.7709 25.08C30.2879 25.08 31.5224 23.8461 31.5224 22.3292C31.5224 20.8118 30.2878 19.5778 28.7711 19.5778ZM28.7711 25.7993C26.8576 25.7993 25.3002 24.2426 25.3002 22.3292C25.3003 20.4152 26.8576 18.8584 28.7709 18.8584C30.685 18.8584 32.2417 20.4152 32.2417 22.3292C32.2418 24.2425 30.6849 25.7994 28.7711 25.7993Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.0595 18.2452C20.9378 18.2452 20.8377 18.3444 20.8377 18.4662L20.8378 26.1909C20.8378 26.3127 20.9376 26.4119 21.0594 26.4119L36.4825 26.4119C36.605 26.4119 36.7041 26.3127 36.7041 26.1909L36.7042 18.4662C36.7042 18.3444 36.6049 18.2451 36.4824 18.2451L21.0595 18.2452ZM36.4825 27.1313H21.0595C20.5405 27.1313 20.1189 26.7092 20.1189 26.1909L20.119 18.4662C20.119 17.9473 20.5405 17.5258 21.0593 17.5258H36.4825C37.0015 17.5258 37.4235 17.9473 37.4235 18.4662L37.4236 26.1909C37.4236 26.7091 37.0014 27.1313 36.4825 27.1313Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.4781 20.54C20.2794 20.54 20.1189 20.3789 20.1189 20.1804C20.119 19.9817 20.2794 19.8207 20.478 19.8207C21.5454 19.8206 22.4132 18.9527 22.4132 17.8861C22.4134 17.6875 22.5737 17.5264 22.7729 17.5264C22.9715 17.5263 23.132 17.6875 23.132 17.8861C23.132 19.3492 21.9417 20.5401 20.4781 20.54Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M37.064 20.54C35.6002 20.54 34.4099 19.3492 34.4099 17.8861C34.4101 17.6875 34.571 17.5264 34.7696 17.5264C34.9682 17.5263 35.1293 17.6875 35.1293 17.8861C35.1295 18.9526 35.9967 19.8207 37.0639 19.8207C37.2626 19.8206 37.4236 19.9818 37.4236 20.1804C37.4237 20.3789 37.2625 20.5401 37.064 20.54Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.7731 27.1313C22.5739 27.1313 22.4132 26.9702 22.4132 26.7716C22.4134 25.705 21.5452 24.8371 20.478 24.8371C20.2794 24.8371 20.1189 24.6759 20.1189 24.4774C20.119 24.2788 20.2794 24.1177 20.478 24.1177C21.9419 24.1177 23.132 25.3085 23.132 26.7716C23.132 26.9702 22.9715 27.1313 22.7731 27.1313Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.7698 27.1313C34.5711 27.1313 34.4099 26.9702 34.4099 26.7716C34.4101 25.3085 35.6002 24.1177 37.0639 24.1177C37.2626 24.1177 37.4236 24.2788 37.4236 24.4774C37.4237 24.6759 37.2625 24.8371 37.0639 24.8371C35.9967 24.8371 35.1293 25.7051 35.1293 26.7716C35.1295 26.9702 34.9682 27.1313 34.7698 27.1313Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.3786 22.6889H22.7599C22.5612 22.6889 22.4 22.5278 22.4 22.3292C22.4002 22.1299 22.5612 21.9695 22.7598 21.9695H23.3786C23.5773 21.9695 23.7383 22.13 23.7383 22.3292C23.7383 22.5277 23.5772 22.6889 23.3786 22.6889Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.7815 22.6889H34.1633C33.9646 22.6889 33.8035 22.5278 33.8035 22.3292C33.8036 22.1299 33.9646 21.9695 34.1632 21.9695H34.7815C34.9801 21.9695 35.1411 22.13 35.1411 22.3292C35.1412 22.5277 34.9799 22.6889 34.7815 22.6889Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.7458 16.7464C24.5471 16.7464 24.3859 16.5854 24.3859 16.3868L24.3861 14.8699C24.3861 14.6713 24.547 14.5103 24.7456 14.5103C24.9442 14.5102 25.1053 14.6713 25.1053 14.8699L25.1055 16.3867C25.1055 16.5853 24.9442 16.7465 24.7458 16.7464Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.446 16.7464C27.2473 16.7464 27.0867 16.5853 27.0867 16.3867L27.0869 13.8882C27.0869 13.6896 27.2471 13.5286 27.4457 13.5286C27.6449 13.5285 27.8054 13.6897 27.8054 13.8883L27.8057 16.3867C27.8057 16.5853 27.6452 16.7464 27.446 16.7464Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30.1469 16.7464C29.9482 16.7464 29.787 16.5854 29.787 16.3868L29.7872 14.8699C29.7872 14.6713 29.9481 14.5103 30.1467 14.5103C30.3453 14.5102 30.5064 14.6713 30.5064 14.8699L30.5066 16.3867C30.5066 16.5853 30.3452 16.7465 30.1469 16.7464Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M32.8476 16.7464C32.649 16.7464 32.4884 16.5853 32.4884 16.3867L32.4885 13.8882C32.4885 13.6896 32.6488 13.5286 32.8475 13.5286C33.0468 13.5285 33.2071 13.6897 33.2071 13.8883L33.2073 16.3867C33.2073 16.5853 33.0466 16.7464 32.8476 16.7464Z"
                      fill="black"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_124_44"
                        x1="0"
                        y1="26.6995"
                        x2="53.399"
                        y2="26.6995"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.156186" stop-color="#C4A269" />
                        <stop offset="0.583333" stop-color="#F7E6C2" />
                        <stop offset="1" stop-color="#C4A269" stop-opacity="0.9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Withdrawal Balance</span>
                </Link>
              </div>
            </Col>
            <Col xs="3" lg="3" sm="3" md="3" className="mb-3 px-3 px-md-2 homepage-icons">
              <div className="d-table-caption">
                <Link to="/Recharge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                    <circle cx="26.6995" cy="26.6995" r="26.6995" fill="url(#paint0_linear_124_43)" />
                    <path
                      d="M39.8 36.125H38.225V14.6C38.225 14.4607 38.1697 14.3272 38.0713 14.2287C37.9728 14.1303 37.8393 14.075 37.7 14.075H32.8C32.6608 14.075 32.5273 14.1303 32.4288 14.2287C32.3304 14.3272 32.275 14.4607 32.275 14.6V36.125H29.475V22.65C29.475 22.5107 29.4197 22.3772 29.3213 22.2787C29.2228 22.1803 29.0893 22.125 28.95 22.125H24.05C23.9108 22.125 23.7773 22.1803 23.6788 22.2787C23.5804 22.3772 23.525 22.5107 23.525 22.65V36.125H20.725V30.35C20.725 30.2107 20.6697 30.0772 20.5713 29.9787C20.4728 29.8803 20.3393 29.825 20.2 29.825H15.3C15.1608 29.825 15.0273 29.8803 14.9288 29.9787C14.8304 30.0772 14.775 30.2107 14.775 30.35V36.125H13.2C13.0608 36.125 12.9273 36.1803 12.8288 36.2787C12.7304 36.3772 12.675 36.5107 12.675 36.65C12.675 36.7892 12.7304 36.9227 12.8288 37.0212C12.9273 37.1196 13.0608 37.175 13.2 37.175H39.8C39.9393 37.175 40.0728 37.1196 40.1713 37.0212C40.2697 36.9227 40.325 36.7892 40.325 36.65C40.325 36.5107 40.2697 36.3772 40.1713 36.2787C40.0728 36.1803 39.9393 36.125 39.8 36.125ZM33.325 15.125H37.175V36.125H33.325V15.125ZM24.575 23.175H28.425V36.125H24.575V23.175ZM15.825 30.875H19.675V36.125H15.825V30.875Z"
                      fill="black"
                    />
                    <path
                      d="M13.5501 26.325C13.6892 26.3249 13.8227 26.2695 13.9211 26.171L28.4251 11.667V13.9C28.4251 14.0392 28.4804 14.1728 28.5788 14.2712C28.6773 14.3697 28.8108 14.425 28.9501 14.425C29.0893 14.425 29.2228 14.3697 29.3213 14.2712C29.4197 14.1728 29.4751 14.0392 29.4751 13.9V10.4C29.4745 10.334 29.4615 10.2687 29.4366 10.2075C29.4102 10.143 29.3712 10.0844 29.3219 10.0351C29.2726 9.98587 29.214 9.9469 29.1496 9.9205C29.0867 9.89231 29.0189 9.87684 28.9501 9.875H25.4501C25.3108 9.875 25.1773 9.93031 25.0788 10.0288C24.9804 10.1272 24.9251 10.2608 24.9251 10.4C24.9251 10.5392 24.9804 10.6728 25.0788 10.7712C25.1773 10.8697 25.3108 10.925 25.4501 10.925H27.6831L13.1791 25.429C13.1057 25.5024 13.0558 25.5959 13.0356 25.6977C13.0154 25.7995 13.0258 25.905 13.0655 26.0008C13.1051 26.0967 13.1724 26.1787 13.2586 26.2364C13.3449 26.2941 13.4463 26.3249 13.5501 26.325Z"
                      fill="black"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_124_43"
                        x1="0"
                        y1="26.6995"
                        x2="53.399"
                        y2="26.6995"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.156186" stop-color="#C4A269" />
                        <stop offset="0.583333" stop-color="#F7E6C2" />
                        <stop offset="1" stop-color="#C4A269" stop-opacity="0.9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>Coins Investment</span>
                </Link>
              </div>
            </Col>
            <Col xs="3" lg="3" sm="3" md="3" className="mb-3 px-3 px-md-2 homepage-icons">
              <div className="d-table-caption">
                <Link to="/HelpCenter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                    <circle cx="26.6995" cy="26.6995" r="26.6995" fill="url(#paint0_linear_6_466)" />
                    <g clip-path="url(#clip0_6_466)">
                      <path
                        d="M43.3531 32.556C43.3531 31.3098 42.8758 30.1325 42.0273 29.2257V25.3121C42.0273 21.1704 40.4152 17.2727 37.4826 14.3348C34.5448 11.3969 30.647 9.7848 26.4948 9.7848C17.9357 9.7742 10.9675 16.7424 10.9675 25.3068V29.2204C10.1243 30.1219 9.64172 31.3045 9.64172 32.556C9.64172 35.1121 11.6091 37.2121 14.1069 37.4189C14.3614 38.3257 15.1834 38.9939 16.1698 38.9939C17.3576 38.9939 18.3228 38.0287 18.3228 36.8409V28.2712C18.3228 27.0833 17.3576 26.1181 16.1698 26.1181C15.3319 26.1181 14.616 26.6007 14.2554 27.3007V25.3015C14.2554 18.556 19.744 13.0621 26.4895 13.0621C29.7508 13.0621 32.8266 14.3348 35.144 16.6469C37.4561 18.9697 38.7288 22.0401 38.7288 25.3015V27.2954C38.3735 26.6007 37.6523 26.1181 36.8198 26.1181C35.6319 26.1181 34.6667 27.0833 34.6667 28.2712V36.8409C34.6667 38.0287 35.6319 38.9939 36.8198 38.9939C37.8061 38.9939 38.6281 38.3257 38.8826 37.4189C38.9463 37.4136 39.0099 37.4083 39.0735 37.3977V37.9969C39.0735 39.5348 37.822 40.781 36.2895 40.781H30.0637V40.6378C30.0637 39.9325 29.491 39.3651 28.7857 39.3651H25.0099C24.3046 39.3651 23.7372 39.9378 23.7372 40.6378V41.9424C23.7372 42.6477 24.3099 43.2204 25.0099 43.2204H28.7857C29.491 43.2204 30.0637 42.6477 30.0637 41.9424V41.8045H36.2895C38.3895 41.8045 40.097 40.0969 40.097 37.9969V37.1537C41.9902 36.4856 43.3531 34.6772 43.3531 32.556ZM28.7857 42.2022H25.0099C24.872 42.2022 24.7554 42.0856 24.7554 41.9477V40.6431C24.7554 40.5053 24.8667 40.3886 25.0099 40.3886H28.7857C28.9288 40.3886 29.0402 40.5 29.0402 40.6431V41.2901V41.2954V41.3007V41.9477C29.0402 42.0856 28.9288 42.2022 28.7857 42.2022ZM10.6652 32.556C10.6652 31.3787 11.1955 30.2757 12.1182 29.5333C12.3038 29.3901 12.4682 29.2787 12.6485 29.1833C12.6645 29.178 12.6751 29.1674 12.691 29.1621C12.8448 29.0772 13.0038 29.0083 13.1682 28.9447C13.2001 28.934 13.2319 28.9181 13.2637 28.9075C13.4493 28.8439 13.6402 28.7909 13.8364 28.759H13.8417C13.9001 28.7484 13.9584 28.7378 14.0167 28.7272H14.0273V36.3848C12.1341 36.1356 10.6652 34.5128 10.6652 32.556ZM16.1751 27.1416C16.8008 27.1416 17.3046 27.6507 17.3046 28.2712V36.8409C17.3046 37.4666 16.7955 37.9704 16.1751 37.9704C15.5811 37.9704 15.1038 37.5143 15.0561 36.931V36.9257L15.0455 28.2287C15.072 27.6242 15.5652 27.1416 16.1751 27.1416ZM35.8705 15.931C33.3569 13.428 30.0266 12.0492 26.4948 12.0492C19.1872 12.0492 13.2425 17.9992 13.2425 25.3068V27.8416C13.216 27.8469 13.1948 27.8575 13.1682 27.8681C13.041 27.9053 12.919 27.9477 12.797 27.9901C12.7387 28.0113 12.6804 28.0325 12.622 28.059C12.4895 28.1174 12.3622 28.181 12.2349 28.25C12.2084 28.2659 12.1766 28.2765 12.1501 28.2924C12.097 28.3242 12.0387 28.356 11.991 28.3825V25.3121C11.991 17.3098 18.4978 10.803 26.4948 10.803C30.3713 10.803 34.0198 12.3143 36.7614 15.056C39.5031 17.803 41.0091 21.4462 41.0091 25.3121V28.3825C40.9561 28.3507 40.9031 28.3189 40.8501 28.2924C40.8129 28.2712 40.7758 28.2553 40.7334 28.2393C40.6114 28.1757 40.4895 28.1174 40.3675 28.0644C40.3145 28.0431 40.2561 28.0219 40.2031 28.0007C40.0864 27.953 39.9645 27.9159 39.8425 27.8787C39.8107 27.8681 39.7842 27.8575 39.7523 27.8469V25.3121C39.7523 21.775 38.3735 18.4447 35.8705 15.931ZM36.8251 37.9704C36.1993 37.9704 35.6955 37.4613 35.6955 36.8409V28.2712C35.6955 27.6454 36.2046 27.1416 36.8251 27.1416C37.4402 27.1416 37.944 27.6401 37.9546 28.25L37.9493 36.9151C37.9069 37.5037 37.419 37.9704 36.8251 37.9704ZM38.9781 36.3848V28.7272H38.9887C39.0629 28.7378 39.1319 28.7537 39.2008 28.7643C39.3811 28.7962 39.5614 28.8439 39.7364 28.9075C39.7629 28.9181 39.7895 28.9287 39.8213 28.9393C39.9857 29.003 40.1501 29.0719 40.3038 29.1621C40.3198 29.1727 40.3357 29.178 40.3569 29.1886C40.5266 29.2787 40.691 29.3901 40.8713 29.528C41.7993 30.2704 42.3349 31.3734 42.3349 32.556C42.3349 34.5075 40.8766 36.1303 38.9781 36.3848Z"
                        fill="black"
                      />
                      <path
                        d="M25.7152 32.5666C25.9114 32.8 26.1978 32.9325 26.5001 32.9325C26.8023 32.9325 27.0887 32.8 27.2849 32.5666L28.8228 30.7371H32.0523C32.9008 30.7371 33.5902 30.0477 33.5902 29.1992V21.8916C33.5902 21.0432 32.9008 20.3538 32.0523 20.3538H20.9478C20.0993 20.3538 19.4099 21.0432 19.4099 21.8916V29.2045C19.4099 30.053 20.0993 30.7424 20.9478 30.7424H24.1773L25.7152 32.5666ZM20.4334 29.2045V21.8916C20.4334 21.6053 20.6667 21.3772 20.9478 21.3772H32.0523C32.3387 21.3772 32.5667 21.6106 32.5667 21.8916V29.2045C32.5667 29.4909 32.3334 29.7189 32.0523 29.7189H28.5842C28.4357 29.7189 28.2925 29.7879 28.1917 29.8992L26.5001 31.9091L24.8084 29.8992C24.7129 29.7825 24.5698 29.7189 24.416 29.7189H20.9478C20.6614 29.7189 20.4334 29.4856 20.4334 29.2045Z"
                        fill="black"
                      />
                      <path
                        d="M22.4061 23.9333H30.5939C30.875 23.9333 31.103 23.7053 31.103 23.4243C31.103 23.1432 30.875 22.9152 30.5939 22.9152H22.4061C22.125 22.9152 21.897 23.1432 21.897 23.4243C21.897 23.7053 22.125 23.9333 22.4061 23.9333Z"
                        fill="black"
                      />
                      <path
                        d="M22.4061 26.134H30.5939C30.875 26.134 31.103 25.906 31.103 25.6249C31.103 25.3439 30.875 25.1158 30.5939 25.1158H22.4061C22.125 25.1158 21.897 25.3439 21.897 25.6249C21.897 25.906 22.125 26.134 22.4061 26.134Z"
                        fill="black"
                      />
                      <path
                        d="M26.7068 27.831C26.7068 27.5499 26.4788 27.3219 26.1977 27.3219H22.4061C22.125 27.3219 21.897 27.5499 21.897 27.831C21.897 28.1121 22.125 28.3401 22.4061 28.3401H26.1977C26.4788 28.3401 26.7068 28.1121 26.7068 27.831Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_6_466"
                        x1="0"
                        y1="26.6995"
                        x2="53.399"
                        y2="26.6995"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.156186" stop-color="#C4A269" />
                        <stop offset="0.583333" stop-color="#F7E6C2" />
                        <stop offset="1" stop-color="#C4A269" stop-opacity="0.9" />
                      </linearGradient>
                      <clipPath id="clip0_6_466">
                        <rect width="35" height="35" fill="white" transform="translate(9 9)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <br></br>
                  <span>Help Center</span>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
        <div className="homepage mb-10">
          <Row className="flex-row">
            <Col xs="6" lg="6" sm="6" md="6" className="mb-3 px-3 px-md-2">
              <div>
                <h1 className="pl-1 mb-0">New Offers and News</h1>
              </div>
            </Col>
            <Col xs="6" lg="6" sm="6" md="6" className="mb-3 px-3 px-md-2 text-right">
              <div>{/* <Link to="/shop"> <span className='gold-color font-size-12'>See All</span></Link> */}</div>
            </Col>
            <switch>
              <Route exact path="/" component={ProductsShop} />
            </switch>
          </Row>
        </div>
        {/* <div className='homepage'>
        <Row className='flex-row'>
        <Col xs='6' lg='6' sm='6' md='6' className='mb-3 px-3 px-md-2'>
        <div>
            <h1 className='pl-1'>Offers and News</h1>
          </div>
          </Col>
        </Row>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.storeProducts,
  };
};

export default connect(mapStateToProps, actions)(Homepage);
