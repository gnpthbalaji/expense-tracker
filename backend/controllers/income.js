const incomeSchema = require('../models/incomeModel');

const addIncome = async (req, res) => {
    const { title, description, amount, type, date, category } = req.body;

    if (!title || !description || !amount || !type || !date || !category) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (amount <= 0 || isNaN(amount)) {
        return res.status(400).json({ message: 'Amount must be a number greater than 0' });
    }

    try {
        const income = new incomeSchema({
            title,
            description,
            amount,
            type,
            date,
            category
        });

        await income.save();
        res.status(201).json({ message: 'Income added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getIncome = async (req, res) => {
    try {
        const income = await incomeSchema.find().sort({ createdAt: -1 });
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteIncome = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        await incomeSchema.findByIdAndDelete(id);
        res.status(200).json({ message: 'Income deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    addIncome,
    getIncome,
    deleteIncome
};