const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Sample data array
const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Sam Smith", email: "sam@example.com" }
];

// Route to return the array of objects
app.get('/api/data', (req, res) => {
  res.json(data);
});
app.get('/', (req, res) => {
    res.json(data);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
