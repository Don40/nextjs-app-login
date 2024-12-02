import Nav from '@/components/Nav'
import SecondaryHero from '@/components/SecondaryHero'
import React from 'react'
import WaysToGive from './WaysToGive'

const page = () => {
    return (
        <>
            <Nav />
            <SecondaryHero
                bgImage="/images/bg-image.webp"
                text="GIVE!"
                paragraph=""
            />
            <WaysToGive />
        </>
    )
}

export default page