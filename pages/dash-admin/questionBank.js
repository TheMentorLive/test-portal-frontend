'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from './layout/layout';
import { FaTrash, FaPlus, FaEye } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { createQuestion, getQuestions , deleteQuestion } from '@/redux/slices/questionSlice';
import dynamic from 'next/dynamic';

const QuestionBankPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    subject: '',
    questionText: '',
    options: [{ optionText: '', isCorrect: false }],
    explanation: '',
    difficultyLevel: 'Easy',
    topic: '',
  });

  const dispatch = useDispatch();
  const { questions, loading, error } = useSelector((state) => state.questions);
  const user = useSelector((state) => state.auth); // Get user info from auth state
  const router = useRouter();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        await dispatch(getQuestions());
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion({ ...newQuestion, [name]: value });
  };

  const handleOptionChange = (index, e) => {
    const { name, checked, value } = e.target;
    const newOptions = [...newQuestion.options];
    
    if (name === 'isCorrect') {
      newOptions[index] = { ...newOptions[index], isCorrect: checked };
    } else {
      newOptions[index] = { ...newOptions[index], [name]: value };
    }
    
    setNewQuestion({ ...newQuestion, options: newOptions });
  };

  const handleAddOption = () => {
    setNewQuestion({
      ...newQuestion,
      options: [...newQuestion.options, { optionText: '', isCorrect: false }],
    });
  };

  const handleDeleteOption = (index) => {
    const newOptions = newQuestion.options.filter((_, i) => i !== index);
    setNewQuestion({ ...newQuestion, options: newOptions });
  };

  const handleCreateQuestion = async () => {
    try {
      await dispatch(createQuestion(newQuestion));
      setDialogOpen(false);
      setNewQuestion({
        subject: '',
        questionText: '',
        options: [{ optionText: '', isCorrect: false }],
        explanation: '',
        difficultyLevel: 'Easy',
        topic: '',
      });
    } catch (error) {
      console.error('Error creating question:', error);
    }
  };

  const handleDeleteQuestion = async (id) => {
    try {
      const response = await dispatch(deleteQuestion(id));
      dispatch(getQuestions()); // Refresh questions list
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Question Bank</title>
      </Head>
      <div className="container mx-auto p-4 md:pl-10 -mt-3 max-w-screen-xl">
      <div className="bg-white p-6 shadow-md rounded-lg mb-6">
                    <h1 className="text-2xl font-bold text-black mb-2">Available Question Banks</h1>
                </div>
        
        {user?.role === 'admin' && (
          <button
            onClick={() => setDialogOpen(true)}
            className="mb-6 flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded"
          >
            <FaPlus /> Create New Question
          </button>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {questions.map((question) => (
              <div
                key={question._id}
                className="bg-white p-6 border rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {question.subject}
                </h3>
                <p className="mt-2 text-gray-700">{question.questionText}</p>
                <div className="mt-4 text-gray-700">
                  <strong>Options:</strong>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    {(question.options || []).map((option, index) => (
                      <li
                        key={index}
                        className={`p-2 rounded-md ${
                          option.isCorrect
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {option.optionText}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-2 text-gray-700 line-clamp-1">
                  <strong>Explanation:</strong> {question.explanation}
                </p>
                <p className="mt-2 text-gray-700">
                  <strong>Difficulty Level:</strong> {question.difficultyLevel}
                </p>
                <p className="mt-2 text-gray-700">
                  <strong>Topic:</strong> {question.topic}
                </p>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => router.push(`/question/${question._id}`)}
                    className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded flex items-center gap-2"
                  >
                    <FaEye /> View More
                  </button>
                  {user?.role === 'admin' && (
                    <button
                      onClick={() => handleDeleteQuestion(question._id)}
                      className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded flex items-center gap-2"
                    >
                      <FaTrash /> Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {dialogOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-auto">
              <h3 className="text-xl font-semibold mb-4">Create New Question</h3>
              <input
                name="subject"
                value={newQuestion.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="border border-gray-300 rounded p-2 mb-4 w-full"
              />
              <textarea
                name="questionText"
                value={newQuestion.questionText}
                onChange={handleInputChange}
                placeholder="Question Text"
                className="border border-gray-300 rounded p-2 mb-4 w-full"
              />
              <select
                name="difficultyLevel"
                value={newQuestion.difficultyLevel}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-2 mb-4 w-full"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              <input
                name="topic"
                value={newQuestion.topic}
                onChange={handleInputChange}
                placeholder="Topic"
                className="border border-gray-300 rounded p-2 mb-4 w-full"
              />
              {newQuestion.options.map((option, index) => (
                <div key={index} className="mb-4 flex items-center gap-4">
                  <input
                    type="text"
                    name="optionText"
                    value={option.optionText}
                    onChange={(e) => handleOptionChange(index, e)}
                    placeholder={`Option ${index + 1}`}
                    className="border border-gray-300 rounded p-2 flex-1"
                  />
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="isCorrect"
                      checked={option.isCorrect}
                      onChange={(e) => handleOptionChange(index, e)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">Correct Answer</span>
                  </label>
                  <button
                    onClick={() => handleDeleteOption(index)}
                    className="bg-red-500 text-white hover:bg-red-600 px-2 py-1 rounded"
                  >
                    Delete Option
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddOption}
                className="mb-4 bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded"
              >
                Add Option
              </button>
              <textarea
                name="explanation"
                value={newQuestion.explanation}
                onChange={handleInputChange}
                placeholder="Explanation"
                className="border border-gray-300 rounded p-2 mb-4 w-full"
              />
              <button
                onClick={handleCreateQuestion}
                className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded"
              >
                Create Question
              </button>
              <button
                onClick={() => setDialogOpen(false)}
                className="ml-4 bg-gray-500 text-white hover:bg-gray-600 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(QuestionBankPage), { ssr: false });
