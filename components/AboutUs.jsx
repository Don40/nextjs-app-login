// components/AboutUs.js
const AboutUs = () => {
    return (
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
            About Us
          </h1>
          <p className="text-gray-600 text-lg text-center mb-10">
            Learn more about who we are and what we do.
          </p>
  
          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At our organization, we strive to make the world a better place
                through innovation, collaboration, and a strong commitment to our
                core values. We believe in creating solutions that empower people
                and foster growth in all areas of life.
              </p>
            </div>
  
            {/* Right Content */}
            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We aim to be a global leader in our industry, inspiring change
                and progress while maintaining integrity and dedication. Together
                with our team, partners, and community, we work towards a future
                that is sustainable, innovative, and inclusive for everyone.
              </p>
            </div>
          </div>
  
          {/* Team Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Example team members */}
              {[
                { name: "John Doe", role: "CEO", image: "https://via.placeholder.com/150" },
                { name: "Jane Smith", role: "CTO", image: "https://via.placeholder.com/150" },
                { name: "Alice Johnson", role: "CMO", image: "https://via.placeholder.com/150" },
                { name: "Robert Brown", role: "CFO", image: "https://via.placeholder.com/150" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={member.image}
                    alt={`${member.name}`}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  