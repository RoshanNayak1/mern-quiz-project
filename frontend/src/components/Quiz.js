import React, { useEffect, useState } from 'react';
import { fetchQuizzes } from './api/quizService';
import './Quiz.css';

const Quiz = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [attempts, setAttempts] = useState([]);
    const [timer, setTimer] = useState(30);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Load quiz and previous attempts from localStorage
    useEffect(() => {
        const loadQuizzes = async () => {
            const data = await fetchQuizzes();
            setQuizzes(data);
        };
        loadQuizzes();

        const storedAttempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];
        setAttempts(storedAttempts);
    }, []);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        } else {
            handleNextQuestion();
        }
    });

    const handleAnswerSelection = (index, option) => {
        setAnswers({ ...answers, [index]: option });
        setErrorMessage("");
    };

    const handleNextQuestion = () => {
        if (!answers[currentQuestion]) {
            setErrorMessage("Please select an answer before proceeding.");
            return;
        }

        if (currentQuestion < quizzes.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setTimer(30);
            setErrorMessage("");
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (isSubmitted) return; // Prevent multiple submissions

        let totalScore = 0;
        quizzes.forEach((quiz, index) => {
            if (answers[index] === quiz.answer) {
                totalScore += 1;
            }
        });

        const newAttempt = {
            score: totalScore,
            timestamp: new Date().toLocaleString()
        };

        const updatedAttempts = [...attempts, newAttempt];

        setAttempts(updatedAttempts);
        localStorage.setItem("quizAttempts", JSON.stringify(updatedAttempts)); // Store in localStorage
        setScore(totalScore);
        setIsSubmitted(true);
    };

    return (
        <div className="quiz-container">
            <h2 className="quiz-header">Quiz</h2>

            {quizzes.length > 0 ? (
                <div className="quiz-question">
                    <p className="question-text">{quizzes[currentQuestion].question}</p>

                    <p className="quiz-timer">⏳ Time Left: {timer}s</p>

                    {quizzes[currentQuestion].type === 'mcq' ? (
                        <div className="answer-options">
                            {quizzes[currentQuestion].options.map((option, i) => (
                                <button
                                    key={i}
                                    className={`answer-option 
                                        ${answers[currentQuestion] === option ? 
                                        (option === quizzes[currentQuestion].answer ? 'correct' : 'wrong') 
                                        : ''}`}
                                    onClick={() => handleAnswerSelection(currentQuestion, option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <input
                            type="text"
                            className="input-answer"
                            value={answers[currentQuestion] || ""}
                            onChange={(e) => handleAnswerSelection(currentQuestion, e.target.value)}
                        />
                    )}

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <button className="submit-btn" onClick={handleNextQuestion}>
                        {currentQuestion < quizzes.length - 1 ? "Next" : "Submit"}
                    </button>
                </div>
            ) : (
                <p>Loading quiz...</p>
            )}

            {score !== null && (
                <h3 className="scoreboard">Your Score: {score}/{quizzes.length}</h3>
            )}

            {attempts.length > 0 && (
                <div className="attempt-history">
                    <h3>Previous Attempts</h3>
                    {attempts.map((attempt, index) => (
                        <p key={index} className="attempt-item">
                            Attempt {index + 1}: {attempt.score}/{quizzes.length} - {attempt.timestamp}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Quiz;
