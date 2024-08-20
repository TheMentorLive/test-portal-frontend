import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../dash-admin/layout/layout'; // Adjust the path based on your project structure
import { useDispatch } from 'react-redux';
import { getQuestionById } from '@/redux/slices/questionSlice'; // Ensure this is a thunk action

const QuestionDetailPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the question ID from the URL
  const dispatch = useDispatch();
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchQuestion = async () => {
        try {
          const data = await dispatch(getQuestionById(id)).unwrap(); // Directly unwrap the returned data
          console.log("data is ", data);
          setQuestion(data?.data);
        } catch (err) {
          setError('Failed to fetch question details.');
        } finally {
          setLoading(false);
        }
      };

      fetchQuestion();
    }
  }, [dispatch, id]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <Layout>
      <div className="p-6 max-w-3xl mx-auto">
        {question ? (
          <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900">{question.subject}</h1>
            <p className="mt-4 text-lg text-gray-800"><strong>Question:</strong> {question.questionText}</p>
            <div className="mt-4 text-gray-800">
              <strong>Options:</strong>
              {question.options && question.options.length > 0 ? (
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  {question.options.map((option, index) => (
                    <li key={index} className={`p-3 rounded-md ${
                      option.isCorrect ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {option.optionText}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No options available.</p>
              )}
            </div>
            <p className="mt-4 text-gray-700"><strong>Explanation:</strong> {question.explanation}</p>
            <p className="mt-2 text-gray-700"><strong>Difficulty Level:</strong> {question.difficultyLevel}</p>
            <p className="mt-2 text-gray-700"><strong>Topic:</strong> {question.topic}</p>
          </div>
        ) : (
          <p className="text-center text-gray-700">Question not found.</p>
        )}
      </div>
    </Layout>
  );
};

export default QuestionDetailPage;
