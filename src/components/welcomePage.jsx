import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Card component declaration
const Card = ({ title, children, bgImage, to }) => {
  return (
    <Link to={to} className="block">  
      <div 
        className="p-6 w-full h-74 mx-auto bg-white rounded-xl  shadow-md flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <div className="bg-white bg-opacity-60 p-4 rounded-lg text-center">
          <div className="text-xl font-medium text-blue-500 mb-2">{title}</div>
          <p className="text-black">{children}</p>
        </div>
      </div>
    </Link>
  );
};

// Main section
function Welcome() {
  const [showMore, setShowMore] = useState(false); // Show more function declaration

  const cardsData = [  // Cards definition
    {
      title: "Explore Training Programs",
      content: "Browse through our diverse range of training programs. Access resources, track your progress, and stay updated on upcoming events.",
      bgImage: "https://www.dicsinnovatives.com/blog/wp-content/uploads/2024/01/java-1024x536.jpg",
      to: "",
    },
    {
      title: "Engage Internships",
      content: "Discover exciting internship opportunities tailored to your interests. Gain hands-on experience, work on real projects, and pave your path towards professional success.",
      bgImage: "https://assets-global.website-files.com/6527fd1691c6b050ff920c18/653637e2851558e8d2eff5b3_The%204%20Benefits%20an%20Internship%20Program%20Can%20Bring%20to%20Your%20Business.webp",
      to: "",
    },
    {
      title: "Record Your Achievements",
      content: "Keep track of your training completion records, access auto-generated documents, and receive important updates via email.",
      bgImage: "https://www.shutterstock.com/shutterstock/photos/2176641849/display_1500/stock-photo--achievement-and-business-goal-success-concept-winner-and-success-of-business-businessman-holding-2176641849.jpg",
      to: "",
    },
    {
      title: "Administered by Experts",
      content: "Benefit from the expertise of our dedicated administrators and trainers, ensuring a supportive and enriching learning environment.",
      bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiQ2iR5CuFI5xvQ1Aq4lM8DLNc5J04jfK3ES33tR66A&s",
      to: "",
    },
    {
      title: "Join Our Community",
      content: "Sign up and be part of a vibrant community of learners and professionals. Network, collaborate, and grow together.",
      bgImage: "https://cdn.vectorstock.com/i/1000x1000/59/21/computer-with-community-people-vector-24435921.webp",
      to: "",
    },
    {
      title: "Advanced Resources",
      content: "Access a wide range of advanced learning resources, including tutorials, e-books, and webinars, to further enhance your skills.",
      bgImage: "https://img.pikbest.com/wp/202404/computer-system-3d-rendered-illustration-of-advanced-systems_9799314.jpg!bw700",
      to: "",
    },
  ];

  const displayedCards = showMore ? cardsData : cardsData.slice(0, 3); // How to display cards

  // Displaying main section
  return (
    <div className="min-h-screen flex flex-col justify-center max-w-[1289px] items-center p-8">
      <h1 className="text-xl mb-8 text-justify">
        Welcome to <span className="text-blue-500">CQ</span>
        <span className="text-green-500">AI</span> training ground, your gateway to a world of learning and growth! This platform is designed to streamline and enhance your experience with our organization's training and internship programs. Here's what you can expect:
      </h1>
      {/* Displaying cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCards.map((card, index) => (
          <Card key={index} title={card.title} bgImage={card.bgImage}>
            {card.content}
          </Card>
        ))}
      </div>
      {/* Show more or show less button */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-8 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default Welcome;
