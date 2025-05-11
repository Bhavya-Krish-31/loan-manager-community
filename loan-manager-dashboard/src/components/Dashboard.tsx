import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({ totalApplications: 0, averageLoanAmount: 0 });

  useEffect(() => {
    axios.get('http://localhost:5000/api/applications/statistics')
      .then(res => setStats(res.data));
  }, []);

  return (
    <div>
      <h2>Total Applications: {stats.totalApplications}</h2>
      <h2>Average Loan Amount: ₹{stats.averageLoanAmount.toFixed(2)}</h2>
    </div>
  );
};

export default Dashboard;
