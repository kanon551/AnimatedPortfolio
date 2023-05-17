import carousalBackground from '../assets/carousalbackground.png';

import React, { useState , useCallback, useEffect} from "react";
import { motion} from "framer-motion";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styled from 'styled-components';
import fabircPics from '../assets/SonyHome.png';
import CxHundred_logo from '../assets/CX100_logo-white.png';
import commercetoolsPics from '../assets/ZolanihomeIII.png';
import cxCloud3 from '../assets/cxCloud3.png';
import useMediaQuery from '@mui/material/useMediaQuery';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Cloud3 = styled.div`
 width: 60px;
 height: 72px;
    background-image: url(${cxCloud3});
     background-size:cover;
     background-repeat:no-repeat;
     cursor: pointer;
     position: static;

     display: flex;
     align-items: center;
     justify-content: center;
`


const CarousalData = [
{
      image : fabircPics,
      label: "fabric",
      description:'Iam a fabric certified store front developer and has the ability to build an entire ecommerce website utilizing the fabric products like PIM, Offers, OMS, Idetity, Cart, Chekout'
    },{
      image : CxHundred_logo,
      label: "CX100",
      description:'Currently working as a Interactive developer @Cx-100 in all the modern web frameworks'
    },{
      image: commercetoolsPics,
      label: "commercetools",
      description:'Fully utilizing the commercetools headless APIs, I can successfully build modern commerce web applicationn ensuring Premium code level architecture'
    }
  ]

const CxSwipeTest = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(60);
    const [rotate, setRotate] = useState(-10);


    const matches768 = useMediaQuery('(min-width:768px');

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


  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ zIndex:5,width:'100%',height:'100vh',
    padding:"3vh",
    backgroundImage: `url(${carousalBackground})`,
backgroundRepeat:'no-repeat',
backgroundSize:'cover', display:'flex' }}>
<Box style={{display: 'flex', flexDirection: matches768? 'row' : 'column', alignItems:'center', justifyContent:'space-between',
  zIndex:5}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection:'column',
          alignItems: 'center',
          height: 150,
          pl: 2,
          background:'transparent',
          color:'black',
          width:'80%'
        }}
      >
        <div style={{fontSize:'4vh', fontWeight:400, fontFamily:'monospace', marginTop:'10px', marginBottom:'10px', color:'white'}}>Experience</div>
        <div style={{fontSize:'8vh', fontWeight: 400, fontFamily:'monospace',marginTop:'10px',color: "#0d1442", textDecoration:'overline', textDecorationColor:'violet'}}>{CarousalData[activeStep].label}</div>
        <div style={{fontSize:'2.5vh', fontWeight:400, fontFamily:'monospace',marginTop:'1px',color: "#0d1442"}} >{CarousalData[activeStep].description}</div>
        
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {CarousalData.map((step, index) => (
          <div key={step.label}  style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>

                    <motion.div
                        style={{display:'inline-flex'}}
                            animate={{ x, y, rotate }}
                            transition={{ type: "spring" }}
                        >
                        <Cloud3>
                            {
                                index+1
                            }
                        </Cloud3>
                    </motion.div>



            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.image}
                alt={step.image}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
    </Box>
  )
}

export default CxSwipeTest
