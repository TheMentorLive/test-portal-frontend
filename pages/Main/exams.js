import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Exams() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

  const openModal = (exam) => {
    setSelectedExam(exam);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedExam(null);
  };

  return (
    <div className="flex flex-col items-center px-4 py-6 space-y-6 font-kyrial">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold">We cover all Exams and Classes</h1>
        <p className="mt-2 text-base md:text-lg text-muted-foreground">
          From videos to notes to tests, providing all you need to learn and practice in one place
        </p>
      </div>
      <br />
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg border border-opacity-40 border-blue-400">
        <div className="flex items-center mb-6 md:mb-8 justify-between">
          <h2 className="text-xl md:text-2xl font-semibold">50+ Entrance Exams</h2>
          <a href="#" className="text-blue-500 hover:underline">
            Explore all Exams &gt;
          </a>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-12 xl:grid-cols-6">
          {[
            { name: "UPSC", icon: "/icons/upsc.png" },
            { name: "CAT", icon: "/icons/cat.png" },
            { name: "NEET", icon: "/icons/neet1.png" },
            { name: "JEE", icon: "/icons/jee1.png" },
            { name: "CLAT", icon: "/icons/clat1.png" },
            { name: "GATE", icon: "/icons/gate.png" },
            { name: "SSC", icon: "/icons/ssc.png" },
            { name: "Teaching", icon: "/icons/teaching.png" },
            { name: "Banking", icon: "/icons/banking.png" },
            { name: "Insurance", icon: "/icons/insurance.png" },
            { name: "State PSC", icon: "/icons/state.png" },
            { name: "State Exams", icon: "/icons/stateexam.png" },
            { name: "Defence", icon: "/icons/defence.png" },
            { name: "Police Exams", icon: "/icons/police.png" },
            { name: "Judiciary", icon: "/icons/judiciary.png" },
            { name: "GMAT", icon: "/icons/gmat.png" },
            { name: "IELTS", icon: "/icons/ielts.png" },
            { name: "GRE", icon: "/icons/gre.png" },
            { name: "IIT JAM", icon: "/icons/iitjam.png" },
            { name: "CA Exams", icon: "/icons/ca.png" },
            { name: "Railways", icon: "/icons/railways.png" },
            { name: "Agriculture", icon: "/icons/agriculture.png" },
          ].map((exam) => (
            <div
              key={exam.name}
              onClick={() => openModal(exam)}
              className="flex min-w-[135px] items-center border-opacity-40 border-blue-400 p-2 border rounded-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground cursor-pointer"
            >
              <Image 
                src={exam.icon} 
                alt={exam.name} 
                width={1400}
                height={1400}
                className="w-8 h-8 mr-2" 
              />
              <span>{exam.name}</span>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className="w-full max-w-4xl p-6 mt-6 bg-white rounded-lg border border-opacity-40 border-blue-400">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold">All School Classes</h2>
          <a href="#" className="text-blue-500 hover:underline">
            Explore all Classes &gt;
          </a>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {[
            { name: "Class 1", icon: "/icons/class1.png" },
            { name: "Class 2", icon: "/icons/class2.png" },
            { name: "Class 3", icon: "/icons/class3.png" },
            { name: "Class 4", icon: "/icons/class4.png" },
            { name: "Class 5", icon: "/icons/class5.png" },
            { name: "Class 6", icon: "/icons/class6.png" },
            { name: "Class 7", icon: "/icons/class7.png" },
            { name: "Class 8", icon: "/icons/class8.png" },
            { name: "Class 9", icon: "/icons/class9.png" },
            { name: "Class 10", icon: "/icons/class10.png" },
            { name: "Class 11", icon: "/icons/class11.png" },
            { name: "Class 12", icon: "/icons/class12.png" },
          ].map((exam) => (
            <div
              key={exam.name}
              onClick={() => openModal(exam)}
              className="flex items-center p-2 border border-opacity-40 border-blue-400 rounded-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground cursor-pointer"
            >
              <Image 
                src={exam.icon} 
                alt={exam.name} 
                width={1400}
                height={1400}
                className="w-8 h-8 mr-2" 
              />
              <span>{exam.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalIsOpen && selectedExam && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-200 border border-blue-400 p-6 rounded-lg shadow-lg w-80 sm:w-96 relative font-kyrial"
          >
            <hr className='bg-black'/>
            
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-lg p-4">
                <div className='flex items-center justify-center'>
                  <Image
                    src={selectedExam.icon}
                    alt={selectedExam.name}
                    width={400}
                    height={400}
                    className="w-24 h-24 rounded-full shadow-md"
                  />
                </div>

                <div className='flex items-center justify-center'>
                  <h2 className="text-2xl font-bold mt-4 text-black">{selectedExam.name}</h2>
                  <br/>
                </div>
                <br/>

                <p className="text-base text-black mt-2 mb-4">
                  Here is a brief description of the {selectedExam.name} exam. This will give you a better idea of what to expect.
                </p>
              </div>
    
              <div className="mt-4 flex space-x-4">
                <Link href="/Main/signup">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Know More
                  </button>
                </Link>
                <button className="bg-white text-blue-600 w-32 px-4 py-2 rounded-lg border border-blue-600 hover:bg-gray-100 transition" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
