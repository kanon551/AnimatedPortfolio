import React from "react";
import styled from 'styled-components';
import ProfileSwipe from "../components/ProfileSwipe";
import Offerings from "../components/Offerings";
import '../pages/ReimagingExp.css';
import Footer from "../components/Footer";
import CxSwipeTest from "../components/CxSwipeTest";
import Providing from "../components/Providing";
import Reimage from "../components/Reimage";

const PersonalCarousal = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const ReimagingExp = () => {

  return (
    <div style={{height:'fit-content'}}>
      <PersonalCarousal>
      <Reimage/>
      </PersonalCarousal>

<PersonalCarousal>
      <Providing/>
      </PersonalCarousal>


      <PersonalCarousal>
      <CxSwipeTest/>
      </PersonalCarousal>

      <PersonalCarousal>
                  <ProfileSwipe/>
      </PersonalCarousal>


      <PersonalCarousal>
                  <Offerings/>
      </PersonalCarousal>

      <div style={{height:"50vh", flexDirection:"column", paddingTop:"1vh"}}>
                  <Footer/>
      </div>

    </div>
  )
}
export default ReimagingExp