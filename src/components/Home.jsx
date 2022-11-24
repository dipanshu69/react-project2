import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const MyCarousel = () => {
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
  ></Carousel>;
};

function Home() {
  return (
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'}>
        Watch The Future
      </Heading>
    </Box>
  );
}

export default Home;
