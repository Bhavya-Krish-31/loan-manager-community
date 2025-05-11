import { useState } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phoneNumber: '', loanAmount: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('https://loan-manager-community.onrender.com/api/applications/submit', {
        ...formData,
        loanAmount: Number(formData.loanAmount),
      });
      setFormData({ name: '', email: '', phoneNumber: '', loanAmount: '' });
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone" required />
      <input name="loanAmount" type="number" value={formData.loanAmount} onChange={handleChange} placeholder="Loan Amount" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ApplicationForm;
