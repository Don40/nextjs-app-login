"use client";
import Nav from '@/components/Nav'
import React, { useEffect } from 'react'
import axios from 'axios';
import EventsCard from '@/components/EventsCard';
import SecondaryHero from '@/components/SecondaryHero';

const Page = () => {

    useEffect(() => {
        axios
            .get("http://localhost:8080/roles")
            .then(function (response) {
                console.log(response.data);
            });
    }, [])

    return (
        <>
            <Nav />
            <SecondaryHero
                bgImage="/images/bg-image.webp"
                text="EVENTS!"
                paragraph="Our prayer is that you will be blessed and strengthened by the power of Jesus, and that you will live a life of abundance in fellowship, joy and liberty. The River of Life Church is here for you. It is not just a church; it is a fellowship of believers coming together to declare the glory of the Lord, and to celebrate Jesus as King. We study the Word, practice what we learn, and in the process grow together. May God richly bless you! May the Lord bless you and keep you! We hope to see you soon!"
            />
            <div className='bg-slate-200 mx-auto p-5'>

                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
            </div>
        </>
    )
}

export default Page;