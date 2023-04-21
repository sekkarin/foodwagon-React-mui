import React from 'react'
import Typography from '@mui/material/Typography';

const data = [
    {
        icon:"assets/img/gallery/location.png",
        title:"Select location",
        detial:"Choose the location where your food will be delivered."
    },
    {
        icon:"assets/img/gallery/order.png",
        title:"Choose order",
        detial:"Check over hundreds of menus to pick your favorite food"
    },
    {
        icon:"assets/img/gallery/pay.png",
        title:"Pay advanced",
        detial:"It's quick, safe, and simple. Select several methods of payment"
    },
    {
        icon:"assets/img/gallery/meals.png",
        title:"Enjoy meals",
        detial:"Food is made and delivered directly to your home."
    },
]

const BoxShowWork = ({title,detial,icon}:{title:string,detial:string,icon:string}) => (
    <div className="text-center mb-16">
        <img src={icon} className='mx-auto mb-9 ' height={122} alt="location"  />
        <Typography variant='h5' fontWeight={"bold"} sx={{ marginTop: "px", }}>{title}</Typography>
        <Typography variant='body1' className="">{detial}</Typography>
    </div>
);
export const HowDoesItWork = () => {
    return (
        <div className='bg-gradient-to-b from-[#ffce6738]'>
            <div className="container mx-auto w-4/5 row ">
                <div className="grid-rows-1 grid place-items-center mb-8 md:mb-10 mt-12 p-9">
                    <Typography variant='h4' fontWeight={"bold"} color={"#F17228"} className="">How does it work</Typography>
                </div>
                <div className="grid grid-flow-row gap-4 sm:grid-cols-4 grid-cols-1">
                    {/* <div className="text-center">
                        <img src="assets/img/gallery/location.png" className='mx-auto' height={122} alt="location" />
                        <Typography variant='h5' fontWeight={"bold"} sx={{ marginTop: "px", }}>Select location</Typography>
                        <Typography variant='body1' className="">Choose the location where your food will be delivered.</Typography>
                    </div> */}
                    {data.map((value,index)=>(
                        <BoxShowWork icon={value.icon} detial={value.detial} title={value.title}></BoxShowWork>
                    ))}
                </div>
            </div>
        </div>
    )
}
