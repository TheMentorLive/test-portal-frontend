import Image from 'next/image';

export default function Exams() {
  return (
    <div className="flex flex-col items-center px-4 py-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold">We cover all Exams and Classes</h1>
        <p className="mt-2 text-base md:text-lg text-muted-foreground">
          From videos to notes to tests, providing all you need to learn and practice in one place
        </p>
      </div>
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow">
        <div className="flex items-center mb-6 md:mb-8 justify-between">
          <h2 className="text-xl md:text-2xl font-semibold">50+ Entrance Exams</h2>
          <a href="#" className="text-blue-500 hover:underline">
            Explore all Exams &gt;
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {[
            { name: "UPSC", icon: "/icons/upsc.png" },
            { name: "CAT", icon: "/icons/cat.png" },
            { name: "NEET", icon: "/icons/neet.png" },
            { name: "JEE", icon: "/icons/jee.png" },
            { name: "CLAT", icon: "/icons/clat.png" },
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
              className="flex items-center p-2 border rounded-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground"
            >
              <Image 
                src={exam.icon} 
                alt={exam.name} 
                width={32}       // Add width here
                height={32}      // Add height here
                className="w-8 h-8 mr-2" 
              />
              <span>{exam.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-4xl p-6 mt-6 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold">All School Classes</h2>
          <a href="#" className="text-blue-500 hover:underline">
            Explore all Classes &gt;
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
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
              className="flex items-center p-2 border rounded-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground"
            >
              <Image 
                src={exam.icon} 
                alt={exam.name} 
                width={32}       // Add width here
                height={32}      // Add height here
                className="w-8 h-8 mr-2" 
              />
              <span>{exam.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
