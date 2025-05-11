import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import applicationRoutes from '../src/routes/ApplicationRoutes';

const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/loanManager';

mongoose.connect(mongoURI)
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.error('Database connection failed:', err));

app.use('/api/applications', applicationRoutes);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.get('/', (req, res) => {
  res.send('Server is running');
});

