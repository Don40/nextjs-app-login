"use client";

import Nav from '@/components/Nav';
import SecondaryHero from '@/components/SecondaryHero';
import React from 'react'

const page = () => {
    return (
        <>
            <Nav />

            <SecondaryHero
                bgImage="/images/bg-image.webp"
                text="CONNECT WITH US!"
                paragraph="Our prayer is that you will be blessed and strengthened by the power of Jesus, and that you will live a life of abundance in fellowship, joy and liberty. The River of Life Church is here for you. It is not just a church; it is a fellowship of believers coming together to declare the glory of the Lord, and to celebrate Jesus as King. We study the Word, practice what we learn, and in the process grow together. May God richly bless you! May the Lord bless you and keep you! We hope to see you soon!"
            />
        </>
    )
}

export default page;