import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '2xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          margin={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            dolores, voluptas qui atque necessitatibus facere ex maxime esse
            assumenda amet eos pariatur earum similique sapiente id ratione sit
            temporibus magni nihil sed possimus. Totam excepturi sunt incidunt
            at sint omnis corrupti suscipit ad. Voluptatem sapiente unde illum,
            temporibus inventore dolor eius mollitia, reiciendis, voluptatibus
            corporis officiis? Veritatis, suscipit dolores. Saepe eveniet,
            eligendi nesciunt delectus inventore sed nobis doloremque mollitia
            dolorem officia at corrupti nostrum nulla voluptatibus tempora
            itaque facere. Nihil tempora voluptas voluptatem exercitationem et
            cumque laudantium deleniti non culpa quis id perferendis nulla
            veritatis, perspiciatis fugit modi earum nostrum praesentium. Totam
            eligendi omnis, dignissimos nam excepturi quis deserunt dicta!
            Harum, maiores nesciunt? Aperiam numquam ad deserunt suscipit fugiat
            nobis amet odit eligendi alias aliquid soluta debitis, repellendus
            non quis voluptates, praesentium quasi necessitatibus inventore
            itaque eveniet harum perspiciatis magnam!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} height={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} height={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Future Is Gamming
      </Heading>
    </Box>
    <Box w={'full'} height={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Console Gamming
      </Heading>
    </Box>
    <Box w={'full'} height={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        The Night Vision
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
