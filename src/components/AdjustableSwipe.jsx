import React from 'react'
import CardMUI from '@mui/material/Card';
import CardContentMUI from '@mui/material/CardContent';
import CardMediaMUI from '@mui/material/CardMedia';
import TypographyMUI from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../components/Offerings.css";

// import required modules
import { Pagination } from "swiper";



const AdjustableSwipe = () => {

    const matches900 = useMediaQuery('(min-width:900px');
  return (
    <Box style={{
        height:"50vh",
        padding:'2vh'
   }}>
              <Grid container spacing={2} sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CardMUI>
                        <CardActionArea>
                            <CardMediaMUI
                            component="img"
                            height="140"
                            image="https://www.milagrescooperative.com/themes/mcsc-bank/assets/img/loans/home-loans2.png"
                            alt="green iguana"
                            />
                            <CardContentMUI>
                            <TypographyMUI gutterBottom variant="h5" component="div">
                                Lizard
                            </TypographyMUI>
                            <TypographyMUI variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </TypographyMUI>
                            </CardContentMUI>
                        </CardActionArea>
                    </CardMUI>
                    
                    </Grid>
                    {
                            matches900 && 
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Swiper
                                direction={"vertical"}
                                pagination={{
                                clickable: true,
                                }}
                                loop={true}
                                style={{height:'50vh'}}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {Array.from(Array(9)).map((_, index) => (
                                    <SwiperSlide key={index}>
                                    <CardMUI sx={{ display: 'flex' }}>
                                    <CardContentMUI>
                                        <TypographyMUI sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                        </TypographyMUI>
                                        <TypographyMUI variant="h5" component="div">
                                        be`nev`o`lent
                                        </TypographyMUI>
                                        <TypographyMUI sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                        </TypographyMUI>
                                        <TypographyMUI variant="body2">
                                        {index}
                                        <br />
                                        {'"a benevolent smile"'}
                                        </TypographyMUI>
                                    </CardContentMUI>
                                    </CardMUI>
                            </SwiperSlide>
                                ))}
                            </Swiper> 
                            
                            </Grid>
                        }

                        {
                            !matches900 && 
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Swiper
                                spaceBetween={30}
                                pagination={{
                                  clickable: true,
                                }}
                                loop={true}
                                modules={[Pagination]}
                                style={{height:'50vh', width:'400px'}}
                                className="mySwiper"
                                >
                                {Array.from(Array(9)).map((_, index) => (
                                    <SwiperSlide key={index}>
                                    <CardMUI sx={{ display: 'flex' }}>
                                    <CardContentMUI>
                                        <TypographyMUI sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                        </TypographyMUI>
                                        <TypographyMUI variant="h5" component="div">
                                        be`nev`o`lent
                                        </TypographyMUI>
                                        <TypographyMUI sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                        </TypographyMUI>
                                        <TypographyMUI variant="body2">
                                        {index}
                                        <br />
                                        {'"a benevolent smile"'}
                                        </TypographyMUI>
                                    </CardContentMUI>
                                    </CardMUI>
                                    </SwiperSlide>
                                        ))}
                                    </Swiper> 
                            </Grid>
                        }
                </Grid>            
   </Box>

  )
}

export default AdjustableSwipe
