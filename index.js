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

// Listen on all network interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
