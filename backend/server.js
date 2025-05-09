import express from 'express';
import dotenv from 'dotenv';
import path from 'path'; // builtin node module
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve(); // get the value from path.resolve()

app.use(express.json());    

// API routes
app.use('/api/products', productRoutes);

// Serve static files in production
if(process.env.NODE_ENV === 'production'){
  // Serve frontend build
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  // Handle frontend routes
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
  
  // Catch-all route for client-side routing
  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});
