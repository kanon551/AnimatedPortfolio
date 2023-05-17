import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import Face from '@mui/icons-material/Face';
import carousalBackground from '../assets/bannerOffering.png';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from '@mui/material/Grid';
import kanon from '../assets/kanon.png';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../components/ProfileSwipe.css";
import styled from 'styled-components';
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CrewHeader = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  color:#0d1442;
  text-decoration: overline violet;
  font-size: 8vh;
  font-family: monospace;
  padding-right: 5px;
  font-weight:400;
  text-align: justify;
  padding: 20px;
`

const CrewBody = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  color:#0d1442;
  font-size: 4vh;
  font-family: monospace;
  font-weight:400;
  text-align: justify;

  padding: 5vh;
  height: fit-content;
`

const images = [
  {
    label: 'React',
    imgPath:'https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124',
    hasTag: 'Library',
    role: 'Front end Library'
  },
  {
    label: 'HTML',
    imgPath:'https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn',
    hasTag:'Tags',
    role:'Markup Language'
  },
  {
    label: 'CSS',
    imgPath:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
    hasTag:'Styling',
    role:'Style Sheet Language'
  },
  {
    label: 'Javascript',
    imgPath:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    hasTag:'Language',
    role:'Web Programming Language'
  },
  {
    label: 'Typescript',
    imgPath:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    hasTag:'Language',
    role:'Strongly typed programming language'
  },
  {
    label: 'Java',
    imgPath:'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png',
    hasTag:'Language',
    role:'Obect-Oriented Programming Language'
  },
  {
    label:'React Query',
    imgPath:'https://tkdodo.eu/blog/static/e34c9bdb709f49c90b76af647160ca18/73f08/react-query.png',
    hasTag:"Tool",
    role:'Server State Management'
  },
  {
    label: 'Material UI',
    imgPath:'https://v4.mui.com/static/logo.png',
    hasTag:'Components Basket',
    role:"React Component Library"
  },
  {
    label:'Styled Components',
    imgPath:'https://www.styled-components.com/atom.png',
    hasTag:"CSS-in-JS",
    role:"Functional CSS"
  },
  {
    label:'Framer Motion',
    imgPath:'https://konstantinlebedev.com/static/76d81ec25cd799b15cd16c0b16e869af/cover.png',
    hasTag:"Animations",
    role:"Powerful Motion Library"
  },
  {
    label:'GIT',
    imgPath:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png',
    hasTag:"Version Controlling",
    role:"Source code Management"
  }
];


const ProfileSwipe = () => {
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  return (

    <Box sx={{ zIndex:100,flexGrow:1, width:'100%',
    paddingBottom:'1vh',
    backgroundImage: `url(${carousalBackground})`,
    backgroundRrepeat:'no-repeat',
    backgroundSize:'cover', display:'flex' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <CrewHeader>
          Trailblazer
          </CrewHeader>
          
          <CrewBody>
          I was Associated with well-tenured group of thinkers, planners, and doers in my journey as a developer. I can proudly present myself as a crazy, well communicated , get it done person with out of the box thinking mind . Iam beyond excited about the crazy energy that i wish to brinng to the market connecting with like minded people and lookinng forward to sharing my thoughts.
          </CrewBody>
          
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        {/* <Box sx={{ zIndex:100,flexGrow:1, width:'100%',background:'white'}}> */}
              {
              <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                    slidesPerView: 2,
                    },
                    800: {
                      slidesPerView: 3,
                      },
                      1100: {
                        slidesPerView: 4,
                        },
                        1440: {
                          slidesPerView: 5,
                          },
                          2560: {
                            slidesPerView: 6,
                            },
                    
                }}
                centeredSlides={true}
                spaceBetween={60}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {
                    
                    images.map((step, index) => (
                    <SwiperSlide key={index}>
                    <Card
                      variant="outlined"
                      sx={{
                          maxWidth: 250,
                          background:'white',
                          '--Card-radius': (theme) => theme.vars.radius.xs,
                      }}
                      >
                      <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                                <Box
                                sx={{
                                    position: 'relative',
                                    '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    m: '-2px',
                                    borderRadius: '50%',
                                    background:
                                        'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                                    },
                                }}
                                >
                                <Avatar
                                    size="sm"
                                    src={kanon}
                                    objectFit='cover'
                                    sx={{ p: 0.5, border: '1px solid', borderColor: 'background.body'}}
                                />
                                </Box>
                                <Typography fontWeight="lg">
                                  {
                                    step.label
                                  }
                                </Typography>
                                <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
                                <MoreHoriz />
                                </IconButton>
                        </Box>
                        <CardOverflow>
                            <AspectRatio>
                            <img src={step.imgPath} alt="" loading="lazy" style={{width:'100%', height:'100%',objectFit:'contain',background:'orange'}}/>
                            </AspectRatio>
                        </CardOverflow>
                              <Box sx={{ display: 'flex', alignItems: 'center', mx: -1, my: 1 }}>
                                  <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
                                  <IconButton variant="plain" color="neutral" size="sm">
                                      <FavoriteBorder />
                                  </IconButton>
                                  <IconButton variant="plain" color="neutral" size="sm">
                                      <ModeCommentOutlined />
                                  </IconButton>
                                  <IconButton variant="plain" color="neutral" size="sm">
                                      <SendOutlined />
                                  </IconButton>
                                  </Box>
                                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
                                  {[...Array(5)].map((_, index) => (
                                      <Box
                                      key={index}
                                      sx={{
                                          borderRadius: '50%',
                                          width: `max(${6 - index}px, 3px)`,
                                          height: `max(${6 - index}px, 3px)`,
                                          bgcolor: index === 0 ? 'primary.solidBg' : 'background.level3',
                                      }}
                                      />
                                  ))}
                                  </Box>
                                  <Box sx={{ width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
                                  <IconButton variant="plain" color="neutral" size="sm">
                                      <BookmarkBorderRoundedIcon />
                                  </IconButton>
                                  </Box>
                              </Box>
                              <Link
                                  component="button"
                                  underline="none"
                                  fontSize="sm"
                                  fontWeight="lg"
                                  textColor="text.primary"
                              >
                                  8.1M Likes
                              </Link>
                            <Typography fontSize="sm">
                                <Link
                                component="button"
                                color="neutral"
                                fontWeight="lg"
                                textColor="text.primary"
                                >
                                #
                                </Link>{' '}
                                {
                                  step.hasTag
                                }
                            </Typography>
                            <Link
                                component="button"
                                underline="none"
                                fontSize="sm"
                                startDecorator="…"
                                sx={{ color: 'text.tertiary' }}
                            >
                                more
                            </Link>
                            <Link
                                component="button"
                                underline="none"
                                fontSize="10px"
                                sx={{ color: 'text.tertiary', my: 0.5 }}
                            >
                                2 DAYS AGO
                            </Link>
                            <CardOverflow sx={{ p: 'var(--Card-padding)', display: 'flex' }}>
                                <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
                                <Face />
                                </IconButton>
                                <Input
                                variant="plain"
                                size="sm"
                                placeholder="Add a comment…"
                                defaultValue={step.role}
                                sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px' }}/>
                                <Link disabled underline="none" role="button">
                                Post
                                </Link>
                            </CardOverflow>
                            </Card>
                    </SwiperSlide>
                ))
                }
              </Swiper>
              }
            {/* </Box> */}
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProfileSwipe
