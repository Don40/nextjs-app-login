// pages/index.js
"use client";

import GiveSection from '@/components/GiveSection';
import Hero from '@/components/Hero';
import MyMap from '@/components/MyMap';
import Nav from '@/components/Nav';
import NotificationSection from '@/components/NotificationSection';
import VisitUsSection from '@/components/VisitUsSection';
import React from 'react';

const Home = () => {
  const markerPosition = [25.589413663131815, 91.87529363647245];

  return (
    <div className='relative'>
      <Nav />
      <Hero
        bgImage="/images/bg-image.webp"
        text="Welcome To The Christ Tabernacle Church!"
        paragraph="Our prayer is that you will be blessed and strengthened by the power of Jesus,
         and that you will live a life of abundance in fellowship, joy and liberty.
          The Christ Tabernacle Church is here for you. 
          It is not just a church; it is a fellowship of believers coming together to declare the glory of the Lord, and to celebrate Jesus as King. We study the Word, practice what we learn, and in the process grow together. May God richly bless you! May the Lord bless you and keep you! We hope to see you soon!"
      />

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
