import { Card } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import Typography from '@mui/material/Typography/Typography';
import CardContent from '@mui/material/CardContent/CardContent';
import Carousel from 'react-material-ui-carousel'

const SLIDE_INFO = [
  {
    title: "Cheese Burger",
    location: "Burger Arena",
    price: "3.88",
    img: "assets/img/gallery/cheese-burger.png"
  },
  {
    title: "Toffe's Cake",
    location: "Top Sticks",
    price: "4.00",
    img: "assets/img/gallery/toffes-cake.png"
  },
  {
    title: "Dancake",
    location: "Cake World",
    price: "1.99",
    img: "assets/img/gallery/cheese-burger.png"
  },
  {
    title: "Crispy Sandwitch",
    location: "Fastfood Dine",
    price: "3.00",
    img: "assets/img/gallery/crispy-sandwitch.png"
  },
  {
    title: "Thai Soup",
    location: "Foody Man",
    price: "2.75",
    img: "assets/img/gallery/thai-soup.png"
  },
];
function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon = direction === 'left' ? <KeyboardArrowLeftIcon sx={{ fontSize: "80px" }} /> : <KeyboardArrowRightIcon sx={{ fontSize: "80px" }} />;

  return <div onClick={clickFunction}>{icon}</div>;
}
const CarouselSlide = (props) => {
  const { title, img, location, price } = props.content;


  return <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3'>
    <Card sx={{ maxWidth: 345, borderRadius: "24px", boxShadow: 'none' }} className='shadow-none text-center '>

      <CardMedia
        component="img"
        className='rounded-3xl'
        alt="green iguana"
        height="140"
        image={img}
      />
      <CardContent className='flex flex-col'>
        <Typography gutterBottom variant="h5" fontWeight={"bold"} component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="#F17228" fontWeight={"bold"} className='p-2 rounded font-bold inline'>
          {location}
        </Typography>
        <Typography variant="body2" className='p-2 font-mono inline'>
          ${price}
        </Typography>
      </CardContent>
    </Card >
    <Card sx={{ maxWidth: 345, borderRadius: "24px", boxShadow: 'none' }} className='shadow-none text-center '>

      <CardMedia
        component="img"
        className='rounded-3xl'
        alt="green iguana"
        height="140"
        image={img}
      />
      <CardContent className='flex flex-col'>
        <Typography gutterBottom variant="h5" fontWeight={"bold"} component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="#F17228" fontWeight={"bold"} className='p-2 rounded font-bold inline'>
          {location}
        </Typography>
        <Typography variant="body2" className='p-2 font-mono inline'>
          ${price}
        </Typography>
      </CardContent>
    </Card >
    <Card sx={{ maxWidth: 345, borderRadius: "24px", boxShadow: 'none' }} className='shadow-none text-center '>

      <CardMedia
        component="img"
        className='rounded-3xl'
        alt="green iguana"
        height="140"
        image={img}
      />
      <CardContent className='flex flex-col'>
        <Typography gutterBottom variant="h5" fontWeight={"bold"} component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="#F17228" fontWeight={"bold"} className='p-2 rounded font-bold inline'>
          {location}
        </Typography>
        <Typography variant="body2" className='p-2 font-mono inline'>
          ${price}
        </Typography>
      </CardContent>
    </Card >
    <Card sx={{ maxWidth: 345, borderRadius: "24px", boxShadow: 'none' }} className='shadow-none text-center '>

      <CardMedia
        component="img"
        className='rounded-3xl'
        alt="green iguana"
        height="140"
        image={img}
      />
      <CardContent className='flex flex-col'>
        <Typography gutterBottom variant="h5" fontWeight={"bold"} component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="#F17228" fontWeight={"bold"} className='p-2 rounded font-bold inline'>
          {location}
        </Typography>
        <Typography variant="body2" className='p-2 font-mono inline'>
          ${price}
        </Typography>
      </CardContent>
    </Card >
  </div>
}

export const PopularItems = () => {

  const totalSlide = 4;
  const [index, setIndex] = useState(0);
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;
  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
  };
  return (<div className='flex justify-between justify-items-center '>
    <Carousel
      swipe={true}
      duration={4}
      NextIcon={<KeyboardArrowRightIcon sx={{color:'white',fontSize:"36px"}} />}
      PrevIcon={<KeyboardArrowLeftIcon sx={{color:'white',fontSize:"36px"}} />}
      fullHeightHover={false}     // We want the nav buttons wrapper to only be as big as the button element is
      navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          // backgroundColor: 'cornflowerblue',
          // borderRadius: 0
          // padding:'20px'
        }
      }}
    
      className='w-1/2 sm:w-4/5  mx-auto'
    >
      {SLIDE_INFO.map((value, index) => {
        return <CarouselSlide
          // title={'Slide 1'}
          key={index}
          content={value}

        />
      })}
    </Carousel>
  </div>
  )
}
