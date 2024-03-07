import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve the Vue.js static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'vue/dist')));

// Define your API routes here, if any
// For example:
// app.get('/api/data', (req, res) => {
//   // Handle API requests
// });

// Serve the Vue.js application for all routes
app.get('*', (req, res) => {
  // Send the 'index.html' file for all routes
  res.sendFile(path.join(__dirname, 'vue/dist/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});

// import express from 'express';
// const app = express();
// app.use(express.static('vue/dist'));
// const port = process.env.PORT || 8081;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });