import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({ totalApplications: 0, averageLoanAmount: 0 });

  useEffect(() => {
    axios.get('https://loan-manager-community.onrender.com/api/applications/statistics')
      .then(res => setStats(res.data))
      .catch(error => console.error('Error fetching statistics:', error));
  }, []);

  return (
    <div>
      <h2>Total Applications: {stats.totalApplications}</h2>
      <h2>Average Loan Amount: ₹{stats.averageLoanAmount.toFixed(2)}</h2>
    </div>
  );
};

export default Dashboard;
