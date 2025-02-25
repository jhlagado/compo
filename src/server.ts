import express from 'express';
import open from 'open';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World from your TypeScript Express server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  // Automatically open the default browser
  open(`http://localhost:${PORT}`);
});
