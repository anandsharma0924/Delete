"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home6Testimonial = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      // autoplay: {
      // 	delay: 2500, // Autoplay duration in milliseconds
      // 	disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".home6-testimonial-slider-next",
        prevEl: ".home6-testimonial-slider-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    }
  }, [])
  return (
    <>
      <div className="home6-testimonial-section mb-110">
        <div className="row g-0">
          <div className="col-xl-4">
            <div className="testimonial-left-img">
              <img src="../assets/img/home6/home6-testimonial-img.jpg" alt="" />
            </div>
          </div>
          <div className="col-xl-8">
            <div className="testimonial-wrap">
              <div className="section-title4 two text-center mb-60">
                <span>Exceptional Experiences</span>
                <h2>Our Customers <span>Speak</span></h2>
              </div>
              <div className="testimonial-slider-area">
                <div className="row">
                  <div className="col-lg-12">
                    <Swiper {...settings} className="swiper home6-testimonial-slider">
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card three">
                            <svg className="quote" width={54} height={55} viewBox="0 0 54 55" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <path d="M36.1231 51.6592C36.8825 51.4766 40.3102 49.6611 41.7657 48.6729C43.6536 47.3945 44.7188 46.5244 46.3114 44.9023C51.4688 39.6816 53.42 34.1924 53.8946 23.5791C53.9684 22.0537 54 17.7891 53.9789 13.1055C53.9473 5.76855 53.9367 5.17773 53.7575 4.82324C53.5043 4.31836 53.0086 3.80273 52.4813 3.5127L52.0489 3.27637L42.9258 3.27637C35.4692 3.27637 33.7289 3.3086 33.3914 3.42676C32.8746 3.60938 32.2207 4.21094 31.9254 4.76953L31.6934 5.20996L31.6618 14.3838C31.6301 24.4707 31.6196 24.2451 32.2735 25.0508C32.4422 25.2656 32.8325 25.5664 33.1383 25.7168L33.6868 25.9961L38.0426 25.9961L42.3985 25.9961L42.3985 26.7803C42.3985 28.499 41.9871 30.916 41.3965 32.7207C40.0571 36.8027 37.7262 39.3809 33.3282 41.626C32.4739 42.0664 31.6407 42.5605 31.4508 42.7647C30.9657 43.2695 30.7653 43.8926 30.818 44.709C30.8602 45.3105 31.0079 45.6973 32.1153 48.0498C33.4125 50.8105 33.6551 51.1865 34.425 51.5088C34.8996 51.7129 35.6379 51.7773 36.1231 51.6592Z" />
                                <path d="M6.11719 51.3154C13.2152 48.1572 18.6258 42.7861 21.0199 36.5234C21.7055 34.7402 22.3172 32.0225 22.6652 29.2188C23.1082 25.7061 23.1504 24.3848 23.1504 14.6094C23.1504 5.59668 23.1398 5.18848 22.95 4.80176C22.6969 4.27539 22.2434 3.81348 21.6844 3.5127L21.252 3.27637L12.0762 3.27637C2.97422 3.27637 2.90039 3.27637 2.42578 3.50195C1.85625 3.77051 1.43438 4.18946 1.11797 4.78028C0.896486 5.20996 0.896486 5.23145 0.864846 14.3838C0.833206 24.4707 0.82266 24.2451 1.47657 25.0508C1.64532 25.2656 2.03555 25.5664 2.34141 25.7168L2.88985 25.9961L7.29844 25.9961C11.591 25.9961 11.707 25.9961 11.707 26.2002C11.707 27.0059 11.4328 29.3799 11.2219 30.4541C10.8949 32.1084 10.5469 33.1719 9.86133 34.6436C8.40586 37.7588 6.19102 39.8535 2.42579 41.7012C0.48516 42.6465 0.0632855 43.1514 0.0527399 44.5264C0.05274 45.2676 0.0738333 45.3106 1.26563 47.835C1.93008 49.2315 2.61563 50.5635 2.78438 50.7783C3.53321 51.7022 4.78829 51.9063 6.11719 51.3154Z" />
                              </g>
                            </svg>
                            <div className="testimonial-author-wrap">
                              <div className="author-area">
                                <div className="author-img">
                                  <img src="../assets/img/home2/testi-author-img1.png" alt="" />
                                </div>
                                <div className="author-content">
                                  <h6>Brooks Abelam</h6>
                                  <span>CEO At astra.com</span>
                                </div>
                              </div>
                            </div>
                            <div className="testimonial-content">
                              <p>“Feel free to customize the key features based on thena helps potential clients understand the specific valueles they'll receive at each pricing tier.”</p>
                              <span>Great Auction Product!</span>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card three">
                            <svg className="quote" width={54} height={55} viewBox="0 0 54 55" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <path d="M36.1231 51.6592C36.8825 51.4766 40.3102 49.6611 41.7657 48.6729C43.6536 47.3945 44.7188 46.5244 46.3114 44.9023C51.4688 39.6816 53.42 34.1924 53.8946 23.5791C53.9684 22.0537 54 17.7891 53.9789 13.1055C53.9473 5.76855 53.9367 5.17773 53.7575 4.82324C53.5043 4.31836 53.0086 3.80273 52.4813 3.5127L52.0489 3.27637L42.9258 3.27637C35.4692 3.27637 33.7289 3.3086 33.3914 3.42676C32.8746 3.60938 32.2207 4.21094 31.9254 4.76953L31.6934 5.20996L31.6618 14.3838C31.6301 24.4707 31.6196 24.2451 32.2735 25.0508C32.4422 25.2656 32.8325 25.5664 33.1383 25.7168L33.6868 25.9961L38.0426 25.9961L42.3985 25.9961L42.3985 26.7803C42.3985 28.499 41.9871 30.916 41.3965 32.7207C40.0571 36.8027 37.7262 39.3809 33.3282 41.626C32.4739 42.0664 31.6407 42.5605 31.4508 42.7647C30.9657 43.2695 30.7653 43.8926 30.818 44.709C30.8602 45.3105 31.0079 45.6973 32.1153 48.0498C33.4125 50.8105 33.6551 51.1865 34.425 51.5088C34.8996 51.7129 35.6379 51.7773 36.1231 51.6592Z" />
                                <path d="M6.11719 51.3154C13.2152 48.1572 18.6258 42.7861 21.0199 36.5234C21.7055 34.7402 22.3172 32.0225 22.6652 29.2188C23.1082 25.7061 23.1504 24.3848 23.1504 14.6094C23.1504 5.59668 23.1398 5.18848 22.95 4.80176C22.6969 4.27539 22.2434 3.81348 21.6844 3.5127L21.252 3.27637L12.0762 3.27637C2.97422 3.27637 2.90039 3.27637 2.42578 3.50195C1.85625 3.77051 1.43438 4.18946 1.11797 4.78028C0.896486 5.20996 0.896486 5.23145 0.864846 14.3838C0.833206 24.4707 0.82266 24.2451 1.47657 25.0508C1.64532 25.2656 2.03555 25.5664 2.34141 25.7168L2.88985 25.9961L7.29844 25.9961C11.591 25.9961 11.707 25.9961 11.707 26.2002C11.707 27.0059 11.4328 29.3799 11.2219 30.4541C10.8949 32.1084 10.5469 33.1719 9.86133 34.6436C8.40586 37.7588 6.19102 39.8535 2.42579 41.7012C0.48516 42.6465 0.0632855 43.1514 0.0527399 44.5264C0.05274 45.2676 0.0738333 45.3106 1.26563 47.835C1.93008 49.2315 2.61563 50.5635 2.78438 50.7783C3.53321 51.7022 4.78829 51.9063 6.11719 51.3154Z" />
                              </g>
                            </svg>
                            <div className="testimonial-author-wrap">
                              <div className="author-area">
                                <div className="author-img">
                                  <img src="../assets/img/home2/testi-author-img2.png" alt="" />
                                </div>
                                <div className="author-content">
                                  <h6>Weston Bennett</h6>
                                  <span>CEO At astra.com</span>
                                </div>
                              </div>
                            </div>
                            <div className="testimonial-content">
                              <p>“Please feel free to alter the main features in a way that best explains to prospective customers the precise benefits they will receive at each price point.”</p>
                              <span>Fantastic Bidding Item!</span>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card three">
                            <svg className="quote" width={54} height={55} viewBox="0 0 54 55" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <path d="M36.1231 51.6592C36.8825 51.4766 40.3102 49.6611 41.7657 48.6729C43.6536 47.3945 44.7188 46.5244 46.3114 44.9023C51.4688 39.6816 53.42 34.1924 53.8946 23.5791C53.9684 22.0537 54 17.7891 53.9789 13.1055C53.9473 5.76855 53.9367 5.17773 53.7575 4.82324C53.5043 4.31836 53.0086 3.80273 52.4813 3.5127L52.0489 3.27637L42.9258 3.27637C35.4692 3.27637 33.7289 3.3086 33.3914 3.42676C32.8746 3.60938 32.2207 4.21094 31.9254 4.76953L31.6934 5.20996L31.6618 14.3838C31.6301 24.4707 31.6196 24.2451 32.2735 25.0508C32.4422 25.2656 32.8325 25.5664 33.1383 25.7168L33.6868 25.9961L38.0426 25.9961L42.3985 25.9961L42.3985 26.7803C42.3985 28.499 41.9871 30.916 41.3965 32.7207C40.0571 36.8027 37.7262 39.3809 33.3282 41.626C32.4739 42.0664 31.6407 42.5605 31.4508 42.7647C30.9657 43.2695 30.7653 43.8926 30.818 44.709C30.8602 45.3105 31.0079 45.6973 32.1153 48.0498C33.4125 50.8105 33.6551 51.1865 34.425 51.5088C34.8996 51.7129 35.6379 51.7773 36.1231 51.6592Z" />
                                <path d="M6.11719 51.3154C13.2152 48.1572 18.6258 42.7861 21.0199 36.5234C21.7055 34.7402 22.3172 32.0225 22.6652 29.2188C23.1082 25.7061 23.1504 24.3848 23.1504 14.6094C23.1504 5.59668 23.1398 5.18848 22.95 4.80176C22.6969 4.27539 22.2434 3.81348 21.6844 3.5127L21.252 3.27637L12.0762 3.27637C2.97422 3.27637 2.90039 3.27637 2.42578 3.50195C1.85625 3.77051 1.43438 4.18946 1.11797 4.78028C0.896486 5.20996 0.896486 5.23145 0.864846 14.3838C0.833206 24.4707 0.82266 24.2451 1.47657 25.0508C1.64532 25.2656 2.03555 25.5664 2.34141 25.7168L2.88985 25.9961L7.29844 25.9961C11.591 25.9961 11.707 25.9961 11.707 26.2002C11.707 27.0059 11.4328 29.3799 11.2219 30.4541C10.8949 32.1084 10.5469 33.1719 9.86133 34.6436C8.40586 37.7588 6.19102 39.8535 2.42579 41.7012C0.48516 42.6465 0.0632855 43.1514 0.0527399 44.5264C0.05274 45.2676 0.0738333 45.3106 1.26563 47.835C1.93008 49.2315 2.61563 50.5635 2.78438 50.7783C3.53321 51.7022 4.78829 51.9063 6.11719 51.3154Z" />
                              </g>
                            </svg>
                            <div className="testimonial-author-wrap">
                              <div className="author-area">
                                <div className="author-img">
                                  <img src="../assets/img/home2/testi-author-img3.png" alt="" />
                                </div>
                                <div className="author-content">
                                  <h6>Penelop Gian</h6>
                                  <span>CEO At astra.com</span>
                                </div>
                              </div>
                            </div>
                            <div className="testimonial-content">
                              <p>“You are welcome to alter the salient characteristics in a way that makes prospective customers aware of the precise benefits.”</p>
                              <span>Outstanding Auction Items!</span>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card three">
                            <svg className="quote" width={54} height={55} viewBox="0 0 54 55" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <path d="M36.1231 51.6592C36.8825 51.4766 40.3102 49.6611 41.7657 48.6729C43.6536 47.3945 44.7188 46.5244 46.3114 44.9023C51.4688 39.6816 53.42 34.1924 53.8946 23.5791C53.9684 22.0537 54 17.7891 53.9789 13.1055C53.9473 5.76855 53.9367 5.17773 53.7575 4.82324C53.5043 4.31836 53.0086 3.80273 52.4813 3.5127L52.0489 3.27637L42.9258 3.27637C35.4692 3.27637 33.7289 3.3086 33.3914 3.42676C32.8746 3.60938 32.2207 4.21094 31.9254 4.76953L31.6934 5.20996L31.6618 14.3838C31.6301 24.4707 31.6196 24.2451 32.2735 25.0508C32.4422 25.2656 32.8325 25.5664 33.1383 25.7168L33.6868 25.9961L38.0426 25.9961L42.3985 25.9961L42.3985 26.7803C42.3985 28.499 41.9871 30.916 41.3965 32.7207C40.0571 36.8027 37.7262 39.3809 33.3282 41.626C32.4739 42.0664 31.6407 42.5605 31.4508 42.7647C30.9657 43.2695 30.7653 43.8926 30.818 44.709C30.8602 45.3105 31.0079 45.6973 32.1153 48.0498C33.4125 50.8105 33.6551 51.1865 34.425 51.5088C34.8996 51.7129 35.6379 51.7773 36.1231 51.6592Z" />
                                <path d="M6.11719 51.3154C13.2152 48.1572 18.6258 42.7861 21.0199 36.5234C21.7055 34.7402 22.3172 32.0225 22.6652 29.2188C23.1082 25.7061 23.1504 24.3848 23.1504 14.6094C23.1504 5.59668 23.1398 5.18848 22.95 4.80176C22.6969 4.27539 22.2434 3.81348 21.6844 3.5127L21.252 3.27637L12.0762 3.27637C2.97422 3.27637 2.90039 3.27637 2.42578 3.50195C1.85625 3.77051 1.43438 4.18946 1.11797 4.78028C0.896486 5.20996 0.896486 5.23145 0.864846 14.3838C0.833206 24.4707 0.82266 24.2451 1.47657 25.0508C1.64532 25.2656 2.03555 25.5664 2.34141 25.7168L2.88985 25.9961L7.29844 25.9961C11.591 25.9961 11.707 25.9961 11.707 26.2002C11.707 27.0059 11.4328 29.3799 11.2219 30.4541C10.8949 32.1084 10.5469 33.1719 9.86133 34.6436C8.40586 37.7588 6.19102 39.8535 2.42579 41.7012C0.48516 42.6465 0.0632855 43.1514 0.0527399 44.5264C0.05274 45.2676 0.0738333 45.3106 1.26563 47.835C1.93008 49.2315 2.61563 50.5635 2.78438 50.7783C3.53321 51.7022 4.78829 51.9063 6.11719 51.3154Z" />
                              </g>
                            </svg>
                            <div className="testimonial-author-wrap">
                              <div className="author-area">
                                <div className="author-img">
                                  <img src="../assets/img/home2/testi-author-img4.png" alt="" />
                                </div>
                                <div className="author-content">
                                  <h6>Daniel Scoot</h6>
                                  <span>CEO At astra.com</span>
                                </div>
                              </div>
                            </div>
                            <div className="testimonial-content">
                              <p>“Feel free to customize the key features based on thena helps potential clients understand the specific valueles they'll receive at each pricing tier.”</p>
                              <span>Superb Bidding Deal!</span>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card three">
                            <svg className="quote" width={54} height={55} viewBox="0 0 54 55" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <path d="M36.1231 51.6592C36.8825 51.4766 40.3102 49.6611 41.7657 48.6729C43.6536 47.3945 44.7188 46.5244 46.3114 44.9023C51.4688 39.6816 53.42 34.1924 53.8946 23.5791C53.9684 22.0537 54 17.7891 53.9789 13.1055C53.9473 5.76855 53.9367 5.17773 53.7575 4.82324C53.5043 4.31836 53.0086 3.80273 52.4813 3.5127L52.0489 3.27637L42.9258 3.27637C35.4692 3.27637 33.7289 3.3086 33.3914 3.42676C32.8746 3.60938 32.2207 4.21094 31.9254 4.76953L31.6934 5.20996L31.6618 14.3838C31.6301 24.4707 31.6196 24.2451 32.2735 25.0508C32.4422 25.2656 32.8325 25.5664 33.1383 25.7168L33.6868 25.9961L38.0426 25.9961L42.3985 25.9961L42.3985 26.7803C42.3985 28.499 41.9871 30.916 41.3965 32.7207C40.0571 36.8027 37.7262 39.3809 33.3282 41.626C32.4739 42.0664 31.6407 42.5605 31.4508 42.7647C30.9657 43.2695 30.7653 43.8926 30.818 44.709C30.8602 45.3105 31.0079 45.6973 32.1153 48.0498C33.4125 50.8105 33.6551 51.1865 34.425 51.5088C34.8996 51.7129 35.6379 51.7773 36.1231 51.6592Z" />
                                <path d="M6.11719 51.3154C13.2152 48.1572 18.6258 42.7861 21.0199 36.5234C21.7055 34.7402 22.3172 32.0225 22.6652 29.2188C23.1082 25.7061 23.1504 24.3848 23.1504 14.6094C23.1504 5.59668 23.1398 5.18848 22.95 4.80176C22.6969 4.27539 22.2434 3.81348 21.6844 3.5127L21.252 3.27637L12.0762 3.27637C2.97422 3.27637 2.90039 3.27637 2.42578 3.50195C1.85625 3.77051 1.43438 4.18946 1.11797 4.78028C0.896486 5.20996 0.896486 5.23145 0.864846 14.3838C0.833206 24.4707 0.82266 24.2451 1.47657 25.0508C1.64532 25.2656 2.03555 25.5664 2.34141 25.7168L2.88985 25.9961L7.29844 25.9961C11.591 25.9961 11.707 25.9961 11.707 26.2002C11.707 27.0059 11.4328 29.3799 11.2219 30.4541C10.8949 32.1084 10.5469 33.1719 9.86133 34.6436C8.40586 37.7588 6.19102 39.8535 2.42579 41.7012C0.48516 42.6465 0.0632855 43.1514 0.0527399 44.5264C0.05274 45.2676 0.0738333 45.3106 1.26563 47.835C1.93008 49.2315 2.61563 50.5635 2.78438 50.7783C3.53321 51.7022 4.78829 51.9063 6.11719 51.3154Z" />
                              </g>
                            </svg>
                            <div className="testimonial-author-wrap">
                              <div className="author-area">
                                <div className="author-img">
                                  <img src="../assets/img/home2/testi-author-img5.png" alt="" />
                                </div>
                                <div className="author-content">
                                  <h6>Harbard Mack</h6>
                                  <span>CEO At astra.com</span>
                                </div>
                              </div>
                            </div>
                            <div className="testimonial-content">
                              <p>“Please feel free to alter the main features in a way that best explains to prospective customers the precise benefits.”</p>
                              <span>Wonderful Auction Items!</span>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card three">
                            <svg className="quote" width={54} height={55} viewBox="0 0 54 55" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <path d="M36.1231 51.6592C36.8825 51.4766 40.3102 49.6611 41.7657 48.6729C43.6536 47.3945 44.7188 46.5244 46.3114 44.9023C51.4688 39.6816 53.42 34.1924 53.8946 23.5791C53.9684 22.0537 54 17.7891 53.9789 13.1055C53.9473 5.76855 53.9367 5.17773 53.7575 4.82324C53.5043 4.31836 53.0086 3.80273 52.4813 3.5127L52.0489 3.27637L42.9258 3.27637C35.4692 3.27637 33.7289 3.3086 33.3914 3.42676C32.8746 3.60938 32.2207 4.21094 31.9254 4.76953L31.6934 5.20996L31.6618 14.3838C31.6301 24.4707 31.6196 24.2451 32.2735 25.0508C32.4422 25.2656 32.8325 25.5664 33.1383 25.7168L33.6868 25.9961L38.0426 25.9961L42.3985 25.9961L42.3985 26.7803C42.3985 28.499 41.9871 30.916 41.3965 32.7207C40.0571 36.8027 37.7262 39.3809 33.3282 41.626C32.4739 42.0664 31.6407 42.5605 31.4508 42.7647C30.9657 43.2695 30.7653 43.8926 30.818 44.709C30.8602 45.3105 31.0079 45.6973 32.1153 48.0498C33.4125 50.8105 33.6551 51.1865 34.425 51.5088C34.8996 51.7129 35.6379 51.7773 36.1231 51.6592Z" />
                                <path d="M6.11719 51.3154C13.2152 48.1572 18.6258 42.7861 21.0199 36.5234C21.7055 34.7402 22.3172 32.0225 22.6652 29.2188C23.1082 25.7061 23.1504 24.3848 23.1504 14.6094C23.1504 5.59668 23.1398 5.18848 22.95 4.80176C22.6969 4.27539 22.2434 3.81348 21.6844 3.5127L21.252 3.27637L12.0762 3.27637C2.97422 3.27637 2.90039 3.27637 2.42578 3.50195C1.85625 3.77051 1.43438 4.18946 1.11797 4.78028C0.896486 5.20996 0.896486 5.23145 0.864846 14.3838C0.833206 24.4707 0.82266 24.2451 1.47657 25.0508C1.64532 25.2656 2.03555 25.5664 2.34141 25.7168L2.88985 25.9961L7.29844 25.9961C11.591 25.9961 11.707 25.9961 11.707 26.2002C11.707 27.0059 11.4328 29.3799 11.2219 30.4541C10.8949 32.1084 10.5469 33.1719 9.86133 34.6436C8.40586 37.7588 6.19102 39.8535 2.42579 41.7012C0.48516 42.6465 0.0632855 43.1514 0.0527399 44.5264C0.05274 45.2676 0.0738333 45.3106 1.26563 47.835C1.93008 49.2315 2.61563 50.5635 2.78438 50.7783C3.53321 51.7022 4.78829 51.9063 6.11719 51.3154Z" />
                              </g>
                            </svg>
                            <div className="testimonial-author-wrap">
                              <div className="author-area">
                                <div className="author-img">
                                  <img src="../assets/img/home2/testi-author-img6.png" alt="" />
                                </div>
                                <div className="author-content">
                                  <h6>Hanrry Ghust</h6>
                                  <span>CEO At astra.com</span>
                                </div>
                              </div>
                            </div>
                            <div className="testimonial-content">
                              <p>“You are welcome to alter the salient characteristics that makes prospective customers aware of the benefits associated with each price point.”</p>
                              <span>Amazing Bidding Deals!</span>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    </Swiper>
                  </div>
                </div>
                <div className="slider-btn-grp three">
                  <div className="slider-btn home6-testimonial-slider-prev">
                    <i className="bi bi-arrow-left" />
                  </div>
                  <div className="slider-btn home6-testimonial-slider-next">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home6Testimonial
