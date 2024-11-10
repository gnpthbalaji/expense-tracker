const expenseSchema = require('../models/expenseModel');

const addExpense = async (req, res) => {
    const { title, description, amount, type, date, category } = req.body;

    if (!title || !description || !amount || !type || !date || !category) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (amount <= 0 || isNaN(amount)) {
        return res.status(400).json({ message: 'Amount must be a number greater than 0' });
    }

    try {
        const expense = new expenseSchema({
            title,
            description,
            amount,
            type,
            date,
            category
        });

        await expense.save();
        res.status(201).json({ message: 'Expense added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getExpense = async (req, res) => {
    try {
        const expense = await expenseSchema.find().sort({ createdAt: -1 });
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteExpense = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        await expenseSchema.findByIdAndDelete(id);
        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    addExpense,
    getExpense,
    deleteExpense
};