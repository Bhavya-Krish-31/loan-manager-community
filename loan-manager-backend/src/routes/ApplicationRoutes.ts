import express from 'express';
import Application from '../models/Application';

const router = express.Router();

router.post('/submit', async (req, res) => {
  const { name, loanAmount, email, phoneNumber } = req.body;
  try {
    const newApplication = new Application({ name, loanAmount, email, phoneNumber });
    await newApplication.save();
    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error submitting application' });
  }
});

router.get('/statistics', async (req, res) => {
  try {
    const totalApplications = await Application.countDocuments();
    const totalLoanAmount = await Application.aggregate([{ $group: { _id: null, totalAmount: { $sum: '$loanAmount' } } }]);
    const averageLoanAmount = totalLoanAmount.length ? totalLoanAmount[0].totalAmount / totalApplications : 0;

    res.json({
      totalApplications,
      averageLoanAmount,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching statistics' });
  }
});

export default router;
