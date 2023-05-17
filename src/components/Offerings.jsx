import React, { useState , useCallback, useEffect} from "react";
import Box from '@mui/material/Box';
import styled from 'styled-components';
import cxCloud1 from '../assets/realcloud1.png';
import realcloud2 from '../assets/realcloud2.png';
import Tenth from '../assets/TenthPhoto.png';
import BE from '../assets/BEPhoto.png';
import ME from '../assets/MEPhoto.png';
import explore from '../assets/book.gif';
import { motion} from "framer-motion";
import Grid from '@mui/material/Grid';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Tooltip from '@mui/material/Tooltip';
const theme = createTheme({
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
    },
  });


const Cloud1 = styled.div`
  width:25vw;
    height: 20vw;
    background-image: url(${cxCloud1});
     background-size:cover;
     background-repeat:no-repeat;
     position: absolute;
`


const Cloud2 = styled.div`
  width:25vw;
    height: 27vw;
    background-image: url(${realcloud2});
     background-size:cover;
     background-repeat:no-repeat;
     position: absolute;
     top: 50vh;
     /* right: -65vw; */
     left: 55vw;
`

const NewsHeader = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  color: white;
  font-size: 7vh;
  text-decoration: overline violet;
  font-family: monospace;
  padding-right: 5px;
  font-weight:400;
  text-align: justify;
  padding: 20px;
`

const NewsCaption = styled.div`
    align-items: center;
  justify-content: center;
  display: flex;
  color: white;
  font-size: 3vh;
  font-family: monospace;
  padding-right: 5px;
  font-weight:100;
  text-align: justify;
`

const Gif = styled.img`
    width: 75px;
height: 75px;
    background-repeat:no-repeat;
  background-size: cover;
  border: 10px solid violet;
  border-radius: 10px;
  margin-left: 50%;
  cursor: pointer;
`

const Offerings = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(60);
    const [rotate, setRotate] = useState(-10);

    const [scrollY, setScrollY] = useState(document.scrollingElement.scrollHeight);


    const handleNavigation = useCallback((e) => {
      if (scrollY > window.scrollY) {
        setX(0)
        setY(60)
        setRotate(-10)
      } else if (scrollY < window.scrollY) {
        setX(0)
        setY(-10)
        setRotate(-10)
      }
      setScrollY(window.scrollY)
    }, [scrollY]);
  
    useEffect(() => {
      window.addEventListener("scroll", handleNavigation);
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }, [handleNavigation]);



  return (
            <Box sx={{
                zIndex:100,
                width:'100%', 
                height:'fit-content',
                background: 'radial-gradient(108.1% 345.21% at 3.15% 5.49%, #3388ff 0%, #1a237e 33.33%, #df1c6a 100%);',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                }}>
                    
                    <motion.div
                        style={{display:'inline-flex'}}
                            animate={{ x, y, rotate }}
                            transition={{ type: "spring" }}
                        >
                        <Cloud1/>
                    </motion.div>

                    <motion.div
                        style={{display:'inline-flex'}}
                            animate={{ x, y, rotate }}
                            transition={{ type: "spring" }}
                        >
                        <Cloud2/>
                    </motion.div>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <NewsHeader>
                                Education
                        </NewsHeader>
                        <NewsCaption>
                            My Qualification
                        </NewsCaption>
                       
                        </Grid>
                        <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} >
                          
                        <Grid container sx={{display:'flex', alignItems:'center', justifyContent:'center' }} columns={{ xs: 16, sm: 16, md: 16 }}>
                        
                                      <Card variant="outlined" sx={{ width:'320px',margin:'7vh', background:'white'}}>
                                      <CardOverflow>
                                          <AspectRatio ratio="2">
                                          <img
                                              src="https://i2.wp.com/govinfo.me/wp-content/uploads/2018/03/Board-of-Secondary-Education-Andhra-Pradesh.png?ssl=1"
                                              srcSet="https://i2.wp.com/govinfo.me/wp-content/uploads/2018/03/Board-of-Secondary-Education-Andhra-Pradesh.png?ssl=1"
                                              loading="lazy"
                                              alt=""
                                          />
                                          </AspectRatio>
                                          <IconButton
                                          aria-label="Like minimal photography"
                                          size="md"
                                          variant="solid"
                                          color="danger"
                                          sx={{
                                              position: 'absolute',
                                              zIndex: 2,
                                              borderRadius: '50%',
                                              right: '1rem',
                                              bottom: 0,
                                              transform: 'translateY(50%)',
                                          }}
                                          >
                                          <img height='80px' src={Tenth}/>
                                          </IconButton>
                                      </CardOverflow>
                                      <Typography level="h2" sx={{ fontSize: 'md', mt: 2, color:'black' }}>
                                          {/* <Link href="#multiple-actions" overlay underline="none"> */}
                                          Tenth 
                                          {/* </Link> */}
                                      </Typography>
                                      <Typography level="body2" sx={{ mt: 0.5, mb: 2}}>
                                          {/* <Link href="#multiple-actions">California</Link> */}
                                          Board of Secondary Education- Andhra Pradesh
                                      </Typography>
                                      <Divider inset="context" />
                                      <CardOverflow
                                          variant="soft"
                                          sx={{
                                          display: 'flex',
                                          gap: 1.5,
                                          py: 1.5,
                                          px: 'var(--Card-padding)',
                                          bgcolor: 'background.level1',
                                          }}
                                      >
                                          <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                              92%
                                          </Typography>
                                          <Divider orientation="vertical" />
                                          <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                          <ThemeProvider theme={theme}>
                                          <Button sx={{color:"black", cursor:'text'}} startIcon={<CalendarMonthOutlinedIcon />}>
                                              21th May 2011
                                          </Button>
                                          </ThemeProvider>
                                          
                                          </Typography>
                                      </CardOverflow>
                              </Card>


                              <Card variant="outlined" sx={{  width:'320px',margin:'7vh', background:'white'}}>
                                      <CardOverflow>
                                          <AspectRatio ratio="2">
                                          <img
                                              src="https://leavestranscript.com/wp-content/uploads/2020/08/Sri-Chandrasekharendra-Saraswathi-Viswa-Mahavidyalaya-University-.jpg"
                                              srcSet="https://leavestranscript.com/wp-content/uploads/2020/08/Sri-Chandrasekharendra-Saraswathi-Viswa-Mahavidyalaya-University-.jpg"
                                              loading="lazy"
                                              alt=""
                                          />
                                          </AspectRatio>
                                          <IconButton
                                          aria-label="Like minimal photography"
                                          size="md"
                                          variant="solid"
                                          color="danger"
                                          sx={{
                                              position: 'absolute',
                                              zIndex: 2,
                                              borderRadius: '50%',
                                              right: '1rem',
                                              bottom: 0,
                                              transform: 'translateY(50%)',
                                          }}
                                          >
                                          <img height='80px' src={BE}/>
                                          </IconButton>
                                      </CardOverflow>
                                      <Typography level="h2" sx={{ fontSize: 'md', mt: 2, color:'black' }}>
                                          {/* <Link href="#multiple-actions" overlay underline="none"> */}
                                          BE- Mechanincal
                                          {/* </Link> */}
                                      </Typography>
                                      <Typography level="h2" sx={{ fontSize: 'md', mt: 2, color:'black' }}>
                                          {/* <Link href="#multiple-actions" overlay underline="none"> */}
                                          SCSVMV University
                                          {/* </Link> */}
                                      </Typography>
                                      
                                      <Divider inset="context" />
                                      <CardOverflow
                                          variant="soft"
                                          sx={{
                                          display: 'flex',
                                          gap: 1.5,
                                          py: 1.5,
                                          px: 'var(--Card-padding)',
                                          bgcolor: 'background.level1',
                                          }}
                                      >
                                          <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                                7.90 CGPA
                                          </Typography>
                                          <Divider orientation="vertical" />
                                          <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                          <ThemeProvider theme={theme}>
                                          <Button sx={{color:"black", cursor:'text'}} startIcon={<CalendarMonthOutlinedIcon />}>
                                                18th November 2017
                                          </Button>
                                          </ThemeProvider>
                                          
                                          </Typography>
                                      </CardOverflow>
                              </Card>


                              <Card variant="outlined" sx={{  width:'320px', margin:'7vh', background:'white'}}>
                                      <CardOverflow>
                                          <AspectRatio ratio="2">
                                          <img
                                              src="https://www.static-contents.youth4work.com/university/5fd07266-5dae-4c0d-82fb-96001ec9634e.png"
                                              srcSet="https://www.static-contents.youth4work.com/university/5fd07266-5dae-4c0d-82fb-96001ec9634e.png"
                                              loading="lazy"
                                              alt=""
                                          />
                                          </AspectRatio>
                                          <IconButton
                                          aria-label="Like minimal photography"
                                          size="md"
                                          variant="solid"
                                          color="danger"
                                          sx={{
                                              position: 'absolute',
                                              zIndex: 2,
                                              borderRadius: '50%',
                                              right: '1rem',
                                              bottom: 0,
                                              transform: 'translateY(50%)',
                                          }}
                                          >
                                          <img height='80px' src={ME}/>
                                          </IconButton>
                                      </CardOverflow>
                                      <Typography level="h2" sx={{ fontSize: 'md', mt: 2, color:'black' }}>
                                          {/* <Link href="#multiple-actions" overlay underline="none"> */}
                                          M.Tech - Machine Design
                                          {/* </Link> */}
                                      </Typography>
                                      <Typography level="h2" sx={{ fontSize: 'md', mt: 2, color:'black' }}>
                                          {/* <Link href="#multiple-actions" overlay underline="none"> */}
                                          PES University
                                          {/* </Link> */}
                                      </Typography>
                                      
                                      <Divider inset="context" />
                                      <CardOverflow
                                          variant="soft"
                                          sx={{
                                          display: 'flex',
                                          gap: 1.5,
                                          py: 1.5,
                                          px: 'var(--Card-padding)',
                                          bgcolor: 'background.level1',
                                          }}
                                      >
                                          <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                                9.08 CGPA
                                          </Typography>
                                          <Divider orientation="vertical" />
                                          <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                          <ThemeProvider theme={theme}>
                                          <Button sx={{color:"black", cursor:'text'}} startIcon={<CalendarMonthOutlinedIcon />}>
                                                27th October 2020
                                          </Button>
                                          </ThemeProvider>
                                          
                                          </Typography>
                                      </CardOverflow>
                              </Card>

                        </Grid>
                        <Tooltip title="Explore More" placement="top-start">
                            <Gif src={explore}/> 
                         </Tooltip>
                       
                        </Grid>
                    </Grid>
            </Box>

           

            
    
        )
}

export default Offerings
