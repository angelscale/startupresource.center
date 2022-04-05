import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

const Slider = ({
  Item,
  list,
  space,
  perView,
  perGroup,
  center,
  wrapperClass,
  slideClass,
  breakpoints,
  navigation = true,
  pagination = false,
  autoplay = false,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      className={wrapperClass}
      spaceBetween={space}
      slidesPerView={perView}
      slidesPerGroup={perGroup}
      centeredSlides={center}
      breakpoints={breakpoints}
      navigation={navigation}
      pagination={pagination}
      autoplay={autoplay}
    >
      {list.map((item, i) => (
        <SwiperSlide className={slideClass} key={i}>
          {<Item key={i} data={item} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
