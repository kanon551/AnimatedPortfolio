import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { hover } from '@testing-library/user-event/dist/hover';

const Contact = styled.div`
    font-size: xxx-large;
    font-family: monospace;
    color: white;
    margin-bottom: 1vh;
    background: violet;
    width: 20%;
    display: flex;
    justify-content: center;
    border-radius: 5vh;
    &:hover {
    box-shadow: 0px 0px 10px 20px rgba(0,0,0,20%);
  }
`

const Footer = () => {

    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


  return (
    <Box sx={{ zIndex:100,flexGrow:1, width:'100%',height:'50vh',
    padding:'3vh',
    background: 'radial-gradient(108.1% 345.21% at 3.15% 5.49%, #3388ff 0%, #1a237e 33.33%, #df1c6a 100%);',
backgroundRrepeat:'no-repeat',
backgroundSize:'cover', display:'flex', flexDirection:'column', alignItems:"center", justifyContent:"center" }}>

<Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed:2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 600,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    <div style={{fontSize:'xxx-large', fontFamily:'monospace', color:'white', marginBottom:"1vh"}}>
       Come, Lets build Awesome Web Apps
    </div>
    <div style={{fontSize:'xxx-large', fontFamily:'monospace', color:'white', marginBottom:"1vh"}}>
        #CrazyIdeasAhead
    </div>
    <Contact style={{fontSize:'xxx-large', 
                fontFamily:'monospace', 
                color:'white', 
                marginBottom:"1vh", 
                background:'violet',
                width:'20%', display:"flex", justifyContent:'center',
                borderRadius:'5vh',
                }}>
        Contact Me
    </Contact>


    </Box>
  )
}

export default Footer
