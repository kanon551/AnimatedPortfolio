import React, { useState , useCallback, useEffect} from "react";
import { motion} from "framer-motion";
import AnimatedCharacters from '../components/AnimatedCharecters';
import cxCloud1 from '../assets/realcloud1.png';
import styled from 'styled-components';
import csBack from "../assets/bluebackground.png";
import '../pages/ReimagingExp.css';
import Box from '@mui/material/Box';


const CombinedHome = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
z-index: 1;
justify-content: center;
background-image: url(${csBack}), radial-gradient(108.1% 345.21% at 3.15% 5.49%, #3388ff 0%, #1a237e 33.33%, #df1c6a 100%);;
background-repeat:no-repeat;
background-size:cover;
background-position: bottom;
`
const ReAnimeButton = styled.div`
    width:215px;
    height: 175px;
    margin-Left:30%;
    background-image: url(${cxCloud1});
     background-size:contain;
     background-repeat:no-repeat;
     cursor: pointer;
     display: flex;
     align-items: center;
     justify-content: center;
     color: white;
     z-index: -10;
     position: absolute;
     bottom: 30vh;
    left: 0vh;

    @media only screen and (max-width: 768px) {
      bottom: 40vh;
    }

    @media only screen and (max-width: 1024px) {
      bottom: 50vh;
    }

    @media only screen and (max-width: 1440px) {
      bottom: 50vh;
    }

    @media only screen and (max-width: 2560px) {
      bottom: 52vh;
    }

    @media only screen and (max-width: 425px) {
      bottom: 30vh;
    }

`
const Reimage = () => {

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

    const [replay, setReplay] = useState(true);
    const placeholderText = [
        { type: "heading1", text: "Web" },
        { type: "heading2", text: "Whirlwind" },
      ];
      const container = {
        display: 'flex',
        zIndex: "-1",
        width: "100%",
        height: "fit-content",
        background: 'radial-gradient(108.1% 345.21% at 3.15% 5.49%, #3388ff 0%, #1a237e 33.33%, #df1c6a 100%);',
        visible: {
          transition: {
            staggerChildren: 0.025
          }
        }
      };

      // Quick and dirt for the example
      const handleReplay = () => {
        setReplay(!replay);
        setTimeout(() => {
          setReplay(true);
        }, 600);
      };


      const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=> {
          if(entry.isIntersecting){
            entry.target.classList.add('show');
          }
          else{
            entry.target.classList.remove('show');
          }
        });
      });


      const observerRight = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=> {
          if(entry.isIntersecting){
            entry.target.classList.add('showRight');
          }
          else{
            entry.target.classList.remove('showRight');
          }
        });
      });

      useEffect(()=> {
        const hiddenElements = document.querySelectorAll('.fromLeft');
        hiddenElements.forEach((el)=> observer.observe(el));
      },[])

      useEffect(()=> {
        const hiddenElements = document.querySelectorAll('.fromRight');
        hiddenElements.forEach((el)=> observerRight.observe(el));
      },[])


  return (
    <Box sx={{ zIndex:5,width:'100%',height:'fit-content',
    paddingTop:'0.5vh',paddingBottom:'0.5vh'}}>

<CombinedHome>
            <motion.div
                initial="hidden"
                // animate="visible"
                animate={replay ? "visible" : "hidden"}
                variants={container}
                >
                <div style={{padding: '5px', zIndex:100}}>
                  {placeholderText.map((item, index) => {
                    return <AnimatedCharacters {...item} key={index} />;
                  })}
                </div>
                <motion.div
                  animate={{ x, y, rotate }}
                  transition={{ type: "spring" }}
                >
                  <ReAnimeButton onClick={handleReplay} >
                          Re-Animate
                  </ReAnimeButton>
                </motion.div>
            </motion.div>
      </CombinedHome>

        </Box>
  )
}

export default Reimage
