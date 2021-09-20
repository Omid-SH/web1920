import './App.css';

import NavbarHeader from './components/Navbar/NavbarHeader';
import Title1 from './components/Title1';
import Seperator from './components/Seperator';
import ProjectGallery from './components/Project/ProjectGallery';
import TeamGallery from './components/Team/TeamGallery';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Baner from './components/Baner/Baner';

import NavbarHeaderM from './components/NavbarM/NavbarHeaderM';
import Title1M from './components/Title1M';
import SeperatorM from './components/SeperatorM';
import ProjectGalleryM from './components/ProjectM/ProjectGalleryM';
import TeamGalleryM from './components/TeamM/TeamGalleryM';
import AboutUsM from './components/AboutUsM';
import FooterM from './components/FooterM';
import BanerM from './components/BanerM/BanerM';

import { blue_1, break_point } from './config'
import ScheduleCard from './components/ScheduleCard/ScheduleCard';
import ScheduleCardM from './components/ScheduleCardM/ScheduleCardM';
import { useEffect, useState } from 'react';

function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const [cardIsOpen, setCardIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  useEffect(() => {

  }, [cardIsOpen]);


  if (width >= break_point) {
    console.log("Desktop");
    // ipad and desktop mode
    return (
      <div className="App">
        <NavbarHeader/>

        <div id="home">
          <Baner/>
          <Seperator height="65.05vw"/>
        </div>

        <div id="projects">
          <Title1 linewidth='18' text='Projects' color={blue_1} />
          <Seperator height="9.79vw"/>
          <ProjectGallery/>
          <Seperator height="14.69vw"/>
        </div>

        <div id="ourteam">
          <Title1 linewidth='9.4' text='Our Team' color={blue_1}/>
          <Seperator height="9.79vw"/>
          <TeamGallery/>
          <Seperator height="14.63vw"/>
        </div>

        <div id="aboutus">
          <Title1 linewidth='9.4' text='About Us' color={blue_1}/>
          <Seperator height="8.85vw"/>
          <AboutUs/>
          <Seperator height="15.885vw"/>
        </div>

        <div id="footer">
          <Footer openCard={() => setCardIsOpen(true)}/>
        </div>

        {cardIsOpen?
        <ScheduleCard closeCard={() => setCardIsOpen(false)} id={'schedule_card'} />
        :
        <>
        </>
        }

      </div>
    );

  } else {
    console.log("Mobile");
    // mobile mode
    return (
      <div className="App">
      <NavbarHeaderM/>

      <div id="home">
        <BanerM/>
        <SeperatorM height="197vw"/>
      </div>

      <div id="projects">
        <Title1M linewidth='32.9' text='Projects' color={blue_1} />
        <SeperatorM height="16.55vw"/>
        <ProjectGalleryM/>
        <SeperatorM height="33.56vw"/>
      </div>

      <div id="ourteam">
        <Title1M linewidth='31.97' text='Our Team' color={blue_1}/>
        <SeperatorM height="14.74vw"/>
        <TeamGalleryM/>
        <SeperatorM height="14.51vw"/>
      </div>

      <div id="aboutus">
        <Title1M linewidth='9.4' text='About Us' color={blue_1}/>
        <SeperatorM height="22.7vw"/>
        <AboutUsM/>
        <SeperatorM height="18.14vw"/>
      </div>

      <div id="footer">
        <FooterM openCard={() => setCardIsOpen(true)}/>
      </div>

      {cardIsOpen?
      <ScheduleCardM closeCard={() => setCardIsOpen(false)} id={'schedule_card_m'} />
      :
      <>
      </>
      }

    </div>
  );
}

}

export default App;
