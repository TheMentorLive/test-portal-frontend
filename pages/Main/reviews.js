import { useState } from "react";
import { Card } from "@/public/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/public/ui/avatar";
import { Button } from "@/public/ui/button";

// Custom icon components
function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

const reviews = [
  {
    name: "John Doe",
    designation: "Software Engineer",
    image: "/reviews/re1.png",
    feedback: "John's review text goes here. It's insightful and detailed.",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager",
    image: "/reviews/re2.png",
    feedback: "Jane's review text goes here. It's concise and informative.",
  },
  {
    name: "Alice Johnson",
    designation: "UX Designer",
    image: "/reviews/re3.png",
    feedback: "Alice's review text goes here. It's creative and thoughtful.",
  },
  {
    name: "Bob Brown",
    designation: "Marketing Specialist",
    image: "#",
    feedback: "Bob's review text goes here. It's persuasive and engaging.",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 3 ? 0 : prevIndex + 1
    );
  };

  const displayReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#eaeaea] px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 text-[#000000]">Testimonials</h2>
      <div className="flex items-center justify-between w-full max-w-6xl gap-4">
        <button
          onClick={handlePrev}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <ChevronLeftIcon className="w-6 h-6 text-[#007bff]" />
        </button>
        <div className="flex-1 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayReviews.map((review, index) => (
              <Card
                key={index}
                className="flex flex-col items-center p-4 bg-white shadow-lg h-auto md:h-[400px] mx-auto"
              >
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={review.image} alt={`${review.name}'s avatar`} />
                  <AvatarFallback>{review.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold text-[#007bff]">{review.name}</h3>
                <p className="text-sm text-gray-600">{review.designation}</p>
                <p className="mt-2 text-center text-gray-600">{review.feedback}</p>
                <div className="flex mt-4 space-x-4">
                  <div className="mt-14">
                    <Button>Read More</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <ChevronRightIcon className="w-6 h-6 text-[#007bff]" />
        </button>
      </div>
    </div>
  );
}
