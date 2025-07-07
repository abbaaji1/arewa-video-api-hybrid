const express = require('express');
const { exec } = require('child_process');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Node.js + Python Hybrid API');
});

app.post('/download', (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'Missing URL' });

  exec(`python3 script.py "${url}"`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr });
    }
    res.send(stdout);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));