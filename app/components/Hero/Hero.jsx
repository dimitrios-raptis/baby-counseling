"use client";

import { merge } from 'lodash';
import { slideTextContent } from './slideTextContent';
import { Container } from '../Layout/Layout';
import colors from '../../styles/colors';
import { Wrapper, Slide, SlideImage, HeroWrapper, HeroContentWrapper, HeroContent, HeroTitle, HeroSubtitle, SwiperSlider } from "./Hero.style";

// Import Swiper styles and modules
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Hero = () => {
  const images = require.context('../../../public/assets/slides', true);

  const imageList = images.keys().map(image => images(image));

  const slideContent = merge(imageList, slideTextContent);

  return (
    <Wrapper>
      <SwiperSlider
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        style={{
          "--swiper-pagination-color": colors.secondary,
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
      >


        {slideContent.map((slide, index) => (
          <Slide key={index}>
            <HeroWrapper>
              <SlideImage src={slide.default.src} alt="Slideshow image" fill priority
              />
              <Container>
                <HeroContentWrapper>
                  <HeroContent>

                    <HeroTitle>{slide.title}</HeroTitle>
                    <HeroSubtitle>{slide.subtitle}</HeroSubtitle>

                  </HeroContent>
                </HeroContentWrapper>
              </Container>
            </HeroWrapper>

          </Slide>
        ))}
      </SwiperSlider>
    </Wrapper >
  );
};

export default Hero;