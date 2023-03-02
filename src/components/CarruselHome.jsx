import { Carousel } from "@trendyol-js/react-carousel";
import styled from "styled-components";

const CarruselHome = () => {
  return (
    <Carousel
      show={1}
      slide={1}
      transition={1}
      responsive={true}
      rightArrow={false}
      leftArrow={false}
      swiping={true}
      swipeOn={false}
    >
      <Imagen
        src="https://sportline.com.pa/media/blog/-_BANNER_WEB_1912_X_627_px_2.png"
        alt=""
      />
      <Imagen
        src="https://socialprofileavatar.s3.us-east-2.amazonaws.com/banner/tw/SportlineGt.jpg"
        alt=""
      />
      <Imagen
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b283976981589.5c7ad6f5ed024.png"
        alt=""
      />
    </Carousel>
  );
};

const Imagen = styled.img`
  width: 100%;
  max-height: 400%;
`;

export default CarruselHome;
