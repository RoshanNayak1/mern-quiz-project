const Quiz = require('../models/Quiz');

exports.getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addQuiz = async (req, res) => {
    const { question, options, answer, type } = req.body;
    try {
        const newQuiz = new Quiz({ question, options, answer, type });
        await newQuiz.save();
        res.status(201).json(newQuiz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
