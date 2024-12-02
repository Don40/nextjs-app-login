"use client";
import React, { useEffect } from 'react'
import ContactForm from '@/components/ContactForm';
import MyMap from '@/components/MyMap';
import Nav from '@/components/Nav';
import SecondaryHero from '@/components/SecondaryHero';

const Page = () => {
    const markerPosition = [25.589413663131815, 91.87529363647245];
    useEffect(() => {
        fetch('/api/contact')
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    return (
        <>
            <Nav />
            <SecondaryHero
                bgImage="/images/bg-image.webp"
                text="CONTACT US!"
                paragraph="Our prayer is that you will be blessed and strengthened by the power of Jesus, and that you will live a life of abundance in fellowship, joy and liberty. The River of Life Church is here for you. It is not just a church; it is a fellowship of believers coming together to declare the glory of the Lord, and to celebrate Jesus as King. We study the Word, practice what we learn, and in the process grow together. May God richly bless you! May the Lord bless you and keep you! We hope to see you soon!"
            />
            <div className='bg-slate-200 pb-9 pt-6'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 font-semibold">
                    <div className='flex flex-col  justify-start text-black my-5 mx-3 px-5 py-9 pl-12 leading-9 text-xl space-y-4 font-montserrat'>
                        <p className='text-6xl font-extralight'>Join Us!</p>
                        <p>Church Location & Address</p>
                        <p>Jaiaw Lumbatemon</p>
                        <p>Shillong, 793017</p>
                        <p>(210) 533-0942</p>
                        <p>Office Hours:</p>
                        <p>Mon-Thurs: 10am to 3pm.</p>
                    </div>
                    <div className='col-span-2 text-black my-5 mx-3 px-5'>
                        <MyMap markerPosition={markerPosition} />
                    </div>
                    <div className='flex flex-col  justify-start text-black my-5 mx-3 px-5 py-9 pl-12 leading-9 text-xl space-y-4'>
                        <p className='text-4xl font-raleway font-medium'>Contact Us</p>
                        <p className='font-montserrat'>Have any questions? Let us know how we can help.
                            We&apos;d love to hear from you!
                        </p>

                    </div>
                    <div className='col-span-2 text-black my-5 mx-3 px-5'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Page