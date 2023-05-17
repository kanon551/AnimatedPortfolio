import React, { useEffect, useState, useRef, useCallback } from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import arrow from '../assets/arrow.png';
import { motion, useViewportScroll, useTransform } from "framer-motion";


const ArrowMotion = styled(motion.div)`
  background-image: url(${arrow});
   background-repeat: no-repeat;
   background-size: contain;
   width: 10rem;
    height: 10rem;
    top: -100px;
    left:-100px;
 position: absolute;
 /* z-index: 2; */
`

const PaperPath = () => {
    const ref = useRef(null);
    const pathRef = useRef(null);
    const paperRef = useRef(null);
    const [x, setX] = useState(321.6199951171875);
    const [y, setY] = useState(106);
    const [rotate, setRotate] = useState(75.85455601277424);

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1.3, 0.1]);


    const [directionY, setDirectionY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (directionY > window.scrollY) {
        setRotate((prevActiveStep) => prevActiveStep + 180)
      } else if (directionY < window.scrollY) {
        setRotate((prevActiveStep) => prevActiveStep)
      }
      setDirectionY(window.scrollY);
    },
    [directionY]
  );

  useEffect(() => {
    setDirectionY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

 
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);




    useEffect(() => {
        var  maxScrollY = ref.current.clientHeight
        var pathLen = pathRef.current.getTotalLength();
        window.addEventListener('scroll', () => {
            positionCar(pathLen,maxScrollY);
        })
      }, []);

      const positionCar = (pathLen,maxScrollY)=> {
        var scrollY = window.pageYOffset;
        var  dist = pathLen * (scrollY / maxScrollY);
        var  pos = pathRef.current.getPointAtLength(dist);
        setX(pos.x)
        setY(pos.y)
        var angle = calculateAngle(pathRef, pathLen, dist, pos)
        setRotate(rad2deg(angle))
        // if (angle < 0) {
        //     console.log("Angle Less than 0")
        //     dist = pathLen * scrollY / maxScrollY;
        //     pos = pathRef.getPointAtLength(dist);
        //     angle = calculateAngle(pathRef, pathLen, dist, pos)
        //     setRotate(rad2deg(angle))
        // }
      }

      const calculateAngle = (path, pathLen, dist, pos) => {
        if (dist + 1 <= pathLen) {
          var  posAhead = path.current.getPointAtLength(dist + 1);
          return Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);
        } else {
          var  posBehind = path.current.getPointAtLength(dist - 1);
          return Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
        }
      }

      const rad2deg = (rad) => {
        return  180 * rad / Math.PI;
        
    }
  return (
<Box ref={ref} 
        sx={{ 
              width: '100%', 
              height: 'fit-content',
              position: 'relative',
              marginTop: '-3750px',
              zIndex: 10
            }}>
        <ArrowMotion
        animate={{ x, y, rotate }}
        transition={{ type: "spring" }}
        style={{
          scale
        }}
        ref={paperRef}
         id="paper"
        />
        {/* 1405 */}
        <svg width="100%" height="3719px" viewBox="0 0 100% 3719" >
        <motion.path
          d="M321.62 106c12.83 51.17 54.11 182.87 145.38 216.5 114 42 270-21 275 147s-392 136-528 275-34 289-34 289 64 110 205 135 270 12 337 165-121 283-121 283-99 58-183 61-312 63-360 281 146 283 146 283 116 30 207 28 284 22 301 144-34 196-94 247-183 101-215 114-205 47-245 224 152 270 190 281c36.35 10.52 183.43 101.57 192.62 204"
          ref={pathRef}
          fill="none"
          strokeDasharray="14.02 14.02"
          stroke="rgba(27, 89, 232, 0.452)"
          strokeMiterlimit="10"
          strokeWidth="2"
          id="path"
        />
        </svg>
    </Box>
    
    
  )
}
export default PaperPath