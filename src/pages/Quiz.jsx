import React, { useState, useEffect } from 'react';
import { useEngagement } from '../context/EngagementContext';
import { useNavigate, useParams } from 'react-router-dom';
import { environmentalTopics } from '../data';

const Quiz = () => {
  const { topicId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const { addScore } = useEngagement();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);

    if (topicId) {
      const topic = environmentalTopics.find((t) => t.id === topicId);
      if (topic && topic.questions) {
        setQuestions(topic.questions);
      } else {
        setQuestions([]);
      }
    } else {
      const allQuestions = environmentalTopics.flatMap((t) => t.questions || []);
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      setQuestions(shuffled.slice(0, 10));
    }
  }, [topicId]);

  const handleAnswerOptionClick = (index) => {
    const isCorrect = index === questions[currentQuestion].correct;
    setUserAnswers([...userAnswers, { questionIndex: currentQuestion, selectedOption: index, isCorrect }]);

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const finalScore = isCorrect ? score + 1 : score;
      const pointsEarned = finalScore * 10;
      addScore(pointsEarned);
      setShowScore(true);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="container">
        <section className="section">
          <div className="info-card" style={{ textAlign: 'center' }}>
            <h2>Loading Quiz...</h2>
            <p>If this persists, the topic might not have questions yet.</p>
            <button onClick={() => navigate('/topics')} className="btn-primary">Browse Topics</button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="container">
      <section className="section">
        <div className="quiz-card">
          {showScore ? (
            <div className="quiz-results">
              <h2>You scored {score} out of {questions.length}</h2>
              <p>Points earned: +{score * 10}</p>

              <div className="answer-review">
                <h3>Review Answers</h3>
                {questions.map((q, qIndex) => {
                  const userAnswer = userAnswers[qIndex];
                  const isUserCorrect = userAnswer?.isCorrect;

                  return (
                    <div key={qIndex} className="answer-card">
                      <p className="answer-question">{qIndex + 1}. {q.question}</p>
                      <div className="answer-options">
                        {q.options.map((opt, optIndex) => {
                          const isSelected = userAnswer?.selectedOption === optIndex;
                          const isCorrectOption = q.correct === optIndex;

                          let className = 'answer-option';
                          if (isCorrectOption) className += ' correct';
                          if (isSelected && !isUserCorrect) className += ' incorrect';

                          return (
                            <div key={optIndex} className={className}>
                              {opt}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="cta-row">
                <button onClick={() => navigate('/dashboard')} className="btn-primary">View Dashboard</button>
                <button onClick={() => navigate('/topics')} className="btn-ghost">Back to Topics</button>
              </div>
            </div>
          ) : (
            <>
              <div className="quiz-header">
                <span>Question {currentQuestion + 1}/{questions.length}</span>
                <span>{topicId ? environmentalTopics.find((t) => t.id === topicId)?.title : 'General'} Quiz</span>
              </div>
              <h2>{questions[currentQuestion].question}</h2>
              <div className="quiz-options">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(index)}
                    className="quiz-option"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Quiz;
