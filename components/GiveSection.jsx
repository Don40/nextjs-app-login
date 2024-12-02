import React from 'react'
import HorizontalRule from './HorizontalRule'

const GiveSection = () => {
  return (
      <section className="py-12 bg-gray-100 text-black">
       <div className="container mx-auto md:flex justify-around my-8">
        <h2 className="text-center text-3xl font-bold mb-4 font-raleway">Where can I give?</h2>
          </div>
      <HorizontalRule width="w-1/2" />
      
      <div className="container mx-auto md:flex justify-around my-8">
        <p className=" max-w-6xl text-center text-lg px-8 font-montserrat">Jesus told us, his disciples, to make disciples of all nations. One of the most important values of this church is our mission to the world. It begins in our own community, and spreads overseas to every nation. </p>
      </div>
          </section>
  )
}

export default GiveSection