# MongoDB Setup for Kukreja Consultancy

## Database Structure

The application uses MongoDB with two main collections:

### 1. Contacts Collection
Stores general contact form submissions
- name
- email
- phone
- message
- status (new/contacted/resolved)
- createdAt

### 2. Loan Inquiries Collection
Stores loan application inquiries
- name
- email
- phone
- loanType
- loanAmount
- employmentType
- message
- status (pending/processing/approved/rejected)
- createdAt

## Installation Steps

1. **Install MongoDB** (if not already installed):
   - macOS: `brew install mongodb-community`
   - Or download from: https://www.mongodb.com/try/download/community

2. **Start MongoDB**:
   ```bash
   brew services start mongodb-community
   ```
   Or run manually:
   ```bash
   mongod --dbpath ~/data/db
   ```

3. **Start the Backend Server**:
   ```bash
   npm run server
   ```

4. **Start Frontend & Backend Together**:
   ```bash
   npm run dev
   ```

## API Endpoints

### Contacts
- POST `/api/contacts` - Submit contact form
- GET `/api/contacts` - Get all contacts

### Loan Inquiries
- POST `/api/loan-inquiries` - Submit loan inquiry
- GET `/api/loan-inquiries` - Get all loan inquiries

### Health Check
- GET `/api/health` - Check server status

## Environment Variables

The `.env` file contains:
- `MONGODB_URI` - MongoDB connection string (default: mongodb://localhost:27017/kukreja-consultancy)
- `PORT` - Backend server port (default: 5000)

## Next Steps

To connect the frontend forms to the database, update the Contact form to send data to the API endpoints.
