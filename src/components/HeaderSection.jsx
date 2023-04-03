/* eslint-disable no-undef */
import React, { useState,HTMLElement } from 'react';
import Typography from '@mui/material/Typography';
import MopedIcon from '@mui/icons-material/Moped';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button, FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export const HeaderSection = () => {
    const [alignment, setAlignment] = useState('Delivery');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);

    };

    return (
        <div className='bg-orange-400 p-10 flex flex-col md:flex-row gap-10 overflow-auto '>
            <div className="flex-grow order-2 md:order-1 py-10 ">
                <Typography variant='h3' sx={{ fontWeight: "bold" }} className='text-gray-100 font-bold text-center' >Within a few clicks, find meals that <br></br>Are you starving?</Typography>
                <Typography variant='h3' sx={{ fontWeight: "bold", color: "#616161", fontSize: "33px" }} className='text-gray-100 font-bold text-center' >Within a few clicks, find meals that</Typography>
                <div className="flex flex-col  bg-white rounded-lg mt-16 mx-auto w-4/6">
                    <div className="flex-row   p-5">
                        <ToggleButtonGroup
                            value={alignment}
                            exclusive
                            onChange={handleAlignment}
                            aria-label="text alignment"
                        >
                            <ToggleButton value="Delivery" aria-label="left aligned" >
                                {/* <FormatAlignLeftIcon /> */}
                                <MopedIcon></MopedIcon>
                                <Typography >Delivery</Typography>
                                {/* <Button>Delivery</Button> */}
                            </ToggleButton>
                            <ToggleButton value="Pickup" aria-label="centered">
                                <CardGiftcardIcon></CardGiftcardIcon>
                                <Typography className=' text-orange-400' >Pickup</Typography>
                            </ToggleButton>
                        </ToggleButtonGroup>

                    </div>
                    <div className="p-5 ">
                        <FormControl variant="standard" className='bg-gray-50  hover:border-orange-400 focus:shadow-md shadow-orange-300 gap-2' sx={{flexDirection:"row",width:"100%"}}>
                            <Input
                                id="input-with-icon-adornment"
                                className='w-4/5 shadow-lg 	'
                                // sx={{
                                //     "&:focus":{  boxShadow: `0px 0px 0px 8px `}
                                // }}
                                placeholder='Enter your address'
                                disableUnderline
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LocationOnIcon className='text-orange-400' />
                                    </InputAdornment>
                                }
                            />
                            <Button className='bg-orange-400 text-white' sx={{backgroundColor:"#F17228",color:"white",width:"auto"}}>Find Food</Button>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className="flex-grow flex justify-center align-middle order-1 md:order-2">
                <img src='assets/img/gallery/hero-header.png' className='min-w-full'></img>
            </div>
        </div>
    )
}
