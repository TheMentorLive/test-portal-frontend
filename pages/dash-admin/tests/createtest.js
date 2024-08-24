import Head from 'next/head';
import Layout from '../layout/layout';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '@/redux/slices/questionSlice'; // Adjust the import based on your file structure
import { useEffect, useState } from 'react';
import { createTest } from '@/redux/slices/testSlice';
import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

const CreateTestPage = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('NEET');
  const [description, setDescription] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [price, setPrice] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);
  const router = useRouter(); 
  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  const filteredQuestions = questions.filter((question) => {
    return (
      question.questionText.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedSubject === '' || question.subject === selectedSubject) &&
      (selectedDifficulty === '' || question.difficultyLevel === selectedDifficulty)
    );
  });

  const handleQuestionSelect = (questionId) => {
    setSelectedQuestions((prevSelectedQuestions) => {
      if (prevSelectedQuestions.includes(questionId)) {
        return prevSelectedQuestions.filter((id) => id !== questionId);
      } else {
        return [...prevSelectedQuestions, questionId];
      }
    });
  };

  const handleSubmit = async() => {
    if(title === '' || description === '' || selectedQuestions.length === 0){
        toast.error('Please fill all the fields and select at least one question');
        return;
    }
    const testData = {
      title,
      type,
      description,
      isPaid,
      price,
      questions: selectedQuestions,
    };
    await dispatch(createTest(testData));
    // console.log(testData);
    // Send testData to the backend

    // Clear all fields and selected questions
    setTitle('');
    setType('NEET');
    setDescription('');
    setIsPaid(false);
    setPrice(0);
    setSelectedQuestions([]);
    setSearchQuery('');
    setSelectedSubject('');
    setSelectedDifficulty('');
    router.push('/dash-admin/tests');
  };

  return (
    <Layout>
      <Head>
        <title>Create Test</title>
      </Head>
      <div className="min-h-screen ml-10 bg-blue-50 p-8 flex flex-col">
        {/* Header */}
        <header className="bg-blue-600 text-white py-6 px-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold">Create Your Test</h1>
          <p className="mt-2 text-lg">Craft custom tests tailored to your needs and preferences.</p>
        </header>

        {/* Form Container */}
        <div className="flex-grow bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {/* Title Input */}
            <div className="mb-6">
              <label className="block text-xl font-semibold text-black">Title</label>
              <input
                type="text"
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Type Selection */}
            <div className="mb-6">
              <label className="block text-xl font-semibold text-black">Type</label>
              <select
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="NEET">NEET</option>
                <option value="JEE">JEE</option>
              </select>
            </div>

            {/* Description Textarea */}
            <div className="mb-6">
              <label className="block text-xl font-semibold text-black">Description</label>
              <textarea
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Paid/Free Toggle */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={isPaid}
                onChange={(e) => setIsPaid(e.target.checked)}
              />
              <label className="ml-3 block text-xl font-semibold text-black">Paid Test</label>
            </div>

            {/* Price Input (Conditional) */}
            {isPaid && (
              <div className="mb-6">
                <label className="block text-xl font-semibold text-black">Price</label>
                <input
                  type="number"
                  className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              className="mt-8 w-full bg-blue-600 text-white p-4 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
              onClick={handleSubmit}
            >
              Create Test
            </button>
          </div>

          <div>
            {/* Search Bar */}
            <div className="mb-6">
              <label className="block text-xl font-semibold text-black">Search Questions</label>
              <input
                type="text"
                className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search by question name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex space-x-4 mb-6">
              <div className="w-1/2">
                <label className="block text-xl font-semibold text-black">Subject</label>
                <select
                  className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                >
                  <option value="">All Subjects</option>
                  <option value="Biology">Biology</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Physics">Physics</option>
                </select>
              </div>

              <div className="w-1/2">
                <label className="block text-xl font-semibold text-black">Difficulty</label>
                <select
                  className="mt-2 w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  <option value="">All Levels</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            {/* Filtered Questions List - Card Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredQuestions.map((question) => (
                <div key={question._id} className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-3"
                      checked={selectedQuestions.includes(question._id)}
                      onChange={() => handleQuestionSelect(question._id)}
                    />
                    <div className="text-black">
                      <p className="text-lg font-semibold">{question.questionText}</p>
                      <p className="text-sm text-gray-500">
                        {question.subject} - {question.difficultyLevel}
                      </p>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// export default CreateTestPage;
export default dynamic(() => Promise.resolve(CreateTestPage), { ssr: false });
