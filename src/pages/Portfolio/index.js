import { Container, IconDiv, PortfolioImage, DescriptionImage } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Portfolio = () => {
  return (
    <Container>
      <div>
        <h2>Portfólio!</h2>
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{ 768: { slidesPerView: 5 } }}
        >
          <SwiperSlide>
            <IconDiv>
              <PortfolioImage src="" alt="Python Icone" />
              <DescriptionImage>Python (Flask, Django)</DescriptionImage>
            </IconDiv>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Portfolio;
