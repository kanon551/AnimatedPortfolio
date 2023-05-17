import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import PaperPath from '../components/PaperPath';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import kanon from '../assets/kanon.png';
import ReimagingExp from './ReimagingExp';
import { GlobalStyles } from '@mui/material';

const ElevationScroll = (props)=> {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };
  const Logo = styled.img`
    width: 4rem;
    height: 3rem;
  `
const Cx100Home = (props) => {

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{
          '*::-webkit-scrollbar': {
            width: '0.8em',
            display:'hidden',
          },
          '*::-webkit-scrollbar-track': {
            borderRadius: '15px',
            boxShadow: 'inset 0 0 6px rgb(0 0 0 / 30%)',
            background:'whitesmoke'
          },
          '*::-webkit-scrollbar-thumb': {
            borderTopRightRadius:'15px',
            borderBottomRightRadius:'15px',
            backgroundColor:'violet',
            outline: '1px solid white',
          },
        }}
      />
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar sx={{
            background: 'radial-gradient(108.1% 345.21% at 3.15% 5.49%, #3388ff 0%, #1a237e 33.33%, #df1c6a 100%);',
        }}>
          <Toolbar >
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
            >
                <Logo src={kanon} />
            </IconButton>
            <Box sx={{ flexGrow: 1}}/>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />

        <ReimagingExp/>
        {/* {
          matches1300 && matches1440 && <PaperPath/>
        } */}
        <PaperPath/>
    </React.Fragment>
  )
}
export default Cx100Home