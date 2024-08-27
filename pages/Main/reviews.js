import { useState, useEffect } from "react";
import { Card } from "@/public/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/public/ui/avatar";
import { Button } from "@/public/ui/button";
import { motion } from "framer-motion";

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
    image: "/reviews/re2.png",
    feedback: "Bob's review text goes here. It's persuasive and engaging.",
  },
];

export default function Re1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - visibleCards : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % reviews.length
    );
  };

  useEffect(() => {
    const updateVisibleCards = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setVisibleCards(3); // Show 3 cards on large screens
      } else if (screenWidth >= 640) {
        setVisibleCards(2); // Show 2 cards on medium screens
      } else {
        setVisibleCards(1); // Show 1 card on small screens
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    if (isAutoplay) {
      const intervalId = setInterval(() => {
        handleNext();
      }, 5000); // Autoplay interval (5 seconds)

      return () => clearInterval(intervalId);
    }
  }, [isAutoplay]);

  // Create a looped version of the reviews array
  const displayReviews = [...reviews, ...reviews].slice(
    currentIndex,
    currentIndex + visibleCards
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
      animate={{ opacity: 1, x: 0 }} // Slide in to the center
      transition={{ duration: 0.5 }}
      style={{ fontFamily: 'Inter, sans-serif' }}
      className="flex flex-col items-center justify-center mt-32 p-20  sm:px-6 lg:px-8"
    >
      <motion.h2
        initial={{ opacity: 0, x: -100 }} // Slide in from left
        animate={{ opacity: 1, x: 0 }} // Slide to the center
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl mb-16 md:text-4xl font-bold sm:mb-10 text-[#000000]"
      >
        Testimonials
      </motion.h2>
      <div className="flex items-center justify-between w-full max-w-2xl sm:max-w-4xl lg:max-w-6xl gap-4">
        <button
          onClick={handlePrev}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <ChevronLeftIcon className="w-6 h-6 text-[#007bff]" />
        </button>
        <div className="flex-1 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }} // Slide in from right
                animate={{ opacity: 1, x: 0 }} // Slide to the center
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  className="flex flex-col items-center p-4 bg-white shadow-lg mx-auto"
                >
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={review.image} alt={`${review.name}'s avatar`} />
                    <AvatarFallback>{review.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold text-[#007bff]">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.designation}</p>
                  <p className="mt-2 text-center text-gray-600">{review.feedback}</p>
                  <div className="flex mt-4 space-x-4">
                    <Button>Read More</Button>
                  </div>
                </Card>
              </motion.div>
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
    </motion.div>
  );
}
