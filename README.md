# Loan Manager Backend

This is the backend for the **Loan Manager** application, which allows users to apply for loans, view loan applications, and manage application data.

## Features
- User can submit loan applications with necessary details.
- Backend built using Node.js, Express, and MongoDB.
- Handles various loan-related data.

## Installation

To run this project locally, follow the steps below:

### Prerequisites
- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (locally installed or use MongoDB Atlas for cloud)

### Steps to run:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/loan-manager-backend.git
   ```
2. Navigate to the project folder:
   ```bash
   cd loan-manager-backend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add necessary variables (like `MONGO_URI` for the database connection).

5. Run the server:
   ```bash
   npm start
   ```

The server will be running at `http://localhost:5000`.

## API Endpoints

- **POST /api/applications/submit**: Submit a loan application.
  - Body:
    ```json
    {
      "fullName": "John Doe",
      "loanTenure": "5 years",
      "loanReason": "Home Renovation",
      "loanAmount": 10000,
      "employmentStatus": "Employed",
      "employmentAddress": "123 Main St, City, Country"
    }
    ```
  - Response: Success or error message.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
