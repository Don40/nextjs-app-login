// pages/index.js
"use client";

import GiveSection from '@/components/GiveSection';
import Hero from '@/components/Hero';
import MyMap from '@/components/MyMap';
import Nav from '@/components/Nav';
import NotificationSection from '@/components/NotificationSection';
import VisitUsSection from '@/components/VisitUsSection';
import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa'; // Example of using an icon
import Banner from '@/components/Banner';
import JoinLink from '@/components/JoinLink';
import SecondaryHero from '@/components/SecondaryHero';

const Home = () => {
  const markerPosition = [25.589413663131815, 91.87529363647245];

  return (
    <div className='relative'>
      {/* <JoinLink 
        message="JOIN THE VPP FOR CHANGE!!!!" 
        bgColor="bg-yellow-500"
        textColor="text-black"
        icon={<FaExclamationCircle />}
        linkUrl="/join" // Provide the URL for the join page
      /> */}
      <Banner 
        message="JOIN VPP IF YOU WANT CHANGE!!!!" 
        bgColor="bg-yellow-500"
        textColor="text-black"
        icon={<FaExclamationCircle />}
      />
    <Nav />
    <SecondaryHero
                bgImage="/images/bg-image.webp"
                text="MESSAGE FROM THE VOICE OF THE PEOPLE PARTY!"
                paragraph="Our aim is to bring a real and complete change in the governance of the state with a strong, clean 
    and decisive leadership and also an all round and inclusive development. <br>
    Change is possible and can take place only if we can get the support and cooperation from 
    all the people who are concerned about the well being of the state. It is therefore the duty and responsibility of
    every right thinking person to support this effort to bring a real and complete change in our state. 
    Therefore, no matter what comes in our way, our commitment to the cause will not be weakened."
            />
           
      {/* <Hero
  bgImage="/images/bg-image.webp"
  text="MESSAGE FROM THE VOICE OF THE PEOPLE PARTY!"
  paragraph={`
    Our aim is to bring a real and complete change in the governance of the state with a strong, clean 
    and decisive leadership and also an all round and inclusive development. <br>
    Change is possible and can take place only if we can get the support and cooperation from 
    all the people who are concerned about the well being of the state. It is therefore the duty and responsibility of
    every right thinking person to support this effort to bring a real and complete change in our state. 
    Therefore, no matter what comes in our way, our commitment to the cause will not be weakened.
  `}
/> */}
      <VisitUsSection>

        <div className='text-center p-5'>
          <h2 className="text-3xl font-extrabold font-black	 mb-4 font-raleway">Come and Visit Us</h2>
          <MyMap markerPosition={markerPosition} />
        </div>

        <div className="text-center p-5">
          <h2 className="text-3xl font-bold m-4  font-raleway font-black">Timing</h2>
          <h2 className="text-2xl font-bold m-4  font-raleway font-light">Sunday</h2>
          <p className="text-lg font-montserrat font-bold">WORSHIP 11 AM</p>
          <h2 className="text-2xl font-bold m-4  font-raleway font-light">Wednesday</h2>
          <p className="text-lg font-montserrat font-bold">Discipleship Class 7:00 pm</p>
          <h2 className="text-2xl font-bold m-4  font-raleway font-light">Prayer</h2>
          <p className="text-lg font-montserrat font-bold">First Sunday of the Month 1:30PM-2:30PM</p>
        </div>      
    
      </VisitUsSection>
      <GiveSection />
      <NotificationSection />

    </div>
  );
};

export default Home;
