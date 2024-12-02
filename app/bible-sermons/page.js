import Nav from '@/components/Nav'
import React from 'react'

const Page = () => {
    return (
        <>
            <Nav />
            <div className="bg-slate-200 flex justify-center items-center">
                <div className="mt-6 relative overflow-hidden" style={{ paddingTop: '56.25%', width: '100%', maxWidth: '80%' }}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-3/6"
                        src="https://www.youtube.com/embed/exflUqx06A4?si=0GfAi0SPFNIgSb96"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className=" w-full lg:max-w-full md:max-w-full lg:flex justify-center mb-3">
                <div
                    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{
                        backgroundImage: `url("/images/bg-image.webp")`,
                    }}
                    title=""
                ></div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl ">
                            Prayer and Worship Night
                        </div>

                        <p className="text-gray-700 text-base">
                            June prayer is moved to the 23rd this month! Join us in the
                            sanctuary for a powerful night of worship & prayer.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page;