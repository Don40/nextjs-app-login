import React from 'react';

const VisitUsSection = ({ children }) => {
  return (
    <section className="py-12 bg-gray-200 text-black">
       <div className="container mx-auto md:flex justify-around">
        {children}
      </div>
    </section>
  );
};

export default VisitUsSection;