import React, { useState , useCallback, useEffect} from "react";
import { motion} from "framer-motion";
import realcloud2 from '../assets/realcloud2.png';
import styled from 'styled-components';
import '../pages/ReimagingExp.css';
import Box from '@mui/material/Box';

const Words = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
`
const Cloud2 = styled.div`
  width:215px;
    height: 175px;
    background-image: url(${realcloud2});
     background-size:cover;
     background-repeat:no-repeat;
     cursor: pointer;
     position: static;
    margin-left: 15vh;
    margin-top: -30vh;
`


const WordHead = styled.div`
  color: #0d1442;
  font-weight: bold;
  font-family: monospace;
  z-index: 100;
  font-size:3vw;
  @media only screen and (max-width: 320px) {
    font-size:8vw;
    }
`
const WordFooter = styled.div`
font-size:5vw;
  color: #0d1442;
  font-family: monospace;
  font-weight: bold;
  z-index: 100;

  @media only screen and (max-width: 320px) {
      font-size:8vw;
    }
`
const AnimTitle = styled.div`
    height: 80px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 5vw;
    @media only screen and (max-width: 320px) {
      font-size:8vw;
    }
    font-weight: bold;
    color: #59b256;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const AnimItem = styled.div`
margin-top: 30px;
margin-bottom: 30px;
    height: 80px;
    overflow: hidden;
`

const Anime = styled.div`
    height: fit-content;
    z-index: 100;
    animation: AniTittle 15s ease-in-out infinite alternate ;
    @keyframes AniTittle {
        16.5%{
            transform: translateY(-80px);
        }
        33%{
            transform: translateY(-160px);
        }
        49.5%{
            transform: translateY(-240px);
        }
        66%{
            transform: translateY(-320px);
        }
        82.5%{
            transform: translateY(-400px);
        }
        100%{
            transform: translateY(-480px);
        }
    }
`

const Providing = () => {

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
    padding:'80px'}}>

<Words>
        <WordHead>
          <div className="fromLeft">Iam a FrontEnd Developer</div>
          <div className="fromLeft">has Expertise in</div>
        </WordHead>
        <AnimItem>
          <Anime>
              <AnimTitle>React JS</AnimTitle>
              <AnimTitle>Commerce StoreFront</AnimTitle>
              <AnimTitle>Java</AnimTitle>
              <AnimTitle>HTML</AnimTitle>
              <AnimTitle>CSS</AnimTitle>
              <AnimTitle>Java Script</AnimTitle>
              <AnimTitle>Type Script</AnimTitle>
          </Anime>
        </AnimItem>
        <WordFooter className="fromRight">
          Ready to possession
        </WordFooter>
      </Words>
        <motion.div
          style={{display:'inline-flex'}}
            animate={{ x, y, rotate }}
            transition={{ type: "spring" }}
        >
          <Cloud2/>
        </motion.div>
    </Box>
  )
}

export default Providing
