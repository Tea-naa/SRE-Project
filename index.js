const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, welcome to my mini SRE project | Node.js inside Docker!');
});

app.get('/api', (req, res) => {
  const response = {
    message: "Hello, You!",
    time: new Date().toLocaleString(),
    customMessage: "Hope you are having a great day!!!"
  };
  res.json(response);
});

// New Asynchronous API Route for testing
app.get('/api/hello', async (req, res) => {
  try {
    // Simulating a delay to fetch data (like from a database or external API)
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const fetchedData = {
          message: "Hello from the asynchronous route!",
          time: new Date().toLocaleString(),
          fetchedData: "Data fetched after 2 seconds",
        };
        resolve(fetchedData);
      }, 2000); // Simulate a 2-second delay
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// Listen on all network interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
