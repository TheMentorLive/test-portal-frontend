import { useState } from "react";
import { Card } from "@/public/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/public/ui/avatar";
import { Button } from "@/public/ui/button";

// Your custom icon components
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

  
  const displayReviews = [
    ...reviews.slice(-3), // Last 3 items
    ...reviews, // All items
    ...reviews.slice(0, 3) // First 3 items
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#eaeaea]">
      <h2 className="text-3xl font-bold mb-10  text-[#000000]">Testimonials</h2>
      <div className="flex items-center justify-between w-full max-w-6xl px-4 gap-4">
        <button
          onClick={handlePrev}
          className="p-2 bg-white rounded-full shadow-md"
        >
          <ChevronLeftIcon className="w-6 h-6 text-[#007bff]" />
        </button>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 overflow-hidden">
          {displayReviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-4 bg-white shadow-lg h-[400px]"
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
        <button
          onClick={handleNext}
          className="p-2 bg-white rounded-full shadow-md"
        >
          <ChevronRightIcon className="w-6 h-6 text-[#007bff]" />
        </button>
      </div>
    </div>
  );
}
