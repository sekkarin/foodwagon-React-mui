import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const data = [
    {
        image: "assets/img/gallery/discount-item-1.png",
        nameFood: "Flat Hill Slingback",
        discount: "15",
        day: "6",
    },
    {
        image: "assets/img/gallery/discount-item-2.png",
        nameFood: "Ocean Blue Ring",
        discount: "10",
        day: "6",
    },
    {
        image: "assets/img/gallery/discount-item-3.png",
        nameFood: "Brown Leathered Walletk",
        discount: "25",
        day: "6",
    },
    {
        image: "assets/img/gallery/discount-item-4.png",
        nameFood: "Silverside Wristwatch",
        discount: "20",
        day: "6",
    },
]

const CardItem = ({ image, nameFood, discount, day }) => {
    return (
        <Card sx={{ maxWidth: 345, borderRadius: "24px", height: "auto", boxShadow: 'none' }} className='shadow-none'>
            <div className="relative mb-2">
                <CardMedia
                    component="img"
                    className='rounded-3xl'
                    alt="green iguana"
                    height="140"
                    image={image}
                />
                <div className="flex  justify-items-center justify-center  absolute bottom-0 left-0 w-32  h-20  bg-[#FFB30E] rounded-bl-3xl rounded-tr-3xl">
                    <div className="flex  items-center">
                        <Typography gutterBottom variant="h3" fontWeight={"bold"} color={"white"} marginTop={"8px"}  >
                            {discount}
                        </Typography>
                    </div>
                    <div className=' text-white text-xl  items-center flex-col flex justify-center'>
                        <div className="">
                            %
                        </div>
                        {/* <Typography gutterBottom variant="h5"  color={"white"} >
                    </Typography> */}

                        <div className="text-xl mb-1">OFF</div>
                    </div>
                </div>
            </div>
            <CardContent>
                <Typography gutterBottom variant="h5" fontWeight={"bold"} component="div">
                    {nameFood}
                </Typography>
                <Typography variant="body2" color="#F17228" fontWeight={"bold"} className='p-2 rounded bg-orange-200 font-bold inline'>
                    {day} days Remaining
                </Typography>
            </CardContent>
        </Card >
    )
}

const CardFood = () => {
    return (
        <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4  justify-items-center my-12 w-4/5 mx-auto">
        {data.map((value,index)=>(
            <CardItem image={value.image} day={value.day} discount={value.discount} nameFood={value.nameFood} ></CardItem>
            ))}
        </div>
    )
}

export default CardFood